const CACHE_VERSION = "2.81";
const CACHE_NAME = `trainerwire-v${CACHE_VERSION}`;

// App shell — pre-cached on install
const APP_SHELL = [
  "/",
  "/index.html",
  "/app.js",
  "/styles.css",
  "/manifest.json",
  "/data/pokemon-data.json",
  "/assets/trainerwire-icon-192.png",
  "/assets/trainerwire-icon-512.png",
  "/assets/trainerwire-apple-icon.png",
  "/assets/trainerwire-logo.PNG",
  "/assets/trainerwire-logo2.webp"
];

// Google Fonts to pre-cache
const FONT_URLS = [
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
];

// Install — cache app shell
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_SHELL).catch((err) => {
        console.warn("SW: some app shell assets failed to cache", err);
        // Cache what we can individually
        return Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
      })
    )
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch strategy
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // Skip non-GET requests (Supabase POST/PATCH/DELETE for nests)
  if (e.request.method !== "GET") return;

  // App shell files — cache first, fall back to network
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        // Return cache immediately, but also update in background (stale-while-revalidate)
        const fetchPromise = fetch(e.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        }).catch(() => cached);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Google Fonts — cache first
  if (url.origin === "https://fonts.googleapis.com" || url.origin === "https://fonts.gstatic.com") {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // PokeAPI — network first, cache fallback (data changes rarely)
  if (url.origin === "https://pokeapi.co") {
    e.respondWith(
      fetch(e.request).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Supabase GET (nests) — network first, cache fallback
  if (url.hostname.includes("supabase.co")) {
    e.respondWith(
      fetch(e.request).then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Nominatim (geocoding) — network only, not worth caching
  if (url.hostname.includes("nominatim")) return;

  // Everything else — network with cache fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
