# Admin Login Redirect + Calendar-Day Views — Design

**Date:** 2026-06-04
**Status:** Approved, ready to implement
**Target version:** v3.25 (from v3.24)

## Goal

Three small admin-page improvements:

1. After signing into the admin login modal, land on the admin dashboard (currently lands wherever the user was — usually the homepage).
2. Add a "Pages today" list to the admin Analytics sub-tab showing what pages have been viewed today.
3. Change the "Views (24h)" stat card from a rolling-24h server count to a calendar-day count (12:00am–11:59pm) anchored to **Eastern time (America/New_York)**.

## Scope

- Client-side only. No SQL migrations, no changes to the `analytics_summary` Postgres view, no RLS changes.
- Affects: `app.js`, `sw.js` (cache version bump).
- Out of scope:
  - The "New nests (24h)" card stays as a rolling 24h window — user did not ask for it to change.
  - The existing 7d / 30d / all-time columns in the analytics summary table keep using the server's UTC `current_date` (those windows are large enough that timezone slop doesn't matter).

## Design

### 1. Post-login redirect

Current behavior ([app.js:2196-2202](app.js#L2196-L2202)):
```js
try {
  await adminLoginRequest(email, password);
  closeAdminLogin();
} catch (e) { … }
```
`closeAdminLogin()` only hides the modal — it doesn't change tabs.

Change: after `closeAdminLogin()`, call `setTab("report")`. The admin dashboard lives at `state.tab === "report"`, and the existing `openAdminAccess()` already uses `setTab("report")` for the lock-button path ([app.js:2172-2178](app.js#L2172-L2178)) — we mirror that.

### 2. EST calendar-day data source

New module-level state and loader:

```js
let _todayAnalytics = null;       // { views: number, pages: [{page, count}, …] } | null
let _todayAnalyticsLoading = false;
let _todayAnalyticsError = "";
```

New function `loadPagesTodayFromSupabase()`:

- Compute today's EST window:
  - Use `Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", … })` to format `Date.now()` into year/month/day in New York, then build an ISO timestamp string with the correct offset.
  - DST handled automatically — produces `-05:00` in winter (EST) and `-04:00` in summer (EDT).
  - `startEST` = today 00:00:00 in NY; `endEST` = tomorrow 00:00:00 in NY.
- Query: `GET ${SUPABASE_URL}/rest/v1/pageviews?select=page&visited_at=gte.${encodeURIComponent(startEST)}&visited_at=lt.${encodeURIComponent(endEST)}`
  - Uses the admin's bearer token (RLS already allows `authenticated` to SELECT — see [docs/superpowers/specs/2026-05-28-admin-analytics-design.md:37-41](docs/superpowers/specs/2026-05-28-admin-analytics-design.md#L37-L41)).
- Aggregate client-side: build a `Map<string, number>`, increment per row, then convert to `[{ page, count }]` sorted by count descending.
- Cache result in `_todayAnalytics`.

Loading is triggered:
- Alongside the existing `loadAnalyticsFromSupabase()` on dashboard open (so the Views card and the Today list arrive together).
- On the existing "↻ Refresh" button in the Analytics sub-tab — `refreshAnalytics()` will call both loaders in parallel.

### 3. "Views (today)" stat card

Rename `"Views (24h)"` → `"Views (today)"` (the parenthetical no longer fits a calendar window).

In `getDashStatCounts()` ([app.js:2785-2798](app.js#L2785-L2798)):
- Replace `_analyticsData?.views_today` with `_todayAnalytics?.views`.
- While `_todayAnalytics` is null/loading, the card already renders `"—"` via the `value === null` guard in `renderDashStatCard()` ([app.js:2800-2806](app.js#L2800-L2806)).

### 4. "Pages today (EST)" list

New render function `renderTodayPagesSection()` that produces a card matching the existing `renderList()` helper used for "Top pages (30d)" ([app.js:2715-2726](app.js#L2715-L2726)):

- Header: `"Pages today (EST)"`
- Rows: `page` (left, bold) + view count (right, tabular-nums).
- Empty state: `"No views yet today"` (mirrors the existing "No data yet" pattern).
- Error state: same red error box pattern as `_analyticsError`.
- Loading state: dashed border with `"Loading…"` (same pattern as `!_analyticsData`).

Placement: render this **above** the two-column "Top pages (30d) / Top referrers (30d)" row inside `renderAdminAnalyticsSection()` ([app.js:2728-2737](app.js#L2728-L2737)).

### 5. Version bump

- `app.js` line 4: `APP_VERSION = "3.24"` → `"3.25"`
- `sw.js` line 1: `CACHE_VERSION = "3.24"` → `"3.25"`

## Data flow

```
Admin opens dashboard
        │
        ├─► loadAnalyticsFromSupabase()  (existing — UTC server view)
        │       └─► _analyticsData = { views_7d, views_30d, views_all, top_pages, … }
        │
        └─► loadPagesTodayFromSupabase()  (new — EST calendar day)
                ├─► compute startEST / endEST via Intl
                ├─► GET /pageviews?select=page&visited_at=gte.X&visited_at=lt.Y
                ├─► aggregate by page in JS
                └─► _todayAnalytics = { views, pages }

Render:
  "Views (today)" card        ← _todayAnalytics.views
  "Pages today (EST)" list    ← _todayAnalytics.pages
  "Top pages (30d)" list      ← _analyticsData.top_pages   (unchanged)
  Summary 7d/30d/all-time     ← _analyticsData             (unchanged)
```

## Error handling

- Tracker / pageview INSERT failures: already silent (no UI impact).
- `loadPagesTodayFromSupabase()` failures: set `_todayAnalyticsError`, surface a red error box where the list would go. Views card falls back to `"—"`.
- Independent of `_analyticsError` — one section failing doesn't blank the other.

## Testing

Manual browser smoke test after implementation:

1. Sign out, sign back in → expect to land on admin dashboard (not homepage).
2. Open Analytics sub-tab → expect:
   - "Views (today)" card shows a number (or "—" briefly while loading).
   - "Pages today (EST)" list shows page names + counts, or "No views yet today" before 12:00am ET resets.
   - Count in the card equals the sum of counts in the list.
3. Hit "↻ Refresh" → both loaders re-run.
4. Confirm no console errors.

## Risks

- **EST query window correctness**: `Intl.DateTimeFormat` with `timeZone: "America/New_York"` is well-supported but the offset string construction needs care. We'll build the timestamp like `2026-06-04T00:00:00-04:00` explicitly, then send it. Validate by checking the boundary count just before vs. just after midnight ET.
- **Admin's own activity excluded**: `analytics.js:33-42` skips tracking for logged-in admins via `localStorage.trainerwire_admin_session`. The "Pages today" list will not include the admin's own navigation — this is correct and matches the existing 30d list.

## Out of scope (YAGNI)

- Per-page unique visitor counts for today (option B from brainstorm — user picked the simple page+count form).
- Timeline / chronological view of today's activity.
- Configurable timezone — EST is hard-coded per user preference.
- Changing the "New nests (24h)" card.
