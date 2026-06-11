# Admin Login Redirect + EST Calendar-Day Views — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** After admin sign-in land on the dashboard, show a "Pages today (EST)" list, and switch the "Views (24h)" card to an EST calendar-day count.

**Architecture:** Client-side only. A small pure helper computes today's EST window (DST-aware via `Intl.DateTimeFormat("en-US", { timeZone: "America/New_York" })`). A new loader hits the existing `pageviews` Supabase REST endpoint with that window, aggregates rows by page in JS, and stores the result alongside the existing `_analyticsData`. Renders use the same theme/HTML pattern as the current Analytics sub-tab.

**Tech Stack:** Vanilla JS, Supabase REST, Node tests via `vm` sandboxing (no framework — pattern lifted from `tests/countdown.test.js`).

**Companion spec:** `docs/superpowers/specs/2026-06-04-admin-login-redirect-and-today-views-design.md`

---

## File Plan

| File | Change | Purpose |
|---|---|---|
| `app.js` | Modify | Add `getTodayESTWindow()`, `aggregatePagesByCount()`, `loadPagesTodayFromSupabase()`, `renderTodayPagesSection()`. Update `getDashStatCounts()`, `renderDashStatCards()`, `renderAdminAnalyticsSection()`, `refreshAnalytics()`, `submitAdminLogin()`. Bump `APP_VERSION`. |
| `sw.js` | Modify | Bump `CACHE_VERSION` to match. |
| `tests/today-window.test.js` | Create | Unit tests for `getTodayESTWindow()` and `aggregatePagesByCount()` (extracted via `vm`, mock Date pattern from `countdown.test.js`). |

---

## Task 1: Add the EST window helper with tests

**Files:**
- Modify: `app.js` (insert new function near other date helpers around line 2607, immediately above `// --- ADMIN ANALYTICS`)
- Create: `tests/today-window.test.js`

The helper returns the start/end ISO timestamps for today's EST/EDT calendar day (12:00am → 12:00am next day, anchored to `America/New_York`, with the correct UTC offset suffix). Used to filter `pageviews` rows.

- [ ] **Step 1: Write the failing test file**

Create `tests/today-window.test.js`:

```js
// Tests for getTodayESTWindow — DST-aware "today in America/New_York" window.
// Run with:  node tests/today-window.test.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

function extractFn(name) {
  const start = SRC.indexOf("function " + name + "(");
  if (start === -1) throw new Error("function not found: " + name);
  let depth = 0, i = SRC.indexOf("{", start);
  for (let j = i; j < SRC.length; j++) {
    if (SRC[j] === "{") depth++;
    else if (SRC[j] === "}") { depth--; if (depth === 0) return SRC.slice(start, j + 1); }
  }
  throw new Error("unterminated function: " + name);
}

function makeContext(nowISO) {
  const RealDate = Date;
  const fixedNow = new RealDate(nowISO).getTime();
  class MockDate extends RealDate {
    constructor(...args) { if (args.length === 0) super(fixedNow); else super(...args); }
    static now() { return fixedNow; }
  }
  const ctx = { Date: MockDate, Math, Intl };
  vm.createContext(ctx);
  vm.runInContext(
    extractFn("getTodayESTWindow") + "\n" + extractFn("aggregatePagesByCount"),
    ctx
  );
  return ctx;
}

let passed = 0, failed = 0;
function check(desc, cond) {
  if (cond) { passed++; console.log("  ✓ " + desc); }
  else { failed++; console.log("  ✗ " + desc); }
}

// --- Winter day (EST = UTC-5) ---
console.log("Winter — Jan 15 at 3pm UTC (10am ET):");
{
  const c = makeContext("2026-01-15T15:00:00Z");
  const w = c.getTodayESTWindow();
  check("start is Jan 15 00:00 ET",       w.start === "2026-01-15T00:00:00-05:00");
  check("end   is Jan 16 00:00 ET",       w.end   === "2026-01-16T00:00:00-05:00");
}

console.log("Winter — Jan 15 at 03:00 UTC (Jan 14 10pm ET):");
{
  // 3am UTC on Jan 15 is still Jan 14 in New York.
  const c = makeContext("2026-01-15T03:00:00Z");
  const w = c.getTodayESTWindow();
  check("start rolls back to Jan 14",     w.start === "2026-01-14T00:00:00-05:00");
  check("end   is Jan 15 00:00 ET",       w.end   === "2026-01-15T00:00:00-05:00");
}

// --- Summer day (EDT = UTC-4) ---
console.log("Summer — Jul 4 at 16:00 UTC (12pm ET):");
{
  const c = makeContext("2026-07-04T16:00:00Z");
  const w = c.getTodayESTWindow();
  check("start uses -04:00 offset",       w.start === "2026-07-04T00:00:00-04:00");
  check("end   uses -04:00 offset",       w.end   === "2026-07-05T00:00:00-04:00");
}

// --- DST spring-forward day (Mar 8 2026) ---
console.log("DST spring-forward — Mar 8 2026 noon ET:");
{
  // Noon ET on Mar 8 is 16:00 UTC (already in EDT after the 2am jump).
  const c = makeContext("2026-03-08T16:00:00Z");
  const w = c.getTodayESTWindow();
  check("start is Mar 8 00:00 -05:00 (pre-jump)", w.start === "2026-03-08T00:00:00-05:00");
  check("end   is Mar 9 00:00 -04:00 (post-jump)", w.end   === "2026-03-09T00:00:00-04:00");
}

// --- aggregatePagesByCount ---
console.log("aggregatePagesByCount sorts and groups:");
{
  const c = makeContext("2026-06-04T12:00:00Z");
  const rows = [
    { page: "events" }, { page: "home" }, { page: "events" },
    { page: "events" }, { page: "raids" }, { page: "home" }
  ];
  const out = c.aggregatePagesByCount(rows);
  check("returns sorted desc",  JSON.stringify(out) === JSON.stringify([
    { page: "events", count: 3 },
    { page: "home",   count: 2 },
    { page: "raids",  count: 1 }
  ]));
}

console.log("aggregatePagesByCount handles empty + missing page field:");
{
  const c = makeContext("2026-06-04T12:00:00Z");
  check("empty array → []",     JSON.stringify(c.aggregatePagesByCount([])) === "[]");
  check("missing page skipped", JSON.stringify(c.aggregatePagesByCount([{ page: "" }, { page: null }, { page: "x" }])) ===
                                 JSON.stringify([{ page: "x", count: 1 }]));
}

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `node tests/today-window.test.js`
Expected: Error `function not found: getTodayESTWindow` (the helpers don't exist yet).

- [ ] **Step 3: Add `getTodayESTWindow` and `aggregatePagesByCount` to `app.js`**

Insert these two functions in `app.js` immediately **before** the line `// --- ADMIN ANALYTICS (Supabase pageviews → analytics_summary view) ---` (currently around line 2607):

```js
// Returns today's calendar-day window in America/New_York time (EST/EDT, DST-aware)
// as ISO 8601 strings with the correct UTC offset suffix. Used to filter the
// pageviews table for the "Views (today)" card and "Pages today (EST)" list.
function getTodayESTWindow() {
  const TZ = "America/New_York";
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: false, timeZoneName: "shortOffset"
  }).formatToParts(now);
  const get = (type) => {
    const p = parts.find(x => x.type === type);
    return p ? p.value : "";
  };
  const year  = get("year");
  const month = get("month");
  const day   = get("day");
  // shortOffset looks like "GMT-5" or "GMT-4"; convert to "-05:00" / "-04:00".
  const raw = get("timeZoneName").replace("GMT", "") || "+0";
  const sign = raw[0] === "-" ? "-" : "+";
  const hours = String(Math.abs(parseInt(raw, 10))).padStart(2, "0");
  const startOffset = `${sign}${hours}:00`;
  const start = `${year}-${month}-${day}T00:00:00${startOffset}`;
  // Compute "tomorrow in NY" by adding one day to the start instant, then re-formatting
  // so the offset reflects any DST transition that happened overnight.
  const startMs = new Date(start).getTime();
  const nextMs = startMs + 24 * 60 * 60 * 1000;
  const nextParts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false,
    timeZoneName: "shortOffset"
  }).formatToParts(new Date(nextMs));
  const ng = (type) => {
    const p = nextParts.find(x => x.type === type);
    return p ? p.value : "";
  };
  const nRaw = ng("timeZoneName").replace("GMT", "") || "+0";
  const nSign = nRaw[0] === "-" ? "-" : "+";
  const nHours = String(Math.abs(parseInt(nRaw, 10))).padStart(2, "0");
  const endOffset = `${nSign}${nHours}:00`;
  const end = `${ng("year")}-${ng("month")}-${ng("day")}T00:00:00${endOffset}`;
  return { start, end };
}

// Aggregate raw pageview rows into a sorted [{page, count}] list, descending by count.
// Skips rows whose page is empty/null. Pure function — easy to unit test.
function aggregatePagesByCount(rows) {
  const counts = new Map();
  for (const r of (rows || [])) {
    const p = r && r.page;
    if (!p) continue;
    counts.set(p, (counts.get(p) || 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count);
}
```

- [ ] **Step 4: Run the tests and confirm they pass**

Run: `node tests/today-window.test.js`
Expected: All checks pass, exit code 0. Output ends with `8 passed, 0 failed`.

- [ ] **Step 5: Commit**

```bash
git add app.js tests/today-window.test.js
git commit -m "Add EST today-window + page-aggregation helpers"
```

---

## Task 2: Add the loader + module state for today's analytics

**Files:**
- Modify: `app.js` (insert after the two helpers from Task 1, still above `// --- ADMIN ANALYTICS`)

No tests for this task — it's a thin async wrapper around `fetch` to Supabase, exercised manually in Task 7.

- [ ] **Step 1: Add module state and loader function**

Insert immediately after the `aggregatePagesByCount` function added in Task 1:

```js
// --- "Pages today (EST)" data source — client-aggregated from raw pageviews.
let _todayAnalytics = null;        // { views: number, pages: [{page, count}, ...] } | null
let _todayAnalyticsLoading = false;
let _todayAnalyticsError = "";

async function loadPagesTodayFromSupabase() {
  const sess = getAdminSession();
  if (!sess || !sess.access_token) {
    _todayAnalyticsError = "Not logged in.";
    return;
  }
  _todayAnalyticsLoading = true;
  _todayAnalyticsError = "";
  if (isAdminDashVisible()) render();
  try {
    const { start, end } = getTodayESTWindow();
    const qs = `select=page&visited_at=gte.${encodeURIComponent(start)}&visited_at=lt.${encodeURIComponent(end)}`;
    const res = await fetch(`${SUPABASE_URL}/rest/v1/pageviews?${qs}`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${sess.access_token}`,
      },
    });
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status}${txt ? `: ${txt.slice(0, 140)}` : ""}`);
    }
    const rows = await res.json();
    const pages = aggregatePagesByCount(rows);
    const views = pages.reduce((sum, p) => sum + p.count, 0);
    _todayAnalytics = { views, pages };
  } catch (e) {
    _todayAnalyticsError = e && e.message ? e.message : "Failed to load today's pages.";
    _todayAnalytics = null;
  } finally {
    _todayAnalyticsLoading = false;
    if (isAdminDashVisible()) render();
  }
}
```

- [ ] **Step 2: Verify no syntax errors**

Run: `node --check app.js`
Expected: No output (exit 0). Any error means a typo in the inserted block.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "Add Supabase loader for today's pages (EST window)"
```

---

## Task 3: Trigger the new loader alongside the existing analytics load

**Files:**
- Modify: `app.js` — function `refreshAnalytics` (currently at line 2643) and the initial-load branch inside `renderAdminAnalyticsSection` (currently at line 2657).

- [ ] **Step 1: Update `refreshAnalytics` to fan out to both loaders**

Find this block in `app.js` (around line 2643):

```js
function refreshAnalytics() {
  loadAnalyticsFromSupabase();
}
```

Replace with:

```js
function refreshAnalytics() {
  loadAnalyticsFromSupabase();
  loadPagesTodayFromSupabase();
}
```

- [ ] **Step 2: Trigger the today-loader on first dashboard render**

Find this block inside `renderAdminAnalyticsSection` (around line 2656):

```js
  // Kick off initial load on first render after admin opens the report tab.
  if (_analyticsData === null && !_analyticsLoading && !_analyticsError) {
    loadAnalyticsFromSupabase();
  }
```

Append a second guarded call immediately after:

```js
  if (_todayAnalytics === null && !_todayAnalyticsLoading && !_todayAnalyticsError) {
    loadPagesTodayFromSupabase();
  }
```

So the final block reads:

```js
  // Kick off initial load on first render after admin opens the report tab.
  if (_analyticsData === null && !_analyticsLoading && !_analyticsError) {
    loadAnalyticsFromSupabase();
  }
  if (_todayAnalytics === null && !_todayAnalyticsLoading && !_todayAnalyticsError) {
    loadPagesTodayFromSupabase();
  }
```

- [ ] **Step 3: Verify no syntax errors**

Run: `node --check app.js`
Expected: Exit 0.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "Fan out analytics refresh to today-pages loader"
```

---

## Task 4: Render the "Pages today (EST)" section in the Analytics sub-tab

**Files:**
- Modify: `app.js` — add `renderTodayPagesSection`, then call it from `renderAdminAnalyticsSection` (around line 2733).

- [ ] **Step 1: Add the render function**

Insert this function immediately **before** `function renderAdminAnalyticsSection()` (around line 2652):

```js
function renderTodayPagesSection() {
  const th = t(darkMode);
  const card = (inner) => `<div style="border:1.5px solid ${th.border};border-radius:14px;background:${th.surface};overflow:hidden;margin-bottom:10px">
    <div style="padding:8px 12px;border-bottom:1.5px solid ${th.border};font-size:11px;font-weight:800;color:${th.textMuted};text-transform:uppercase;letter-spacing:0.5px">Pages today (EST)</div>
    ${inner}
  </div>`;

  if (_todayAnalyticsError) {
    return card(`<div style="padding:12px 14px;font-size:13px;color:#E74C3C">Could not load today's pages: ${esc(_todayAnalyticsError)}</div>`);
  }
  if (_todayAnalytics === null) {
    return card(`<div style="padding:14px 16px;font-size:13px;color:${th.textMuted};text-align:center;border:0">Loading…</div>`);
  }
  const pages = _todayAnalytics.pages || [];
  if (pages.length === 0) {
    return card(`<div style="padding:14px 16px;font-size:13px;color:${th.textMuted};text-align:center">No views yet today</div>`);
  }
  const rows = pages.map((it) => `<tr style="border-bottom:1px solid ${th.border}">
    <td style="padding:6px 10px;font-size:13px;color:${th.text};font-weight:600">${esc(it.page)}</td>
    <td style="padding:6px 10px;text-align:right;font-variant-numeric:tabular-nums;font-weight:700;color:${th.text}">${fmtNum(it.count)}</td>
  </tr>`).join("");
  return card(`<table style="width:100%;border-collapse:collapse;font-family:inherit"><tbody>${rows}</tbody></table>`);
}
```

- [ ] **Step 2: Mount the section in the Analytics sub-tab**

Find this block at the end of `renderAdminAnalyticsSection` (around line 2733):

```js
  return `<div style="margin-bottom:18px">
    ${headerRow}
    ${summaryTable}
    ${lists}
  </div>`;
```

Replace with:

```js
  return `<div style="margin-bottom:18px">
    ${headerRow}
    ${summaryTable}
    ${renderTodayPagesSection()}
    ${lists}
  </div>`;
```

- [ ] **Step 3: Verify no syntax errors**

Run: `node --check app.js`
Expected: Exit 0.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "Render Pages today (EST) section in admin analytics"
```

---

## Task 5: Switch the "Views (24h)" card to the EST count and relabel

**Files:**
- Modify: `app.js` — `getDashStatCounts` (line 2785) and `renderDashStatCards` (line 2809).

- [ ] **Step 1: Update `getDashStatCounts` to read from `_todayAnalytics`**

Find (around line 2785):

```js
function getDashStatCounts() {
  const dayAgo = Date.now() - 86400000;
  const views = _analyticsData && Number.isFinite(_analyticsData.views_today) ? _analyticsData.views_today : null;
```

Replace the `views` line so the function reads:

```js
function getDashStatCounts() {
  const dayAgo = Date.now() - 86400000;
  const views = _todayAnalytics && Number.isFinite(_todayAnalytics.views) ? _todayAnalytics.views : null;
```

- [ ] **Step 2: Relabel the card**

Find (around line 2813):

```js
    renderDashStatCard("Views (24h)", c.views, "👁", "#3498DB", "analytics", isMobile),
```

Replace with:

```js
    renderDashStatCard("Views (today)", c.views, "👁", "#3498DB", "analytics", isMobile),
```

(Leave the `"New nests (24h)"` card on the next line untouched — it is intentionally still a rolling 24h window.)

- [ ] **Step 3: Verify no syntax errors**

Run: `node --check app.js`
Expected: Exit 0.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "Switch Views card to EST calendar-day and relabel"
```

---

## Task 6: Land on admin dashboard after a successful sign-in

**Files:**
- Modify: `app.js` — `submitAdminLogin` (around line 2196).

- [ ] **Step 1: Add `setTab("report")` after `closeAdminLogin()`**

Find (around line 2196):

```js
  try {
    await adminLoginRequest(email, password);
    closeAdminLogin();
  } catch (e) {
```

Replace with:

```js
  try {
    await adminLoginRequest(email, password);
    closeAdminLogin();
    setTab("report");
  } catch (e) {
```

- [ ] **Step 2: Verify no syntax errors**

Run: `node --check app.js`
Expected: Exit 0.

- [ ] **Step 3: Re-run the existing auth test as a regression check**

Run: `node tests/auth.test.js`
Expected: All checks pass, exit 0. (We did not change any auth helper signatures.)

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "Land on admin dashboard after successful sign-in"
```

---

## Task 7: Version bump (APP_VERSION + CACHE_VERSION)

**Files:**
- Modify: `app.js` line 4
- Modify: `sw.js` line 1

Per the user's confirmed bump: **v3.24 → v3.25**.

- [ ] **Step 1: Bump `APP_VERSION` in `app.js`**

Find at the top of `app.js`:

```js
const APP_VERSION = "3.24";
```

Replace with:

```js
const APP_VERSION = "3.25";
```

- [ ] **Step 2: Bump `CACHE_VERSION` in `sw.js`**

Find at the top of `sw.js`:

```js
const CACHE_VERSION = "3.24";
```

Replace with:

```js
const CACHE_VERSION = "3.25";
```

- [ ] **Step 3: Verify both bumps**

Run: `grep -E '(APP_VERSION|CACHE_VERSION) = "3\.25"' app.js sw.js`
Expected: Two matches — one per file.

- [ ] **Step 4: Commit**

```bash
git add app.js sw.js
git commit -m "v3.25: admin login redirect + EST calendar-day views"
```

---

## Task 8: Browser smoke test

**Files:** None.

This step is verification of the running app. Per the user's standing rule, UI/frontend changes must be exercised in a browser before being declared complete.

- [ ] **Step 1: Start a static server**

From the project root:

```bash
python3 -m http.server 8000
```

(Any static server works — `npx serve`, etc. The site is plain HTML+JS.)

- [ ] **Step 2: Open the app and sign out if signed in**

In a browser: `http://localhost:8000/`
If the lock icon shows you as signed in, sign out from the admin dashboard first.

- [ ] **Step 3: Verify post-login redirect**

Click the lock icon → enter admin credentials → submit.
Expected: The modal closes AND the view switches to the admin dashboard (`state.tab === "report"`). You should NOT remain on the homepage.

- [ ] **Step 4: Verify "Views (today)" card**

On the dashboard, look at the top stat cards.
Expected: The first card reads **"Views (today)"** (not "Views (24h)"). Value is a number or `—` briefly while loading.

- [ ] **Step 5: Verify "Pages today (EST)" list**

Click into the Analytics sub-tab.
Expected: A card titled **"Pages today (EST)"** appears above the "Top pages (30d) / Top referrers (30d)" row. It either lists pages with counts, shows "No views yet today" if you signed in before any non-admin visits, or shows a red error box if the fetch failed.

- [ ] **Step 6: Verify count consistency**

Sum the counts in the "Pages today (EST)" list.
Expected: Equals the number shown on the "Views (today)" stat card.

- [ ] **Step 7: Verify refresh button**

Click the "↻ Refresh" button in the Analytics header.
Expected: Both the summary table and the "Pages today (EST)" list reload (button briefly shows "Loading…").

- [ ] **Step 8: Verify no console errors**

Open DevTools Console.
Expected: No red errors. (Network 401/403s on `pageviews` would mean RLS is broken — escalate; don't silently proceed.)

- [ ] **Step 9: Verify version + cache bust**

Footer should read `… · v3.25`. Hard-refresh (`Cmd+Shift+R`) and confirm the service worker picks up the new cache version.

---

## Self-Review

**Spec coverage:**
- Spec §1 "Post-login redirect" → Task 6 ✓
- Spec §2 "EST calendar-day data source" → Tasks 1+2 ✓
- Spec §3 "Views (today) stat card" → Task 5 ✓
- Spec §4 "Pages today (EST) list" → Task 4 ✓
- Spec §5 "Version bump" → Task 7 ✓
- Spec "Testing" smoke-test list → Task 8 ✓
- Spec "Error handling" — `_todayAnalyticsError` independent of `_analyticsError` → covered in Tasks 2 + 4 ✓

**Placeholder scan:** No TBDs, no "add error handling later", every code block is complete.

**Type/name consistency:**
- `_todayAnalytics` shape `{ views, pages }` declared in Task 2, consumed in Tasks 4 and 5 — matches.
- `getTodayESTWindow()` returns `{ start, end }` — declared Task 1, consumed Task 2.
- `aggregatePagesByCount(rows)` returns `[{ page, count }]` — declared Task 1, consumed in Task 2 (`p.count` in reduce) and Task 4 (`it.page` / `it.count` in rows) — consistent.
- `loadPagesTodayFromSupabase()` name used in Tasks 2, 3 — consistent.
- `renderTodayPagesSection()` name used in Task 4 — consistent.
