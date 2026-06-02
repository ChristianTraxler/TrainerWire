# Public Bug Reports with Realtime Status — Design Spec

**Date:** 2026-05-26
**Scope:** Replace the email-only Bug Report flow with a Supabase-backed system that publishes approved reports to a public list and updates their status in realtime.

## Problem

Today, the Report tab fires off a `mailto:` link with no persistence. Trainers can't see whether their report was received, whether anyone else hit the same bug, or whether anything is being done about it. There's no signal to the community that the site is actively maintained.

We want a public, realtime-updating list of bug reports with status badges (Acknowledged / Fixing / Fixed / etc.) sitting next to the existing submission form. As the admin marks reports "Fixing" or "Fixed", every connected browser updates without a refresh.

## Decisions Made During Brainstorm

- **Moderation:** approval-gated. New reports start as `pending` and are invisible to the public until the admin flips them to `acknowledged` or another public status.
- **Statuses:** 7 total — 1 private (`pending`) and 6 public (`acknowledged`, `fixing`, `fixed`, `wont_fix`, `duplicate`, `not_a_bug`).
- **Admin access:** Supabase Auth with email magic links. Single admin user; email allowlist enforced via RLS.
- **Screenshots:** uploaded to Supabase Storage and shown as thumbnails on public cards.
- **Card contents:** status badge · type + section · full description · screenshot thumbnail (if any) · reporter name (if given) · relative date · optional admin note.
- **List organization:** newest-first, with filter chips (`All · Acknowledged · Fixing · Fixed`).
- **Abuse protection:** client-side rate limit of 3 submissions per hour per `reporter_id` (existing localStorage UUID); description minimum 10 characters.
- **Admin email:** placeholder `ADMIN_EMAIL_HERE` — filled in by the user during Supabase setup.

## Data Model

### Table: `bug_reports`

| Column | Type | Constraints / Default | Notes |
|---|---|---|---|
| `id` | `bigserial` | PK | |
| `created_at` | `timestamptz` | `not null default now()` | indexed |
| `report_type` | `text` | `not null` | one of `bug`, `wrong-info`, `missing`, `suggestion`, `other` |
| `section` | `text` | `not null` | dropdown value from the form |
| `description` | `text` | `not null check (char_length(description) between 10 and 2000)` | |
| `reporter_name` | `text` | nullable | user-provided, optional |
| `reporter_id` | `text` | `not null` | localStorage UUID; matches existing nest pattern |
| `screenshot_url` | `text` | nullable | full public URL into `bug-screenshots` bucket |
| `status` | `text` | `not null default 'pending' check (status in ('pending','acknowledged','fixing','fixed','wont_fix','duplicate','not_a_bug'))` | |
| `admin_note` | `text` | nullable | shown beneath status badge on public cards |
| `status_updated_at` | `timestamptz` | nullable | bumped by trigger on status change |

**Indexes:**
- `(status, created_at desc)` — drives the public list query
- `(reporter_id, created_at desc)` — drives client-side rate-limit check

**Trigger:** `bug_reports_status_updated` — when `status` changes, set `status_updated_at = now()`.

### Storage bucket: `bug-screenshots`

- Public read.
- 10 MB max file size.
- Object path: `{reporter_id}/{uuid}.{ext}`.
- No automatic deletion in v1 (revisit if storage cost becomes an issue).

### Admin allowlist: `admins`

| Column | Type | Notes |
|---|---|---|
| `email` | `text` | PK |

Seeded with the user's email (`ADMIN_EMAIL_HERE`). Used inside RLS policies via `auth.jwt() ->> 'email'`.

## RLS Policies

### `bug_reports`

- **INSERT (anon, authenticated):** allowed when `status = 'pending'`. Description length check is enforced by the column constraint, so no extra clause needed.
- **SELECT (anon):** `status != 'pending'`.
- **SELECT (admin):** `(auth.jwt() ->> 'email') in (select email from admins)` — sees everything including pending.
- **UPDATE / DELETE (admin):** same admin check.

### `bug-screenshots` storage policies

- **INSERT (anon, authenticated):** allowed; size limit enforced at the bucket level.
- **SELECT (anon):** allowed (public read).
- **DELETE (admin):** only admin can delete objects.

## Auth

- Supabase Auth, email provider enabled, magic link only (no passwords).
- Redirect URL configured for the deployed site root.
- Login UI: a small "Admin" link in the footer (next to the existing "Report a Bug or Issue" link). Clicking opens a modal with a single email field → submit triggers `supabase.auth.signInWithOtp({ email })` → success message tells the user to check their inbox.
- The magic-link landing back on the site stores the JWT in localStorage. To match the existing hand-rolled `fetch` pattern used for nests (and avoid pulling in the full Supabase JS SDK), we use the `/auth/v1/otp` endpoint to request the link and `/auth/v1/verify` to exchange the token from the magic-link URL fragment for an access token + refresh token. Tokens stored under `trainerwire_admin_session`. A small wrapper refreshes the access token when it's within 60s of expiry.
- `isAdmin()` returns true when a valid session JWT is present and its `email` claim is in the local admin allowlist mirror.
- Logout button visible in the admin controls area; clears the session.

## Layout

### Desktop (viewport ≥ 1024px)

Two-column grid inside the Report tab.

- **Left column (~460px, sticky to viewport top):** the existing form. Container, paddings, and inputs stay identical to today. The Submit button keeps its red→orange gradient. On success, an inline confirmation message replaces the form contents briefly ("Thanks! Your report is in the queue and will appear here once reviewed."), then the form clears.
- **Right column (flex: 1):** the public reports list. Header with title ("Recent Reports") and filter chips. Cards stacked vertically below, sorted newest-first.

### Tablet / mobile (viewport < 1024px)

Stacked. Form on top, list below. Filter chips remain pinned above the list. The form is no longer sticky.

### Filter chips

`All · Acknowledged · Fixing · Fixed` rendered as pill buttons. Clicking one filters the visible list client-side. Selected chip uses the existing accent color (`#E74C3C`).

A `More ▾` chip at the end of the row reveals the remaining filters (`Won't Fix`, `Duplicate`, `Not a Bug`) in a small dropdown — keeps the chip row from wrapping on mobile.

### Report card

Visual structure (left-to-right when wide enough, stacked when narrow):

```
┌─────────────────────────────────────────┐
│ [ FIXING ]  Bug · Calendar              │
│                                         │
│ May Community Day showed wrong time     │
│ on the live banner.                     │
│ [screenshot thumbnail, 80×80, clickable]│
│                                         │
│ — Christian · 2 days ago                │
│ ✎ Admin note: Fixing in v2.89           │
└─────────────────────────────────────────┘
```

Status pill colors:
- `pending` — yellow (`#F1C40F`) — only ever visible to the admin in the pending queue
- `acknowledged` — gray (`#7F8C8D`)
- `fixing` — orange (`#F39C12`)
- `fixed` — green (`#2ECC71`)
- `wont_fix` — red (`#E74C3C`)
- `duplicate` — purple (`#9B59B6`)
- `not_a_bug` — blue (`#3498DB`)

Screenshot thumbnails open a fullscreen lightbox on click (simple overlay with the full-size image and a close button — no new library).

Empty state ("No reports yet — be the first to flag an issue!") shown when the filtered list is empty.

## Admin Controls

Only visible when `isAdmin()` is true. Three additions:

1. **Pending queue section** rendered above the public list. Shows pending reports with the same card layout, plus two buttons per card:
   - **Approve** → status flips to `acknowledged`.
   - **Delete** → row deleted, screenshot object cleaned up.
2. **Inline status dropdown** replaces the static status pill on every public card. Changing it issues a PATCH to Supabase. Realtime push then updates every other connected browser.
3. **Admin note text field** under the status pill — `onblur` saves to the row.
4. **Delete button** (small `✕`) in the top-right of every card (including approved ones).
5. **Logout button** at the top of the Report tab when admin is signed in.

## Realtime

Reuse the WebSocket pattern from `subscribeToNests()` (currently at [app.js:1614](app.js#L1614)).

Add `subscribeToBugReports()` that joins `realtime:public:bug_reports` and, on any `postgres_changes` event, re-fetches the list and triggers a re-render if the user is currently on the Report tab. (If they're not, the next time they switch to Report the list is loaded fresh by `setTab` anyway.)

Connection lifecycle and heartbeat behavior mirror the nests subscription exactly — including the 3-second auto-reconnect on close.

## Submission Flow

Replace the current `submitReport()` function. New flow:

1. **Validation** — description must be ≥ 10 chars (matches the DB constraint). If a screenshot is attached, file size must be ≤ 10 MB and MIME must be `image/*`.
2. **Rate-limit check** — read submissions from this `reporter_id` in the last hour from the in-memory cache. If `count >= 3`, show a friendly inline error ("You've submitted a lot recently. Please try again in a bit.") and stop.
3. **Upload screenshot** (if attached) — POST to `${SUPABASE_URL}/storage/v1/object/bug-screenshots/{reporter_id}/{uuid}.{ext}`. Resolve the public URL.
4. **Insert row** — POST to `${SUPABASE_URL}/rest/v1/bug_reports` with `status: 'pending'` and all fields. Use the same `apikey` / `Authorization` / `x-reporter-id` header trio used for nests.
5. **Success state** — replace the form body with an inline thank-you panel for ~3 seconds, then clear fields and restore the form.
6. **Failure state** — keep the form filled, show a red inline error below the submit button with the actual error message.

The existing email fallback stays accessible: under the submit button add a small line: "Prefer email? Send it to reportissue2trainerwire@gmail.com" linking to the same `mailto:`. This protects against Supabase outages and gives anti-JS users a path.

## Code Organization

All new code lives in [app.js](app.js), matching the existing nests pattern. No new files.

New functions (roughly in this order in the file, grouped next to `subscribeToNests`):

- `loadBugReportsFromSupabase()` — fetches based on admin status (admin gets all rows including pending; anon gets `status != 'pending'`).
- `subscribeToBugReports()` — WebSocket subscription.
- `submitBugReport()` — replaces `submitReport()`.
- `uploadBugScreenshot(file)` — handles Storage upload.
- `updateBugReportStatus(id, newStatus)` — admin PATCH.
- `updateBugReportAdminNote(id, note)` — admin PATCH.
- `approveBugReport(id)` — convenience: sets status to `acknowledged`.
- `deleteBugReport(id)` — admin DELETE.
- `adminLogin(email)` — magic-link request.
- `adminLogout()` — clears local session.
- `isAdmin()` — boolean session check.
- `renderBugReportCard(report, isAdminView)` — card markup.
- `renderBugReportsList()` — list with filter chips.
- `renderPendingQueue()` — admin-only section.
- `renderAdminLoginUI()` — modal markup.

The existing email-based `submitReport()` function and its `mailto:` link become unused and should be deleted. `previewReportPhoto()` and `removeReportPhoto()` stay (still needed for the new flow).

The Report tab's `reportTabHTML` block ([app.js:5418](app.js#L5418)) is restructured into the two-column desktop / stacked mobile layout described above.

## Supabase Setup (Manual Steps)

The implementation plan must include exact SQL and dashboard instructions for these — they cannot be done from the codebase.

1. **SQL migration** — create `bug_reports` table, `admins` table, indexes, trigger, RLS policies. SQL file lives at `docs/superpowers/specs/2026-05-26-bug-reports.sql` (generated during writing-plans).
2. **Storage bucket** — create `bug-screenshots`, mark public, set 10 MB file-size limit.
3. **Auth provider** — enable Email provider in the Supabase dashboard. Configure Site URL to the production domain. Disable user signups (we only want the admin to log in).
4. **Admin email** — `INSERT INTO admins (email) VALUES ('ADMIN_EMAIL_HERE');` — user fills in their preferred admin email.

## Testing

- Submit a report from a fresh browser session — verify it lands as `pending` and is invisible to non-admins.
- Sign in as admin, approve the report, watch the public list (in a second browser) update without refresh.
- Walk the report through every status, including `wont_fix` and `duplicate`, with admin notes attached.
- Attach a screenshot — verify upload, thumbnail render, and lightbox.
- Trigger rate limit (4 submissions within an hour) — verify the friendly block.
- Submit a 9-character description — verify rejection.
- Confirm the email fallback link still works.
- Sign out, refresh, verify admin controls disappear.
- Test on mobile widths — confirm stack layout and that filter chips don't overflow.

## Out of Scope (v1)

- Comments / threaded replies on reports.
- Notifying reporters when their report changes status (would need email capture + opt-in).
- Auto-archiving old `fixed` reports.
- Server-side rate limiting (client-side is good enough until abuse appears).
- Bulk admin actions.
- A second admin user. The `admins` table supports it trivially but no UI is built.
