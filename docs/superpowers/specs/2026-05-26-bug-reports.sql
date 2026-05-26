-- Bug reports with public + admin RLS, screenshots in bug-screenshots bucket.
-- Run this in Supabase SQL Editor.

-- 1. admins allowlist
-- Membership is managed via the Supabase SQL Editor (service role bypasses RLS).
-- See docs/superpowers/specs/2026-05-26-bug-reports-setup.md step 4.
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
-- security definer: bypasses RLS on public.admins when checking membership.
-- Avoids the circular policy dependency where admins_select_admin itself calls is_admin().
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admins
    where email = (auth.jwt() ->> 'email')
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

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
