# GO Fest Global — Active Bonuses Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the Active Bonuses section on the GO Fest 2026: Global event detail page into a hero banner + visual habitat-schedule timeline + grouped sub-cards, using a reusable `bonusGroups` data field.

**Architecture:** Single-file vanilla JS site. Add a new `renderBonusGroups()` function next to the existing `renderDetailSection()` ([app.js:2027](../../../app.js#L2027)). Update the bonus render call site ([app.js:2525](../../../app.js#L2525)) to route to the new function when `event.details.bonusGroups` is present, falling back to the existing flat-list renderer. Add the `bonusGroups` field only to the GO Fest 2026: Global event ([app.js:770](../../../app.js#L770)) — every other event keeps its current rendering. Reuse the existing `TYPE_COLORS` map ([app.js:1863](../../../app.js#L1863)) and theme helpers (`th.accentBgSubtle`, `th.border`, etc.) so dark mode works automatically.

**Tech Stack:** Vanilla JS, HTML, CSS. No frameworks, no build step. Verification is visual (open `index.html` in a browser).

**Spec:** [docs/superpowers/specs/2026-04-28-gofest-global-active-bonuses-design.md](../specs/2026-04-28-gofest-global-active-bonuses-design.md)

**Note on TDD:** This codebase has no test framework. Verification is done by opening `index.html` and visually inspecting the page in both light and dark themes, on desktop and mobile viewports. Each task that affects the UI ends with a "Visual verify" step instead of an automated test.

**Note on file size:** `app.js` is ~5000 lines and already follows a single-file convention (per `README.md`: "vanilla HTML, CSS, and JavaScript — no frameworks, no build tools"). Don't restructure — append the new function alongside `renderDetailSection`.

---

## Task 1: Add `renderBonusGroups()` function (no rendering change yet)

This task adds the new render function but doesn't wire it in. The function exists in code but is never called until Task 2. This makes Task 1 risk-free — nothing in the UI changes.

**Files:**
- Modify: [app.js](../../../app.js) — add new function immediately after `renderDetailSection` (which ends at line 2093)

- [ ] **Step 1: Read the surrounding context**

Read [app.js:2025-2095](../../../app.js#L2025-L2095) to confirm where `renderDetailSection` ends. The new function goes immediately after it.

- [ ] **Step 2: Add the `renderBonusGroups()` function**

Insert this code immediately after `renderDetailSection` ends (after the closing `}` of `renderDetailSection`, before the `// --- CALENDAR ---` comment at line 2095):

```js
// Renders a structured Active Bonuses section with optional hero banner,
// habitat-schedule timeline, and labeled bullet sub-cards. Used when an
// event provides `details.bonusGroups` instead of a flat `details.bonuses` array.
function renderBonusGroups(groups, th) {
  const isMobile = breakpoint === "mobile";
  const accent = "#27AE60";
  let html = `<div style="display:flex;flex-direction:column;gap:12px">
    <h4 style="margin:0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>✨</span> Active Bonuses</h4>`;

  // Hero banner
  if (groups.hero) {
    html += `<div style="padding:14px 16px;border-radius:12px;background:${th.accentBgSubtle(accent)};border:1.5px solid ${th.countdownBorder(accent)};display:flex;align-items:center;gap:10px">
      <span style="font-size:20px">🎉</span>
      <span style="font-size:14.5px;font-weight:700;color:${accent};line-height:1.4">${esc(groups.hero)}</span>
    </div>`;
  }

  // Habitat Schedule
  if (groups.habitatSchedule && groups.habitatSchedule.length > 0) {
    html += `<div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:10px 14px;background:${th.accentBgSubtle("#6C5CE7")};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
        <span style="font-size:16px">🌍</span>
        <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">Habitat Schedule</span>
      </div>
      <div style="padding:10px;display:${isMobile ? "flex" : "grid"};${isMobile ? "flex-direction:column;" : "grid-template-columns:repeat(3,1fr);"}gap:10px">
        ${groups.habitatSchedule.map(slot => `
          <div style="border:1px solid ${th.border};border-radius:10px;padding:10px;background:${th.surface};display:flex;flex-direction:column;gap:8px">
            <div style="align-self:flex-start;font-size:11px;font-weight:700;color:#fff;background:#6C5CE7;padding:3px 10px;border-radius:12px;letter-spacing:0.3px">${esc(slot.time)}</div>
            ${slot.biomes.map(b => `
              <div style="display:flex;flex-direction:column;gap:5px">
                <div style="font-size:12.5px;font-weight:700;color:${th.text}">${esc(b.name)}</div>
                <div style="display:flex;flex-wrap:wrap;gap:4px">
                  ${b.types.map(t => `<span style="font-size:11px;font-weight:700;color:#fff;background:${TYPE_COLORS[t] || "#888"};padding:2px 8px;border-radius:10px">${esc(t)}</span>`).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>
    </div>`;
  }

  // Helper to render a labeled bullet sub-card (Event Hours, Full Day)
  const renderBulletGroup = (icon, label, items) => `
    <div style="border:1.5px solid ${th.border};border-radius:14px;overflow:hidden">
      <div style="padding:10px 14px;background:${th.accentBgSubtle(accent)};border-bottom:1.5px solid ${th.border};display:flex;align-items:center;gap:8px">
        <span style="font-size:14px">${icon}</span>
        <span style="font-size:12px;font-weight:700;color:${th.text};letter-spacing:0.5px;text-transform:uppercase">${esc(label)}</span>
      </div>
      <div style="padding:10px;display:flex;flex-direction:column;gap:5px">
        ${items.map(item => `<div style="display:flex;align-items:center;gap:10px;padding:7px 12px;border-radius:9px;background:${th.accentBgSubtle(accent)};font-size:13.5px;color:${th.textSecondary};line-height:1.45"><div style="width:5px;height:5px;border-radius:50%;background:${accent};flex-shrink:0"></div>${esc(item)}</div>`).join("")}
      </div>
    </div>`;

  if (groups.eventHours && groups.eventHours.items && groups.eventHours.items.length > 0) {
    html += renderBulletGroup("🕐", groups.eventHours.label || "Event Hours", groups.eventHours.items);
  }
  if (groups.fullDay && groups.fullDay.items && groups.fullDay.items.length > 0) {
    html += renderBulletGroup("📅", groups.fullDay.label || "Full Day", groups.fullDay.items);
  }

  html += `</div>`;
  return html;
}
```

- [ ] **Step 3: Visual verify — page still renders unchanged**

Open `index.html` in a browser. Click into any event detail page (e.g., the GO Fest 2026: Global event card). Confirm: page loads without JS errors (open DevTools console — should be clean), Active Bonuses section still shows the original flat 13-bullet list. **Nothing should look different yet.**

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "$(cat <<'EOF'
Add renderBonusGroups function for structured event bonuses

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Wire up the render call site to use `renderBonusGroups` when present

Now route the bonus rendering through `renderBonusGroups` when `event.details.bonusGroups` exists. Still no behavior change because no event has `bonusGroups` yet.

**Files:**
- Modify: [app.js:2525](../../../app.js#L2525) (the call site that renders `Active Bonuses`)

- [ ] **Step 1: Update the render call site**

Find the existing line in [app.js](../../../app.js) (around line 2525):

```js
        ${event.details.bonuses ? renderDetailSection("Active Bonuses", "✨", event.details.bonuses, "#27AE60", th) : ""}
```

Replace with:

```js
        ${event.details.bonusGroups
          ? renderBonusGroups(event.details.bonusGroups, th)
          : event.details.bonuses
            ? renderDetailSection("Active Bonuses", "✨", event.details.bonuses, "#27AE60", th)
            : ""}
```

- [ ] **Step 2: Visual verify — every existing event still renders the flat list**

Open `index.html`. Spot-check three events that have a `bonuses` field (none have `bonusGroups` yet):
- GO Fest 2026: Global — should still show the flat 13-bullet list
- Bug Out 2026 — should still show its flat bullet list
- Max Battle Day: Gigantamax Pikachu — should still show its flat bullet list

DevTools console should be clean.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "$(cat <<'EOF'
Route Active Bonuses render through bonusGroups when present

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Add `bonusGroups` field to the GO Fest 2026: Global event

Now the new layout actually appears, but only for this one event.

**Files:**
- Modify: [app.js:770](../../../app.js#L770) (the GO Fest 2026: Global event entry — `id: 43`)

- [ ] **Step 1: Locate the event**

In [app.js](../../../app.js), find the line starting with `{ id: 43, title: "GO Fest 2026: Global"`. Inside its `details: { ... }` object, after the existing `bonuses: [ ... ]` array (and before `tips: [...]`), the new `bonusGroups` field will be added.

The existing `bonuses` array stays unchanged (per project memory: never delete database entries).

- [ ] **Step 2: Add the `bonusGroups` field**

Inside the GO Fest 2026: Global event's `details: { ... }` object, add this after the closing `]` of the `bonuses` array and before `tips:`:

```js
bonusGroups: { hero: "FREE for all Trainers logged in during the event weekend", habitatSchedule: [{ time: "10 AM – 1 PM", biomes: [{ name: "Stormfire Peaks", types: ["Ice","Electric","Fire"] }, { name: "Earthforged Domain", types: ["Ground","Steel","Normal"] }] }, { time: "1 PM – 4 PM", biomes: [{ name: "Astral Tides", types: ["Psychic","Ghost","Water"] }, { name: "Verdant Anomaly", types: ["Poison","Bug","Grass"] }] }, { time: "4 PM – 7 PM", biomes: [{ name: "Dragonflight Summit", types: ["Flying","Rock","Dragon"] }, { name: "Twilight Battlefield", types: ["Dark","Fairy","Fighting"] }] }], eventHours: { label: "Event Hours (10 AM – 7 PM)", items: ["Lure Modules last 1 hour", "Increased chance of encountering Shiny Pokémon", "Party Play active for the full 9 hours each day", "Hourly type-themed Field Research refreshes with the featured type"] }, fullDay: { label: "Full Day (12 AM – 11:59 PM)", items: ["Up to 9 free Raid Passes daily", "Up to 6 Special Trades daily", "1/2 Stardust cost for trades", "Open up to 50 Gifts daily"] } },
```

(Keep it on a single line to match the existing style of this file — every event entry in `EVENTS` is one long line.)

The exact edit context — find the `bonuses` array ending pattern unique to this event, including the comma, and insert `bonusGroups: {...},` immediately after. Look for the substring `"Open up to 50 Gifts daily"], tips:` and change it to `"Open up to 50 Gifts daily"], bonusGroups: { ... }, tips:` with the full object inlined.

- [ ] **Step 3: Visual verify — GO Fest Global now shows the new layout**

Open `index.html`. Navigate to the GO Fest 2026: Global event detail page. Confirm:

1. Section header reads `✨ Active Bonuses` (unchanged styling).
2. **Hero banner**: Green-tinted card at top with 🎉 and "FREE for all Trainers logged in during the event weekend" in bold green.
3. **Habitat Schedule sub-card**: Border-wrapped card with 🌍 header. On desktop: 3 columns side-by-side. On mobile: stacked. Each column has a purple time-range pill at top, two biome blocks below, each with 3 colored type chips.
4. Type chips show standard Pokémon type colors (Fire orange, Water blue, Grass green, etc.).
5. **Event Hours sub-card**: 🕐 header, 4 bullets — Lures, Shiny, Party Play, Field Research.
6. **Full Day sub-card**: 📅 header, 4 bullets — Raid Passes, Special Trades, Stardust, Gifts.

- [ ] **Step 4: Toggle dark mode and verify**

Toggle the site's dark theme. Confirm: hero banner, sub-card borders, time-range pill, and type chips all remain readable. No white-on-white or black-on-black.

- [ ] **Step 5: Resize to mobile width and verify**

In DevTools, switch to a mobile viewport (e.g., iPhone SE 375px). Confirm: the 3 habitat-schedule slots stack vertically. Type chips wrap if needed. No horizontal scrolling on the page.

- [ ] **Step 6: Spot-check a non-GO-Fest-Global event**

Visit any other event with a `bonuses` array (e.g., Bug Out 2026, or Spring Marathon 2026). Confirm: still renders the original flat dot-bullet list, unchanged. The `bonusGroups` change is scoped to GO Fest Global only.

- [ ] **Step 7: Commit**

```bash
git add app.js
git commit -m "$(cat <<'EOF'
Add structured bonusGroups to GO Fest 2026: Global event

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Confirm version bump with the user, then bump `APP_VERSION` and `CACHE_VERSION`

Per project memory: never auto-update the version — always ask the user to confirm bump type (minor +0.01 or major +1.0). And `CACHE_VERSION` in `sw.js` must always match `APP_VERSION` in `app.js`.

**Files:**
- Modify: [app.js:4](../../../app.js#L4) — `APP_VERSION` constant
- Modify: [sw.js:1](../../../sw.js#L1) — `CACHE_VERSION` constant

- [ ] **Step 1: Ask the user to confirm**

Send this message to the user verbatim:

> "Implementation is done. This is a UI change to an existing feature → minor bump (v2.68 → v2.69). Want to bump now, or hold off? Reply 'bump' to apply, or anything else to skip."

Wait for the user's reply before proceeding. If they decline, mark this task complete (no version bump) and stop.

- [ ] **Step 2: If approved, update `APP_VERSION` in [app.js:4](../../../app.js#L4)**

Change:

```js
const APP_VERSION = "2.68";
```

to:

```js
const APP_VERSION = "2.69";
```

- [ ] **Step 3: Update `CACHE_VERSION` in [sw.js:1](../../../sw.js#L1)**

Change:

```js
const CACHE_VERSION = "2.68";
```

to:

```js
const CACHE_VERSION = "2.69";
```

- [ ] **Step 4: Visual verify — version footer updated**

Open `index.html`. Scroll to the page footer. Confirm: version reads `v2.69` (it's rendered at [app.js:4806](../../../app.js#L4806) and [app.js:4964](../../../app.js#L4964)).

- [ ] **Step 5: Commit**

```bash
git add app.js sw.js
git commit -m "$(cat <<'EOF'
Bump to v2.69 for GO Fest Global Active Bonuses redesign

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Verification checklist (end-to-end)

After all tasks land, do one final pass:

- [ ] GO Fest 2026: Global event detail page shows: hero banner → habitat schedule with type chips → Event Hours sub-card → Full Day sub-card.
- [ ] Light mode and dark mode both readable.
- [ ] Desktop (3-column habitat) and mobile (stacked habitat) both work.
- [ ] At least 2 other events with `bonuses` arrays still render the original flat list.
- [ ] DevTools console is clean (no JS errors).
- [ ] Footer version reads `v2.69` (if version bump was approved).
- [ ] `git log --oneline` shows 3 or 4 small commits, each bisectable.
