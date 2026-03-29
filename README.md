# TrainerWire — Your Local Pokemon GO Event Center

TrainerWire is a single-page web app that serves as a centralized hub for upcoming and past Pokemon GO events, raids, Max Battles, and community news. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

## Features

### Events Tab
- Upcoming events displayed as interactive cards with live countdown timers
- Filter events by type: **Event**, **Raid**, **Max Battle**, **Community Day**, and **GO Fest**
- Featured event hero banner at the top highlighting the next big event
- **LIVE NOW** badges on currently active events
- Event detail view with bonuses, tips, and boss breakdowns
- Archived events section organized by year with collapsible year groups
- Community Day exclusive move deadline tracker with real-time countdown

### Calendar Tab
- Monthly calendar view showing all scheduled events
- Navigate between months to see upcoming and past events
- Events displayed on their corresponding dates with color-coded indicators

### Raids Tab
- Current raid boss roster organized by tier (1-Star through Mega Raids)
- Shadow Raid bosses listed separately
- Pokemon sprite images with type badges
- Top counters for each raid boss with recommended fast and charged moves
- Catch CP ranges (normal and weather-boosted) for raid bosses

### Max Battles Tab
- Current Dynamax and Gigantamax boss roster organized by star tier
- Pokemon sprites with Dynamax red cloud effects
- Type badges and CP information for each boss
- 6-Star Gigantamax tier support (toggled on/off based on in-game availability)

### News Tab
- Community announcements and game updates
- Filterable by tag: **Update**, **News**, **Alert**
- Expandable detail sections with organized bullet points
- Archived news organized by year

### Additional Features
- **Dark/Light mode** toggle with smooth transitions
- **Responsive design** — optimized layouts for mobile, tablet, and desktop
- **Scrolling news ticker** across the top for local community announcements
- **Shiny-eligible sparkle effects** on Pokemon that can be shiny
- **Shadow Pokemon aura effects** (purple wisp animations)
- **Dynamax cloud overlay** on Dynamax/Gigantamax Pokemon images
- Pokemon images sourced from LeekDuck CDN with local fallback copies in `pokemon-images/`

## Project Structure

```
├── index.html            # Entry point
├── app.js                # All application logic, data, and rendering
├── styles.css            # Global styles and animations
├── pokemon-images/       # Locally cached Pokemon sprite images
└── README.md
```

## Data

All event, raid, and Max Battle data is defined directly in `app.js`:

- **`EVENTS`** — Array of all events (past and upcoming) with dates, descriptions, bosses, bonuses, tips, counters, and catch CP ranges
- **`ANNOUNCEMENTS`** — News items with tags, summaries, and expandable detail sections
- **`CURRENT_RAID_BOSSES`** — Active raid boss roster by tier
- **`CURRENT_MAX_BATTLES`** — Active Dynamax/Gigantamax boss roster by star tier
- **`RAID_BOSS_DATA`** — Type info and catch CP for Pokemon appearing in raids
- **`DEX`** — Pokemon name-to-Pokedex-number mapping for image lookups

## How to Run

Open `index.html` in a browser. No server or build step required.

## Credits

- Pokemon images sourced from [LeekDuck](https://leekduck.com)
- Dynamax cloud asset from [SnackNap](https://www.snacknap.com)
- Not affiliated with Niantic, The Pokemon Company, or Nintendo
