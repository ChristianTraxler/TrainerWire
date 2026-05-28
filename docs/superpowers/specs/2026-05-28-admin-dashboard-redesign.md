# Admin Dashboard Redesign — Design

**Date:** 2026-05-28
**Status:** Approved, ready to implement

## Goal

Transform the admin-only "Report" tab from a single-purpose bug-report viewer into a true multi-section dashboard surfacing visitor analytics (already shipped), bug reports, nest activity, and a unified activity feed.

## Scope

When signed in as admin: the report tab becomes the dashboard. When signed out: the existing public bug-submission form + public bug list is unchanged.

## Layout

```
┌─ Admin Dashboard ─────────────────────────────────┐
│  [👁 Views] [🐛 Pending] [📍 Nests] [📅 Events]  │  always visible
├───────────────────────────────────────────────────┤
│  [Analytics] [Issues] [Nests] [Activity]          │  sub-tab pills
├───────────────────────────────────────────────────┤
│                                                   │
│  ( selected sub-tab content )                     │
│                                                   │
├───────────────────────────────────────────────────┤
│  [↻ Refresh all] [🗑 Cache] [📋 Email] [Sign out]│  quick actions
└───────────────────────────────────────────────────┘
```

## Stat cards (top)

| Card | Value | Source |
|---|---|---|
| 👁 Views (24h) | `analytics_summary.views_today` | existing view |
| 🐛 Pending issues | count where `status='pending'` | `_bugReportsCache` |
| 📍 New nests (24h) | count of `nests` rows created today | `_nestsCache` |
| 📅 Active events | EVENTS spanning today | local data |

Click a card → switches to its sub-tab.

## Sub-tabs

- **Analytics** — wraps existing `renderAdminAnalyticsSection()` unchanged.
- **Issues** — wraps existing `renderPendingQueue()` + filter chips + `renderBugReportsList()` unchanged.
- **Nests** — new. Migration countdown + recent 10 submissions + top 5 reported Pokémon in current cycle. Reuses `_nestsCache`.
- **Activity** — new. Unified chronological feed of the last 20 bug reports + nest submissions, type-icon + relative time. Reuses in-memory caches.

Selected sub-tab persists to `localStorage.trainerwire_admin_dash_tab` (default `"analytics"`).

## Quick actions (bottom)

| Button | Action |
|---|---|
| ↻ Refresh all | Parallel re-run of analytics/bug/nest loaders |
| 🗑 Clear caches | `caches.delete()` for SW cache + reload |
| 📋 Copy admin email | Clipboard copy of signed-in email |
| ↪ Sign out | Existing `adminLogout()` |

## Mobile

- Stat cards: 2×2 grid.
- Sub-tab pills: horizontal scroll like existing bug-report filter chips.
- Quick actions: wrap to multiple rows.

## Files touched

`app.js` only.

**New (~250 lines):**
- `_adminDashSubTab` state + `setAdminDashSubTab(name)` (persisted)
- `renderDashStatCards()`
- `renderDashSubTabPills()`
- `renderNestsSubTab()`
- `renderActivitySubTab()`
- `renderQuickActions()`
- `renderAdminDashboard()` — orchestrator

**Modified (~20 lines):**
- The `if (state.tab === "report")` block at `app.js:6635` branches: admin → `renderAdminDashboard()`, public → unchanged.

## Reused, not rewritten

- Visitor analytics tracker (`analytics.js`) — untouched
- `renderAdminAnalyticsSection()` — wrapped
- `renderPendingQueue()`, `renderBugReportFilterChips()`, `renderBugReportsList()` — wrapped
- Supabase loaders for bug reports, nests, analytics — reused

## Versioning

Bump `APP_VERSION` (+0.01 minor) and `CACHE_VERSION` in `sw.js` to match.

## Out of scope (YAGNI)

- Per-day analytics chart (already deferred in analytics design)
- Server-side rollups for nest stats (current cache is sufficient)
- Real-time push for nests/activity (existing realtime channels already cover bug reports)
- Editing/admin actions inside the Activity feed (read-only feed, click → jumps to source sub-tab)
