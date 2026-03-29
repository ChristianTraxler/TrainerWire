// --- CONSTANTS ---
const COMMUNITY_NAME = "TrainerWire";
const COMMUNITY_TAGLINE = "Your Local Pokémon GO Event Center";

// --- THEME SYSTEM ---
let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  darkMode = e.matches;
  render();
});

let breakpoint = getBreakpoint();
function getBreakpoint() {
  const w = window.innerWidth;
  if (w >= 1024) return "desktop";
  if (w >= 640) return "tablet";
  return "mobile";
}
window.addEventListener("resize", () => {
  const bp = getBreakpoint();
  if (bp !== breakpoint) { breakpoint = bp; render(); }
});

function t(dark) {
  return {
    bg: dark ? "#0e0e12" : "#FAFBFC",
    surface: dark ? "#1a1a24" : "#fff",
    surfaceHover: dark ? "#22222e" : "#fff",
    border: dark ? "#2a2a3a" : "#f0f0f0",
    borderHover: dark ? "#3a3a4e" : "#e0e0e0",
    text: dark ? "#e8e8f0" : "#1a1a2e",
    textSecondary: dark ? "#a0a0b8" : "#666",
    textMuted: dark ? "#6a6a80" : "#aaa",
    textFaint: dark ? "#50506a" : "#ccc",
    headerBg: dark ? "rgba(14,14,18,0.92)" : "rgba(255,255,255,0.92)",
    heroBg: (c) => dark ? `${c}18` : `${c}14`,
    heroBorder: (c) => dark ? `${c}30` : `${c}22`,
    cardBg: (active, c) => active ? (dark ? `${c}15` : `${c}06`) : (dark ? "#1a1a24" : "#fff"),
    cardBorder: (active, c) => active ? `${c}${dark ? "40" : "35"}` : (dark ? "#2a2a3a" : "#f0f0f0"),
    accentBg: (c) => `${c}${dark ? "20" : "12"}`,
    accentBgSubtle: (c) => `${c}${dark ? "15" : "08"}`,
    countdownBg: (c) => `${c}${dark ? "22" : "14"}`,
    countdownBorder: (c) => `${c}${dark ? "35" : "25"}`,
    tipBg: dark ? "#2a2518" : "#FFFBF0",
    tipBorder: dark ? "#3d3520" : "#FEF3C7",
    tipText: dark ? "#d4b86a" : "#92742E",
    detailHeaderBg: (c) => dark ? `${c}12` : `${c}18`,
    detailHeaderBorder: (c) => dark ? `${c}20` : `${c}18`,
    pillActiveBg: dark ? "#e8e8f0" : "#1a1a2e",
    pillActiveText: dark ? "#0e0e12" : "#fff",
    pillBg: dark ? "#1a1a24" : "#fff",
    pillBorder: dark ? "#2a2a3a" : "#e8e8e8",
    pillText: dark ? "#8888a0" : "#888",
    tabBorder: dark ? "#2a2a3a" : "#f0f0f0",
    tabActive: dark ? "#e8e8f0" : "#1a1a2e",
    tabInactive: dark ? "#50506a" : "#bbb",
    footerBorder: dark ? "#1a1a24" : "#f5f5f5",
    shadow: dark ? "0 1px 3px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.04)",
    shadowLg: dark ? "0 2px 12px rgba(0,0,0,0.4)" : "0 2px 12px rgba(0,0,0,0.06)",
    tagBg: (tag) => {
      const map = { Update: dark ? "#1a2a3a" : "#EBF5FB", News: dark ? "#2a1a3a" : "#F5EEF8", Meetup: dark ? "#1a2a1a" : "#EAFAF1", Alert: dark ? "#2a2218" : "#FDF2E9" };
      return map[tag] || map.Update;
    },
    tagText: (tag) => {
      const map = { Update: "#5DADE2", News: "#BB8FCE", Meetup: "#58D68D", Alert: "#F0B27A" };
      if (dark) return map[tag] || map.Update;
      const mapL = { Update: "#2980B9", News: "#8E44AD", Meetup: "#27AE60", Alert: "#E67E22" };
      return mapL[tag] || mapL.Update;
    }
  };
}

// --- EVENT DATA ---
const EVENTS = [
  { id: 1, title: "A Shockingly Good Time", type: "Event", date: "2026-03-31", endDate: "2026-04-06", time: "10:00 AM – 8:00 PM", color: "#F1C40F", icon: "\u26A1", featured: false, summary: "Electric Pokémon extravaganza with daily Spotlight Hours, boosted Shiny odds for Pikachu, Chinchou, Dedenne, Pawmi, and more.", details: { bosses: ["Pikachu \u2728", "Chinchou \u2728", "Dedenne \u2728", "Pawmi \u2728", "Other Electric-types in the wild"], bonuses: ["Daily Spotlight Hour 6–7 PM featuring different Electric-types", "Boosted Shiny rates for event spawns", "Incense lasts twice as long", "GO Pass and GO Pass Deluxe rewards available"], tips: ["Spotlight Hours run every day of this event, not just Tuesday.", "Shiny Dedenne and Pawmi are the big targets — check every one.", "Activate Incense during Spotlight Hours for doubled duration + boosted spawns.", "GO Pass Deluxe is available on the Web Store for premium rewards."] } },
  { id: 2, title: "April Fools 2026", type: "Event", date: "2026-04-01", endDate: null, time: "10:00 AM – 6:00 PM", color: "#9B59B6", icon: "\uD83C\uDCCF", featured: false, summary: "One-day April Fools surprise event. Expect trick spawns, disguised Pokémon, and limited-time shenanigans.", details: { bosses: ["Surprise spawns and disguised Pokémon (revealed day-of)"], bonuses: ["One-day-only event spawns", "Possible Ditto-themed encounters", "April Fools Field Research tasks"], tips: ["These events are always short — block out a couple hours.", "Keep an eye on social media for real-time spawn reports.", "Ditto often plays a role — catch everything that looks 'normal'.", "Don't transfer unusual catches until you've checked for Ditto."] } },
  { id: 3, title: "Fashion Raid Day", type: "Raid", date: "2026-04-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E91E63", icon: "\uD83D\uDC57", featured: true, summary: "Costumed Pokémon take over raids! Dragonite, Butterfree, Diglett, Wooper, Sneasel, Kirlia, Absol, Shinx, Croagunk, Blitzle, and Minccino in costume.", details: { bosses: ["Costume Dragonite", "Costume Butterfree", "Costume Diglett", "Costume Wooper", "Costume Sneasel", "Costume Kirlia", "Costume Absol", "Costume Shinx", "Costume Croagunk", "Costume Blitzle", "Costume Minccino"], bonuses: ["Costumed Pokémon in raids for 3 hours", "Ultra Ticket Box $4.99 (ticket + Premium Battle Pass)", "Tickets giftable to Great Friends or higher"], tips: ["Costume Dragonite and Absol are the rarest — prioritize those raids.", "These costumed forms can't evolve — collector items only.", "Ultra Ticket Box is Web Store exclusive.", "Plan a raid route with your group ahead of time."], counters: { label: "Costume Dragonite (Dragon/Flying)", pokemon: [{ name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Galarian Darmanitan", fast: "Ice Fang", charged: "Avalanche" }, { name: "Shadow Weavile", fast: "Ice Shard", charged: "Avalanche" }] }, catchCP: [{ name: "Dragonite", normal: "2079–2167", boosted: "2599–2709", weather: "Windy" }, { name: "Absol", normal: "1370–1443", boosted: "1712–1804", weather: "Foggy" }, { name: "Butterfree", normal: "1016–1083", boosted: "1270–1354", weather: "Rainy" }, { name: "Kirlia", normal: "396–437", boosted: "495–547", weather: "Windy or Cloudy" }, { name: "Sneasel", normal: "1067–1143", boosted: "1334–1429", weather: "Foggy or Snow" }, { name: "Shinx", normal: "303–340", boosted: "379–425", weather: "Rainy" }] } },
  // Historical Community Days
  ...[
    ["Sprigatito","2025-01-05","Frenzy Plant → Meowscarada","\uD83C\uDF31","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Ralts","2025-01-25","Synchronoise → Gardevoir/Gallade","\uD83D\uDC83","#9B59B6","¼ Hatch Distance"],
    ["Karrablast & Shelmet","2025-02-09","Razor Shell → Escavalier","\uD83D\uDC1B","#E67E22","3× XP, 2× Candy"],
    ["Fuecoco","2025-03-08","Blast Burn → Skeledirge","\uD83D\uDD25","#E74C3C","3× Stardust, 2× Candy"],
    ["CD Classic: Totodile","2025-03-22","Hydro Cannon → Feraligatr","\uD83D\uDC0A","#3498DB","¼ Hatch Distance"],
    ["Vanillite","2025-04-27","Avalanche → Vanilluxe","\uD83C\uDF66","#85C1E9","3× XP, 2× Candy"],
    ["Pawmi","2025-05-11","Brick Break → Pawmot","\u26A1","#F39C12","¼ Hatch Distance, 2× Candy"],
    ["CD Classic: Machop","2025-05-24","Payback → Machamp","\uD83D\uDCAA","#95A5A6","3× Stardust"],
    ["Jangmo-o","2025-06-21","Clanging Scales → Kommo-o","\uD83D\uDC09","#E74C3C","3× XP, 2× Candy"],
    ["CD Classic: Eevee","2025-07-05","Last Resort → Eevee + Eeveelution moves","\uD83E\uDD8A","#A0522D","¼ Hatch Distance"],
    ["Quaxly","2025-07-20","Hydro Cannon → Quaquaval","\uD83E\uDD86","#2980B9","3× Stardust, 2× Candy"],
    ["Rookidee","2025-08-30","Air Cutter → Corviknight","\uD83D\uDC26","#5D6D7E","¼ Hatch Distance, 2× Candy"],
    ["Flabébé","2025-09-14","Chilling Water → Florges","\uD83C\uDF38","#FF69B4","¼ Hatch Distance, 2× Candy"],
    ["Solosis","2025-10-12","Charm → Reuniclus","\uD83E\uDDEC","#27AE60","3× Stardust, 2× Candy"],
    ["Pikipek","2025-11-30","Beak Blast → Toucannon","\uD83D\uDC26","#E67E22","3× XP, 2× Candy"],
    ["December Recap 2025","2025-12-06","All 2025 CD moves available","\uD83C\uDF84","#C0392B","2× XP, 2× Stardust, 2× Candy"],
    ["Rowlet","2024-01-06","Frenzy Plant → Decidueye","\uD83C\uDF43","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Porygon","2024-01-20","Tri Attack → Porygon-Z","\uD83D\uDCA0","#E91E63","¼ Hatch Distance"],
    ["Chansey","2024-02-10","Wild Charge → Blissey","\uD83E\uDD5A","#FF69B4","3× XP, 2× Candy"],
    ["Bellsprout","2024-03-16","Magical Leaf → Victreebel","\uD83C\uDF3F","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Bagon","2024-04-07","Outrage → Salamence","\uD83D\uDC09","#3498DB","¼ Hatch Distance"],
    ["Litten","2024-04-20","Blast Burn → Incineroar","\uD83D\uDC31","#E74C3C","3× XP, 2× Candy"],
    ["Bounsweet","2024-05-19","High Jump Kick → Tsareena","\uD83C\uDF4A","#27AE60","3× Stardust, 2× Candy"],
    ["Goomy","2024-06-09","Thunder Punch → Goodra","\uD83D\uDC0C","#8E44AD","3× Stardust, 2× Candy"],
    ["CD Classic: Cyndaquil","2024-06-22","Blast Burn → Typhlosion","\uD83D\uDD25","#E74C3C","2× Stardust, 2× XP"],
    ["Tynamo","2024-07-21","Volt Switch → Eelektross","\u26A1","#3498DB","¼ Hatch Distance, 2× Candy"],
    ["Popplio","2024-08-31","Hydro Cannon → Primarina","\uD83C\uDFA4","#2980B9","3× XP, 2× Candy"],
    ["CD Classic: Beldum","2024-08-18","Meteor Mash → Metagross","\u2699\uFE0F","#95A5A6","¼ Hatch Distance"],
    ["Ponyta & G-Ponyta","2024-09-14","Wild Charge → Rapidash","\uD83D\uDC34","#E67E22","3× Stardust, 2× Candy"],
    ["Sewaddle","2024-10-05","Shadow Claw → Leavanny","\uD83C\uDF42","#27AE60","¼ Hatch Distance, 2× Candy"],
    ["Mankey","2024-11-10","Rage Fist → Annihilape","\uD83D\uDC12","#C0392B","3× XP, 2× Candy"],
    ["December Recap 2024","2024-12-21","All 2024 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    ["Larvitar","2023-01-21","Smack Down → Tyranitar","\uD83E\uDEA8","#27AE60","CD Classic"],
    ["Chespin","2023-01-07","Frenzy Plant → Chesnaught","\uD83C\uDF30","#27AE60","3× Stardust"],
    ["Noibat","2023-02-05","Boomburst → Noivern","\uD83E\uDD87","#8E44AD","3× XP"],
    ["Fennekin","2023-03-04","Blast Burn → Delphox","\uD83E\uDD8A","#E74C3C","3× Stardust"],
    ["Swinub","2023-04-29","Ancient Power → Mamoswine","\uD83D\uDC37","#6D4C41","CD Classic"],
    ["Froakie","2023-05-21","Hydro Cannon → Greninja","\uD83D\uDC38","#2980B9","3× Stardust"],
    ["Axew","2023-06-10","Breaking Swipe → Haxorus","\uD83D\uDC09","#27AE60","3× XP"],
    ["Squirtle","2023-07-09","Hydro Cannon → Blastoise","\uD83D\uDC22","#3498DB","CD Classic"],
    ["Poliwag","2023-08-13","Ice Beam → Poliwrath","\uD83C\uDF00","#3498DB","3× Stardust"],
    ["Charmander","2023-09-02","Dragon Breath → Charizard","\uD83D\uDD25","#E74C3C","CD Classic"],
    ["Grubbin","2023-09-23","Volt Switch → Vikavolt","\u26A1","#F39C12","3× XP"],
    ["Timburr","2023-10-15","Brutal Swing → Conkeldurr","\uD83D\uDCAA","#6D4C41","3× Stardust"],
    ["Mareep","2023-11-25","Dragon Pulse → Ampharos","\uD83D\uDC11","#F1C40F","CD Classic"],
    ["Wooper & Paldean Wooper","2023-11-05","Aqua Tail → Quagsire","\uD83D\uDC1F","#3498DB","3× XP"],
    ["December Recap 2023","2023-12-16","All 2023 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    ["Bulbasaur","2022-01-22","Frenzy Plant → Venusaur","\uD83C\uDF31","#27AE60","CD Classic"],
    ["Hoppip","2022-01-16","Acrobatics → Jumpluff","\uD83C\uDF88","#FF69B4","3× Stardust"],
    ["Hoppip (Makeup)","2022-02-05","Acrobatics → Jumpluff","\uD83C\uDF88","#FF69B4","Makeup Day"],
    ["Sandshrew & A-Sandshrew","2022-03-13","Shadow Claw → Sandslash","\uD83E\uDD94","#F39C12","2× Stardust, 3× XP"],
    ["Mudkip","2022-04-10","Hydro Cannon → Swampert","\uD83D\uDCA7","#3498DB","CD Classic"],
    ["Stufful","2022-04-23","Drain Punch → Bewear","\uD83E\uDDF8","#FF69B4","3× XP"],
    ["Alolan Geodude","2022-05-21","Rollout → A-Golem","\uD83E\uDEA8","#6D4C41","3× Stardust"],
    ["Deino","2022-06-25","Brutal Swing → Hydreigon","\uD83D\uDC09","#2C3E50","3× XP"],
    ["Starly","2022-07-17","Gust → Staraptor","\uD83D\uDC26","#95A5A6","3× Stardust"],
    ["Galarian Zigzagoon","2022-08-13","Obstruct → Obstagoon","\uD83E\uDDA1","#2C3E50","3× XP"],
    ["Roggenrola","2022-09-18","Meteor Beam → Gigalith","\uD83E\uDEA8","#6D4C41","3× Stardust"],
    ["Litwick","2022-10-15","Poltergeist → Chandelure","\uD83D\uDD6F\uFE0F","#8E44AD","3× XP"],
    ["Dratini","2022-11-05","Draco Meteor → Dragonite","\uD83D\uDC09","#3498DB","CD Classic"],
    ["Teddiursa","2022-11-12","High Horsepower → Ursaluna","\uD83E\uDDF8","#6D4C41","3× Stardust"],
    ["December Recap 2022","2022-12-17","All 2022 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust"],
    ["Machop","2021-01-16","Payback → Machamp","\uD83D\uDCAA","#95A5A6","3× Stardust"],
    ["Roselia","2021-02-07","Bullet Seed/Weather Ball → Roserade","\uD83C\uDF39","#27AE60","3× Stardust"],
    ["Fletchling","2021-03-06","Incinerate → Talonflame","\uD83D\uDC26","#E74C3C","3× XP"],
    ["Snivy","2021-04-11","Frenzy Plant → Serperior","\uD83D\uDC0D","#27AE60","3× XP"],
    ["Swablu","2021-05-15","Moonblast → Altaria","\u2601\uFE0F","#3498DB","3× XP"],
    ["Gible","2021-06-06","Earth Power → Garchomp","\uD83E\uDD88","#2C3E50","3× XP"],
    ["Tepig","2021-07-03","Blast Burn → Emboar","\uD83D\uDC37","#E74C3C","3× Stardust"],
    ["Eevee","2021-08-14","Last Resort + Eeveelution moves","\uD83E\uDD8A","#A0522D","2-day event"],
    ["Oshawott","2021-09-19","Hydro Cannon → Samurott","\uD83E\uDDA6","#2980B9","3× Stardust"],
    ["Duskull","2021-10-09","Shadow Ball → Dusknoir","\uD83D\uDC80","#8E44AD","3× XP"],
    ["Shinx","2021-11-21","Psychic Fangs → Luxray","\u26A1","#F1C40F","3× Stardust"],
    ["December Recap 2021","2021-12-18","All 2020–2021 CD moves","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust"],
    ["Piplup","2020-01-19","Hydro Cannon → Empoleon","\uD83D\uDC27","#3498DB","3× Stardust"],
    ["Rhyhorn","2020-02-22","Rock Wrecker → Rhyperior","\uD83E\uDD8F","#6D4C41","3× Stardust"],
    ["Abra","2020-04-25","Counter → Alakazam","\uD83E\uDDE0","#F1C40F","3× Stardust"],
    ["Seedot","2020-05-24","Bullet Seed → Shiftry","\uD83C\uDF30","#27AE60","3× Stardust"],
    ["Weedle","2020-06-20","Drill Run → Beedrill","\uD83D\uDC1D","#F39C12","3× XP"],
    ["Gastly","2020-07-19","Shadow Punch → Gengar","\uD83D\uDC7B","#8E44AD","3× Stardust"],
    ["Magikarp","2020-08-08","Aqua Tail → Gyarados","\uD83D\uDC1F","#E74C3C","3× Stardust"],
    ["Porygon","2020-09-20","Tri Attack → Porygon-Z","\uD83D\uDCA0","#E91E63","3× XP"],
    ["Charmander","2020-10-17","Dragon Breath → Charizard","\uD83D\uDD25","#E74C3C","3× Stardust"],
    ["Electabuzz","2020-11-15","Flamethrower → Electivire","\u26A1","#F1C40F","3× Stardust"],
    ["Magmar","2020-11-21","Thunderbolt → Magmortar","\uD83D\uDD25","#E74C3C","3× Stardust"],
    ["December Recap 2020","2020-12-12","All 2019–2020 CD moves","\uD83C\uDF84","#C0392B","2× Candy"],
    ["Totodile","2019-01-12","Hydro Cannon → Feraligatr","\uD83D\uDC0A","#3498DB","3× XP"],
    ["Swinub","2019-02-16","Ancient Power → Mamoswine","\uD83D\uDC37","#6D4C41","3× Stardust"],
    ["Treecko","2019-03-23","Frenzy Plant → Sceptile","\uD83C\uDF3F","#27AE60","3× XP"],
    ["Bagon","2019-04-13","Outrage → Salamence","\uD83D\uDC09","#3498DB","3× XP"],
    ["Torchic","2019-05-19","Blast Burn → Blaziken","\uD83D\uDC14","#E74C3C","3× Stardust"],
    ["Slakoth","2019-06-08","Body Slam → Slaking","\uD83E\uDDA5","#6D4C41","3× XP"],
    ["Mudkip","2019-07-21","Hydro Cannon → Swampert","\uD83D\uDCA7","#3498DB","3× Stardust"],
    ["Ralts","2019-08-03","Synchronoise → Gardevoir/Gallade","\uD83D\uDC83","#9B59B6","3× XP"],
    ["Turtwig","2019-09-15","Frenzy Plant → Torterra","\uD83D\uDC22","#27AE60","3× Stardust"],
    ["Trapinch","2019-10-12","Earth Power → Flygon","\uD83C\uDFDC\uFE0F","#E67E22","3× Stardust"],
    ["Chimchar","2019-11-16","Blast Burn → Infernape","\uD83D\uDC35","#E74C3C","3× Stardust"],
    ["December Recap 2019","2019-12-14","All 2018–2019 CD moves","\uD83C\uDF84","#C0392B","2× Candy"],
    ["Pikachu","2018-01-20","Surf → Pikachu","\u26A1","#F1C40F","The original Community Day"],
    ["Dratini","2018-02-24","Draco Meteor → Dragonite","\uD83D\uDC09","#3498DB","3× Stardust"],
    ["Bulbasaur","2018-03-25","Frenzy Plant → Venusaur","\uD83C\uDF31","#27AE60","3× XP"],
    ["Mareep","2018-04-15","Dragon Pulse → Ampharos","\uD83D\uDC11","#F1C40F","3× XP"],
    ["Charmander","2018-05-19","Blast Burn → Charizard","\uD83D\uDD25","#E74C3C","3× Stardust"],
    ["Larvitar","2018-06-16","Smack Down → Tyranitar","\uD83E\uDEA8","#27AE60","3× XP"],
    ["Squirtle","2018-07-08","Hydro Cannon → Blastoise","\uD83D\uDC22","#3498DB","3× Stardust"],
    ["Eevee","2018-08-11","Last Resort → Eevee","\uD83E\uDD8A","#A0522D","2-day event"],
    ["Chikorita","2018-09-22","Frenzy Plant → Meganium","\uD83C\uDF3F","#27AE60","3× XP"],
    ["Beldum","2018-10-21","Meteor Mash → Metagross","\u2699\uFE0F","#95A5A6","3× Stardust"],
    ["Cyndaquil","2018-11-10","Blast Burn → Typhlosion","\uD83D\uDD25","#E74C3C","2× Stardust"],
    ["December Recap 2018","2018-12-01","All 2018 CD moves available","\uD83C\uDF84","#C0392B","2× Candy, 2× Stardust, 2× XP"],
  ].map(([title,date,move,icon,color,bonus],i) => ({
    id: 1000+i, title, type: "Community Day", date, endDate: null,
    time: "2:00 PM – 5:00 PM", color, icon, featured: false,
    summary: `${move}. ${bonus}.`,
    details: { bosses: [move], bonuses: [bonus], tips: [] }
  })),
  { id: 50, title: "CD Classic: Piplup", type: "Community Day", date: "2026-01-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#3498DB", icon: "\uD83D\uDC27", featured: false, summary: "Piplup Community Day Classic! Evolve to Empoleon for the exclusive Charged Attack Hydro Cannon.", details: { bosses: ["Empoleon with Hydro Cannon (exclusive Charged Move)"], bonuses: ["¼ Hatch Distance", "3-hour Incense", "1-hour Lure Modules", "Boosted Shiny Piplup rate", "Special Research available for $1.99"], tips: ["Hydro Cannon Empoleon is a solid Water attacker and PvP pick.", "Piplup attracted to Lure Modules have boosted Shiny rates.", "Community Day Classic events revisit fan-favorite Pokémon."] } },
  { id: 51, title: "Community Day: Grookey", type: "Community Day", date: "2026-01-18", endDate: null, time: "2:00 PM – 5:00 PM", color: "#27AE60", icon: "\uD83C\uDF31", featured: false, summary: "Grookey takes the spotlight! Evolve to Rillaboom for the exclusive Charged Attack Frenzy Plant.", details: { bosses: ["Rillaboom with Frenzy Plant (exclusive Charged Move)"], bonuses: ["Boosted Shiny Grookey rate", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "Special Background encounters available"], tips: ["Frenzy Plant is the premier Grass Charged Move — Rillaboom benefits hugely.", "First Community Day of 2026 with the new yearly Special Background feature.", "Check in at Community Ambassador events for bonus Timed Research."] } },
  { id: 52, title: "Community Day: Vulpix & Alolan Vulpix", type: "Community Day", date: "2026-02-15", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E67E22", icon: "\uD83E\uDD8A", featured: false, summary: "Vulpix and Alolan Vulpix share the spotlight! Exclusive moves Energy Ball and Chilling Water.", details: { bosses: ["Ninetales with Energy Ball (exclusive)", "Alolan Ninetales with Chilling Water (exclusive)"], bonuses: ["Both forms spawning in the wild", "Boosted Shiny rates for both Vulpix forms", "3-hour Incense", "Standard Community Day bonuses"], tips: ["Alolan Ninetales with Chilling Water is excellent in PvP Great League.", "Dual-feature Community Days let you hunt two shinies at once.", "Prioritize Alolan Vulpix if you care about PvP meta relevance."] } },
  { id: 53, title: "Community Day: Scorbunny", type: "Community Day", date: "2026-03-14", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E74C3C", icon: "\uD83D\uDC30", featured: false, summary: "Scorbunny stars in March! Evolve Raboot to Cinderace for the exclusive Charged Attack Blast Burn.", details: { bosses: ["Cinderace with Blast Burn (exclusive Charged Move)"], bonuses: ["¼ Egg Hatch Distance", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Blast Burn is the best Fire Charged Move — makes Cinderace a solid Fire attacker.", "Evolve within 5 hours after the event ends to get the exclusive move.", "Overlaps with Pokémon Pokopia Celebration Event — double-dip on bonuses."] } },
  { id: 4, title: "Community Day: Tinkatink", type: "Community Day", date: "2026-04-11", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E84393", icon: "\uD83D\uDD28", featured: true, summary: "Tinkatink takes the spotlight! Evolve to Tinkaton for the exclusive Charged Attack Gigaton Hammer.", details: { bosses: ["Tinkaton with Gigaton Hammer (exclusive Charged Move)"], bonuses: ["3× Catch Stardust", "2× Catch Candy", "2× chance for Candy XL", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "1 extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Evolve Tinkatuff during the event or up to 4 hours after (by 9 PM) for Gigaton Hammer.", "Stack Star Pieces with the 3× Stardust bonus — one of the best dust events.", "Tinkatink with Special Backgrounds from Field Research and Lure Modules.", "Take snapshots for Tinkatink photobomb encounters."] } },
  { id: 54, title: "Community Day: May 2026", type: "Community Day", date: "2026-05-09", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "\u2753", featured: false, summary: "May Community Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Standard Community Day bonuses expected", "Exclusive move for final evolution", "Boosted Shiny rate"], tips: ["Date is locked in — mark your calendar.", "Featured Pokémon usually announced 2–4 weeks before.", "Start stockpiling Poké Balls and Star Pieces."] } },
  { id: 55, title: "CD Classic: May 2026", type: "Community Day", date: "2026-05-16", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "\uD83D\uDD04", featured: false, summary: "May Community Day Classic — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA (past Community Day rerun)"], bonuses: ["Standard CD Classic bonuses expected", "Exclusive move available again"], tips: ["CD Classics bring back Pokémon and moves from past Community Days.", "Great chance to get an exclusive move you missed."] } },
  { id: 5, title: "Sustainability Week 2026", type: "Event", date: "2026-04-14", endDate: "2026-04-20", time: "10:00 AM – 8:00 PM", color: "#27AE60", icon: "\uD83C\uDF3F", featured: true, summary: "Silicobra debuts! Galarian Corsola wearing pink sunglasses and Shiny Toedscool make first appearances.", details: { bosses: ["Silicobra (debut)", "Galarian Corsola wearing pink sunglasses \u2728", "Shiny Toedscool \u2728", "Seedot \u2728", "Castform \u2728", "Wiglett \u2728"], bonuses: ["Rotating Route spawns every 2 days", "Boosted Shiny Lapras, Togetic, Castform, Trubbish", "Toedscool in forested/grassy biomes", "Silicobra in desert-like biomes", "GO Pass milestone bonuses"], tips: ["Shiny Toedscool is brand new — check every one.", "Galarian Corsola in sunglasses is a top collector target.", "Route spawns rotate every 2 days — plan your priorities.", "Silicobra evolves into Sandaconda for 50 Candy."] } },
  { id: 6, title: "Replay: Riolu Hatch Day", type: "Event", date: "2026-04-18", endDate: null, time: "11:00 AM – 5:00 PM", color: "#3498DB", icon: "\uD83E\uDD5A", featured: false, summary: "Riolu Hatch Day returns! Boosted Shiny Riolu odds from eggs.", details: { bosses: ["Riolu \u2728 (boosted Shiny from eggs)"], bonuses: ["Riolu eggs with boosted Shiny odds", "Timed Research", "Paid Timed Research for more encounters", "Overlaps with Sustainability Week"], tips: ["Clear egg slots before the event.", "Use Super Incubators during the 6-hour window.", "Shiny Riolu/Lucario is one of the most coveted shinies."] } },
  { id: 7, title: "Max Battle Day: GO Bigger Replay", type: "Max Battle", date: "2026-04-25", endDate: null, time: "2:00 PM – 5:00 PM", color: "#8E44AD", icon: "\uD83D\uDCA5", featured: true, summary: "Gigantamax Kanto Starters return! Venusaur, Charizard, and Blastoise at Power Spots.", details: { bosses: ["Gigantamax Venusaur", "Gigantamax Charizard", "Gigantamax Blastoise", "Possible new Gigantamax forms"], bonuses: ["Boosted Power Spot spawns", "Shiny Gigantamax forms available", "Boosted Max Particles"], tips: ["Shiny Gigantamax Charizard is the coolest Charizard design.", "Coordinate 4-player groups.", "Farm Max Particles during the event."] } },
  { id: 8, title: "Steeled Resolve", type: "Event", date: "2026-04-28", endDate: "2026-05-04", time: "10:00 AM – 8:00 PM", color: "#95A5A6", icon: "\uD83D\uDEE1\uFE0F", featured: false, summary: "Steel-type event closing out April. 'Taken Over' sub-event begins April 30.", details: { bosses: ["Steel-type featured spawns (details TBA)"], bonuses: ["Steel-type wild spawns", "Event Field Research", "Taken Over begins April 30"], tips: ["Stock Steel-type candy.", "'Taken Over' likely involves Team GO Rocket.", "Shadow Latios continues in Shadow Raids."] } },
  { id: 20, title: "5\u2605 Raid: Regidrago", type: "Raid", date: "2026-04-01", endDate: "2026-04-07", time: "Raid Hour: Wed Apr 1, 6–7 PM", color: "#E74C3C", icon: "\uD83D\uDC09", featured: false, summary: "Regidrago in 5-Star Raids. Mega Manectric in Mega Raids. Shadow Latios weekends.", details: { bosses: ["Regidrago (5\u2605)", "Mega Manectric (Mega)", "Shadow Latios (weekends through May 5)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Weak to Fairy, Ice, Dragon.", "Shadow Latios on weekends — bring Purified Gems."], counters: { label: "Regidrago (Dragon)", pokemon: [{ name: "Mega Rayquaza", fast: "Dragon Tail", charged: "Dragon Ascent", chargedNote: "Signature" }, { name: "Shadow Salamence", fast: "Dragon Tail", charged: "Outrage" }, { name: "Shadow Dragonite", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Gardevoir", fast: "Charm", charged: "Dazzling Gleam" }, { name: "Shadow Garchomp", fast: "Dragon Tail", charged: "Outrage" }, { name: "Mega Latios", fast: "Dragon Breath", charged: "Dragon Claw" }] }, catchCP: [{ name: "Regidrago", normal: "1831–1916", boosted: "2289–2395", weather: "Windy" }] } },
  { id: 21, title: "5\u2605 Raid: Kyogre", type: "Raid", date: "2026-04-08", endDate: "2026-04-14", time: "Raid Hour: Wed Apr 8, 6–7 PM", color: "#2980B9", icon: "\uD83C\uDF0A", featured: false, summary: "Kyogre returns. Top-tier Water attacker. Mega Aerodactyl in Mega Raids.", details: { bosses: ["Kyogre (5\u2605)", "Mega Aerodactyl (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Top-tier Water attacker — raid heavily.", "Weak to Grass and Electric.", "Shiny Kyogre is a gorgeous pink whale."], counters: { label: "Kyogre (Water)", pokemon: [{ name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Shadow Raikou", fast: "Thunder Shock", charged: "Wild Charge" }, { name: "Zekrom", fast: "Charge Beam", charged: "Fusion Bolt" }, { name: "Shadow Electivire", fast: "Thunder Shock", charged: "Wild Charge" }, { name: "Shadow Tangrowth", fast: "Vine Whip", charged: "Power Whip" }] }, catchCP: [{ name: "Kyogre", normal: "2260–2351", boosted: "2825–2939", weather: "Rainy" }] } },
  { id: 22, title: "5\u2605 Raid: Groudon", type: "Raid", date: "2026-04-15", endDate: "2026-04-21", time: "Raid Hour: Wed Apr 15, 6–7 PM", color: "#C0392B", icon: "\uD83C\uDF0B", featured: false, summary: "Groudon returns. Best Ground-type attacker. Mega Alakazam in Mega Raids.", details: { bosses: ["Groudon (5\u2605)", "Mega Alakazam (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Best Ground attacker — prioritize high-IV catches.", "Weak to Water, Grass, Ice.", "Shiny Groudon (golden) is one of the best shinies."], counters: { label: "Groudon (Ground)", pokemon: [{ name: "Mega Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Kartana", fast: "Razor Leaf", charged: "Leaf Blade" }, { name: "Shadow Swampert", fast: "Water Gun", charged: "Hydro Cannon", chargedNote: "CD Exclusive" }, { name: "Mega Sceptile", fast: "Bullet Seed", charged: "Frenzy Plant", chargedNote: "CD Exclusive" }, { name: "Shadow Mamoswine", fast: "Powder Snow", charged: "Avalanche" }, { name: "Kyogre", fast: "Waterfall", charged: "Surf" }] }, catchCP: [{ name: "Groudon", normal: "2260–2351", boosted: "2825–2939", weather: "Sunny" }] } },
  { id: 23, title: "5\u2605 Raid: Tapu Koko", type: "Raid", date: "2026-04-22", endDate: "2026-04-28", time: "Raid Hour: Wed Apr 22, 6–7 PM", color: "#F39C12", icon: "\u26A1", featured: false, summary: "Tapu Koko in 5-Star Raids. Electric/Fairy. Mega Sharpedo in Mega Raids.", details: { bosses: ["Tapu Koko (5\u2605)", "Mega Sharpedo (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Solid PvP pick — Electric/Fairy.", "Weak to Poison and Ground.", "Shiny has black/orange scheme."], counters: { label: "Tapu Koko (Electric/Fairy)", pokemon: [{ name: "Primal Groudon", fast: "Mud Shot", charged: "Precipice Blades", chargedNote: "Signature" }, { name: "Shadow Garchomp", fast: "Mud Shot", charged: "Earth Power", chargedNote: "CD Exclusive" }, { name: "Shadow Excadrill", fast: "Mud-Slap", charged: "Drill Run" }, { name: "Mega Gengar", fast: "Lick", charged: "Sludge Bomb" }, { name: "Shadow Rhyperior", fast: "Mud-Slap", charged: "Earthquake" }, { name: "Landorus (Therian)", fast: "Mud Shot", charged: "Earth Power" }] }, catchCP: [{ name: "Tapu Koko", normal: "1730–1810", boosted: "2162–2263", weather: "Rainy or Cloudy" }] } },
  { id: 24, title: "5\u2605 Raid: Tapu Lele", type: "Raid", date: "2026-04-29", endDate: "2026-05-05", time: "Raid Hour: Wed Apr 29, 6–7 PM", color: "#FF6B81", icon: "\uD83E\uDD8B", featured: false, summary: "Tapu Lele closes April. Mega Banette. Final week for Shadow Latios.", details: { bosses: ["Tapu Lele (5\u2605)", "Mega Banette (Mega)", "Shadow Latios (final week)"], bonuses: ["Raid Hour: Wednesday 6–7 PM", "Last week for Shadow Latios"], tips: ["Final week for Shadow Latios — get raids in before May 5.", "Tapu Lele weak to Ghost, Poison, Steel."], counters: { label: "Tapu Lele (Psychic/Fairy)", pokemon: [{ name: "Mega Gengar", fast: "Lick", charged: "Shadow Ball" }, { name: "Shadow Metagross", fast: "Bullet Punch", charged: "Meteor Mash", chargedNote: "CD Exclusive" }, { name: "Origin Giratina", fast: "Shadow Claw", charged: "Shadow Force", chargedNote: "Signature" }, { name: "Shadow Chandelure", fast: "Hex", charged: "Shadow Ball" }, { name: "Mega Banette", fast: "Shadow Claw", charged: "Shadow Ball" }, { name: "Shadow Excadrill", fast: "Metal Claw", charged: "Iron Head" }] }, catchCP: [{ name: "Tapu Lele", normal: "1718–1799", boosted: "2148–2249", weather: "Windy or Cloudy" }] } },
  { id: 29, title: "Max Battle Day: Gigantamax Pikachu", type: "Max Battle", date: "2026-03-28", endDate: null, time: "2:00 PM – 5:00 PM", color: "#F1C40F", icon: "\u26A1", featured: false, summary: "Gigantamax Pikachu debuted in 6-Star Max Battles! Pikachu caught from Max Battles cannot evolve. Shiny Gigantamax Pikachu was available.", details: { bosses: ["Gigantamax Pikachu (6\u2605 Max Battle debut)", "Shiny Gigantamax Pikachu \u2728"], bonuses: ["2× Max Particles from exploring (12 AM – 5 PM)", "Increased Max Particle storage limit", "3 Special Trades for the day", "Power Spots refreshed more frequently", "Gigantamax Pikachu on all Power Spots", "Remote Raid limit increased to 20 (Mar 27 5 PM – Mar 28 8 PM PDT)"], tips: ["Gigantamax Pikachu cannot evolve — it's a standalone collector Pokémon.", "As a pure Electric-type, Ground-type counters were the way to go.", "Paid Timed Research ($4.99) rewarded 1 Max Mushroom, 25,000 XP, 6,400 Max Particles, and 2× XP from Max Battles.", "Coordinating with a full group of 4 was essential for 6-Star difficulty."] } },
  { id: 30, title: "Dynamax Trapinch (Debut)", type: "Max Battle", date: "2026-04-06", endDate: "2026-04-12", time: "Max Monday: 6–7 PM", color: "#E67E22", icon: "\uD83C\uDFDC\uFE0F", featured: false, summary: "Dynamax Trapinch debuts at Power Spots.", details: { bosses: ["Dynamax Trapinch (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 6", "Power Spots all week", "Extra Power Spots on Monday"], tips: ["Trapinch evolves into Flygon.", "Max Mondays have more Power Spots."] } },
  { id: 31, title: "Dynamax Drilbur", type: "Max Battle", date: "2026-04-13", endDate: "2026-04-19", time: "Max Monday: 6–7 PM", color: "#6D4C41", icon: "\u26CF\uFE0F", featured: false, summary: "Dynamax Drilbur at Power Spots. Excadrill is top-tier.", details: { bosses: ["Dynamax Drilbur"], bonuses: ["Max Monday: 6–7 PM Apr 13", "Power Spots all week"], tips: ["Excadrill is top Ground AND Steel attacker.", "Overlaps with Sustainability Week."] } },
  { id: 32, title: "Dynamax Regirock (Debut)", type: "Max Battle", date: "2026-04-20", endDate: "2026-04-26", time: "Max Monday: 6–7 PM", color: "#D4A574", icon: "\uD83E\uDEA8", featured: true, summary: "Dynamax Regirock debuts — first Legendary Regi in Dynamax form.", details: { bosses: ["Dynamax Regirock (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 20", "Power Spots all week", "First Dynamax Legendary Regi"], tips: ["Headline event — expect higher difficulty.", "Coordinate with your local group.", "Overlaps with GO Bigger Replay on April 25."] } },
  { id: 33, title: "Dynamax Shuckle", type: "Max Battle", date: "2026-04-27", endDate: "2026-05-03", time: "Max Monday: 6–7 PM", color: "#FF7043", icon: "\uD83D\uDC1B", featured: false, summary: "Dynamax Shuckle rounds out April. Absurdly tanky.", details: { bosses: ["Dynamax Shuckle"], bonuses: ["Max Monday: 6–7 PM Apr 27"], tips: ["Highest Defense in the game.", "Collector piece more than meta pick."] } },
  { id: 40, title: "GO Fest 2026: Tokyo", type: "GO Fest", date: "2026-05-29", endDate: "2026-06-01", time: "9 AM – 6 PM (Citywide from May 25)", color: "#FF6348", icon: "\uD83D\uDDFC", featured: true, summary: "GO Fest kicks off in Tokyo! Zeraora debut, Mewtwo raids, costumed Pikachu.", details: { bosses: ["Zeraora (debut)", "Mewtwo (5\u2605 citywide)", "Costumed Pikachu", "All Unown forms"], bonuses: ["Park sessions at Odaiba", "Citywide from May 25", "City Exploration Tickets", "4 City Districts", "GO Expert medal"], tips: ["Zeraora available once per trainer.", "Park tickets $33.", "Mewtwo raids citywide."] } },
  { id: 41, title: "GO Fest 2026: Chicago", type: "GO Fest", date: "2026-06-05", endDate: "2026-06-07", time: "Park Sessions + Citywide (from Jun 4)", color: "#0984E3", icon: "\uD83C\uDFD9\uFE0F", featured: false, summary: "GO Fest returns to Grant Park! Spark hosts. Zeraora, Mewtwo.", details: { bosses: ["Zeraora", "Mewtwo (5\u2605)", "Costumed Pikachu", "All Unown forms"], bonuses: ["Citywide from June 4", "Spark coaching", "4 City Districts"], tips: ["Grant Park confirmed 2026 AND 2027.", "Tickets $33 — first-come-first-served."] } },
  { id: 42, title: "GO Fest 2026: Copenhagen", type: "GO Fest", date: "2026-06-12", endDate: "2026-06-14", time: "9 AM – 6 PM CEST (Citywide from Jun 11)", color: "#00B894", icon: "\uD83C\uDFF0", featured: false, summary: "European GO Fest at Fælledparken! Candela hosts. Shiny Paldean Tauros exclusive.", details: { bosses: ["Zeraora", "Mewtwo (5\u2605)", "Shiny Combat Breed Paldean Tauros", "Arlo encounters"], bonuses: ["Fælledparken park", "Citywide from June 11", "Candela coaching"], tips: ["Shiny Paldean Tauros exclusive to ticket-holding raiders.", "Last in-person Zeraora before Global."] } },
  { id: 43, title: "GO Fest 2026: Global", type: "GO Fest", date: "2026-07-11", endDate: "2026-07-12", time: "10:00 AM – 6:00 PM Local", color: "#6C5CE7", icon: "\uD83C\uDF0D", featured: true, summary: "Global finale! All trainers worldwide. Zeraora encounters, 10th anniversary.", details: { bosses: ["Zeraora (Special Research)", "Raid bosses TBA", "10th Anniversary Pokémon"], bonuses: ["Global participation", "Special Research", "10th anniversary celebrations"], tips: ["Your chance if you couldn't attend in person.", "Zeraora available globally for the first time."] } }
];

const ANNOUNCEMENTS = [
  { id: 1, date: "2026-03-28", title: "April Raid Schedule Confirmed", tag: "Update", body: "5-Star Raids: Regidrago → Kyogre → Groudon → Tapu Koko → Tapu Lele. Shadow Latios weekends through May 5.", fullBody: "The full April 2026 raid rotation has been confirmed:", sections: [{ heading: "5-Star Raid Bosses", items: ["Apr 1–7: Regidrago", "Apr 8–14: Kyogre", "Apr 15–21: Groudon", "Apr 22–28: Tapu Koko", "Apr 29–May 5: Tapu Lele"] }, { heading: "Mega Raid Bosses", items: ["Apr 1–7: Mega Manectric", "Apr 8–14: Mega Aerodactyl", "Apr 15–21: Mega Alakazam", "Apr 22–28: Mega Sharpedo", "Apr 29–May 5: Mega Banette"] }, { heading: "Shadow Raids", items: ["Shadow Latios every weekend Apr 1 – May 5", "Bring Purified Gems"] }, { heading: "Raid Hours (Wed 6–7 PM)", items: ["Each Wednesday features that week's 5-Star boss"] }] },
  { id: 2, date: "2026-03-27", title: "GO Pass: April — Lucky Trinket Returns", tag: "News", body: "April's GO Pass Deluxe includes the Lucky Trinket — instantly become Lucky Friends with any Great Friend or higher.", fullBody: "The April 2026 GO Pass is packed with rewards:", sections: [{ heading: "GO Pass (Free)", items: ["Available April 7 at 10 AM", "Rank up for Entei encounters", "Active until May 5", "May 2–3: No daily GO Points limit!"] }, { heading: "GO Pass Deluxe (Paid)", items: ["Lucky Trinket — instantly Lucky Friends with any Great Friend+", "Expires May 12", "Available on the Web Store"] }] },
  { id: 3, date: "2026-03-25", title: "Tinkatink Community Day — April 11", tag: "Alert", body: "3× Catch Stardust, 2× Candy, and exclusive Gigaton Hammer for Tinkaton.", fullBody: "Full breakdown:", sections: [{ heading: "Event Details", items: ["Saturday, April 11, 2:00–5:00 PM local", "Boosted Shiny Tinkatink", "Evolve for Gigaton Hammer (until 9 PM)"] }, { heading: "Bonuses (2–5 PM)", items: ["3× Catch Stardust", "2× Catch Candy", "2× Candy XL chance", "3-hour Incense"] }, { heading: "Extended (2–9 PM)", items: ["1-hour Lure Modules", "1 extra Special Trade", "50% less Trade Stardust"] }] },
  { id: 4, date: "2026-03-23", title: "GO Bigger Replay Datamined for April 25", tag: "News", body: "Dataminers found Gigantamax Kanto Starters returning. New Gigantamax debuts possible.", fullBody: "The Pokémod Group datamined GO Bigger Replay:", sections: [{ heading: "What We Know", items: ["Scheduled for April 25", "Gigantamax Venusaur, Charizard, Blastoise expected", "Max Battle Day format: 2–5 PM"] }, { heading: "Unconfirmed", items: ["New Gigantamax debuts — 17 forms unreleased", "Shiny Gigantamax forms expected"] }] },
  { id: 5, date: "2026-03-21", title: "Spotlight Hours → Daily Discoveries", tag: "Update", body: "Weekly Spotlight Hours ended. Daily Discoveries is the new recurring system.", fullBody: "The Memories in Motion season replaced Spotlight Hours:", sections: [{ heading: "What Changed", items: ["Weekly Tuesday Spotlight Hours removed", "Now only during specific events", "Daily Discoveries replaces them"] }, { heading: "Daily Discoveries", items: ["Double-Time Sundays — Incense/Lures last 2×", "Fast-Track Mondays — extra Power Spots", "Showcase Tuesdays — PokéStop Showcases", "GBL Thursdays — 10 sets, up to 4× Stardust", "Friendship Fridays — extra trades, Lucky boost"] }] },
  { id: 6, date: "2026-03-15", title: "GO Fest 2026 Tickets On Sale", tag: "Alert", body: "Tickets for Tokyo, Chicago, Copenhagen live. $33/day. Global finale July 11–12.", fullBody: "GO Fest 2026 celebrates 10 years of Pokémon GO:", sections: [{ heading: "Tokyo — May 29–Jun 1", items: ["Odaiba Seaside Park", "Citywide from May 25", "City Exploration Tickets"] }, { heading: "Chicago — Jun 5–7", items: ["Grant Park", "Hosted by Spark", "Tickets $33"] }, { heading: "Copenhagen — Jun 12–14", items: ["Fælledparken", "Hosted by Candela", "Shiny Paldean Tauros exclusive"] }, { heading: "Global — Jul 11–12", items: ["All trainers worldwide", "Zeraora via Special Research", "One per trainer across all events"] }] }
];

const EVENT_TYPES = ["All", "Event", "Raid", "Max Battle", "Community Day", "GO Fest"];

// --- STATE ---
let state = {
  selectedEvent: null,
  selectedNews: null,
  filter: "All",
  newsFilter: "All",
  tab: "events",
  openYears: {},
  openNewsYears: {}
};

// --- UTILITY FUNCTIONS ---
function getCountdown(d) {
  const diff = new Date(d + "T10:00:00") - new Date();
  if (diff <= 0) return null;
  return { days: Math.floor(diff / 864e5), hours: Math.floor((diff % 864e5) / 36e5), minutes: Math.floor((diff % 36e5) / 6e4), seconds: Math.floor((diff % 6e4) / 1000) };
}

function formatDate(d) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function formatDateRange(s, e) {
  if (!e) return formatDate(s);
  const a = new Date(s + "T12:00:00"), b = new Date(e + "T12:00:00");
  return a.getMonth() === b.getMonth()
    ? `${a.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} – ${b.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}`
    : `${formatDate(s)} – ${formatDate(e)}`;
}

function daysUntil(d) { return Math.ceil((new Date(d + "T10:00:00") - new Date()) / 864e5); }

function parseEndHour(ev) {
  const m = ev.time && ev.time.match(/–\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (m) {
    let h = parseInt(m[1]);
    const min = parseInt(m[2]);
    const ampm = m[3].toUpperCase();
    if (ampm === "PM" && h !== 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    return { h, min };
  }
  return { h: 23, min: 59 };
}

function isActive(ev) {
  const n = new Date();
  const s = new Date(ev.date + "T00:00:00");
  const endDate = ev.endDate || ev.date;
  const { h, min } = parseEndHour(ev);
  const e = new Date(endDate + "T00:00:00");
  e.setHours(h, min, 59);
  return n >= s && n <= e;
}

function isOver(ev) {
  const endDate = ev.endDate || ev.date;
  const { h, min } = parseEndHour(ev);
  const e = new Date(endDate + "T00:00:00");
  e.setHours(h, min, 59);
  return new Date() > e;
}

function getMoveDeadline(ev) {
  if (ev.type !== "Community Day") return null;
  const dateStr = ev.endDate || ev.date;
  const isClassic = ev.title.toLowerCase().includes("classic");
  const isRecap = ev.title.toLowerCase().includes("recap") || ev.title.toLowerCase().includes("december");
  if (isRecap) return new Date(dateStr + "T21:00:00");
  return new Date(dateStr + (isClassic ? "T19:00:00" : "T21:00:00"));
}

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// --- COUNTDOWN TIMER ---
function renderCountdown(dateStr, color, over, th) {
  const cd = getCountdown(dateStr);
  if (!cd && over) return `<span style="font-size:12px;color:${th.textMuted};font-weight:600">Event Over</span>`;
  if (!cd) return `<span style="font-size:12px;color:#2ECC71;font-weight:700">LIVE NOW</span>`;
  const units = [["D", cd.days], ["H", cd.hours], ["M", cd.minutes], ["S", cd.seconds]];
  return `<div style="display:flex;gap:4px;align-items:center">${units.map(([l, v], i) =>
    `<div style="display:flex;align-items:center;gap:1px"><div style="background:${th.countdownBg(color)};border:1.5px solid ${th.countdownBorder(color)};border-radius:7px;padding:3px 6px;min-width:32px;text-align:center;font-weight:700;font-size:14px;font-variant-numeric:tabular-nums;color:${color};font-family:'JetBrains Mono',monospace;${l === "S" ? "animation:countdownTick 1s ease infinite;" : ""}">${String(v).padStart(2, "0")}</div><span style="font-size:9px;color:${th.textMuted};font-weight:600">${l}</span>${i < 3 ? `<span style="color:${th.border};font-weight:300;margin-left:1px;font-size:12px">:</span>` : ""}</div>`
  ).join("")}</div>`;
}

// --- MOVE DEADLINE BANNER ---
function renderMoveDeadlineBanner(event, th) {
  const deadline = getMoveDeadline(event);
  if (!deadline) return "";
  const now = new Date();
  const eventStarted = now >= new Date(event.date + "T00:00:00");
  const diff = deadline - now;
  const deadlinePassed = diff <= 0;
  const eventEndedButWindowOpen = isOver(event) && !deadlinePassed;
  if (!eventStarted) return "";
  if (deadlinePassed) {
    return `<div style="padding:12px 16px;border-radius:12px;background:${th.accentBgSubtle("#E74C3C")};border:1.5px solid #E74C3C30;display:flex;align-items:center;gap:10px">
      <span style="font-size:18px">\uD83D\uDD12</span>
      <div><div style="font-size:13px;font-weight:700;color:#E74C3C">Move Window Closed</div>
      <div style="font-size:12px;color:${th.textMuted};margin-top:2px">Exclusive move requires an Elite TM or the December Community Day recap.</div></div></div>`;
  }
  const hours = Math.floor(diff / 36e5);
  const minutes = Math.floor((diff % 36e5) / 6e4);
  const seconds = Math.floor((diff % 6e4) / 1000);
  const urgentColor = eventEndedButWindowOpen ? "#E74C3C" : "#F39C12";
  return `<div style="padding:12px 16px;border-radius:12px;background:${th.accentBgSubtle(urgentColor)};border:1.5px solid ${urgentColor}30;display:flex;align-items:center;gap:10px">
    <span style="font-size:18px">${eventEndedButWindowOpen ? "\uD83D\uDEA8" : "\u23F0"}</span>
    <div style="flex:1"><div style="font-size:13px;font-weight:700;color:${urgentColor}">${eventEndedButWindowOpen ? "Evolve Now — Move Window Closing!" : "Exclusive Move Window"}</div>
    <div style="font-size:12px;color:${th.textSecondary};margin-top:2px">Evolve to get the exclusive move before the window closes.</div></div>
    <div style="display:flex;gap:3px;align-items:center;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:15px;color:${urgentColor};font-variant-numeric:tabular-nums">${hours > 0 ? String(hours).padStart(2, "0") + "h " : ""}${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s</div></div>`;
}

// --- DETAIL SECTION ---
let catchCPIdCounter = 0;

function renderCatchCPItem(cp, th) {
  return `<div style="padding:12px 14px;border-radius:11px;background:${th.accentBgSubtle("#8E44AD")};border:1px solid ${th.countdownBorder("#8E44AD")}">
    <div style="font-weight:700;color:${th.text};font-size:13.5px;margin-bottom:8px">${esc(cp.name)}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <div style="flex:1;min-width:120px;padding:8px 12px;border-radius:8px;background:${th.accentBgSubtle("#3498DB")};border:1px solid ${th.countdownBorder("#3498DB")}">
        <div style="font-size:10px;font-weight:700;color:#3498DB;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:3px">Normal</div>
        <div style="font-size:15px;font-weight:700;color:${th.text};font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums">${esc(cp.normal)}</div>
      </div>
      <div style="flex:1;min-width:120px;padding:8px 12px;border-radius:8px;background:${th.accentBgSubtle("#E67E22")};border:1px solid ${th.countdownBorder("#E67E22")}">
        <div style="font-size:10px;font-weight:700;color:#E67E22;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:3px">Weather Boosted</div>
        <div style="font-size:15px;font-weight:700;color:${th.text};font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums">${esc(cp.boosted)}</div>
        <div style="font-size:10px;color:${th.textMuted};margin-top:2px">\u2601\uFE0F ${esc(cp.weather)}</div>
      </div>
    </div>
  </div>`;
}

function renderCatchCP(catchCP, th) {
  if (!catchCP || catchCP.length === 0) return "";
  const collapsible = catchCP.length > 1;
  if (!collapsible) {
    return `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83C\uDFAF</span> Catch CP Ranges</h4>
      <div style="display:flex;flex-direction:column;gap:8px">${catchCP.map(cp => renderCatchCPItem(cp, th)).join("")}</div></div>`;
  }
  const id = "catchcp-" + (catchCPIdCounter++);
  const preview = catchCP.slice(0, 3).map(cp => cp.name).join(", ") + (catchCP.length > 3 ? ` +${catchCP.length - 3} more` : "");
  return `<div>
    <button onclick="toggleCatchCP('${id}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;background:${th.accentBgSubtle("#8E44AD")};border:1.5px solid ${th.countdownBorder("#8E44AD")};border-radius:14px;cursor:pointer;padding:14px 16px;font-family:inherit;transition:all 0.2s ease"
      onmouseenter="this.style.borderColor='#8E44AD60'"
      onmouseleave="this.style.borderColor='${th.countdownBorder("#8E44AD")}'">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#8E44AD")};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">\uD83C\uDFAF</div>
        <div style="text-align:left">
          <div style="font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:6px">Catch CP Ranges <span style="font-size:10px;font-weight:700;color:#8E44AD;background:${th.accentBg("#8E44AD")};padding:2px 8px;border-radius:20px">${catchCP.length} bosses</span></div>
          <div id="${id}-preview" style="font-size:12px;color:${th.textMuted};margin-top:3px;transition:opacity 0.2s ease">${esc(preview)}</div>
        </div>
      </div>
      <div id="${id}-arrow" style="font-size:18px;color:${th.textMuted};transition:transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)">\u25BE</div>
    </button>
    <div id="${id}" style="display:flex;flex-direction:column;gap:8px;max-height:0;overflow:hidden;opacity:0;transition:max-height 0.4s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.3s ease,margin 0.3s ease;margin-top:0">${catchCP.map(cp => renderCatchCPItem(cp, th)).join("")}</div>
  </div>`;
}

function renderCounters(counters, th) {
  if (!counters) return "";
  return `<div><h4 style="margin:0 0 4px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\u2694\uFE0F</span> Top Counters</h4>
    <div style="font-size:11px;color:${th.textMuted};margin-bottom:10px">vs ${esc(counters.label)}</div>
    <div style="display:flex;flex-direction:column;gap:6px">${counters.pokemon.map((c, i) =>
      `<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;background:${th.accentBgSubtle("#3498DB")};font-size:13px;color:${th.textSecondary};line-height:1.4">
        <div style="width:22px;height:22px;border-radius:50%;background:${th.countdownBg("#3498DB")};border:1.5px solid ${th.countdownBorder("#3498DB")};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#3498DB;flex-shrink:0">${i + 1}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;color:${th.text};font-size:13.5px">${esc(c.name)}</div>
          <div style="margin-top:2px;font-size:12px;display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="color:${th.textSecondary}">${esc(c.fast)}</span>
            <span style="color:${th.textFaint}">/</span>
            <span style="color:${th.textSecondary}">${esc(c.charged)}</span>
            ${c.chargedNote ? `<span style="font-size:10px;font-weight:700;color:#E67E22;background:${th.accentBg("#E67E22")};padding:1px 6px;border-radius:10px">${esc(c.chargedNote)}</span>` : ""}
          </div>
        </div>
      </div>`
    ).join("")}</div></div>`;
}

function renderDetailSection(title, emoji, items, color, th) {
  return `<div><h4 style="margin:0 0 8px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>${emoji}</span> ${esc(title)}</h4>
    <div style="display:flex;flex-direction:column;gap:5px">${items.map(item =>
      `<div style="display:flex;align-items:baseline;gap:10px;padding:7px 12px;border-radius:9px;background:${th.accentBgSubtle(color)};font-size:13.5px;color:${th.textSecondary};line-height:1.45"><div style="width:5px;height:5px;border-radius:50%;background:${color};flex-shrink:0;margin-top:6px"></div>${esc(item)}</div>`
    ).join("")}</div></div>`;
}

// --- EVENT DETAIL ---
function renderEventDetail(event, th) {
  const active = isActive(event);
  const over = isOver(event);
  return `<div style="animation:fadeSlideIn 0.3s ease">
    <button onclick="goBack()" style="display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;font-size:14px;color:${th.textMuted};font-weight:500;padding:4px 0;margin-bottom:16px;font-family:inherit">\u2190 Back</button>
    <div style="background:${th.surface};border-radius:20px;border:1.5px solid ${th.border};overflow:hidden;box-shadow:${th.shadowLg}">
      <div style="background:${th.detailHeaderBg(event.color)};padding:24px 20px;border-bottom:2px solid ${th.detailHeaderBorder(event.color)}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="width:50px;height:50px;border-radius:14px;background:${th.accentBg(event.color)};border:2px solid ${th.countdownBorder(event.color)};display:flex;align-items:center;justify-content:center;font-size:26px">${event.icon}</div>
          <div>
            <div style="font-size:10px;font-weight:700;color:${event.color};letter-spacing:1.2px;text-transform:uppercase;margin-bottom:3px;display:flex;gap:6px;align-items:center">${esc(event.type)}${active ? `<span style="background:#2ECC71;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">LIVE NOW</span>` : ""}</div>
            <h2 style="margin:0;font-size:20px;font-weight:800;color:${th.text}">${esc(event.title)}</h2>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
          <div style="font-size:13px;color:${th.textSecondary};font-weight:500">\uD83D\uDCC5 ${formatDateRange(event.date, event.endDate)}</div>
          <div style="font-size:13px;color:${th.textSecondary};font-weight:500">\uD83D\uDD50 ${esc(event.time)}</div>
          <span class="countdown" data-date="${event.date}" data-color="${event.color}" data-over="${over}">${renderCountdown(event.date, event.color, over, th)}</span>
        </div>
      </div>
      <div style="padding:20px 20px 24px;display:flex;flex-direction:column;gap:22px">
        <p style="margin:0;font-size:14.5px;color:${th.textSecondary};line-height:1.65">${esc(event.summary)}</p>
        <div class="move-deadline" data-event-id="${event.id}">${renderMoveDeadlineBanner(event, th)}</div>
        ${event.details.bosses ? renderDetailSection("Featured Encounters", "\uD83C\uDFAF", event.details.bosses, event.color, th) : ""}
        ${event.details.catchCP ? renderCatchCP(event.details.catchCP, th) : ""}
        ${event.details.bonuses ? renderDetailSection("Active Bonuses", "\u2728", event.details.bonuses, "#27AE60", th) : ""}
        ${event.details.counters ? renderCounters(event.details.counters, th) : ""}
        ${event.details.tips && event.details.tips.length > 0 ? `<div><h4 style="margin:0 0 10px 0;font-size:13px;font-weight:700;color:${th.text};display:flex;align-items:center;gap:8px"><span>\uD83D\uDCA1</span> Trainer Tips</h4>
          <div style="display:flex;flex-direction:column;gap:6px">${event.details.tips.map(tip =>
            `<div style="padding:10px 14px;border-radius:10px;background:${th.tipBg};border:1px solid ${th.tipBorder};font-size:13.5px;color:${th.tipText};line-height:1.5">${esc(tip)}</div>`
          ).join("")}</div></div>` : ""}
      </div>
    </div>
  </div>`;
}

// --- NEWS DETAIL ---
function renderNewsDetail(announcement, th) {
  return `<div style="animation:fadeSlideIn 0.3s ease">
    <button onclick="goBackNews()" style="display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;font-size:14px;color:${th.textMuted};font-weight:500;padding:4px 0;margin-bottom:16px;font-family:inherit">\u2190 Back to news</button>
    <div style="background:${th.surface};border-radius:20px;border:1.5px solid ${th.border};overflow:hidden;box-shadow:${th.shadowLg}">
      <div style="padding:24px 20px;border-bottom:1.5px solid ${th.border}">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <span style="font-size:11px;font-weight:700;background:${th.tagBg(announcement.tag)};color:${th.tagText(announcement.tag)};padding:4px 12px;border-radius:20px;letter-spacing:0.3px">${esc(announcement.tag)}</span>
          <span style="font-size:12px;color:${th.textFaint};font-weight:500">${formatDate(announcement.date)}</span>
        </div>
        <h2 style="margin:0;font-size:20px;font-weight:800;color:${th.text};line-height:1.3">${esc(announcement.title)}</h2>
      </div>
      <div style="padding:20px 20px 24px;display:flex;flex-direction:column;gap:20px">
        <p style="margin:0;font-size:14.5px;color:${th.textSecondary};line-height:1.65">${esc(announcement.fullBody)}</p>
        ${announcement.sections ? announcement.sections.map(s =>
          `<div><h4 style="margin:0 0 10px 0;font-size:14px;font-weight:700;color:${th.text}">${esc(s.heading)}</h4>
          <div style="display:flex;flex-direction:column;gap:5px">${s.items.map(item =>
            `<div style="display:flex;align-items:baseline;gap:10px;padding:8px 14px;border-radius:10px;background:${th.tagBg(announcement.tag)};font-size:13.5px;color:${th.textSecondary};line-height:1.5"><div style="width:5px;height:5px;border-radius:50%;background:${th.tagText(announcement.tag)};flex-shrink:0;margin-top:6px"></div>${esc(item)}</div>`
          ).join("")}</div></div>`
        ).join("") : ""}
      </div>
    </div>
  </div>`;
}

// --- EVENT CARD ---
function renderEventCard(event, index, th) {
  const days = daysUntil(event.date);
  const active = isActive(event);
  const isPast = isOver(event);
  const daysLabel = days === 0 ? "TODAY" : days === 1 ? "TOMORROW" : `${days}d`;
  const daysColor = days <= 3 ? "#E74C3C" : days <= 7 ? "#F39C12" : th.textMuted;
  return `<button onclick="selectEvent(${event.id})" style="display:flex;flex-direction:column;gap:12px;padding:18px 18px 16px;background:${th.cardBg(active, event.color)};border:1.5px solid ${th.cardBorder(active, event.color)};border-radius:16px;cursor:pointer;text-align:left;transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94);opacity:${isPast ? 0.5 : 1};width:100%;box-shadow:${th.shadow};position:relative;overflow:hidden;font-family:inherit;animation:fadeSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.06}s both"
    onmouseenter="this.style.borderColor='${event.color}60';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 25px ${event.color}18';"
    onmouseleave="this.style.borderColor='${th.cardBorder(active, event.color)}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}';">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${event.color},${event.color}88,${event.color});background-size:200% 100%;animation:gradientShift 3s ease infinite"></div>
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
      <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
        <div style="width:40px;height:40px;border-radius:11px;background:${th.accentBg(event.color)};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">${event.icon}</div>
        <div style="min-width:0">
          <h3 style="margin:0;font-size:15px;font-weight:700;color:${th.text};line-height:1.3">${esc(event.title)}</h3>
          <div style="display:flex;gap:6px;margin-top:4px;align-items:center;flex-wrap:wrap">
            <span style="font-size:10px;font-weight:700;color:${event.color};background:${th.accentBg(event.color)};padding:2px 8px;border-radius:20px;letter-spacing:0.3px">${esc(event.type)}</span>
            ${active ? `<span style="font-size:10px;font-weight:700;color:#fff;background:#2ECC71;padding:2px 8px;border-radius:20px;animation:badgeBounce 2s ease infinite">LIVE</span>` : ""}
          </div>
        </div>
      </div>
      ${!isPast && !active && days <= 60 ? `<div style="font-size:11px;font-weight:700;white-space:nowrap;padding-top:2px;color:${daysColor}">${daysLabel}</div>` : ""}
    </div>
    <p style="margin:0;font-size:13.5px;color:${th.textSecondary};line-height:1.55">${esc(event.summary)}</p>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div style="font-size:12px;color:${th.textMuted};font-weight:500">\uD83D\uDCC5 ${formatDateRange(event.date, event.endDate)} \u00B7 ${esc(event.time)}</div>
      ${!isPast ? `<span class="countdown" data-date="${event.date}" data-color="${event.color}" data-over="${isPast}">${renderCountdown(event.date, event.color, isPast, th)}</span>` : ""}
    </div>
  </button>`;
}

// --- ANNOUNCEMENT CARD ---
function renderAnnouncementCard(announcement, index, th) {
  return `<button onclick="selectNews(${announcement.id})" style="padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:14px;display:flex;flex-direction:column;gap:7px;box-shadow:${th.shadow};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94);animation:fadeSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.06}s both"
    onmouseenter="this.style.borderColor='${th.tagText(announcement.tag)}40';this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 20px rgba(0,0,0,0.08)';"
    onmouseleave="this.style.borderColor='${th.border}';this.style.transform='translateY(0)';this.style.boxShadow='${th.shadow}';">
    <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
      <span style="font-size:10px;font-weight:700;background:${th.tagBg(announcement.tag)};color:${th.tagText(announcement.tag)};padding:3px 10px;border-radius:20px;letter-spacing:0.3px">${esc(announcement.tag)}</span>
      <span style="font-size:11px;color:${th.textFaint};font-weight:500">${formatDate(announcement.date)}</span>
    </div>
    <h4 style="margin:0;font-size:14px;font-weight:700;color:${th.text}">${esc(announcement.title)}</h4>
    <p style="margin:0;font-size:13.5px;color:${th.textSecondary};line-height:1.5">${esc(announcement.body)}</p>
    <div style="font-size:12px;color:${th.tagText(announcement.tag)};font-weight:600;display:inline-flex;align-items:center;gap:4px">Read more <span>\u2192</span></div>
  </button>`;
}

// --- FILTER PILLS ---
function renderFilterPills(active, options, onClickFn, th) {
  return `<div style="display:flex;gap:7px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch;scrollbar-width:none">${options.map(opt =>
    `<button onclick="${onClickFn}('${opt}')" style="padding:6px 14px;border-radius:20px;border:${active === opt ? `1.5px solid ${th.pillActiveBg}` : `1.5px solid ${th.pillBorder}`};background:${active === opt ? th.pillActiveBg : th.pillBg};color:${active === opt ? th.pillActiveText : th.pillText};font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all 0.15s ease;font-family:inherit">${esc(opt)}</button>`
  ).join("")}</div>`;
}

// --- GLOBAL ACTIONS ---
function selectEvent(id) {
  state.selectedEvent = EVENTS.find(e => e.id === id);
  render();
}

function selectNews(id) {
  state.selectedNews = ANNOUNCEMENTS.find(a => a.id === id);
  render();
}

function goBack() {
  state.selectedEvent = null;
  render();
}

function goBackNews() {
  state.selectedNews = null;
  render();
}

function goHome() {
  state.selectedEvent = null;
  state.selectedNews = null;
  state.tab = "events";
  render();
}

function setTab(tab) {
  state.tab = tab;
  render();
}

function setFilter(f) {
  state.filter = f;
  state.openYears = {};
  render();
}

function setNewsFilter(f) {
  state.newsFilter = f;
  state.openNewsYears = {};
  render();
}

function toggleCatchCP(id) {
  const el = document.getElementById(id);
  const arrow = document.getElementById(id + "-arrow");
  const preview = document.getElementById(id + "-preview");
  const isOpen = el.dataset.open === "true";
  if (isOpen) {
    el.style.maxHeight = "0";
    el.style.opacity = "0";
    el.style.marginTop = "0";
    el.dataset.open = "false";
    if (arrow) arrow.style.transform = "rotate(0deg)";
    if (preview) { preview.style.opacity = "1"; preview.style.maxHeight = "20px"; }
  } else {
    el.style.maxHeight = el.scrollHeight + "px";
    el.style.opacity = "1";
    el.style.marginTop = "10px";
    el.dataset.open = "true";
    if (arrow) arrow.style.transform = "rotate(180deg)";
    if (preview) { preview.style.opacity = "0"; preview.style.maxHeight = "0"; }
  }
}

function toggleYear(y) {
  state.openYears[y] = !state.openYears[y];
  render();
}

function toggleNewsYear(y) {
  state.openNewsYears[y] = !state.openNewsYears[y];
  render();
}

// --- MAIN RENDER ---
function render() {
  const th = t(darkMode);
  const isMobile = breakpoint === "mobile";
  const isDesktop = breakpoint === "desktop";

  const filteredEvents = [...EVENTS].sort((a, b) => new Date(a.date) - new Date(b.date));
  const filtered = state.filter !== "All" ? filteredEvents.filter(e => e.type === state.filter) : filteredEvents;
  const upcomingEvents = filtered.filter(e => !isOver(e));
  const pastEvents = filtered.filter(e => isOver(e));

  const pastByYear = {};
  pastEvents.forEach(ev => {
    const year = new Date(ev.date + "T12:00:00").getFullYear();
    if (!pastByYear[year]) pastByYear[year] = [];
    pastByYear[year].push(ev);
  });
  Object.keys(pastByYear).forEach(y => pastByYear[y].sort((a, b) => new Date(b.date) - new Date(a.date)));
  const archiveYears = Object.keys(pastByYear).sort((a, b) => b - a);

  const NEWS_TAGS = ["All", ...Array.from(new Set(ANNOUNCEMENTS.map(a => a.tag)))];
  const filteredAnnouncements = state.newsFilter === "All" ? ANNOUNCEMENTS : ANNOUNCEMENTS.filter(a => a.tag === state.newsFilter);
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  const recentNews = filteredAnnouncements.filter(a => new Date(a.date + "T12:00:00") >= threeMonthsAgo);
  const archivedNews = filteredAnnouncements.filter(a => new Date(a.date + "T12:00:00") < threeMonthsAgo);
  const archivedNewsByYear = {};
  archivedNews.forEach(a => {
    const year = new Date(a.date + "T12:00:00").getFullYear();
    if (!archivedNewsByYear[year]) archivedNewsByYear[year] = [];
    archivedNewsByYear[year].push(a);
  });
  Object.keys(archivedNewsByYear).forEach(y => archivedNewsByYear[y].sort((a, b) => new Date(b.date) - new Date(a.date)));
  const newsArchiveYears = Object.keys(archivedNewsByYear).sort((a, b) => b - a);

  const activeEvents = EVENTS.filter(isActive);
  const heroEvent = EVENTS.filter(e => !isOver(e)).sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  const hero = activeEvents[0] || heroEvent;

  const mainPad = isMobile ? "16px 14px" : isDesktop ? "24px 32px" : "20px 24px";

  let content = "";

  if (state.selectedEvent) {
    content = `<main style="padding:${mainPad};display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">${renderEventDetail(state.selectedEvent, th)}</main>`;
  } else if (state.selectedNews) {
    content = `<main style="padding:${mainPad};display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">${renderNewsDetail(state.selectedNews, th)}</main>`;
  } else {
    // Hero
    let heroHTML = "";
    if (hero) {
      heroHTML = `<div onclick="selectEvent(${hero.id})" style="background:${th.heroBg(hero.color)};border:1.5px solid ${th.heroBorder(hero.color)};border-radius:${isMobile ? 18 : 24}px;padding:${isMobile ? "20px 18px 16px" : "28px 28px 22px"};cursor:pointer;transition:all 0.3s cubic-bezier(0.25,0.46,0.45,0.94);overflow:hidden;animation:scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94)"
        onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 30px ${hero.color}20';"
        onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='none';">
        <div style="font-size:${isMobile ? 10 : 11}px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:${isMobile ? 6 : 8}px;color:${activeEvents.length > 0 ? "#2ECC71" : hero.color};display:flex;align-items:center;gap:6px">
          ${activeEvents.length > 0
            ? `<span style="width:7px;height:7px;border-radius:50%;background:#2ECC71;display:inline-block;animation:liveDot 2s ease infinite"></span> Happening Now`
            : "\u23F1 Coming Up Next"}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:${isMobile ? 10 : 16}px">
          <div><h2 style="margin:0 0 4px 0;font-size:${isMobile ? 18 : 24}px;font-weight:800;color:${th.text}">${hero.icon} ${esc(hero.title)}</h2>
          <div style="font-size:${isMobile ? 12 : 14}px;color:${th.textMuted};font-weight:500">${formatDateRange(hero.date, hero.endDate)} \u00B7 ${esc(hero.time)}</div></div>
          <span class="countdown" data-date="${hero.date}" data-color="${hero.color}" data-over="false">${renderCountdown(hero.date, hero.color, false, th)}</span>
        </div>
      </div>`;
    }

    // Tabs
    const tabsHTML = `<div style="display:flex;border-bottom:2px solid ${th.tabBorder};margin-top:4px">
      ${["events", "news"].map(tb =>
        `<button onclick="setTab('${tb}')" style="flex:1;padding:11px 0;background:none;border:none;border-bottom:${state.tab === tb ? `2.5px solid ${th.tabActive}` : "2.5px solid transparent"};color:${state.tab === tb ? th.tabActive : th.tabInactive};font-size:13px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:1px;transition:all 0.15s ease;font-family:inherit">${tb === "events" ? `\uD83D\uDCC5 Events (${upcomingEvents.length})` : `\uD83D\uDCE2 News (${filteredAnnouncements.length})`}</button>`
      ).join("")}
    </div>`;

    // Events tab
    let eventsTabHTML = "";
    if (state.tab === "events") {
      const pillsHTML = renderFilterPills(state.filter, EVENT_TYPES, "setFilter", th);
      let listHTML = "";
      if (upcomingEvents.length === 0 && archiveYears.length === 0) {
        listHTML = `<div style="text-align:center;padding:40px;color:${th.textFaint};font-size:14px">No ${state.filter} events scheduled yet.</div>`;
      } else {
        const upcomingHTML = upcomingEvents.map((ev, i) => renderEventCard(ev, i, th)).join("");
        let archiveHTML = "";
        if (archiveYears.length > 0) {
          archiveHTML = `<div style="width:100%;display:flex;flex-direction:column;gap:10px">
            <div style="margin-top:${upcomingEvents.length > 0 ? 12 : 0}px;display:flex;align-items:center;gap:10px">
              <div style="flex:1;height:1px;background:${th.border}"></div>
              <span style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived Events</span>
              <div style="flex:1;height:1px;background:${th.border}"></div>
            </div>
            ${archiveYears.map(year => {
              const items = pastByYear[year];
              const isOpen = !!state.openYears[year];
              const label = state.filter === "All" ? `${items.length} past event${items.length === 1 ? "" : "s"}` : `${items.length} past ${state.filter} event${items.length === 1 ? "" : "s"}`;
              return `<div style="margin-top:${upcomingEvents.length > 0 ? 6 : 0}px">
                <button onclick="toggleYear('${year}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:${isOpen ? "16px 16px 0 0" : "16px"};cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:${th.shadow}">
                  <div style="display:flex;align-items:center;gap:10px">
                    <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#636E72")};display:flex;align-items:center;justify-content:center;font-size:16px">\uD83D\uDCCB</div>
                    <div style="text-align:left"><div style="font-size:15px;font-weight:700;color:${th.text}">${year}</div>
                    <div style="font-size:12px;color:${th.textMuted};font-weight:500">${label}</div></div>
                  </div>
                  <div style="font-size:18px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
                </button>
                ${isOpen ? `<div style="border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                  ${items.map((ev, i) =>
                    `<button onclick="selectEvent(${ev.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease"
                      onmouseenter="this.style.background='${th.surfaceHover}'"
                      onmouseleave="this.style.background='${th.surface}'">
                      <div style="width:34px;height:34px;border-radius:9px;background:${th.accentBg(ev.color)};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">${ev.icon}</div>
                      <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;color:${th.text};line-height:1.3">${esc(ev.title)}</div>
                      <div style="font-size:12px;color:${th.textMuted};margin-top:2px">${formatDate(ev.date)}</div></div>
                      <span style="font-size:10px;font-weight:700;color:${ev.color};background:${th.accentBg(ev.color)};padding:2px 8px;border-radius:20px;flex-shrink:0">${esc(ev.type)}</span>
                    </button>`
                  ).join("")}
                </div>` : ""}
              </div>`;
            }).join("")}
          </div>`;
        }
        listHTML = `<div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;flex-direction:column;gap:${isMobile ? 10 : 14}px;width:100%">${upcomingHTML}</div>
          ${archiveHTML}
        </div>`;
      }
      eventsTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">${pillsHTML}${listHTML}</div>`;
    }

    // News tab
    let newsTabHTML = "";
    if (state.tab === "news") {
      const pillsHTML = renderFilterPills(state.newsFilter, NEWS_TAGS, "setNewsFilter", th);
      let listHTML = "";
      if (recentNews.length === 0 && newsArchiveYears.length === 0) {
        listHTML = `<div style="text-align:center;padding:40px;color:${th.textFaint};font-size:14px">No ${state.newsFilter === "All" ? "" : state.newsFilter + " "}posts yet.</div>`;
      } else {
        const recentHTML = recentNews.map((a, i) => renderAnnouncementCard(a, i, th)).join("");
        let newsArchiveHTML = "";
        if (newsArchiveYears.length > 0) {
          newsArchiveHTML = `<div style="margin-top:${recentNews.length > 0 ? 12 : 0}px;display:flex;align-items:center;gap:10px">
            <div style="flex:1;height:1px;background:${th.border}"></div>
            <span style="font-size:11px;font-weight:700;color:${th.textMuted};letter-spacing:1px;text-transform:uppercase;white-space:nowrap">Archived News</span>
            <div style="flex:1;height:1px;background:${th.border}"></div>
          </div>`;
          newsArchiveHTML += newsArchiveYears.map(year => {
            const items = archivedNewsByYear[year];
            const isOpen = !!state.openNewsYears[year];
            const label = state.newsFilter === "All" ? `${items.length} older post${items.length === 1 ? "" : "s"}` : `${items.length} older ${state.newsFilter} post${items.length === 1 ? "" : "s"}`;
            return `<div style="margin-top:${recentNews.length > 0 ? 6 : 0}px">
              <button onclick="toggleNewsYear('${year}')" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 18px;background:${th.surface};border:1.5px solid ${th.border};border-radius:${isOpen ? "16px 16px 0 0" : "16px"};cursor:pointer;font-family:inherit;transition:all 0.2s ease;box-shadow:${th.shadow}">
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="width:36px;height:36px;border-radius:10px;background:${th.accentBg("#636E72")};display:flex;align-items:center;justify-content:center;font-size:16px">\uD83D\uDCF0</div>
                  <div style="text-align:left"><div style="font-size:15px;font-weight:700;color:${th.text}">${year}</div>
                  <div style="font-size:12px;color:${th.textMuted};font-weight:500">${label}</div></div>
                </div>
                <div style="font-size:18px;color:${th.textMuted};transition:transform 0.2s ease;transform:${isOpen ? "rotate(180deg)" : "rotate(0deg)"}">\u25BE</div>
              </button>
              ${isOpen ? `<div style="border:1.5px solid ${th.border};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;animation:fadeSlideIn 0.25s ease">
                ${items.map((a, i) =>
                  `<button onclick="selectNews(${a.id})" style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:${th.surface};border:none;border-top:${i > 0 ? `1px solid ${th.border}` : "none"};cursor:pointer;text-align:left;width:100%;font-family:inherit;transition:background 0.15s ease"
                    onmouseenter="this.style.background='${th.surfaceHover}'"
                    onmouseleave="this.style.background='${th.surface}'">
                    <span style="font-size:10px;font-weight:700;background:${th.tagBg(a.tag)};color:${th.tagText(a.tag)};padding:3px 8px;border-radius:20px;flex-shrink:0">${esc(a.tag)}</span>
                    <div style="flex:1;min-width:0"><div style="font-size:14px;font-weight:600;color:${th.text};line-height:1.3">${esc(a.title)}</div>
                    <div style="font-size:12px;color:${th.textMuted};margin-top:2px">${formatDate(a.date)}</div></div>
                    <div style="font-size:13px;color:${th.textFaint}">\u2192</div>
                  </button>`
                ).join("")}
              </div>` : ""}
            </div>`;
          }).join("");
        }
        listHTML = `<div style="display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;flex-direction:column;gap:${isMobile ? 8 : 12}px;width:100%">${recentHTML}</div>
          ${newsArchiveHTML}
        </div>`;
      }
      newsTabHTML = `<div style="display:flex;flex-direction:column;gap:14px">${pillsHTML}${listHTML}</div>`;
    }

    content = `<main style="padding:${mainPad};display:flex;flex-direction:column;gap:${isMobile ? 16 : 20}px">
      ${heroHTML}${tabsHTML}${eventsTabHTML}${newsTabHTML}
    </main>`;
  }

  // Header
  const headerHTML = `<header style="padding:${isMobile ? "14px 18px" : "16px 32px"};border-bottom:1.5px solid ${th.border};background:${th.headerBg};backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);position:sticky;top:0;z-index:100;width:100%">
    <div onclick="goHome()" style="cursor:pointer;display:flex;align-items:center;gap:${isMobile ? 10 : 14}px">
      <div style="width:${isMobile ? 34 : 40}px;height:${isMobile ? 34 : 40}px;border-radius:${isMobile ? 9 : 11}px;background:linear-gradient(135deg,#E74C3C,#F39C12);display:flex;align-items:center;justify-content:center;font-size:${isMobile ? 13 : 15}px;color:#fff;font-weight:800;letter-spacing:-0.5px">TW</div>
      <div><div style="font-size:${isMobile ? 16 : 20}px;font-weight:800;color:${th.text};letter-spacing:-0.3px;line-height:1.2">${COMMUNITY_NAME}</div>
      <div style="font-size:${isMobile ? 10 : 12}px;color:${th.textMuted};font-weight:500;letter-spacing:0.2px">${COMMUNITY_TAGLINE}</div></div>
    </div>
  </header>`;

  const footerHTML = `<footer style="text-align:center;padding:${isMobile ? "20px 16px" : "28px 24px"};font-size:${isMobile ? 11 : 12}px;color:${th.textFaint};font-weight:500;border-top:1px solid ${th.footerBorder}">
    ${COMMUNITY_NAME} \u00B7 Not affiliated with Niantic, The Pok\u00E9mon Company, or Nintendo
  </footer>`;

  document.getElementById("app").innerHTML = `<div style="min-height:100vh;background:${th.bg};font-family:'Outfit','DM Sans',-apple-system,BlinkMacSystemFont,sans-serif;color:${th.text};width:100%">
    ${headerHTML}${content}${footerHTML}
  </div>`;
}

// --- COUNTDOWN TICK ---
setInterval(() => {
  const th = t(darkMode);
  // Update countdowns in place
  document.querySelectorAll(".countdown").forEach(el => {
    const dateStr = el.dataset.date;
    const color = el.dataset.color;
    const over = el.dataset.over === "true";
    el.innerHTML = renderCountdown(dateStr, color, over, th);
  });
  // Update move deadline banners
  document.querySelectorAll(".move-deadline").forEach(el => {
    const eventId = parseInt(el.dataset.eventId);
    const event = EVENTS.find(e => e.id === eventId);
    if (event) el.innerHTML = renderMoveDeadlineBanner(event, th);
  });
}, 1000);

// Initial render
render();
