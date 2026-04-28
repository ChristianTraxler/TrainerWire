# GO Fest Global — Active Bonuses Cleanup

**Date:** 2026-04-28
**Scope:** One-off visual cleanup of the Active Bonuses section on the GO Fest 2026: Global event detail page. Designed to be reusable for future events.

## Problem

The GO Fest 2026: Global event ([app.js:770](../../../app.js#L770)) has 13 dense bullets in its `bonuses` array, mixing three distinct concepts:

1. A 9-hour habitat schedule (3 time slots, each with 2 biomes spanning 6 of the 18 types)
2. Event-hours bonuses (Lures, Shiny rate, Party Play, Field Research)
3. Full-day bonuses (Raid Passes, Trades, Stardust, Gifts)

Plus a headline "FREE for all Trainers" line that gets lost as bullet #1.

All 13 items render identically through `renderDetailSection()` ([app.js:2027](../../../app.js#L2027)) — a flat dot-bullet list. The habitat schedule is genuinely a visual timeline but currently reads as a paragraph.

## Goal

Restructure the Active Bonuses section for GO Fest Global so it reads as a real schedule. Build the data shape and render path so any future event with structured bonuses can drop in the same field.

## Design

### Data shape (additive, optional)

Add a new optional `bonusGroups` field to event details:

```js
bonusGroups: {
  hero: "FREE for all Trainers logged in during the event weekend",
  habitatSchedule: [
    { time: "10 AM – 1 PM", biomes: [
      { name: "Stormfire Peaks",    types: ["Ice","Electric","Fire"] },
      { name: "Earthforged Domain", types: ["Ground","Steel","Normal"] }
    ]},
    { time: "1 PM – 4 PM", biomes: [
      { name: "Astral Tides",     types: ["Psychic","Ghost","Water"] },
      { name: "Verdant Anomaly",  types: ["Poison","Bug","Grass"] }
    ]},
    { time: "4 PM – 7 PM", biomes: [
      { name: "Dragonflight Summit", types: ["Flying","Rock","Dragon"] },
      { name: "Twilight Battlefield", types: ["Dark","Fairy","Fighting"] }
    ]}
  ],
  eventHours: {
    label: "Event Hours (10 AM – 7 PM)",
    items: [
      "Lure Modules last 1 hour",
      "Increased chance of encountering Shiny Pokémon",
      "Party Play active for the full 9 hours each day",
      "Hourly type-themed Field Research refreshes with the featured type"
    ]
  },
  fullDay: {
    label: "Full Day (12 AM – 11:59 PM)",
    items: [
      "Up to 9 free Raid Passes daily",
      "Up to 6 Special Trades daily",
      "1/2 Stardust cost for trades",
      "Open up to 50 Gifts daily"
    ]
  }
}
```

All four sub-fields (`hero`, `habitatSchedule`, `eventHours`, `fullDay`) are optional. A future event can use any subset.

The existing `bonuses` array stays in place as-is — never delete database entries (per project memory). When `bonusGroups` is present, the renderer skips the flat `bonuses` render to avoid duplication.

### Render path

In [app.js:2520](../../../app.js#L2520), change:

```js
${event.details.bonuses ? renderDetailSection("Active Bonuses", "✨", event.details.bonuses, "#27AE60", th) : ""}
```

to route based on `bonusGroups`:

```js
${event.details.bonusGroups
  ? renderBonusGroups(event.details.bonusGroups, th)
  : event.details.bonuses
    ? renderDetailSection("Active Bonuses", "✨", event.details.bonuses, "#27AE60", th)
    : ""}
```

Add a new `renderBonusGroups(groups, th)` function. It returns one Active Bonuses section containing:

1. **Section header** — `✨ Active Bonuses` (matches existing `<h4>` style at app.js:2029)
2. **Hero banner** (if `groups.hero`) — Full-width tinted card using `th.accentBgSubtle("#27AE60")` and a `#27AE60` border. Larger text (~14.5px), bold, with a 🎉 emoji.
3. **Habitat Schedule sub-card** (if `groups.habitatSchedule`) — Border-wrapped card matching existing tier-card styling at app.js:2082. Mini-header `🌍 Habitat Schedule`. Body contains the time-slot cards.
   - **Desktop** (`breakpoint !== "mobile"`): 3 time slots in a CSS grid, 3 columns.
   - **Mobile**: stacked vertically.
   - **Each time slot**:
     - Time-range pill at top: rounded badge, `#6C5CE7` background (matches event color), white text.
     - Two biome rows below, each:
       - Biome name (bold, ~12.5px)
       - 3 type chips inline, reusing the existing `TYPE_COLORS` map ([app.js:1863](../../../app.js#L1863)) and chip pattern from [app.js:1952](../../../app.js#L1952): white text on type-colored background, 11px font, `padding:2px 8px;border-radius:10px`.
4. **Event Hours sub-card** (if `groups.eventHours`) — Same border-wrapped card style. Mini-header `🕐 ${groups.eventHours.label}`. Body: the existing `renderDetailSection`-style flat bullet list (small dot + text), reused inline.
5. **Full Day sub-card** (if `groups.fullDay`) — Same as Event Hours, with header `📅 ${groups.fullDay.label}`.

### Visual & theme

- All backgrounds go through `th.accentBgSubtle()` and borders through `th.border` / `th.countdownBorder()` so dark mode renders correctly.
- Spacing matches existing detail sections: 12px gap between sub-cards, 8–10px internal padding.
- Type chips reuse existing `TYPE_COLORS` — no new color constants needed.

### Out of scope

- Other events' bonuses (Tokyo, Chicago, Copenhagen GO Fest, etc.) — they keep the existing flat list.
- Changes to `renderDetailSection`.
- Other parts of the GO Fest Global detail page (Featured Encounters, Tips, etc.).
- Filter/search behavior (the flat `bonuses` array is preserved, so any logic that reads it keeps working).

## Files affected

- [app.js](../../../app.js) — single file. Three edits:
  1. Add `bonusGroups` field to GO Fest 2026: Global event (line 770).
  2. Update bonus render call site (line 2520).
  3. Add `renderBonusGroups()` function (placed near `renderDetailSection` around line 2027).

## Versioning

Per project memory, this is a UI change to an existing feature → minor bump. Currently at v2.68 → v2.69. Ask the user to confirm before bumping. Sync `CACHE_VERSION` in `sw.js` to match.

## Verification

- Visit the GO Fest 2026: Global event detail page in the dev server (browser).
- Confirm Active Bonuses section renders: hero banner, habitat schedule with type chips, two bullet sub-cards.
- Toggle light/dark theme — colors stay readable.
- Resize to mobile width — habitat schedule stacks to single column.
- Visit any other event with `bonuses` (e.g. Bug Out 2026) — confirm it still renders the original flat list, unchanged.
