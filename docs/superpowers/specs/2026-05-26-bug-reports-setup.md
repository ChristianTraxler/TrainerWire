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
-- 1) Anyone (anon or admin) should see your admin row only when signed in as admin.
--    Run this signed in via the SQL Editor (service role bypasses RLS, so you'll
--    always see it here — the real anon test happens later from the browser).
select * from public.admins;

-- 2) Insert a fake pending report.
insert into public.bug_reports (report_type, section, description, reporter_id)
  values ('bug', 'general', 'test report long enough to pass the check', 'manual-test');

-- 3) Count pending vs visible-to-anon. From the browser as anon you should
--    NOT see the pending row; the count below confirms how RLS partitions them.
select status, count(*) from public.bug_reports group by status;
```

Clean up the test row when done:

```sql
delete from public.bug_reports where reporter_id = 'manual-test';
```
