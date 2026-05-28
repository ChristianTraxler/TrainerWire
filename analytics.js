// TrainerWire self-hosted analytics — fire-and-forget pageview tracking to Supabase.
// Companion docs: docs/superpowers/specs/2026-05-28-admin-analytics-design.md
(function () {
  const SUPABASE_URL = "https://elbwqcbvmnjafbfkbuew.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsYndxY2J2bW5qYWZiZmtidWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5ODM2MDYsImV4cCI6MjA5MDU1OTYwNn0.G0PtC2msAkGY6bBJMHKVXDP9PSDDUMid01np9d8N2wQ";

  const VISITOR_KEY = "trainerwire_visitor_id";
  const ADMIN_SESSION_KEY = "trainerwire_admin_session";
  const EXCLUDE_KEY = "trainerwire_exclude_analytics";

  function uuid() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function getVisitorId() {
    try {
      let id = localStorage.getItem(VISITOR_KEY);
      if (!id) {
        id = uuid();
        localStorage.setItem(VISITOR_KEY, id);
      }
      return id;
    } catch (_) {
      return uuid();
    }
  }

  function shouldSkip() {
    if (typeof navigator !== "undefined" && navigator.webdriver) return true;
    const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
    if (/bot|crawler|spider|preview|lighthouse|headless/i.test(ua)) return true;
    try {
      if (localStorage.getItem(ADMIN_SESSION_KEY)) return true;
      if (localStorage.getItem(EXCLUDE_KEY) === "1") return true;
    } catch (_) {}
    return false;
  }

  function cleanReferrer() {
    try {
      const r = document.referrer;
      if (!r) return "direct";
      const url = new URL(r);
      if (url.hostname === location.hostname) return "direct";
      return url.hostname;
    } catch (_) {
      return "direct";
    }
  }

  // Coalesce rapid successive trackPageview calls for the same page (e.g. re-renders).
  let _lastPage = null;
  let _lastSentAt = 0;

  function trackPageview(page) {
    if (shouldSkip()) return;
    if (!page) return;

    const now = Date.now();
    if (page === _lastPage && now - _lastSentAt < 1500) return;
    _lastPage = page;
    _lastSentAt = now;

    const body = JSON.stringify({
      visitor_id: getVisitorId(),
      page: String(page),
      referrer: cleanReferrer(),
    });

    const url = `${SUPABASE_URL}/rest/v1/pageviews`;

    // Prefer sendBeacon for resilience on unload; falls back to fetch keepalive.
    try {
      if (navigator.sendBeacon) {
        const blob = new Blob([body], { type: "application/json" });
        // sendBeacon can't set custom headers, so we use a URL with apikey query param —
        // but Supabase requires headers. Use fetch keepalive instead in that case.
      }
    } catch (_) {}

    try {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body,
        keepalive: true,
      }).catch(() => {});
    } catch (_) {
      // Silent failure — analytics must never break the site.
    }
  }

  window.trackPageview = trackPageview;
})();
