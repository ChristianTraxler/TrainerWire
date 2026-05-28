# Admin Analytics — Design

**Date:** 2026-05-28
**Status:** Approved, ready to implement

## Goal

Self-hosted analytics displayed on the admin page. Replaces dependence on the Vercel dashboard for visit data and integrates naturally with the existing Supabase + admin-auth setup.

## Metrics tracked

- Total page views
- Unique visitors (anonymous browser ID in localStorage)
- Per-page (tab) breakdown
- Referrers (hostname only)

## Time windows on admin page

Today, last 7 days, last 30 days, all-time.

## Data model

Single table `pageviews`:

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` PK, default `gen_random_uuid()` | |
| `visited_at` | `timestamptz` default `now()` | |
| `visitor_id` | `text` | Random UUID from localStorage |
| `page` | `text` | Tab name (`home`, `events`, etc.) |
| `referrer` | `text` | Hostname only or `direct` |

Indexes: `(visited_at DESC)`, `(page)`, `(visitor_id, visited_at)`.

A Postgres view `analytics_summary` does all aggregation server-side so the admin page makes a single query.

## RLS policies

- `anon`: INSERT only
- `authenticated`: SELECT only
- Nobody: UPDATE or DELETE

## Client tracker (`analytics.js`)

- Generate/retrieve visitor UUID from `localStorage.trainerwire_visitor_id`
- Skip tracking when:
  - `navigator.webdriver === true`
  - UA matches `/bot|crawler|spider|preview|lighthouse/i`
  - `localStorage.trainerwire_admin_session` exists (admin is logged in)
- `trackPageview(page)` — fire-and-forget POST to Supabase REST `/pageviews`
- Uses `navigator.sendBeacon()` when available, falls back to `fetch({keepalive:true})`
- `cleanReferrer()` strips to hostname; same-origin or empty → `"direct"`

## Integration points

- One line in `setTab()` at `app.js:4402`: `trackPageview(tab)`
- One line at end of initial render: `trackPageview(state.tab)`
- New `renderAnalyticsSection()` rendered inside admin UI

## Admin display

4-column grid (Today / 7d / 30d / All-time) for views and unique visitors. Two tables below for top 10 pages and top 10 referrers (last 30d). Manual refresh button. Auto-loads on admin page open.

## Error handling

- Tracker failures: silent (no UI impact)
- Admin analytics load failure: "Could not load analytics" with refresh button still available

## Versioning

Bump `APP_VERSION` (+0.01) and `CACHE_VERSION` in `sw.js` to match.

## Out of scope (YAGNI)

- IP / user-agent storage (PII risk, low value)
- Daily timeseries chart (later, if useful)
- Server-side bot filtering (client guard is sufficient)
- Real-time refresh / polling
