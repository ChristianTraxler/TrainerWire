# Public Bug Reports with Realtime Status — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the email-only Bug Report flow with a Supabase-backed system that publishes approved reports to a public list and updates their status in realtime.

**Architecture:** Add a `bug_reports` table + `bug-screenshots` storage bucket to the existing Supabase project. Hand-roll auth and realtime via `fetch` + WebSocket against Supabase's REST/Realtime APIs — matching the existing `subscribeToNests()` pattern. Render two-column desktop / stacked mobile layout inside the existing Report tab. Admin gates UI via Supabase Auth (email magic link); RLS enforces server-side. Reuse the existing `reporter_id` localStorage UUID for client-side rate limiting.

**Tech Stack:** Vanilla JS (no framework), monolithic `app.js`. Supabase (REST + Realtime WebSocket + Auth + Storage). No new dependencies.

**Reference spec:** [docs/superpowers/specs/2026-05-26-public-bug-reports-design.md](../specs/2026-05-26-public-bug-reports-design.md)

---

## Pre-flight: Confirm Version Bump

Per [feedback_version_confirmation.md](../../../memory/feedback_version_confirmation.md): before bumping `APP_VERSION` in Task 13, ask the user whether this is a minor (+0.01, e.g. 2.88 → 2.89) or major (+1.0, e.g. 2.88 → 3.0) bump. Default recommendation: **major** (3.0) — this is a new subsystem with a new database table, not a tweak.

---

## Task 1: Create the SQL migration file and document Supabase dashboard steps

**Files:**
- Create: `docs/superpowers/specs/2026-05-26-bug-reports.sql`
- Create: `docs/superpowers/specs/2026-05-26-bug-reports-setup.md`

- [ ] **Step 1: Write the SQL migration**

Create `docs/superpowers/specs/2026-05-26-bug-reports.sql` with:

```sql
-- Bug reports with public + admin RLS, screenshots in bug-screenshots bucket.
-- Run this in Supabase SQL Editor.

-- 1. admins allowlist
create table if not exists public.admins (
  email text primary key
);

-- 2. bug_reports
create table if not exists public.bug_reports (
  id              bigserial primary key,
  created_at      timestamptz not null default now(),
  report_type     text not null check (report_type in ('bug','wrong-info','missing','suggestion','other')),
  section         text not null,
  description     text not null check (char_length(description) between 10 and 2000),
  reporter_name   text,
  reporter_id     text not null,
  screenshot_url  text,
  status          text not null default 'pending'
                    check (status in ('pending','acknowledged','fixing','fixed','wont_fix','duplicate','not_a_bug')),
  admin_note      text,
  status_updated_at timestamptz
);

create index if not exists bug_reports_status_created_idx
  on public.bug_reports (status, created_at desc);
create index if not exists bug_reports_reporter_created_idx
  on public.bug_reports (reporter_id, created_at desc);

-- 3. trigger to bump status_updated_at when status changes
create or replace function public.bug_reports_touch_status_updated_at()
returns trigger language plpgsql as $$
begin
  if new.status is distinct from old.status then
    new.status_updated_at := now();
  end if;
  return new;
end$$;

drop trigger if exists bug_reports_status_updated on public.bug_reports;
create trigger bug_reports_status_updated
  before update on public.bug_reports
  for each row execute function public.bug_reports_touch_status_updated_at();

-- 4. helper: is the current request from an admin?
create or replace function public.is_admin()
returns boolean language sql stable as $$
  select exists (
    select 1 from public.admins
    where email = (auth.jwt() ->> 'email')
  );
$$;

-- 5. enable RLS
alter table public.bug_reports enable row level security;
alter table public.admins      enable row level security;

-- admins table: admin-only reads, no public exposure
drop policy if exists admins_select_admin on public.admins;
create policy admins_select_admin on public.admins
  for select using (public.is_admin());

-- bug_reports policies
drop policy if exists bug_reports_insert_anyone on public.bug_reports;
create policy bug_reports_insert_anyone on public.bug_reports
  for insert with check (status = 'pending');

drop policy if exists bug_reports_select_public on public.bug_reports;
create policy bug_reports_select_public on public.bug_reports
  for select using (status <> 'pending');

drop policy if exists bug_reports_select_admin on public.bug_reports;
create policy bug_reports_select_admin on public.bug_reports
  for select using (public.is_admin());

drop policy if exists bug_reports_update_admin on public.bug_reports;
create policy bug_reports_update_admin on public.bug_reports
  for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists bug_reports_delete_admin on public.bug_reports;
create policy bug_reports_delete_admin on public.bug_reports
  for delete using (public.is_admin());

-- 6. realtime publication (so postgres_changes pushes fire)
alter publication supabase_realtime add table public.bug_reports;

-- 7. storage policies for bug-screenshots
-- (The bucket itself is created via the dashboard or storage API.)
drop policy if exists bug_screenshots_insert_anyone on storage.objects;
create policy bug_screenshots_insert_anyone on storage.objects
  for insert with check (bucket_id = 'bug-screenshots');

drop policy if exists bug_screenshots_select_anyone on storage.objects;
create policy bug_screenshots_select_anyone on storage.objects
  for select using (bucket_id = 'bug-screenshots');

drop policy if exists bug_screenshots_delete_admin on storage.objects;
create policy bug_screenshots_delete_admin on storage.objects
  for delete using (bucket_id = 'bug-screenshots' and public.is_admin());
```

- [ ] **Step 2: Write the dashboard setup checklist**

Create `docs/superpowers/specs/2026-05-26-bug-reports-setup.md`:

```markdown
# Supabase setup for Bug Reports

Run these one-time steps in the Supabase dashboard (https://supabase.com/dashboard).

## 1. Run the SQL migration

Open **SQL Editor → New query**. Paste the contents of
`docs/superpowers/specs/2026-05-26-bug-reports.sql` and run.

Verify: `select * from public.bug_reports;` returns 0 rows (no error).

## 2. Create the screenshots bucket

**Storage → New bucket**:
- Name: `bug-screenshots`
- Public bucket: **on**
- File size limit: **10 MB**
- Allowed MIME types: `image/*`

The bucket-level policies were created by the SQL migration (Step 1).

## 3. Enable email auth

**Authentication → Providers → Email**:
- Enable Email provider: **on**
- Confirm email: **off** (magic-link only, no password)
- Secure email change: **on**

**Authentication → URL Configuration**:
- Site URL: your production URL (e.g. `https://trainerwire.vercel.app`)
- Redirect URLs: add your production URL **and** `http://localhost:*` for dev

**Authentication → Settings**:
- Enable signups: **off** (we don't want public account creation)

## 4. Add yourself as admin

**SQL Editor**:
```sql
insert into public.admins (email) values ('YOUR_EMAIL_HERE');
```

(Use whichever email you want to receive magic links at.)

## 5. Smoke test

```sql
-- Should return your row when run as a signed-in admin, empty when anon.
select * from public.admins;

-- Insert a fake pending report
insert into public.bug_reports (report_type, section, description, reporter_id)
  values ('bug', 'general', 'test report long enough to pass the check', 'manual-test');

-- As anon (sign out first), this should return 0 rows
select * from public.bug_reports;

-- As signed-in admin, this should return 1 row
select * from public.bug_reports;
```

Clean up the test row when done:
```sql
delete from public.bug_reports where reporter_id = 'manual-test';
```
```

- [ ] **Step 3: Commit**

```bash
git add docs/superpowers/specs/2026-05-26-bug-reports.sql docs/superpowers/specs/2026-05-26-bug-reports-setup.md
git commit -m "Add Bug Reports SQL migration and Supabase setup checklist"
```

- [ ] **Step 4: Verify with the user**

Ask the user to run the SQL migration and complete the dashboard steps in `2026-05-26-bug-reports-setup.md` before continuing. Wait for confirmation that all five sections succeed before moving on. The remaining tasks all assume the table, bucket, policies, auth provider, and admin row exist.

---

## Task 2: Add Supabase Auth client helpers

**Files:**
- Modify: `app.js` — add new helpers after the existing Supabase nests block (around line 1628, after `subscribeToNests()` is wired up)

- [ ] **Step 1: Add the auth helpers**

Find the line containing `subscribeToNests();` (currently [app.js:1629](../../../app.js#L1629)). Immediately **after** that line, insert this block:

```javascript
// --- SUPABASE AUTH (admin only) ---
const ADMIN_SESSION_KEY = "trainerwire_admin_session";

function getAdminSession() {
  try {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !s.access_token || !s.expires_at) return null;
    return s;
  } catch { return null; }
}
function setAdminSession(s) { localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(s)); }
function clearAdminSession() { localStorage.removeItem(ADMIN_SESSION_KEY); }

// Decode JWT payload without verification (verification happens server-side via RLS).
function decodeJwt(token) {
  try {
    const b64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(b64));
  } catch { return null; }
}

function isAdmin() {
  const s = getAdminSession();
  if (!s) return false;
  // expires_at from Supabase is unix seconds
  if (Date.now() / 1000 >= s.expires_at - 30) return false;
  const payload = decodeJwt(s.access_token);
  return !!(payload && payload.email);
}

function getAdminEmail() {
  const s = getAdminSession();
  if (!s) return null;
  const p = decodeJwt(s.access_token);
  return p ? p.email : null;
}

async function adminLoginRequest(email) {
  const redirectTo = location.origin + location.pathname;
  const res = await fetch(`${SUPABASE_URL}/auth/v1/otp`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ email, create_user: false, options: { email_redirect_to: redirectTo } })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error_description || err.msg || "Failed to send magic link.");
  }
}

function adminLogout() {
  clearAdminSession();
  render();
}

// Parse tokens from the URL fragment Supabase appends on magic-link callback,
// store them, and strip them from the URL. Returns true if we just logged in.
function consumeAuthCallback() {
  if (!location.hash || !location.hash.includes("access_token=")) return false;
  const params = new URLSearchParams(location.hash.slice(1));
  const access_token = params.get("access_token");
  const refresh_token = params.get("refresh_token");
  const expires_in = parseInt(params.get("expires_in") || "0", 10);
  if (!access_token) return false;
  setAdminSession({
    access_token,
    refresh_token,
    expires_at: Math.floor(Date.now() / 1000) + (expires_in || 3600)
  });
  // Strip the hash so it doesn't linger in browser history.
  history.replaceState(null, "", location.pathname + location.search);
  return true;
}

// Refresh the access token if it's near expiry. Returns the (possibly new) session.
async function refreshAdminSessionIfNeeded() {
  const s = getAdminSession();
  if (!s) return null;
  if (Date.now() / 1000 < s.expires_at - 60) return s;
  if (!s.refresh_token) { clearAdminSession(); return null; }
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: s.refresh_token })
    });
    if (!res.ok) { clearAdminSession(); return null; }
    const data = await res.json();
    const next = {
      access_token: data.access_token,
      refresh_token: data.refresh_token || s.refresh_token,
      expires_at: Math.floor(Date.now() / 1000) + (data.expires_in || 3600)
    };
    setAdminSession(next);
    return next;
  } catch { clearAdminSession(); return null; }
}

// Build a headers object for an authenticated REST call. Falls back to anon.
async function supabaseAuthHeaders(extra) {
  const base = { apikey: SUPABASE_KEY, ...(extra || {}) };
  const s = await refreshAdminSessionIfNeeded();
  base.Authorization = `Bearer ${s ? s.access_token : SUPABASE_KEY}`;
  return base;
}

// On page load, consume any magic-link callback.
consumeAuthCallback();
```

- [ ] **Step 2: Add a small Node test for `decodeJwt` and session expiry**

Create `tests/auth.test.js`:

```javascript
// Tests for the admin auth helpers in app.js.
// Run with:  node tests/auth.test.js

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

function makeFakeStorage() {
  const store = new Map();
  return {
    getItem: k => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
    _store: store
  };
}

const ctx = {
  localStorage: makeFakeStorage(),
  ADMIN_SESSION_KEY: "trainerwire_admin_session",
  atob: s => Buffer.from(s, "base64").toString("binary"),
  Date,
  JSON
};
vm.createContext(ctx);

const fns = ["getAdminSession", "setAdminSession", "clearAdminSession", "decodeJwt", "isAdmin"];
for (const name of fns) vm.runInContext(extractFn(name), ctx);

let passed = 0, failed = 0;
function eq(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log("  ok   " + label); }
  else { failed++; console.log("  FAIL " + label + "\n    got=" + JSON.stringify(actual) + "\n    exp=" + JSON.stringify(expected)); }
}

// --- decodeJwt ---
function makeJwt(payload) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${header}.${body}.fake-signature`;
}
eq("decodeJwt extracts email", ctx.decodeJwt(makeJwt({ email: "a@b.com" })).email, "a@b.com");
eq("decodeJwt returns null on garbage", ctx.decodeJwt("not.a.jwt"), null);

// --- session lifecycle ---
eq("getAdminSession is null initially", ctx.getAdminSession(), null);
ctx.setAdminSession({
  access_token: makeJwt({ email: "a@b.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) + 3600
});
eq("isAdmin true with valid session", ctx.isAdmin(), true);

// --- expiry ---
ctx.setAdminSession({
  access_token: makeJwt({ email: "a@b.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) - 10
});
eq("isAdmin false when expired", ctx.isAdmin(), false);

// --- logout ---
ctx.clearAdminSession();
eq("clearAdminSession nukes storage", ctx.getAdminSession(), null);
eq("isAdmin false after clear", ctx.isAdmin(), false);

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
```

- [ ] **Step 3: Run the test to verify it passes**

Run: `node tests/auth.test.js`
Expected: `7 passed, 0 failed` and exit code 0.

- [ ] **Step 4: Smoke test in the browser**

Start the site locally (e.g. `python3 -m http.server 8000` from the repo root, then open `http://localhost:8000`). Open DevTools → Console. Run:

```javascript
isAdmin()                 // → false (no session)
getAdminSession()         // → null
```

Both should return the expected values without errors.

- [ ] **Step 5: Commit**

```bash
git add app.js tests/auth.test.js
git commit -m "Add Supabase auth helpers for admin login"
```

---

## Task 3: Add admin login modal UI + footer link

**Files:**
- Modify: `app.js` — modal HTML, login submit handler, footer "Admin" link

- [ ] **Step 1: Add the login modal state + render helpers**

Find the `subscribeToNests()` block and the new `consumeAuthCallback();` line you added in Task 2. **After** that, append:

```javascript
// --- ADMIN LOGIN UI ---
let _adminLoginVisible = false;
let _adminLoginStatus = ""; // "" | "sending" | "sent" | error message

function openAdminLogin() { _adminLoginVisible = true; _adminLoginStatus = ""; render(); }
function closeAdminLogin() { _adminLoginVisible = false; render(); }

async function submitAdminLogin() {
  const inp = document.getElementById("admin-login-email");
  if (!inp) return;
  const email = inp.value.trim();
  if (!email) { _adminLoginStatus = "Please enter your email."; render(); return; }
  _adminLoginStatus = "sending"; render();
  try {
    await adminLoginRequest(email);
    _adminLoginStatus = "sent"; render();
  } catch (e) {
    _adminLoginStatus = e.message || "Failed to send magic link.";
    render();
  }
}

function renderAdminLoginModal() {
  if (!_adminLoginVisible) return "";
  const th = t(darkMode);
  const status = _adminLoginStatus;
  let body;
  if (status === "sent") {
    body = `<div style="padding:18px 0;text-align:center">
      <div style="font-size:32px">📬</div>
      <div style="margin-top:8px;font-size:15px;font-weight:700;color:${th.text}">Check your inbox</div>
      <div style="margin-top:6px;font-size:13px;color:${th.textMuted};line-height:1.5">We sent you a magic link. Click it to sign in as admin.</div>
    </div>`;
  } else {
    const sending = status === "sending";
    const errorMsg = (status && status !== "sending" && status !== "sent") ? status : "";
    body = `<div>
      <label style="display:block;font-size:13px;font-weight:700;color:${th.text};margin-bottom:6px">Admin email</label>
      <input id="admin-login-email" type="email" autocomplete="email" placeholder="you@example.com" style="width:100%;padding:11px 14px;border-radius:10px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:14px;font-family:inherit;outline:none;box-sizing:border-box" />
      ${errorMsg ? `<div style="margin-top:8px;font-size:12px;color:#E74C3C">${esc(errorMsg)}</div>` : ""}
      <button onclick="submitAdminLogin()" ${sending ? "disabled" : ""} style="margin-top:14px;width:100%;padding:12px;border-radius:10px;border:none;background:linear-gradient(135deg,#E74C3C,#F39C12);color:#fff;font-size:14px;font-weight:700;cursor:${sending ? "wait" : "pointer"};font-family:inherit;opacity:${sending ? 0.7 : 1}">${sending ? "Sending..." : "Send Magic Link"}</button>
    </div>`;
  }
  return `<div onclick="closeAdminLogin()" style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:300;display:flex;align-items:center;justify-content:center;padding:20px">
    <div onclick="event.stopPropagation()" style="background:${th.surface};border:1.5px solid ${th.border};border-radius:18px;padding:22px;width:100%;max-width:380px;box-shadow:0 12px 40px rgba(0,0,0,0.3)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="font-size:16px;font-weight:800;color:${th.text}">🔐 Admin sign-in</div>
        <button onclick="closeAdminLogin()" style="background:none;border:none;color:${th.textMuted};font-size:18px;cursor:pointer;padding:4px;line-height:1">✕</button>
      </div>
      ${body}
    </div>
  </div>`;
}
```

- [ ] **Step 2: Mount the modal in the main render output**

Find the line in `render()` that outputs the scroll-top button (search for `${scrollTopBtn}`, currently [app.js:5586](../../../app.js#L5586)). Replace:

```javascript
  appEl.innerHTML = `${sidebarHTML}<div style="min-height:100vh;display:flex;flex-direction:column;background:${th.bg};font-family:'Outfit','DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;color:${th.text};width:100%">
    ${headerHTML}${tickerHTML}<div style="flex:1">${content}</div>${footerHTML}
  </div>${scrollTopBtn}`;
```

with:

```javascript
  appEl.innerHTML = `${sidebarHTML}<div style="min-height:100vh;display:flex;flex-direction:column;background:${th.bg};font-family:'Outfit','DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;color:${th.text};width:100%">
    ${headerHTML}${tickerHTML}<div style="flex:1">${content}</div>${footerHTML}
  </div>${scrollTopBtn}${renderAdminLoginModal()}`;
```

- [ ] **Step 3: Add the "Admin" link to the footer**

Find the footer HTML (currently at [app.js:5571-5574](../../../app.js#L5571-L5574)):

```javascript
  const footerHTML = `<footer style="text-align:center;padding:${isMobile ? "20px 16px" : "28px 24px"};font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};font-weight:500;border-top:1px solid ${th.footerBorder}">
    ${COMMUNITY_NAME} · v${APP_VERSION} · Not affiliated with Niantic, The Pokémon Company, or Nintendo
    <div style="margin-top:8px"><a onclick="setTab('report')" style="color:${th.textMuted};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px">Report a Bug or Issue</a></div>
  </footer>`;
```

Replace with:

```javascript
  const adminLinkHTML = isAdmin()
    ? `<a onclick="adminLogout()" style="color:${th.textMuted};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px;margin-left:14px" title="Signed in as ${esc(getAdminEmail() || "")}">Sign out</a>`
    : `<a onclick="openAdminLogin()" style="color:${th.textFaint};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px;margin-left:14px">Admin</a>`;
  const footerHTML = `<footer style="text-align:center;padding:${isMobile ? "20px 16px" : "28px 24px"};font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};font-weight:500;border-top:1px solid ${th.footerBorder}">
    ${COMMUNITY_NAME} · v${APP_VERSION} · Not affiliated with Niantic, The Pokémon Company, or Nintendo
    <div style="margin-top:8px"><a onclick="setTab('report')" style="color:${th.textMuted};cursor:pointer;text-decoration:underline;font-size:${isMobile ? 11 : 12}px">Report a Bug or Issue</a>${adminLinkHTML}</div>
  </footer>`;
```

- [ ] **Step 4: Manual verification**

Reload the site. Footer now shows "Report a Bug or Issue · Admin". Click "Admin" → modal opens with email input. Click outside the modal → it closes. Click "Admin" again, type your admin email, click "Send Magic Link" → button shows "Sending..." then the "Check your inbox" panel appears. Check your inbox, click the link → the page reloads, the URL hash is stripped, and the footer link now reads "Sign out".

If the magic link doesn't arrive, recheck Task 1 Step 3 (Email provider, redirect URLs, admin email in the `admins` table).

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "Add admin login modal and footer link"
```

---

## Task 4: Data layer — load, insert, and screenshot upload

**Files:**
- Modify: `app.js` — add new fetch helpers after the auth block from Task 3

- [ ] **Step 1: Add the bug report data layer**

After `renderAdminLoginModal()` (end of Task 3 code), append:

```javascript
// --- BUG REPORTS DATA LAYER ---
let _bugReportsCache = [];

async function loadBugReportsFromSupabase() {
  try {
    const headers = await supabaseAuthHeaders();
    const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?select=*&order=created_at.desc`, { headers });
    if (res.ok) _bugReportsCache = await res.json();
  } catch {}
  return _bugReportsCache;
}
function loadBugReports() { return _bugReportsCache; }

async function uploadBugScreenshot(file) {
  if (!file) return null;
  const ext = (file.name.split(".").pop() || "png").toLowerCase().replace(/[^a-z0-9]/g, "");
  const reporterId = getReporterId();
  const objName = `${reporterId}/${crypto.randomUUID()}.${ext || "png"}`;
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/bug-screenshots/${objName}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false"
    },
    body: file
  });
  if (!res.ok) throw new Error("Screenshot upload failed.");
  return `${SUPABASE_URL}/storage/v1/object/public/bug-screenshots/${objName}`;
}

async function insertBugReport({ report_type, section, description, reporter_name, screenshot_url }) {
  const reporterId = getReporterId();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      report_type, section, description,
      reporter_name: reporter_name || null,
      reporter_id: reporterId,
      screenshot_url: screenshot_url || null,
      status: "pending"
    })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "Failed to submit report.");
  }
}

async function updateBugReportStatus(id, newStatus) {
  const headers = await supabaseAuthHeaders({ "Content-Type": "application/json", Prefer: "return=minimal" });
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?id=eq.${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ status: newStatus })
  });
  if (!res.ok) throw new Error("Failed to update status.");
  await loadBugReportsFromSupabase();
  render();
}

async function updateBugReportAdminNote(id, note) {
  const headers = await supabaseAuthHeaders({ "Content-Type": "application/json", Prefer: "return=minimal" });
  const trimmed = note.trim();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?id=eq.${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ admin_note: trimmed || null })
  });
  if (!res.ok) throw new Error("Failed to save note.");
  await loadBugReportsFromSupabase();
  render();
}

async function deleteBugReport(id) {
  if (!confirm("Delete this report? This cannot be undone.")) return;
  const headers = await supabaseAuthHeaders();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/bug_reports?id=eq.${id}`, { method: "DELETE", headers });
  if (!res.ok) { alert("Delete failed."); return; }
  await loadBugReportsFromSupabase();
  render();
}

async function approveBugReport(id) {
  await updateBugReportStatus(id, "acknowledged");
}
```

- [ ] **Step 2: Smoke test in the browser**

Reload, open DevTools console.

```javascript
await loadBugReportsFromSupabase()    // → [] (or any test rows you inserted via Task 1 Step 5)
await uploadBugScreenshot(null)       // → null (no-op safe path)
```

If you inserted the manual-test row in Task 1 Step 5 and didn't delete it, this is where `loadBugReportsFromSupabase()` should return it — but only if you're signed in as admin (because it's still in `pending` status). Sign out and re-run — should be empty.

If not signed in, also try inserting a real one:
```javascript
await insertBugReport({ report_type: "bug", section: "general", description: "smoke test from devtools console — long enough to pass validation" })
```
Then `select * from bug_reports` in Supabase SQL Editor should show the new row with `status='pending'`.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "Add bug reports Supabase data layer (load, insert, update, delete, screenshot upload)"
```

---

## Task 5: Client-side rate limiter

**Files:**
- Modify: `app.js` — add the rate-limit helper next to the data layer
- Create: `tests/bug-reports.test.js`

- [ ] **Step 1: Add the rate-limit helper**

Append to `app.js` right after `approveBugReport` from Task 4:

```javascript
// Allow up to MAX_REPORTS_PER_HOUR submissions per reporter_id within a rolling hour.
const MAX_REPORTS_PER_HOUR = 3;
function checkBugReportRateLimit(now, recentTimestamps) {
  const cutoff = now - 3600 * 1000;
  const recent = (recentTimestamps || []).filter(t => t >= cutoff);
  return { allowed: recent.length < MAX_REPORTS_PER_HOUR, count: recent.length, max: MAX_REPORTS_PER_HOUR };
}

function getRecentBugReportTimestampsFromCache() {
  const me = getReporterId();
  return _bugReportsCache
    .filter(r => r.reporter_id === me)
    .map(r => new Date(r.created_at).getTime());
}
```

- [ ] **Step 2: Write the failing test**

Create `tests/bug-reports.test.js`:

```javascript
// Tests for bug report client-side helpers.
// Run with:  node tests/bug-reports.test.js

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

const ctx = { MAX_REPORTS_PER_HOUR: 3 };
vm.createContext(ctx);
vm.runInContext(extractFn("checkBugReportRateLimit"), ctx);

let passed = 0, failed = 0;
function eq(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log("  ok   " + label); }
  else { failed++; console.log("  FAIL " + label + "\n    got=" + JSON.stringify(actual) + "\n    exp=" + JSON.stringify(expected)); }
}

const NOW = 1_700_000_000_000;
const MIN = 60 * 1000;

eq("empty history is allowed",
   ctx.checkBugReportRateLimit(NOW, []),
   { allowed: true, count: 0, max: 3 });

eq("2 in the last hour are allowed",
   ctx.checkBugReportRateLimit(NOW, [NOW - 10*MIN, NOW - 30*MIN]),
   { allowed: true, count: 2, max: 3 });

eq("3 in the last hour are blocked",
   ctx.checkBugReportRateLimit(NOW, [NOW - 5*MIN, NOW - 20*MIN, NOW - 45*MIN]),
   { allowed: false, count: 3, max: 3 });

eq("old entries don't count",
   ctx.checkBugReportRateLimit(NOW, [NOW - 90*MIN, NOW - 120*MIN, NOW - 10*MIN]),
   { allowed: true, count: 1, max: 3 });

eq("exactly 60 minutes ago does NOT count (strict cutoff)",
   ctx.checkBugReportRateLimit(NOW, [NOW - 60*MIN - 1]),
   { allowed: true, count: 0, max: 3 });

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
```

- [ ] **Step 3: Run the test**

Run: `node tests/bug-reports.test.js`
Expected: `5 passed, 0 failed` and exit code 0.

- [ ] **Step 4: Commit**

```bash
git add app.js tests/bug-reports.test.js
git commit -m "Add client-side rate limiter for bug report submissions"
```

---

## Task 6: Wire the form to the new Supabase flow (replace mailto)

**Files:**
- Modify: `app.js` — replace `submitReport()` body

- [ ] **Step 1: Replace `submitReport`**

Find the existing `submitReport()` function ([app.js:3329-3340](../../../app.js#L3329-L3340)). Replace the entire function with:

```javascript
let _reportSubmitting = false;
let _reportSubmitMessage = { type: "", text: "" }; // type: "" | "success" | "error"

async function submitReport() {
  if (_reportSubmitting) return;
  const type = document.getElementById("report-type").value;
  const section = document.getElementById("report-section").value;
  const description = document.getElementById("report-description").value.trim();
  const name = document.getElementById("report-name").value.trim();

  if (description.length < 10) {
    _reportSubmitMessage = { type: "error", text: "Description must be at least 10 characters." };
    render();
    return;
  }

  // Rate limit using the cache (already populated on tab open).
  const rate = checkBugReportRateLimit(Date.now(), getRecentBugReportTimestampsFromCache());
  if (!rate.allowed) {
    _reportSubmitMessage = { type: "error", text: `You've submitted ${rate.count} reports in the last hour (max ${rate.max}). Please try again later.` };
    render();
    return;
  }

  _reportSubmitting = true;
  _reportSubmitMessage = { type: "", text: "" };
  render();

  try {
    let screenshot_url = null;
    if (reportPhotoFile) screenshot_url = await uploadBugScreenshot(reportPhotoFile);
    await insertBugReport({ report_type: type, section, description, reporter_name: name, screenshot_url });
    _reportSubmitMessage = { type: "success", text: "Thanks! Your report is in the queue and will appear here once reviewed." };
    // Clear form fields.
    document.getElementById("report-description").value = "";
    document.getElementById("report-name").value = "";
    removeReportPhoto();
    // Refresh cache so the rate limiter sees the new entry.
    await loadBugReportsFromSupabase();
  } catch (e) {
    _reportSubmitMessage = { type: "error", text: e.message || "Submission failed. Please try again." };
  } finally {
    _reportSubmitting = false;
    render();
  }
}
```

- [ ] **Step 2: Update the submit button + add inline status banner**

Find the submit button inside `reportTabHTML` (currently [app.js:5471](../../../app.js#L5471)):

```javascript
<button onclick="submitReport()" style="..." onmouseenter="..." onmouseleave="...">Submit Report</button>
```

Replace that single `<button>` line with a block that includes the button + inline message:

```javascript
<button onclick="submitReport()" ${_reportSubmitting ? "disabled" : ""} style="width:100%;padding:${isMobile ? "13px" : "14px"};border-radius:12px;border:none;background:linear-gradient(135deg,#E74C3C,#F39C12);color:#fff;font-size:${isMobile ? 15 : 16}px;font-weight:700;cursor:${_reportSubmitting ? "wait" : "pointer"};font-family:inherit;transition:all 0.2s ease;letter-spacing:0.3px;opacity:${_reportSubmitting ? 0.7 : 1}" ${_reportSubmitting ? "" : `onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(231,76,60,0.3)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'"`}>${_reportSubmitting ? "Submitting..." : "Submit Report"}</button>
${_reportSubmitMessage.text ? `<div style="margin-top:10px;padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.5;background:${_reportSubmitMessage.type === "success" ? "rgba(46,204,113,0.12)" : "rgba(231,76,60,0.12)"};color:${_reportSubmitMessage.type === "success" ? "#2ECC71" : "#E74C3C"};border:1px solid ${_reportSubmitMessage.type === "success" ? "rgba(46,204,113,0.3)" : "rgba(231,76,60,0.3)"}">${esc(_reportSubmitMessage.text)}</div>` : ""}
```

- [ ] **Step 3: Replace the email-fallback caption text**

Currently ([app.js:5473-5475](../../../app.js#L5473-L5475)):

```javascript
<div style="text-align:center;font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};line-height:1.6;padding:0 8px">
  Reports are sent via email. Your email app will open with the details pre-filled.<br>Thank you for helping us keep TrainerWire accurate!
</div>
```

Replace with:

```javascript
<div style="text-align:center;font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};line-height:1.6;padding:0 8px">
  Thank you for helping us keep TrainerWire accurate!<br>Prefer email? Send it to <a href="mailto:${REPORT_EMAIL}" style="color:${th.textMuted}">${REPORT_EMAIL}</a>.
</div>
```

- [ ] **Step 4: Ensure the cache loads when the user enters the Report tab**

Find `setTab()` ([app.js:3342-3351](../../../app.js#L3342-L3351)):

```javascript
function setTab(tab) {
  state.tab = tab;
  state.selectedEvent = null;
  state.selectedNews = null;
  state.pokedexDetail = null;
  sessionStorage.setItem("trainerwire_tab", tab);
  if (tab === "nests") { loadNestsFromSupabase().then(() => render()); }
  render();
  window.scrollTo(0, 0);
}
```

Add a parallel branch for `report`:

```javascript
function setTab(tab) {
  state.tab = tab;
  state.selectedEvent = null;
  state.selectedNews = null;
  state.pokedexDetail = null;
  sessionStorage.setItem("trainerwire_tab", tab);
  if (tab === "nests") { loadNestsFromSupabase().then(() => render()); }
  if (tab === "report") { loadBugReportsFromSupabase().then(() => render()); }
  render();
  window.scrollTo(0, 0);
}
```

- [ ] **Step 5: Manual end-to-end test**

1. Reload, open the Report tab.
2. Fill out the form with a real description (≥ 10 chars). Optionally attach a screenshot.
3. Click Submit. Expect: button shows "Submitting...", then the green success banner appears. Form fields clear.
4. In Supabase SQL Editor: `select * from bug_reports order by id desc limit 3;` — the new row exists with `status='pending'` and (if you attached one) a `screenshot_url`.
5. Try submitting an 8-char description — red error banner, no row inserted.
6. Submit 3 times in a row → 4th attempt shows the rate-limit error.
7. If a screenshot was uploaded, open the `screenshot_url` in a new tab — it should display the image.

- [ ] **Step 6: Commit**

```bash
git add app.js
git commit -m "Replace mailto submission with Supabase insert + screenshot upload"
```

---

## Task 7: Realtime subscription for bug reports

**Files:**
- Modify: `app.js` — add subscription mirroring `subscribeToNests`

- [ ] **Step 1: Add the subscription**

Find `subscribeToNests()` ([app.js:1614-1628](../../../app.js#L1614-L1628)) and the `subscribeToNests();` invocation immediately after. Right **after** that invocation, add:

```javascript
function subscribeToBugReports() {
  const ws = new WebSocket(`${SUPABASE_URL.replace("https://","wss://")}/realtime/v1/websocket?apikey=${SUPABASE_KEY}&vsn=1.0.0`);
  let heartbeat;
  ws.onopen = () => {
    ws.send(JSON.stringify({ topic: "realtime:public:bug_reports", event: "phx_join", payload: { config: { broadcast: { self: true }, postgres_changes: [{ event: "*", schema: "public", table: "bug_reports" }] } }, ref: "1" }));
    heartbeat = setInterval(() => ws.send(JSON.stringify({ topic: "phoenix", event: "heartbeat", payload: {}, ref: "hb-br" })), 30000);
  };
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.event === "postgres_changes") {
      loadBugReportsFromSupabase().then(() => { if (state.tab === "report") render(); });
    }
  };
  ws.onclose = () => { clearInterval(heartbeat); setTimeout(subscribeToBugReports, 3000); };
}
subscribeToBugReports();
```

- [ ] **Step 2: Manual test**

Open the site in two browser tabs (or two browsers — second one signed in as admin). In the admin tab, run in the console:

```javascript
await updateBugReportStatus(<id>, "acknowledged")  // replace <id> with a real id
```

In the non-admin tab on the Report page, the corresponding row should appear/update within ~1 second without a refresh. (If the report was pending and is now acknowledged, it should appear for the first time. If it was already public, the status pill should change color.)

If nothing happens, verify in Task 1 the line `alter publication supabase_realtime add table public.bug_reports;` was actually run.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "Add realtime WebSocket subscription for bug reports"
```

---

## Task 8: Render the public reports list (read-only)

**Files:**
- Modify: `app.js` — add list/card render helpers; insert them into the Report tab markup

- [ ] **Step 1: Add helpers and renderers**

Append to `app.js` next to the data layer (after `approveBugReport` and the rate-limit helpers):

```javascript
// --- BUG REPORT RENDERING ---
const BUG_STATUS_META = {
  pending:      { label: "Pending",     color: "#F1C40F" },
  acknowledged: { label: "Acknowledged", color: "#7F8C8D" },
  fixing:       { label: "Fixing",      color: "#F39C12" },
  fixed:        { label: "Fixed",       color: "#2ECC71" },
  wont_fix:     { label: "Won't Fix",   color: "#E74C3C" },
  duplicate:    { label: "Duplicate",   color: "#9B59B6" },
  not_a_bug:    { label: "Not a Bug",   color: "#3498DB" }
};
const BUG_TYPE_LABELS = {
  "bug": "Bug", "wrong-info": "Wrong Info", "missing": "Missing", "suggestion": "Suggestion", "other": "Other"
};
const BUG_SECTION_LABELS = {
  "calendar": "Calendar", "store": "Deal Check", "events": "Events", "general": "General",
  "max-battles": "Max Battles", "nests": "Nests", "news": "News", "pokedex": "PokéDex",
  "tools": "PoGO Tools", "raids": "Raids",
  "accessibility": "Accessibility", "content-data": "Content & Data", "new-feature": "New Feature",
  "notifications": "Notifications", "performance": "Performance", "ui-design": "UI / Design"
};

function relativeDate(iso) {
  const then = new Date(iso).getTime();
  const diff = Date.now() - then;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hr${h === 1 ? "" : "s"} ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} day${d === 1 ? "" : "s"} ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function openScreenshotLightbox(url) {
  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:400;display:flex;align-items:center;justify-content:center;padding:20px;cursor:zoom-out";
  overlay.innerHTML = `<img src="${esc(url)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:8px" /><button style="position:absolute;top:20px;right:20px;width:40px;height:40px;border-radius:50%;background:rgba(0,0,0,0.6);border:1.5px solid #fff;color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button>`;
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

function renderBugReportStatusPill(status) {
  const m = BUG_STATUS_META[status] || BUG_STATUS_META.acknowledged;
  return `<span style="display:inline-block;padding:3px 10px;border-radius:999px;background:${m.color};color:#fff;font-size:11px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase">${m.label}</span>`;
}

function renderBugReportCard(report) {
  const th = t(darkMode);
  const typeLabel = BUG_TYPE_LABELS[report.report_type] || report.report_type;
  const sectionLabel = BUG_SECTION_LABELS[report.section] || report.section;
  const meta = `${typeLabel} · ${sectionLabel}`;
  const reporter = report.reporter_name ? `— ${esc(report.reporter_name)} · ` : "";
  const date = relativeDate(report.created_at);
  const shot = report.screenshot_url
    ? `<img src="${esc(report.screenshot_url)}" onclick="openScreenshotLightbox('${esc(report.screenshot_url)}')" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:zoom-in;border:1.5px solid ${th.border};margin-top:10px;display:block" alt="Screenshot" onerror="this.style.display='none'" />`
    : "";
  const note = report.admin_note ? `<div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:${th.bg};border:1px solid ${th.border};font-size:12px;color:${th.textSecondary};line-height:1.5"><span style="font-weight:700;color:${th.text}">✎ Admin note: </span>${esc(report.admin_note)}</div>` : "";
  return `<div style="padding:14px 16px;background:${th.surface};border:1.5px solid ${th.border};border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      ${renderBugReportStatusPill(report.status)}
      <span style="font-size:12px;font-weight:600;color:${th.textMuted}">${esc(meta)}</span>
    </div>
    <div style="margin-top:10px;font-size:14px;color:${th.text};line-height:1.55;white-space:pre-wrap;word-break:break-word">${esc(report.description)}</div>
    ${shot}
    <div style="margin-top:10px;font-size:11px;color:${th.textFaint}">${reporter}${date}</div>
    ${note}
  </div>`;
}

function renderBugReportsList() {
  const th = t(darkMode);
  const reports = loadBugReports().filter(r => r.status !== "pending");
  if (reports.length === 0) {
    return `<div style="padding:24px;text-align:center;color:${th.textMuted};font-size:13px;border:1.5px dashed ${th.border};border-radius:14px">No reports yet — be the first to flag an issue!</div>`;
  }
  return `<div style="display:flex;flex-direction:column;gap:12px">${reports.map(renderBugReportCard).join("")}</div>`;
}
```

- [ ] **Step 2: Insert the list into the Report tab markup**

Find the closing tag of the form container inside `reportTabHTML` ([app.js:5476](../../../app.js#L5476)). The structure currently ends with:

```javascript
        </div>
        <div style="text-align:center;font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};line-height:1.6;padding:0 8px">
          ...
        </div>
      </div>`;
    }
```

Add the list section **before** the closing `</div>\`;` of the outer wrapper. Find this line:

```javascript
        </div>
      </div>`;
    }
```

and replace with:

```javascript
        </div>
        <div style="margin-top:8px">
          <h3 style="margin:0 0 12px 0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
          ${renderBugReportsList()}
        </div>
      </div>`;
    }
```

(For this task, the list still appears below the form — we'll restructure to side-by-side in Task 10.)

- [ ] **Step 3: Manual test**

1. Reload, go to the Report tab. The list shows "No reports yet" (assuming all reports are still pending or none exist).
2. In Supabase SQL Editor:
   ```sql
   update bug_reports set status = 'acknowledged' where status = 'pending' returning id, status;
   ```
3. Within ~1 second the page should auto-update (thanks to Task 7's realtime), showing your test reports as gray "Acknowledged" cards.
4. Try setting one to `fixing`, then `fixed` — pill color should flip live.
5. If a card has a screenshot, click the thumbnail — lightbox opens, click anywhere to close.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "Render public bug reports list with status pills and screenshot lightbox"
```

---

## Task 9: Filter chips + "More" dropdown

**Files:**
- Modify: `app.js` — filter state + chip rendering

- [ ] **Step 1: Add filter state and chip renderer**

Append to `app.js` near the other bug report state:

```javascript
let _bugReportFilter = "all"; // "all" | "acknowledged" | "fixing" | "fixed" | "wont_fix" | "duplicate" | "not_a_bug"
let _bugReportMoreOpen = false;

function setBugReportFilter(filter) {
  _bugReportFilter = filter;
  _bugReportMoreOpen = false;
  render();
}
function toggleBugReportMore() { _bugReportMoreOpen = !_bugReportMoreOpen; render(); }
```

- [ ] **Step 2: Add the chip renderer**

Also append:

```javascript
function renderBugReportFilterChips() {
  const th = t(darkMode);
  const primary = [
    { key: "all", label: "All" },
    { key: "acknowledged", label: "Acknowledged" },
    { key: "fixing", label: "Fixing" },
    { key: "fixed", label: "Fixed" }
  ];
  const overflow = [
    { key: "wont_fix", label: "Won't Fix" },
    { key: "duplicate", label: "Duplicate" },
    { key: "not_a_bug", label: "Not a Bug" }
  ];
  const chip = (key, label) => {
    const active = _bugReportFilter === key;
    return `<button onclick="setBugReportFilter('${key}')" style="padding:6px 14px;border-radius:999px;border:1.5px solid ${active ? "#E74C3C" : th.border};background:${active ? th.accentBg("#E74C3C") : th.surface};color:${active ? "#E74C3C" : th.text};font-size:12px;font-weight:${active ? 700 : 600};cursor:pointer;font-family:inherit;white-space:nowrap">${label}</button>`;
  };
  const moreActive = overflow.some(o => o.key === _bugReportFilter);
  const dropdown = _bugReportMoreOpen
    ? `<div style="position:absolute;top:100%;right:0;margin-top:6px;background:${th.surface};border:1.5px solid ${th.border};border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.18);padding:6px;display:flex;flex-direction:column;gap:4px;z-index:20;min-width:140px">
        ${overflow.map(o => `<button onclick="setBugReportFilter('${o.key}')" style="padding:8px 12px;border-radius:8px;border:none;background:${_bugReportFilter === o.key ? th.accentBg("#E74C3C") : "transparent"};color:${_bugReportFilter === o.key ? "#E74C3C" : th.text};font-size:13px;font-weight:600;cursor:pointer;text-align:left;font-family:inherit" onmouseenter="if(this.style.background==='transparent')this.style.background='${th.surfaceHover}'" onmouseleave="if(this.style.background==='${th.surfaceHover}')this.style.background='transparent'">${o.label}</button>`).join("")}
      </div>`
    : "";
  return `<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;position:relative">
    ${primary.map(p => chip(p.key, p.label)).join("")}
    <div style="position:relative">
      <button onclick="toggleBugReportMore()" style="padding:6px 14px;border-radius:999px;border:1.5px solid ${moreActive ? "#E74C3C" : th.border};background:${moreActive ? th.accentBg("#E74C3C") : th.surface};color:${moreActive ? "#E74C3C" : th.text};font-size:12px;font-weight:${moreActive ? 700 : 600};cursor:pointer;font-family:inherit">More ▾</button>
      ${dropdown}
    </div>
  </div>`;
}
```

- [ ] **Step 3: Update `renderBugReportsList` to apply the filter**

Replace the body of `renderBugReportsList` (added in Task 8) with:

```javascript
function renderBugReportsList() {
  const th = t(darkMode);
  let reports = loadBugReports().filter(r => r.status !== "pending");
  if (_bugReportFilter !== "all") {
    reports = reports.filter(r => r.status === _bugReportFilter);
  }
  if (reports.length === 0) {
    const msg = _bugReportFilter === "all" ? "No reports yet — be the first to flag an issue!" : "No reports with this status.";
    return `<div style="padding:24px;text-align:center;color:${th.textMuted};font-size:13px;border:1.5px dashed ${th.border};border-radius:14px">${msg}</div>`;
  }
  return `<div style="display:flex;flex-direction:column;gap:12px">${reports.map(renderBugReportCard).join("")}</div>`;
}
```

- [ ] **Step 4: Insert chips into the Report tab markup**

Find the section you added in Task 8 (the `<h3>Recent Reports</h3>` block):

```javascript
        <div style="margin-top:8px">
          <h3 style="margin:0 0 12px 0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
          ${renderBugReportsList()}
        </div>
```

Replace with:

```javascript
        <div style="margin-top:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
            <h3 style="margin:0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
            ${renderBugReportFilterChips()}
          </div>
          ${renderBugReportsList()}
        </div>
```

- [ ] **Step 5: Manual test**

Reload the Report tab. The chip row should appear under the form (still stacked layout for now). Insert (or update) reports in Supabase with various statuses, then verify:
- Default chip "All" is active and shows everything.
- Clicking "Fixing" filters to only fixing reports.
- Clicking "More ▾" opens the dropdown showing Won't Fix / Duplicate / Not a Bug.
- Selecting any overflow option highlights the "More ▾" chip in accent color.
- Empty filter shows "No reports with this status."

- [ ] **Step 6: Commit**

```bash
git add app.js
git commit -m "Add status filter chips with overflow dropdown"
```

---

## Task 10: Restructure layout — 2-column desktop / stacked mobile

**Files:**
- Modify: `app.js` — the outer `reportTabHTML` wrapper

- [ ] **Step 1: Restructure the wrapper**

The Report tab currently uses `max-width:640px;margin:0 auto` to center a single column ([app.js:5420](../../../app.js#L5420)). We need to widen it on desktop and add a grid.

Find the `reportTabHTML` opening:

```javascript
    if (state.tab === "report") {
      reportTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px;max-width:640px;margin:0 auto;width:100%">
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">📝 Report an Issue</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Found a bug or incorrect info? Let us know and we'll fix it!</p>
        </div>
```

Change `max-width:640px` to `max-width:1180px`. Then locate the closing `</div>` of the outer wrapper (the line just before `}` at the end of the `if` block, which currently looks like):

```javascript
        <div style="margin-top:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
            <h3 ...>Recent Reports</h3>
            ${renderBugReportFilterChips()}
          </div>
          ${renderBugReportsList()}
        </div>
      </div>`;
    }
```

Restructure: between the title `<h2>` block and the form, wrap the form + caption block AND the Recent Reports block into a 2-column grid on desktop. The simplest surgery: replace the entire `reportTabHTML` assignment with:

```javascript
    if (state.tab === "report") {
      const isWide = !isMobile && breakpoint === "desktop";
      reportTabHTML = `<div style="display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px;max-width:1180px;margin:0 auto;width:100%">
        <div style="text-align:center;padding:10px">
          <h2 style="margin:0;font-size:${isMobile ? 20 : 26}px;font-weight:800;color:${th.text}">📝 Report an Issue</h2>
          <p style="margin:6px 0 0 0;font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">Found a bug or incorrect info? Let us know and we'll fix it!</p>
        </div>
        <div style="display:${isWide ? "grid" : "flex"};${isWide ? "grid-template-columns:460px 1fr;gap:24px;align-items:start" : "flex-direction:column;gap:20px"}">
          <div style="${isWide ? "position:sticky;top:84px" : ""}">
            <div style="padding:${isMobile ? "20px 18px" : "28px 28px"};background:${th.surface};border:1.5px solid ${th.border};border-radius:${isMobile ? 18 : 20}px;display:flex;flex-direction:column;gap:${isMobile ? 14 : 18}px;box-shadow:${th.shadow}">
              <div>
                <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Report Type</label>
                <select id="report-type" onchange="updateReportSection()" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;cursor:pointer;appearance:auto">
                  <option value="bug">Bug / Something Broken</option>
                  <option value="missing">Missing Event or Data</option>
                  <option value="suggestion">Suggestion / Feature Request</option>
                  <option value="wrong-info">Wrong Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div id="report-section-wrapper">
                <label id="report-section-label" style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Which page or section?</label>
                <select id="report-section" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;cursor:pointer;appearance:auto">
                  <option value="calendar">Calendar</option>
                  <option value="store">Deal Check</option>
                  <option value="events">Events</option>
                  <option value="general">General / Sitewide</option>
                  <option value="max-battles">Max Battles</option>
                  <option value="nests">Nests</option>
                  <option value="news">News</option>
                  <option value="pokedex">PokéDex</option>
                  <option value="tools">PoGO Tools</option>
                  <option value="raids">Raids</option>
                </select>
              </div>
              <div>
                <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Description <span style="color:${th.textMuted};font-weight:500">(be as specific as possible)</span></label>
                <textarea id="report-description" rows="5" placeholder="Describe the issue or what's wrong..." style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;resize:vertical;box-sizing:border-box;line-height:1.5"></textarea>
              </div>
              <div>
                <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Screenshot <span style="color:${th.textMuted};font-weight:500">(optional)</span></label>
                <div id="report-photo-drop" onclick="document.getElementById('report-photo').click()" style="width:100%;padding:${isMobile ? "20px 14px" : "24px 16px"};border-radius:12px;border:2px dashed ${th.border};background:${th.bg};cursor:pointer;text-align:center;box-sizing:border-box;transition:border-color 0.2s ease" onmouseenter="this.style.borderColor='#E74C3C'" onmouseleave="this.style.borderColor='${th.border}'">
                  <div id="report-photo-preview" style="display:none;margin-bottom:10px"></div>
                  <div id="report-photo-prompt" style="display:flex;flex-direction:column;align-items:center;gap:6px">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${th.textMuted}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span style="font-size:${isMobile ? 13 : 14}px;color:${th.textMuted};font-weight:500">Tap to add a screenshot</span>
                    <span style="font-size:${isMobile ? 10 : 11}px;color:${th.textFaint}">PNG, JPG, or GIF · Max 10 MB</span>
                  </div>
                </div>
                <input id="report-photo" type="file" accept="image/*" style="display:none" onchange="previewReportPhoto(this)" />
              </div>
              <div>
                <label style="display:block;font-size:${isMobile ? 12 : 13}px;font-weight:700;color:${th.text};margin-bottom:6px">Your Name <span style="color:${th.textMuted};font-weight:500">(optional)</span></label>
                <input id="report-name" type="text" placeholder="Trainer name or nickname" style="width:100%;padding:${isMobile ? "11px 14px" : "12px 16px"};border-radius:12px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:${isMobile ? 14 : 15}px;font-family:inherit;outline:none;box-sizing:border-box" />
              </div>
              <button onclick="submitReport()" ${_reportSubmitting ? "disabled" : ""} style="width:100%;padding:${isMobile ? "13px" : "14px"};border-radius:12px;border:none;background:linear-gradient(135deg,#E74C3C,#F39C12);color:#fff;font-size:${isMobile ? 15 : 16}px;font-weight:700;cursor:${_reportSubmitting ? "wait" : "pointer"};font-family:inherit;transition:all 0.2s ease;letter-spacing:0.3px;opacity:${_reportSubmitting ? 0.7 : 1}" ${_reportSubmitting ? "" : `onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(231,76,60,0.3)'" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none'"`}>${_reportSubmitting ? "Submitting..." : "Submit Report"}</button>
              ${_reportSubmitMessage.text ? `<div style="margin-top:0;padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.5;background:${_reportSubmitMessage.type === "success" ? "rgba(46,204,113,0.12)" : "rgba(231,76,60,0.12)"};color:${_reportSubmitMessage.type === "success" ? "#2ECC71" : "#E74C3C"};border:1px solid ${_reportSubmitMessage.type === "success" ? "rgba(46,204,113,0.3)" : "rgba(231,76,60,0.3)"}">${esc(_reportSubmitMessage.text)}</div>` : ""}
            </div>
            <div style="text-align:center;font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};line-height:1.6;padding:14px 8px 0">
              Thank you for helping us keep TrainerWire accurate!<br>Prefer email? Send it to <a href="mailto:${REPORT_EMAIL}" style="color:${th.textMuted}">${REPORT_EMAIL}</a>.
            </div>
          </div>
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
              <h3 style="margin:0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
              ${renderBugReportFilterChips()}
            </div>
            ${renderBugReportsList()}
          </div>
        </div>
      </div>`;
    }
```

This replaces the entire `if (state.tab === "report") { ... }` block (which was approximately [app.js:5417-5477](../../../app.js#L5417-L5477) before Task 8, now extended).

- [ ] **Step 2: Manual test on multiple widths**

1. **Desktop (≥1280px viewport):** Form on left (~460px wide, sticky as you scroll), Recent Reports on right.
2. **Tablet (~900px viewport):** Stacks — form on top, Recent Reports below. No sticky.
3. **Mobile (~390px viewport):** Stacks. Filter chips wrap if needed; the "More ▾" button stays compact.
4. Submit a report → success banner appears under the submit button. Confirm form stays in place (sticky on desktop) while the right side updates.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "Restructure Report tab into 2-column desktop / stacked mobile layout"
```

---

## Task 11: Admin pending queue

**Files:**
- Modify: `app.js` — render the pending queue above the public list when `isAdmin()`

- [ ] **Step 1: Add the pending queue renderer**

Append next to the other bug report renderers:

```javascript
function renderPendingQueueCard(report) {
  const th = t(darkMode);
  const typeLabel = BUG_TYPE_LABELS[report.report_type] || report.report_type;
  const sectionLabel = BUG_SECTION_LABELS[report.section] || report.section;
  const date = relativeDate(report.created_at);
  const reporter = report.reporter_name ? `— ${esc(report.reporter_name)} · ` : "";
  const shot = report.screenshot_url
    ? `<img src="${esc(report.screenshot_url)}" onclick="openScreenshotLightbox('${esc(report.screenshot_url)}')" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:zoom-in;border:1.5px solid ${th.border};margin-top:10px;display:block" alt="Screenshot" onerror="this.style.display='none'" />`
    : "";
  return `<div style="padding:14px 16px;background:${th.surface};border:1.5px solid #F1C40F;border-radius:14px;border-left-width:6px">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      ${renderBugReportStatusPill("pending")}
      <span style="font-size:12px;font-weight:600;color:${th.textMuted}">${esc(typeLabel)} · ${esc(sectionLabel)}</span>
      <span style="font-size:11px;color:${th.textFaint};margin-left:auto">${reporter}${date}</span>
    </div>
    <div style="margin-top:10px;font-size:14px;color:${th.text};line-height:1.55;white-space:pre-wrap;word-break:break-word">${esc(report.description)}</div>
    ${shot}
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
      <button onclick="approveBugReport(${report.id})" style="padding:8px 14px;border-radius:10px;border:none;background:#2ECC71;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">✓ Approve</button>
      <button onclick="deleteBugReport(${report.id})" style="padding:8px 14px;border-radius:10px;border:1.5px solid ${th.border};background:${th.surface};color:#E74C3C;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">🗑 Delete</button>
    </div>
  </div>`;
}

function renderPendingQueue() {
  if (!isAdmin()) return "";
  const th = t(darkMode);
  const pending = loadBugReports().filter(r => r.status === "pending");
  if (pending.length === 0) {
    return `<div style="padding:14px 16px;background:${th.surface};border:1.5px dashed ${th.border};border-radius:14px;font-size:13px;color:${th.textMuted};text-align:center;margin-bottom:18px">📭 Pending queue is empty.</div>`;
  }
  return `<div style="margin-bottom:18px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <h3 style="margin:0;font-size:15px;font-weight:800;color:${th.text}">📥 Pending review (${pending.length})</h3>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">${pending.map(renderPendingQueueCard).join("")}</div>
  </div>`;
}
```

- [ ] **Step 2: Mount the queue above the public list**

In the right-hand column section you wrote in Task 10, change:

```javascript
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
              <h3 style="margin:0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
              ${renderBugReportFilterChips()}
            </div>
            ${renderBugReportsList()}
          </div>
```

to:

```javascript
          <div>
            ${renderPendingQueue()}
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
              <h3 style="margin:0;font-size:${isMobile ? 16 : 18}px;font-weight:800;color:${th.text}">Recent Reports</h3>
              ${renderBugReportFilterChips()}
            </div>
            ${renderBugReportsList()}
          </div>
```

- [ ] **Step 3: Manual test**

1. **Signed out:** the pending queue must not appear at all. Verify by viewing the Report tab as anon — only the public list shows.
2. **Signed in as admin:** the queue shows above the public list. If no pending reports exist, you see "📭 Pending queue is empty."
3. Insert a fake pending report:
   ```sql
   insert into bug_reports (report_type, section, description, reporter_id)
     values ('bug', 'general', 'this is a test pending report that needs approval', 'manual-admin-test');
   ```
4. Within ~1 second the new card appears in the queue (realtime).
5. Click **Approve** → the card moves out of the queue, the public list now shows it as gray "Acknowledged".
6. Insert another pending report. Click **Delete** → confirms via native `confirm()`, then the row vanishes. Verify in SQL Editor the row is gone.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "Add admin pending queue with approve and delete actions"
```

---

## Task 12: Admin inline controls (status dropdown, admin note, delete)

**Files:**
- Modify: `app.js` — extend `renderBugReportCard` to show admin controls

- [ ] **Step 1: Replace `renderBugReportCard` with the admin-aware version**

Find the `renderBugReportCard` function added in Task 8 and replace its entire body with:

```javascript
function renderBugReportCard(report) {
  const th = t(darkMode);
  const admin = isAdmin();
  const typeLabel = BUG_TYPE_LABELS[report.report_type] || report.report_type;
  const sectionLabel = BUG_SECTION_LABELS[report.section] || report.section;
  const meta = `${typeLabel} · ${sectionLabel}`;
  const reporter = report.reporter_name ? `— ${esc(report.reporter_name)} · ` : "";
  const date = relativeDate(report.created_at);
  const shot = report.screenshot_url
    ? `<img src="${esc(report.screenshot_url)}" onclick="openScreenshotLightbox('${esc(report.screenshot_url)}')" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:zoom-in;border:1.5px solid ${th.border};margin-top:10px;display:block" alt="Screenshot" onerror="this.style.display='none'" />`
    : "";

  const statusOpts = ["acknowledged","fixing","fixed","wont_fix","duplicate","not_a_bug"];
  const statusControl = admin
    ? `<select onchange="updateBugReportStatus(${report.id}, this.value)" style="padding:4px 10px;border-radius:999px;border:1.5px solid ${BUG_STATUS_META[report.status].color};background:${BUG_STATUS_META[report.status].color};color:#fff;font-size:11px;font-weight:700;letter-spacing:0.3px;text-transform:uppercase;cursor:pointer;font-family:inherit;appearance:none;-webkit-appearance:none;padding-right:22px;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round'><path d='M6 9l6 6 6-6'/></svg>\");background-repeat:no-repeat;background-position:right 6px center;background-size:10px">
        ${statusOpts.map(s => `<option value="${s}" ${s === report.status ? "selected" : ""} style="background:#fff;color:#000">${BUG_STATUS_META[s].label}</option>`).join("")}
      </select>`
    : renderBugReportStatusPill(report.status);

  const adminNoteEditor = admin
    ? `<div style="margin-top:10px">
        <input type="text" placeholder="Admin note (optional) — saved on blur" value="${esc(report.admin_note || "")}" onblur="updateBugReportAdminNote(${report.id}, this.value)" style="width:100%;padding:8px 10px;border-radius:8px;border:1.5px solid ${th.border};background:${th.bg};color:${th.text};font-size:12px;font-family:inherit;outline:none;box-sizing:border-box" />
      </div>`
    : (report.admin_note ? `<div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:${th.bg};border:1px solid ${th.border};font-size:12px;color:${th.textSecondary};line-height:1.5"><span style="font-weight:700;color:${th.text}">✎ Admin note: </span>${esc(report.admin_note)}</div>` : "");

  const adminDelete = admin
    ? `<button onclick="deleteBugReport(${report.id})" title="Delete" style="background:none;border:none;color:${th.textMuted};font-size:14px;cursor:pointer;padding:4px;margin-left:auto" onmouseenter="this.style.color='#E74C3C'" onmouseleave="this.style.color='${th.textMuted}'">✕</button>`
    : "";

  return `<div style="padding:14px 16px;background:${th.surface};border:1.5px solid ${th.border};border-radius:14px">
    <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      ${statusControl}
      <span style="font-size:12px;font-weight:600;color:${th.textMuted}">${esc(meta)}</span>
      ${adminDelete}
    </div>
    <div style="margin-top:10px;font-size:14px;color:${th.text};line-height:1.55;white-space:pre-wrap;word-break:break-word">${esc(report.description)}</div>
    ${shot}
    <div style="margin-top:10px;font-size:11px;color:${th.textFaint}">${reporter}${date}</div>
    ${adminNoteEditor}
  </div>`;
}
```

- [ ] **Step 2: Manual end-to-end test**

1. **Anon view:** open the Report tab in a private window. Status appears as a static pill. No dropdown, no note editor, no delete ✕.
2. **Admin view:** sign in. Each public card now has:
   - A clickable status dropdown (clicking it shows the 6 public statuses).
   - A text input under the card for admin notes.
   - A small ✕ delete button in the top-right.
3. Change a card's status from `acknowledged` → `fixing`. The pill color flips immediately, and in a second browser tab (anon view) the same change appears via realtime.
4. Type "Fixed in v3.0" in the admin-note input and blur (Tab away or click elsewhere). The note saves; refresh the page to confirm it persisted; the anon view shows the note in the "✎ Admin note:" box.
5. Click the ✕ — confirm dialog appears, deleting the row.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "Add admin inline controls (status dropdown, admin note, delete)"
```

---

## Task 13: Cleanup, version bump, cache bust, last-updated stamp

**Files:**
- Modify: `app.js` — bump APP_VERSION, update "Last updated" if the Report tab has one
- Modify: `sw.js` — bump CACHE_VERSION to match
- Per [feedback_last_updated_timestamp.md](../../../memory/feedback_last_updated_timestamp.md) and [feedback_sync_cache_version.md](../../../memory/feedback_sync_cache_version.md)

- [ ] **Step 1: Ask the user for the version bump type**

Before editing, ask: "Should this ship as a minor bump (2.88 → 2.89) or a major bump (2.88 → 3.0)? My recommendation: **major** (3.0) — this is a new subsystem with a new database table." Wait for the user's answer.

- [ ] **Step 2: Bump `APP_VERSION` in app.js**

Edit [app.js:4](../../../app.js#L4):

```javascript
const APP_VERSION = "2.88";
```

to the version the user chose (e.g. `"3.0"`).

- [ ] **Step 3: Bump `CACHE_VERSION` in sw.js to match**

Edit [sw.js:1](../../../sw.js#L1):

```javascript
const CACHE_VERSION = "2.88";
```

to the same value (e.g. `"3.0"`).

- [ ] **Step 4: Check whether the Report tab has a "Last updated" stamp**

Run `grep -n "Last updated" /Users/christiantraxler/Desktop/Current-Projects/Pokémon-GO-Event-Hub/app.js`. If any "Last updated" string appears on the Report tab content (it likely won't, since this is a freshly redesigned tab — most pages with that stamp are data-heavy), skip this step. If it does appear, update the date to today's date in `YYYY-MM-DD` format.

- [ ] **Step 5: Delete unused functions**

There's no longer a mailto-only fallback function — `submitReport` is now the new Supabase-backed function. Confirm:
- `REPORT_EMAIL` at [app.js:5](../../../app.js#L5) is still used inside the form caption ("Prefer email? Send it to..."). **Keep** it.
- `previewReportPhoto`, `removeReportPhoto`, `updateReportSection` are all still used. **Keep** them.
- No orphan code from the original mailto flow should remain. Spot-check with `grep -n "mailto:" /Users/christiantraxler/Desktop/Current-Projects/Pokémon-GO-Event-Hub/app.js` — the only match should be the email caption link in the form footer.

- [ ] **Step 6: Run all tests**

Run all three test files:
```bash
node tests/countdown.test.js
node tests/auth.test.js
node tests/bug-reports.test.js
```

All three should report `N passed, 0 failed` and exit code 0.

- [ ] **Step 7: Full manual regression pass**

Open the site fresh (force-refresh to bust the old cache). Walk through the entire end-to-end flow one more time:

1. Anon submits a report with screenshot → success banner appears.
2. Admin sees pending queue update in realtime.
3. Admin approves → public list updates in both windows.
4. Admin changes status to `fixing` → live update.
5. Admin adds an admin note → saves on blur, visible to anon.
6. Admin sets status to `fixed` → green pill.
7. Anon filters by `Fixed` → sees only fixed reports.
8. Click screenshot thumbnail → lightbox opens, closes on click.
9. Footer shows the new version number.
10. The "Last updated" timestamp (if present anywhere this work touched) reflects today.

Verify the service worker actually picked up the new cache. In DevTools → Application → Service Workers, confirm the activated worker is `trainerwire-v<NEW_VERSION>` and the old cache (`trainerwire-v2.88`) is gone or being cleaned up.

- [ ] **Step 8: Commit**

```bash
git add app.js sw.js
git commit -m "Bump version to <NEW_VERSION>; ship public bug reports system"
```

- [ ] **Step 9: Ask the user before pushing to production**

Per [project_deployment.md](../../../memory/project_deployment.md), pushing to `main` triggers Vercel auto-deploy. Ask the user: "Ready to push to production? Once I push, Vercel will deploy automatically." Wait for confirmation before running `git push`.

---

## Self-Review Notes (for the implementer)

This plan was checked against the spec for coverage:

- [x] Data model — Task 1 SQL
- [x] Storage bucket — Task 1 dashboard
- [x] RLS — Task 1 SQL
- [x] Auth — Tasks 2 & 3
- [x] Layout — Tasks 8, 9, 10
- [x] Card contents (status, type+section, description, screenshot, name, date, admin note) — Task 8 + Task 12
- [x] Status pill colors (all 7) — Task 8
- [x] Filter chips (4 primary + 3 overflow) — Task 9
- [x] Realtime — Task 7
- [x] Submission flow (validation, rate limit, screenshot upload, success/error) — Tasks 4, 5, 6
- [x] Email fallback link — Task 6 + Task 10
- [x] Pending queue (admin only) — Task 11
- [x] Inline status dropdown + admin note + delete — Task 12
- [x] Sign-out — Task 3
- [x] Code organization in app.js — all tasks
- [x] Version bump + cache version sync — Task 13

No placeholders remain. All function names are consistent across tasks (`updateBugReportStatus`, `updateBugReportAdminNote`, `approveBugReport`, `deleteBugReport`, `loadBugReportsFromSupabase`, `subscribeToBugReports`, `renderBugReportCard`, `renderBugReportsList`, `renderBugReportFilterChips`, `renderPendingQueue`, `renderPendingQueueCard`, `renderAdminLoginModal`, `openAdminLogin`, `closeAdminLogin`, `submitAdminLogin`, `adminLoginRequest`, `adminLogout`, `isAdmin`, `getAdminEmail`, `getAdminSession`, `setAdminSession`, `clearAdminSession`, `decodeJwt`, `consumeAuthCallback`, `refreshAdminSessionIfNeeded`, `supabaseAuthHeaders`, `submitReport`, `insertBugReport`, `uploadBugScreenshot`, `checkBugReportRateLimit`, `getRecentBugReportTimestampsFromCache`, `openScreenshotLightbox`, `relativeDate`, `renderBugReportStatusPill`, `setBugReportFilter`, `toggleBugReportMore`). Status keys are consistent (`pending`, `acknowledged`, `fixing`, `fixed`, `wont_fix`, `duplicate`, `not_a_bug`).
