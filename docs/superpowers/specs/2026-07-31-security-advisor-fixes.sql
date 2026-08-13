-- ============================================================================
-- Supabase Security Advisor fixes
-- Date: 2026-07-31
-- ============================================================================
-- Applied directly in the Supabase SQL Editor. This file is the checked-in
-- record of what was changed and why (the objects themselves live only in the
-- live Supabase project, not in this repo).
--
-- Starting state: 1 CRITICAL error + 11 warnings.
-- Ending state:   0 errors + 6 warnings (all intentional, documented below).
-- ============================================================================


-- ----------------------------------------------------------------------------
-- FIX 1 (CRITICAL) — Security Definer View: public.analytics_summary
-- ----------------------------------------------------------------------------
-- A Postgres view runs with the view OWNER's privileges by default, bypassing
-- the querying user's RLS. security_invoker makes the view respect the caller's
-- RLS/grants instead, so anon can no longer read aggregated analytics while the
-- authenticated admin still can (authenticated has a SELECT policy on pageviews).
ALTER VIEW public.analytics_summary SET (security_invoker = on);


-- ----------------------------------------------------------------------------
-- FIX 2 — Function Search Path Mutable: bug_reports_touch_status_updated_at()
-- ----------------------------------------------------------------------------
-- Trigger fn on bug_reports (bumps status_updated_at). It had no fixed
-- search_path, leaving it open to search_path hijacking. It only calls now()
-- (pg_catalog, always resolvable), so an empty search_path is safe.
ALTER FUNCTION public.bug_reports_touch_status_updated_at() SET search_path = '';


-- ----------------------------------------------------------------------------
-- FIX 3 — Public/Signed-in can execute SECURITY DEFINER functions
-- ----------------------------------------------------------------------------
-- Both are internal automation, not API endpoints:
--   * rls_auto_enable()                 -> EVENT TRIGGER fn (auto-enables RLS on
--                                          new public tables); fires on DDL.
--   * notify_admin_of_new_bug_report()  -> AFTER INSERT trigger on bug_reports
--                                          (sends the admin email; reads a Vault
--                                          secret via search_path=public,vault).
-- Trigger / event-trigger functions are run by the trigger system and do NOT
-- require the calling role to hold EXECUTE, so revoking the API-role grants is
-- safe and closes the "callable via API" exposure. Both already have a fixed
-- search_path, so neither needs a search_path change.
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable()                FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.notify_admin_of_new_bug_report() FROM PUBLIC, anon, authenticated;


-- ============================================================================
-- INTENTIONALLY ACCEPTED WARNINGS (6 remaining — do NOT "fix" these)
-- ============================================================================
-- 1. RLS Policy Always True — public.nests (INSERT "Anyone can insert nests",
--    WITH CHECK true). By design: anonymous community nest reporting. DELETE is
--    scoped to reporter_id and there is NO UPDATE policy, so no vandalism risk.
--
-- 2. RLS Policy Always True — public.pageviews (INSERT "anon can insert
--    pageviews", WITH CHECK true). By design: anonymous self-hosted analytics.
--
-- 3. Public Bucket Allows Listing — storage.bug-screenshots. Screenshots only
--    capture page/design bugs; nothing sensitive. Public read is intended.
--
-- 4 & 5. Public / Signed-in can execute — public.is_admin(). SECURITY DEFINER on
--    purpose (reads public.admins past RLS, avoids a circular policy dependency)
--    and deliberately GRANTed to anon/authenticated because the RLS policies
--    call it. It only ever reports on the caller themselves. Revoking EXECUTE
--    would BREAK admin access — leave it as is.
--
-- 6. Leaked Password Protection Disabled — Auth. HaveIBeenPwned check is a
--    Pro-plan feature; not available on the current (free) plan. Low relevance
--    (only the single admin account uses a password).
-- ============================================================================
