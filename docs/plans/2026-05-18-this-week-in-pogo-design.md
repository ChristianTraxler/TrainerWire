# This Week In PoGO — Homepage Section Design

**Date:** 2026-05-18
**Target version:** 2.67
**Status:** Approved, ready for implementation

## Goal

A homepage section titled "This Week In PoGO" that surfaces everything happening in the current week (Monday–Sunday), auto-rotating each Monday at local midnight without manual curation.

## Placement

Inserted into the home grid in `app.js` right after the hero/live blocks (around line 5128), above the tabs/raids sections. Full-width card matching the existing `heroBg`/`heroBorder` aesthetic.

## Layout — Horizontal Day Pills

- Card header: `📆 THIS WEEK IN POGO` + week range pill (`May 18 – 24`)
- 7 day pills in a row (desktop: grid-7; mobile: horizontal scroll-snap)
- Each pill: weekday abbrev, day-of-month, up to 2 type emojis, event count
- Today's pill: filled accent background + subtle pulse
- Past days (Mon → today–1): ~60% opacity
- Tap a pill → expansion panel below shows that day's items (default-expanded = today)
- Item rows are clickable → existing `selectEvent(id)` flow

## Architecture

### Week bounds

```js
function getWeekBounds(now = new Date()) {
  const day = now.getDay();              // 0=Sun, 1=Mon
  const monOffset = (day + 6) % 7;
  const start = new Date(now);
  start.setHours(0,0,0,0);
  start.setDate(start.getDate() - monOffset);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  end.setHours(23,59,59,999);
  return { start, end };
}
```

Pure function of `Date.now()`. Auto-rollover happens because:
- The home tab re-renders on tab switches
- The countdown interval already calls `render()` every minute
- The moment local clock crosses Sun → Mon midnight, the next render gets the new week

### Event-to-day mapping

```js
function daysEventCovers(ev, weekStart, weekEnd) {
  const s = new Date(Math.max(new Date(ev.date), weekStart));
  const e = new Date(Math.min(new Date(ev.endDate || ev.date), weekEnd));
  // returns array of indices 0..6
}
```

Filter: `eventStart <= weekEnd && (eventEnd ?? eventStart) >= weekStart`.

### Pill icon

```js
function pillIconFor(ev) {
  if (ev.type === "Community Day") return "⚡";
  if (ev.type === "Max Battle")    return "🛡️";
  if (ev.type === "Raid")          return "🔥";
  if (ev.type === "GO Fest")       return "🌍";
  if (/spotlight hour/i.test(ev.time || "")) return "✨";
  if (/raid hour/i.test(ev.time || ""))      return "💥";
  return "🎉";
}
```

Pills dedupe icons (max 2 distinct shown). Count = total items for that day.

## Edge cases

- **No events** → all 7 pills show `—`, single muted line: "Quiet week — check back Monday."
- **Long-running events (Seasons, multi-week rotations)** → shown on every day they cover but flagged `ongoing` in the expansion panel.
- **Events crossing the week boundary** → clipped to visible week, subtle `→` arrow if continues past Sunday or started before Monday.
- **Timezone** → local time everywhere; existing `YYYY-MM-DD` event dates are already local-interpreted.
- **Featured event already in hero** → still shown in digest (different view).

## Rollout

1. Add helpers near other date utilities in `app.js`
2. Add `renderWeekDigest(th, isMobile)` next to other render functions
3. Inject into home grid at ~line 5128
4. Bump `APP_VERSION` 2.66 → 2.67
5. Bump `CACHE_VERSION` in `sw.js` to match
6. Update Home "Last updated on..." timestamp

## Manual test cases

- Week with full Mon–Sun schedule
- Empty week (all pills show `—`)
- GO Fest week (multi-day event spanning weekend)
- Today highlighting (verify with `Date.now()` mock if needed)
- Mobile horizontal scroll snap, today auto-scrolls into view
- Dark/light mode parity
- Pill click expansion + selectEvent flow
