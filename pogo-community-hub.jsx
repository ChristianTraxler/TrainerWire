import { useState, useEffect, useMemo, createContext, useContext } from "react";

const COMMUNITY_NAME = "TrainerWire";
const COMMUNITY_TAGLINE = "Your Local Pokémon GO Event Center";

// --- THEME SYSTEM ---
function useDarkMode() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return dark;
}

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 540);
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  if (w >= 1024) return "desktop";
  if (w >= 640) return "tablet";
  return "mobile";
}

const BPCtx = createContext("mobile");
const useBP = () => useContext(BPCtx);

const ThemeCtx = createContext(false);
const useTheme = () => useContext(ThemeCtx);

const t = (dark) => ({
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
    const map = {
      Update: dark ? "#1a2a3a" : "#EBF5FB",
      News: dark ? "#2a1a3a" : "#F5EEF8",
      Meetup: dark ? "#1a2a1a" : "#EAFAF1",
      Alert: dark ? "#2a2218" : "#FDF2E9"
    };
    return map[tag] || map.Update;
  },
  tagText: (tag) => {
    const map = { Update: "#5DADE2", News: "#BB8FCE", Meetup: "#58D68D", Alert: "#F0B27A" };
    if (dark) return map[tag] || map.Update;
    const mapL = { Update: "#2980B9", News: "#8E44AD", Meetup: "#27AE60", Alert: "#E67E22" };
    return mapL[tag] || mapL.Update;
  }
});

// --- EVENT DATA (unchanged from v3) ---
const EVENTS = [
  { id: 1, title: "A Shockingly Good Time", type: "Event", date: "2026-03-31", endDate: "2026-04-06", time: "10:00 AM – 8:00 PM", color: "#F1C40F", icon: "⚡", featured: false, summary: "Electric Pokémon extravaganza with daily Spotlight Hours, boosted Shiny odds for Pikachu, Chinchou, Dedenne, Pawmi, and more.", details: { bosses: ["Pikachu ✨", "Chinchou ✨", "Dedenne ✨", "Pawmi ✨", "Other Electric-types in the wild"], bonuses: ["Daily Spotlight Hour 6–7 PM featuring different Electric-types", "Boosted Shiny rates for event spawns", "Incense lasts twice as long", "GO Pass and GO Pass Deluxe rewards available"], tips: ["Spotlight Hours run every day of this event, not just Tuesday.", "Shiny Dedenne and Pawmi are the big targets — check every one.", "Activate Incense during Spotlight Hours for doubled duration + boosted spawns.", "GO Pass Deluxe is available on the Web Store for premium rewards."] } },
  { id: 2, title: "April Fools 2026", type: "Event", date: "2026-04-01", endDate: null, time: "10:00 AM – 6:00 PM", color: "#9B59B6", icon: "🃏", featured: false, summary: "One-day April Fools surprise event. Expect trick spawns, disguised Pokémon, and limited-time shenanigans.", details: { bosses: ["Surprise spawns and disguised Pokémon (revealed day-of)"], bonuses: ["One-day-only event spawns", "Possible Ditto-themed encounters", "April Fools Field Research tasks"], tips: ["These events are always short — block out a couple hours.", "Keep an eye on social media for real-time spawn reports.", "Ditto often plays a role — catch everything that looks 'normal'.", "Don't transfer unusual catches until you've checked for Ditto."] } },
  { id: 3, title: "Fashion Raid Day", type: "Raid", date: "2026-04-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E91E63", icon: "👗", featured: true, summary: "Costumed Pokémon take over raids! Dragonite, Butterfree, Diglett, Wooper, Sneasel, Kirlia, Absol, Shinx, Croagunk, Blitzle, and Minccino in costume.", details: { bosses: ["Costume Dragonite", "Costume Butterfree", "Costume Diglett", "Costume Wooper", "Costume Sneasel", "Costume Kirlia", "Costume Absol", "Costume Shinx", "Costume Croagunk", "Costume Blitzle", "Costume Minccino"], bonuses: ["Costumed Pokémon in raids for 3 hours", "Ultra Ticket Box $4.99 (ticket + Premium Battle Pass)", "Tickets giftable to Great Friends or higher"], tips: ["Costume Dragonite and Absol are the rarest — prioritize those raids.", "These costumed forms can't evolve — collector items only.", "Ultra Ticket Box is Web Store exclusive.", "Plan a raid route with your group ahead of time."] } },
  // --- HISTORICAL COMMUNITY DAYS (auto-generated from compact data) ---
  ...[
    // 2025
    ["Sprigatito","2025-01-05","Frenzy Plant → Meowscarada","🌱","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Ralts","2025-01-25","Synchronoise → Gardevoir/Gallade","💃","#9B59B6","¼ Hatch Distance"],
    ["Karrablast & Shelmet","2025-02-09","Razor Shell → Escavalier","🐛","#E67E22","3× XP, 2× Candy"],
    ["Fuecoco","2025-03-08","Blast Burn → Skeledirge","🔥","#E74C3C","3× Stardust, 2× Candy"],
    ["CD Classic: Totodile","2025-03-22","Hydro Cannon → Feraligatr","🐊","#3498DB","¼ Hatch Distance"],
    ["Vanillite","2025-04-27","Avalanche → Vanilluxe","🍦","#85C1E9","3× XP, 2× Candy"],
    ["Pawmi","2025-05-11","Brick Break → Pawmot","⚡","#F39C12","¼ Hatch Distance, 2× Candy"],
    ["CD Classic: Machop","2025-05-24","Payback → Machamp","💪","#95A5A6","3× Stardust"],
    ["Jangmo-o","2025-06-21","Clanging Scales → Kommo-o","🐉","#E74C3C","3× XP, 2× Candy"],
    ["CD Classic: Eevee","2025-07-05","Last Resort → Eevee + Eeveelution moves","🦊","#A0522D","¼ Hatch Distance"],
    ["Quaxly","2025-07-20","Hydro Cannon → Quaquaval","🦆","#2980B9","3× Stardust, 2× Candy"],
    ["Rookidee","2025-08-30","Air Cutter → Corviknight","🐦","#5D6D7E","¼ Hatch Distance, 2× Candy"],
    ["Flabébé","2025-09-14","Chilling Water → Florges","🌸","#FF69B4","¼ Hatch Distance, 2× Candy"],
    ["Solosis","2025-10-12","Charm → Reuniclus","🧬","#27AE60","3× Stardust, 2× Candy"],
    ["Pikipek","2025-11-30","Beak Blast → Toucannon","🐦","#E67E22","3× XP, 2× Candy"],
    ["December Recap 2025","2025-12-06","All 2025 CD moves available","🎄","#C0392B","2× XP, 2× Stardust, 2× Candy"],
    // 2024
    ["Rowlet","2024-01-06","Frenzy Plant → Decidueye","🍃","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Porygon","2024-01-20","Tri Attack → Porygon-Z","💠","#E91E63","¼ Hatch Distance"],
    ["Chansey","2024-02-10","Wild Charge → Blissey","🥚","#FF69B4","3× XP, 2× Candy"],
    ["Bellsprout","2024-03-16","Magical Leaf → Victreebel","🌿","#27AE60","3× Stardust, 2× Candy"],
    ["CD Classic: Bagon","2024-04-07","Outrage → Salamence","🐉","#3498DB","¼ Hatch Distance"],
    ["Litten","2024-04-20","Blast Burn → Incineroar","🐱","#E74C3C","3× XP, 2× Candy"],
    ["Bounsweet","2024-05-19","High Jump Kick → Tsareena","🍊","#27AE60","3× Stardust, 2× Candy"],
    ["Goomy","2024-06-09","Thunder Punch → Goodra","🐌","#8E44AD","3× Stardust, 2× Candy"],
    ["CD Classic: Cyndaquil","2024-06-22","Blast Burn → Typhlosion","🔥","#E74C3C","2× Stardust, 2× XP"],
    ["Tynamo","2024-07-21","Volt Switch → Eelektross","⚡","#3498DB","¼ Hatch Distance, 2× Candy"],
    ["Popplio","2024-08-31","Hydro Cannon → Primarina","🎤","#2980B9","3× XP, 2× Candy"],
    ["CD Classic: Beldum","2024-08-18","Meteor Mash → Metagross","⚙️","#95A5A6","¼ Hatch Distance"],
    ["Ponyta & G-Ponyta","2024-09-14","Wild Charge → Rapidash","🐴","#E67E22","3× Stardust, 2× Candy"],
    ["Sewaddle","2024-10-05","Shadow Claw → Leavanny","🍂","#27AE60","¼ Hatch Distance, 2× Candy"],
    ["Mankey","2024-11-10","Rage Fist → Annihilape","🐒","#C0392B","3× XP, 2× Candy"],
    ["December Recap 2024","2024-12-21","All 2024 CD moves available","🎄","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    // 2023
    ["Larvitar","2023-01-21","Smack Down → Tyranitar","🪨","#27AE60","CD Classic"],
    ["Chespin","2023-01-07","Frenzy Plant → Chesnaught","🌰","#27AE60","3× Stardust"],
    ["Noibat","2023-02-05","Boomburst → Noivern","🦇","#8E44AD","3× XP"],
    ["Fennekin","2023-03-04","Blast Burn → Delphox","🦊","#E74C3C","3× Stardust"],
    ["Swinub","2023-04-29","Ancient Power → Mamoswine","🐷","#6D4C41","CD Classic"],
    ["Froakie","2023-05-21","Hydro Cannon → Greninja","🐸","#2980B9","3× Stardust"],
    ["Axew","2023-06-10","Breaking Swipe → Haxorus","🐉","#27AE60","3× XP"],
    ["Squirtle","2023-07-09","Hydro Cannon → Blastoise","🐢","#3498DB","CD Classic"],
    ["Poliwag","2023-08-13","Ice Beam → Poliwrath","🌀","#3498DB","3× Stardust"],
    ["Charmander","2023-09-02","Dragon Breath → Charizard","🔥","#E74C3C","CD Classic"],
    ["Grubbin","2023-09-23","Volt Switch → Vikavolt","⚡","#F39C12","3× XP"],
    ["Timburr","2023-10-15","Brutal Swing → Conkeldurr","💪","#6D4C41","3× Stardust"],
    ["Mareep","2023-11-25","Dragon Pulse → Ampharos","🐑","#F1C40F","CD Classic"],
    ["Wooper & Paldean Wooper","2023-11-05","Aqua Tail → Quagsire","🐟","#3498DB","3× XP"],
    ["December Recap 2023","2023-12-16","All 2023 CD moves available","🎄","#C0392B","2× Candy, 2× Stardust, 2× XP"],
    // 2022
    ["Bulbasaur","2022-01-22","Frenzy Plant → Venusaur","🌱","#27AE60","CD Classic"],
    ["Hoppip","2022-01-16","Acrobatics → Jumpluff","🎈","#FF69B4","3× Stardust"],
    ["Hoppip (Makeup)","2022-02-05","Acrobatics → Jumpluff","🎈","#FF69B4","Makeup Day"],
    ["Sandshrew & A-Sandshrew","2022-03-13","Shadow Claw → Sandslash","🦔","#F39C12","2× Stardust, 3× XP"],
    ["Mudkip","2022-04-10","Hydro Cannon → Swampert","💧","#3498DB","CD Classic"],
    ["Stufful","2022-04-23","Drain Punch → Bewear","🧸","#FF69B4","3× XP"],
    ["Alolan Geodude","2022-05-21","Rollout → A-Golem","🪨","#6D4C41","3× Stardust"],
    ["Deino","2022-06-25","Brutal Swing → Hydreigon","🐉","#2C3E50","3× XP"],
    ["Starly","2022-07-17","Gust → Staraptor","🐦","#95A5A6","3× Stardust"],
    ["Galarian Zigzagoon","2022-08-13","Obstruct → Obstagoon","🦡","#2C3E50","3× XP"],
    ["Roggenrola","2022-09-18","Meteor Beam → Gigalith","🪨","#6D4C41","3× Stardust"],
    ["Litwick","2022-10-15","Poltergeist → Chandelure","🕯️","#8E44AD","3× XP"],
    ["Dratini","2022-11-05","Draco Meteor → Dragonite","🐉","#3498DB","CD Classic"],
    ["Teddiursa","2022-11-12","High Horsepower → Ursaluna","🧸","#6D4C41","3× Stardust"],
    ["December Recap 2022","2022-12-17","All 2022 CD moves available","🎄","#C0392B","2× Candy, 2× Stardust"],
    // 2021
    ["Machop","2021-01-16","Payback → Machamp","💪","#95A5A6","3× Stardust"],
    ["Roselia","2021-02-07","Bullet Seed/Weather Ball → Roserade","🌹","#27AE60","3× Stardust"],
    ["Fletchling","2021-03-06","Incinerate → Talonflame","🐦","#E74C3C","3× XP"],
    ["Snivy","2021-04-11","Frenzy Plant → Serperior","🐍","#27AE60","3× XP"],
    ["Swablu","2021-05-15","Moonblast → Altaria","☁️","#3498DB","3× XP"],
    ["Gible","2021-06-06","Earth Power → Garchomp","🦈","#2C3E50","3× XP"],
    ["Tepig","2021-07-03","Blast Burn → Emboar","🐷","#E74C3C","3× Stardust"],
    ["Eevee","2021-08-14","Last Resort + Eeveelution moves","🦊","#A0522D","2-day event"],
    ["Oshawott","2021-09-19","Hydro Cannon → Samurott","🦦","#2980B9","3× Stardust"],
    ["Duskull","2021-10-09","Shadow Ball → Dusknoir","💀","#8E44AD","3× XP"],
    ["Shinx","2021-11-21","Psychic Fangs → Luxray","⚡","#F1C40F","3× Stardust"],
    ["December Recap 2021","2021-12-18","All 2020–2021 CD moves","🎄","#C0392B","2× Candy, 2× Stardust"],
    // 2020
    ["Piplup","2020-01-19","Hydro Cannon → Empoleon","🐧","#3498DB","3× Stardust"],
    ["Rhyhorn","2020-02-22","Rock Wrecker → Rhyperior","🦏","#6D4C41","3× Stardust"],
    ["Abra","2020-04-25","Counter → Alakazam","🧠","#F1C40F","3× Stardust"],
    ["Seedot","2020-05-24","Bullet Seed → Shiftry","🌰","#27AE60","3× Stardust"],
    ["Weedle","2020-06-20","Drill Run → Beedrill","🐝","#F39C12","3× XP"],
    ["Gastly","2020-07-19","Shadow Punch → Gengar","👻","#8E44AD","3× Stardust"],
    ["Magikarp","2020-08-08","Aqua Tail → Gyarados","🐟","#E74C3C","3× Stardust"],
    ["Porygon","2020-09-20","Tri Attack → Porygon-Z","💠","#E91E63","3× XP"],
    ["Charmander","2020-10-17","Dragon Breath → Charizard","🔥","#E74C3C","3× Stardust"],
    ["Electabuzz","2020-11-15","Flamethrower → Electivire","⚡","#F1C40F","3× Stardust"],
    ["Magmar","2020-11-21","Thunderbolt → Magmortar","🔥","#E74C3C","3× Stardust"],
    ["December Recap 2020","2020-12-12","All 2019–2020 CD moves","🎄","#C0392B","2× Candy"],
    // 2019
    ["Totodile","2019-01-12","Hydro Cannon → Feraligatr","🐊","#3498DB","3× XP"],
    ["Swinub","2019-02-16","Ancient Power → Mamoswine","🐷","#6D4C41","3× Stardust"],
    ["Treecko","2019-03-23","Frenzy Plant → Sceptile","🌿","#27AE60","3× XP"],
    ["Bagon","2019-04-13","Outrage → Salamence","🐉","#3498DB","3× XP"],
    ["Torchic","2019-05-19","Blast Burn → Blaziken","🐔","#E74C3C","3× Stardust"],
    ["Slakoth","2019-06-08","Body Slam → Slaking","🦥","#6D4C41","3× XP"],
    ["Mudkip","2019-07-21","Hydro Cannon → Swampert","💧","#3498DB","3× Stardust"],
    ["Ralts","2019-08-03","Synchronoise → Gardevoir/Gallade","💃","#9B59B6","3× XP"],
    ["Turtwig","2019-09-15","Frenzy Plant → Torterra","🐢","#27AE60","3× Stardust"],
    ["Trapinch","2019-10-12","Earth Power → Flygon","🏜️","#E67E22","3× Stardust"],
    ["Chimchar","2019-11-16","Blast Burn → Infernape","🐵","#E74C3C","3× Stardust"],
    ["December Recap 2019","2019-12-14","All 2018–2019 CD moves","🎄","#C0392B","2× Candy"],
    // 2018
    ["Pikachu","2018-01-20","Surf → Pikachu","⚡","#F1C40F","The original Community Day"],
    ["Dratini","2018-02-24","Draco Meteor → Dragonite","🐉","#3498DB","3× Stardust"],
    ["Bulbasaur","2018-03-25","Frenzy Plant → Venusaur","🌱","#27AE60","3× XP"],
    ["Mareep","2018-04-15","Dragon Pulse → Ampharos","🐑","#F1C40F","3× XP"],
    ["Charmander","2018-05-19","Blast Burn → Charizard","🔥","#E74C3C","3× Stardust"],
    ["Larvitar","2018-06-16","Smack Down → Tyranitar","🪨","#27AE60","3× XP"],
    ["Squirtle","2018-07-08","Hydro Cannon → Blastoise","🐢","#3498DB","3× Stardust"],
    ["Eevee","2018-08-11","Last Resort → Eevee","🦊","#A0522D","2-day event"],
    ["Chikorita","2018-09-22","Frenzy Plant → Meganium","🌿","#27AE60","3× XP"],
    ["Beldum","2018-10-21","Meteor Mash → Metagross","⚙️","#95A5A6","3× Stardust"],
    ["Cyndaquil","2018-11-10","Blast Burn → Typhlosion","🔥","#E74C3C","2× Stardust"],
    ["December Recap 2018","2018-12-01","All 2018 CD moves available","🎄","#C0392B","2× Candy, 2× Stardust, 2× XP"],
  ].map(([title,date,move,icon,color,bonus],i) => ({
    id: 1000+i, title, type: "Community Day", date, endDate: null,
    time: "2:00 PM – 5:00 PM", color, icon, featured: false,
    summary: `${move}. ${bonus}.`,
    details: { bosses: [move], bonuses: [bonus], tips: [] }
  })),
  { id: 50, title: "CD Classic: Piplup", type: "Community Day", date: "2026-01-04", endDate: null, time: "2:00 PM – 5:00 PM", color: "#3498DB", icon: "🐧", featured: false, summary: "Piplup Community Day Classic! Evolve to Empoleon for the exclusive Charged Attack Hydro Cannon.", details: { bosses: ["Empoleon with Hydro Cannon (exclusive Charged Move)"], bonuses: ["¼ Hatch Distance", "3-hour Incense", "1-hour Lure Modules", "Boosted Shiny Piplup rate", "Special Research available for $1.99"], tips: ["Hydro Cannon Empoleon is a solid Water attacker and PvP pick.", "Piplup attracted to Lure Modules have boosted Shiny rates.", "Community Day Classic events revisit fan-favorite Pokémon."] } },
  { id: 51, title: "Community Day: Grookey", type: "Community Day", date: "2026-01-18", endDate: null, time: "2:00 PM – 5:00 PM", color: "#27AE60", icon: "🌱", featured: false, summary: "Grookey takes the spotlight! Evolve to Rillaboom for the exclusive Charged Attack Frenzy Plant.", details: { bosses: ["Rillaboom with Frenzy Plant (exclusive Charged Move)"], bonuses: ["Boosted Shiny Grookey rate", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "Special Background encounters available"], tips: ["Frenzy Plant is the premier Grass Charged Move — Rillaboom benefits hugely.", "First Community Day of 2026 with the new yearly Special Background feature.", "Check in at Community Ambassador events for bonus Timed Research."] } },
  { id: 52, title: "Community Day: Vulpix & Alolan Vulpix", type: "Community Day", date: "2026-02-15", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E67E22", icon: "🦊", featured: false, summary: "Vulpix and Alolan Vulpix share the spotlight! Exclusive moves Energy Ball and Chilling Water.", details: { bosses: ["Ninetales with Energy Ball (exclusive)", "Alolan Ninetales with Chilling Water (exclusive)"], bonuses: ["Both forms spawning in the wild", "Boosted Shiny rates for both Vulpix forms", "3-hour Incense", "Standard Community Day bonuses"], tips: ["Alolan Ninetales with Chilling Water is excellent in PvP Great League.", "Dual-feature Community Days let you hunt two shinies at once.", "Prioritize Alolan Vulpix if you care about PvP meta relevance."] } },
  { id: 53, title: "Community Day: Scorbunny", type: "Community Day", date: "2026-03-14", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E74C3C", icon: "🐰", featured: false, summary: "Scorbunny stars in March! Evolve Raboot to Cinderace for the exclusive Charged Attack Blast Burn.", details: { bosses: ["Cinderace with Blast Burn (exclusive Charged Move)"], bonuses: ["¼ Egg Hatch Distance", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "Extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Blast Burn is the best Fire Charged Move — makes Cinderace a solid Fire attacker.", "Evolve within 5 hours after the event ends to get the exclusive move.", "Overlaps with Pokémon Pokopia Celebration Event — double-dip on bonuses."] } },
  { id: 4, title: "Community Day: Tinkatink", type: "Community Day", date: "2026-04-11", endDate: null, time: "2:00 PM – 5:00 PM", color: "#E84393", icon: "🔨", featured: true, summary: "Tinkatink takes the spotlight! Evolve to Tinkaton for the exclusive Charged Attack Gigaton Hammer.", details: { bosses: ["Tinkaton with Gigaton Hammer (exclusive Charged Move)"], bonuses: ["3× Catch Stardust", "2× Catch Candy", "2× chance for Candy XL", "3-hour Incense", "1-hour Lure Modules (2–9 PM)", "1 extra Special Trade (2–9 PM)", "50% less Trade Stardust cost (2–9 PM)"], tips: ["Evolve Tinkatuff during the event or up to 4 hours after (by 9 PM) for Gigaton Hammer.", "Stack Star Pieces with the 3× Stardust bonus — one of the best dust events.", "Tinkatink with Special Backgrounds from Field Research and Lure Modules.", "Take snapshots for Tinkatink photobomb encounters."] } },
  { id: 54, title: "Community Day: May 2026", type: "Community Day", date: "2026-05-09", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "❓", featured: false, summary: "May Community Day — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA"], bonuses: ["Standard Community Day bonuses expected", "Exclusive move for final evolution", "Boosted Shiny rate"], tips: ["Date is locked in — mark your calendar.", "Featured Pokémon usually announced 2–4 weeks before.", "Start stockpiling Poké Balls and Star Pieces."] } },
  { id: 55, title: "CD Classic: May 2026", type: "Community Day", date: "2026-05-16", endDate: null, time: "2:00 PM – 5:00 PM", color: "#636E72", icon: "🔄", featured: false, summary: "May Community Day Classic — date confirmed, featured Pokémon to be announced.", details: { bosses: ["Featured Pokémon: TBA (past Community Day rerun)"], bonuses: ["Standard CD Classic bonuses expected", "Exclusive move available again"], tips: ["CD Classics bring back Pokémon and moves from past Community Days.", "Great chance to get an exclusive move you missed."] } },
  { id: 5, title: "Sustainability Week 2026", type: "Event", date: "2026-04-14", endDate: "2026-04-20", time: "10:00 AM – 8:00 PM", color: "#27AE60", icon: "🌿", featured: true, summary: "Silicobra debuts! Galarian Corsola wearing pink sunglasses and Shiny Toedscool make first appearances.", details: { bosses: ["Silicobra (debut)", "Galarian Corsola wearing pink sunglasses ✨", "Shiny Toedscool ✨", "Seedot ✨", "Castform ✨", "Wiglett ✨"], bonuses: ["Rotating Route spawns every 2 days", "Boosted Shiny Lapras, Togetic, Castform, Trubbish", "Toedscool in forested/grassy biomes", "Silicobra in desert-like biomes", "GO Pass milestone bonuses"], tips: ["Shiny Toedscool is brand new — check every one.", "Galarian Corsola in sunglasses is a top collector target.", "Route spawns rotate every 2 days — plan your priorities.", "Silicobra evolves into Sandaconda for 50 Candy."] } },
  { id: 6, title: "Replay: Riolu Hatch Day", type: "Event", date: "2026-04-18", endDate: null, time: "11:00 AM – 5:00 PM", color: "#3498DB", icon: "🥚", featured: false, summary: "Riolu Hatch Day returns! Boosted Shiny Riolu odds from eggs.", details: { bosses: ["Riolu ✨ (boosted Shiny from eggs)"], bonuses: ["Riolu eggs with boosted Shiny odds", "Timed Research", "Paid Timed Research for more encounters", "Overlaps with Sustainability Week"], tips: ["Clear egg slots before the event.", "Use Super Incubators during the 6-hour window.", "Shiny Riolu/Lucario is one of the most coveted shinies."] } },
  { id: 7, title: "Replay: GO Bigger", type: "Max Battle", date: "2026-04-25", endDate: null, time: "2:00 PM – 5:00 PM", color: "#8E44AD", icon: "💥", featured: true, summary: "Gigantamax Venusaur, Charizard, Blastoise & Gengar at all Power Spots! Shiny forms available. Max Particle cap raised to 1,600.", details: { bosses: ["Gigantamax Venusaur ✨", "Gigantamax Charizard ✨", "Gigantamax Blastoise ✨", "Gigantamax Gengar ✨"], bonuses: ["Max Particle storage cap raised to 1,600", "8× Max Particles from Power Spots", "2× Max Particles from exploring (12 AM – 5 PM local time)", "¼ Adventuring distance (12 AM – 5 PM local time)", "All Power Spots host Gigantamax Battles with increased refresh rates", "3 Special Trades for the day", "Remote Raid limit increased to 20 (Apr 24 5 PM – Apr 25 8 PM PDT)"], tips: ["Gigantamax Gengar is new to this replay — prioritize if you need it.", "All four Gigantamax forms can be Shiny — check every encounter.", "Paid Timed Research ($4.99) rewards 1 Max Mushroom, 25,000 XP, 6,400 Max Particles, and 2× XP from Max Battles.", "Max Mushrooms temporarily double Dynamax/Gigantamax damage in Max Battles.", "Coordinate 4-player groups for the toughest Gigantamax raids.", "Use Campfire to locate nearby Max Battles."] } },
  { id: 8, title: "Steeled Resolve", type: "Event", date: "2026-04-28", endDate: "2026-05-04", time: "10:00 AM – 8:00 PM", color: "#95A5A6", icon: "🛡️", iconImg: "assets/pokemon-images/National-Dex/regular/Gen-9_Paldea/0968.webp", featured: true, summary: "Orthworm debuts! Steel-type event with Shiny Meltan from Mystery Boxes and GO Pass milestones. 'Taken Over' sub-event begins April 30.", details: { bosses: ["Orthworm (debut) ✨", "Magnemite ✨", "Aron ✨", "Ferroseed ✨", "Pawniard ✨", "Magnemite (Field Research) ✨", "Pineco (Field Research) ✨", "Nosepass (Field Research) ✨", "Bronzor (Field Research) ✨", "Drilbur (Field Research) ✨", "Ferroseed (Field Research) ✨", "Beldum (Field Research - rare) ✨", "Shieldon (Field Research - rare) ✨", "Honedge (1★ Raid) ✨", "Shieldon (1★ Raid) ✨", "Beldum (1★ Raid) ✨", "Orthworm (3★ Raid) ✨", "Meltan (Mystery Box) ✨"], bonuses: ["2× Catch Candy (GO Pass Tier 1 milestone)", "Increased Stardust from Team GO Rocket defeats (GO Pass Tier 2 milestone)", "Reduced Mystery Box cooldown timer", "Shiny Meltan available from Mystery Box during event", "No daily GO Point cap May 2–4"], goPass: { free: ["Encounters with Beldum, Pawniard, Honedge, Meltan, and more Steel-types", "1 Super Rocket Radar", "Mysterious Components and Shadow Shards", "2× Catch Candy (Tier 1 milestone)", "Increased Stardust from Team GO Rocket defeats (Tier 2 milestone)"], deluxe: { price: "$4.99", rewards: ["Everything in the free track", "Extra Steel-type Pokémon encounters", "2 Super Rocket Radars (1 extra)", "Upgraded milestone rewards", "Faster progression through ranks"] }, deluxePlus: { price: "$6.99", rewards: ["Everything in GO Pass Deluxe", "Instantly skip to Rank 7", "Web Store bundle: 10 Ultra Balls, 5 Max Revives, 1 Premium Battle Pass, 5 Max Potions"] } }, tips: ["Orthworm is brand new — catch and raid for candy.", "Use Mystery Box during the event for a shot at Shiny Meltan.", "Beldum and Shieldon are rare Field Research encounters — complete every task.", "Taken Over sub-event begins April 30 — likely Team GO Rocket themed.", "GO Pass Deluxe rewards include Super Rocket Radars and Shadow Shards.", "No GO Point cap May 2–4 — grind milestones that weekend."] } },
  { id: 20, title: "5★ Raid: Regidrago", type: "Raid", date: "2026-04-01", endDate: "2026-04-07", time: "Raid Hour: Wed Apr 1, 6–7 PM", color: "#E74C3C", icon: "🐉", featured: false, summary: "Regidrago in 5-Star Raids. Mega Manectric in Mega Raids. Shadow Latios weekends.", details: { bosses: ["Regidrago (5★)", "Mega Manectric (Mega)", "Shadow Latios (weekends through May 5)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Weak to Fairy, Ice, Dragon.", "Shadow Latios on weekends — bring Purified Gems."] } },
  { id: 21, title: "5★ Raid: Kyogre", type: "Raid", date: "2026-04-08", endDate: "2026-04-14", time: "Raid Hour: Wed Apr 8, 6–7 PM", color: "#2980B9", icon: "🌊", featured: false, summary: "Kyogre returns. Top-tier Water attacker. Mega Aerodactyl in Mega Raids.", details: { bosses: ["Kyogre (5★)", "Mega Aerodactyl (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Top-tier Water attacker — raid heavily.", "Weak to Grass and Electric.", "Shiny Kyogre is a gorgeous pink whale."] } },
  { id: 22, title: "5★ Raid: Groudon", type: "Raid", date: "2026-04-15", endDate: "2026-04-21", time: "Raid Hour: Wed Apr 15, 6–7 PM", color: "#C0392B", icon: "🌋", featured: false, summary: "Groudon returns. Best Ground-type attacker. Mega Alakazam in Mega Raids.", details: { bosses: ["Groudon (5★)", "Mega Alakazam (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Best Ground attacker — prioritize high-IV catches.", "Weak to Water, Grass, Ice.", "Shiny Groudon (golden) is one of the best shinies."] } },
  { id: 23, title: "5★ Raid: Tapu Koko", type: "Raid", date: "2026-04-22", endDate: "2026-04-28", time: "Raid Hour: Wed Apr 22, 6–7 PM", color: "#F39C12", icon: "⚡", featured: false, summary: "Tapu Koko in 5-Star Raids. Electric/Fairy. Mega Sharpedo in Mega Raids.", details: { bosses: ["Tapu Koko (5★)", "Mega Sharpedo (Mega)", "Shadow Latios (weekends)"], bonuses: ["Raid Hour: Wednesday 6–7 PM"], tips: ["Solid PvP pick — Electric/Fairy.", "Weak to Poison and Ground.", "Shiny has black/orange scheme."] } },
  { id: 24, title: "5★ Raid: Tapu Lele", type: "Raid", date: "2026-04-29", endDate: "2026-05-05", time: "Raid Hour: Wed Apr 29, 6–7 PM", color: "#FF6B81", icon: "🦋", featured: false, summary: "Tapu Lele closes April. Mega Banette. Final week for Shadow Latios.", details: { bosses: ["Tapu Lele (5★)", "Mega Banette (Mega)", "Shadow Latios (final week)"], bonuses: ["Raid Hour: Wednesday 6–7 PM", "Last week for Shadow Latios"], tips: ["Final week for Shadow Latios — get raids in before May 5.", "Tapu Lele weak to Ghost, Poison, Steel."] } },
  { id: 29, title: "Max Battle Day: Gigantamax Pikachu", type: "Max Battle", date: "2026-03-28", endDate: null, time: "2:00 PM – 5:00 PM", color: "#F1C40F", icon: "⚡", featured: false, summary: "Gigantamax Pikachu debuted in 6-Star Max Battles! Pikachu caught from Max Battles cannot evolve. Shiny Gigantamax Pikachu was available.", details: { bosses: ["Gigantamax Pikachu (6★ Max Battle debut)", "Shiny Gigantamax Pikachu ✨"], bonuses: ["2× Max Particles from exploring (12 AM – 5 PM)", "Increased Max Particle storage limit", "3 Special Trades for the day", "Power Spots refreshed more frequently", "Gigantamax Pikachu on all Power Spots", "Remote Raid limit increased to 20 (Mar 27 5 PM – Mar 28 8 PM PDT)"], tips: ["Gigantamax Pikachu cannot evolve — it's a standalone collector Pokémon.", "As a pure Electric-type, Ground-type counters were the way to go.", "Paid Timed Research ($4.99) rewarded 1 Max Mushroom, 25,000 XP, 6,400 Max Particles, and 2× XP from Max Battles.", "Coordinating with a full group of 4 was essential for 6-Star difficulty."] } },
  { id: 30, title: "Dynamax Trapinch (Debut)", type: "Max Battle", date: "2026-04-06", endDate: "2026-04-12", time: "Max Monday: 6–7 PM", color: "#E67E22", icon: "🏜️", featured: false, summary: "Dynamax Trapinch debuts at Power Spots.", details: { bosses: ["Dynamax Trapinch (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 6", "Power Spots all week", "Extra Power Spots on Monday"], tips: ["Trapinch evolves into Flygon.", "Max Mondays have more Power Spots."] } },
  { id: 31, title: "Dynamax Drilbur", type: "Max Battle", date: "2026-04-13", endDate: "2026-04-19", time: "Max Monday: 6–7 PM", color: "#6D4C41", icon: "⛏️", featured: false, summary: "Dynamax Drilbur at Power Spots. Excadrill is top-tier.", details: { bosses: ["Dynamax Drilbur"], bonuses: ["Max Monday: 6–7 PM Apr 13", "Power Spots all week"], tips: ["Excadrill is top Ground AND Steel attacker.", "Overlaps with Sustainability Week."] } },
  { id: 32, title: "Dynamax Regirock (Debut)", type: "Max Battle", date: "2026-04-20", endDate: "2026-04-26", time: "Max Monday: 6–7 PM", color: "#D4A574", icon: "🪨", featured: true, summary: "Dynamax Regirock debuts — first Legendary Regi in Dynamax form.", details: { bosses: ["Dynamax Regirock (debut)"], bonuses: ["Max Monday: 6–7 PM Apr 20", "Power Spots all week", "First Dynamax Legendary Regi"], tips: ["Headline event — expect higher difficulty.", "Coordinate with your local group.", "Overlaps with GO Bigger Replay on April 25."] } },
  { id: 33, title: "Dynamax Shuckle", type: "Max Battle", date: "2026-04-27", endDate: "2026-05-03", time: "Max Monday: 6–7 PM", color: "#FF7043", icon: "🐛", featured: false, summary: "Dynamax Shuckle rounds out April. Absurdly tanky.", details: { bosses: ["Dynamax Shuckle"], bonuses: ["Max Monday: 6–7 PM Apr 27"], tips: ["Highest Defense in the game.", "Collector piece more than meta pick."] } },
  { id: 40, title: "GO Fest 2026: Tokyo", type: "GO Fest", date: "2026-05-29", endDate: "2026-06-01", time: "9 AM – 6 PM (Citywide from May 25)", color: "#FF6348", icon: "🗼", featured: true, summary: "GO Fest kicks off in Tokyo! Zeraora debut, Mewtwo raids, costumed Pikachu.", details: { bosses: ["Zeraora (debut)", "Mewtwo (5★ citywide)", "Costumed Pikachu", "All Unown forms"], bonuses: ["Park sessions at Odaiba", "Citywide from May 25", "City Exploration Tickets", "4 City Districts", "GO Expert medal"], tips: ["Zeraora available once per trainer.", "Park tickets $33.", "Mewtwo raids citywide."] } },
  { id: 41, title: "GO Fest 2026: Chicago", type: "GO Fest", date: "2026-06-05", endDate: "2026-06-07", time: "Park Sessions + Citywide (from Jun 4)", color: "#0984E3", icon: "🏙️", featured: false, summary: "GO Fest returns to Grant Park! Spark hosts. Zeraora, Mewtwo.", details: { bosses: ["Zeraora", "Mewtwo (5★)", "Costumed Pikachu", "All Unown forms"], bonuses: ["Citywide from June 4", "Spark coaching", "4 City Districts"], tips: ["Grant Park confirmed 2026 AND 2027.", "Tickets $33 — first-come-first-served."] } },
  { id: 42, title: "GO Fest 2026: Copenhagen", type: "GO Fest", date: "2026-06-12", endDate: "2026-06-14", time: "9 AM – 6 PM CEST (Citywide from Jun 11)", color: "#00B894", icon: "🏰", featured: false, summary: "European GO Fest at Fælledparken! Candela hosts. Shiny Paldean Tauros exclusive.", details: { bosses: ["Zeraora", "Mewtwo (5★)", "Shiny Combat Breed Paldean Tauros", "Arlo encounters"], bonuses: ["Fælledparken park", "Citywide from June 11", "Candela coaching"], tips: ["Shiny Paldean Tauros exclusive to ticket-holding raiders.", "Last in-person Zeraora before Global."] } },
  { id: 43, title: "GO Fest 2026: Global", type: "GO Fest", date: "2026-07-11", endDate: "2026-07-12", time: "10:00 AM – 6:00 PM Local", color: "#6C5CE7", icon: "🌍", featured: true, summary: "Global finale! All trainers worldwide. Zeraora encounters, 10th anniversary.", details: { bosses: ["Zeraora (Special Research)", "Raid bosses TBA", "10th Anniversary Pokémon"], bonuses: ["Global participation", "Special Research", "10th anniversary celebrations"], tips: ["Your chance if you couldn't attend in person.", "Zeraora available globally for the first time."] } }
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

function getCountdown(d) { const diff = new Date(d+"T10:00:00") - new Date(); if (diff <= 0) return null; return { days: Math.floor(diff/864e5), hours: Math.floor((diff%864e5)/36e5), minutes: Math.floor((diff%36e5)/6e4), seconds: Math.floor((diff%6e4)/1000) }; }
function formatDate(d) { return new Date(d+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}); }
function formatDateRange(s,e) { if(!e) return formatDate(s); const a=new Date(s+"T12:00:00"),b=new Date(e+"T12:00:00"); return a.getMonth()===b.getMonth()?`${a.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})} – ${b.toLocaleDateString("en-US",{weekday:"short",day:"numeric"})}`:`${formatDate(s)} – ${formatDate(e)}`; }
function daysUntil(d) { return Math.ceil((new Date(d+"T10:00:00")-new Date())/864e5); }
function parseEndHour(ev) {
  // Extract end time from the time string (e.g. "2:00 PM – 5:00 PM" → 17)
  const m = ev.time && ev.time.match(/–\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (m) {
    let h = parseInt(m[1]);
    const min = parseInt(m[2]);
    const ampm = m[3].toUpperCase();
    if (ampm === "PM" && h !== 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    return { h, min };
  }
  return { h: 23, min: 59 }; // default to end of day
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

function MoveDeadlineBanner({ event }) {
  const th = useTheme();
  const deadline = getMoveDeadline(event);
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  if (!deadline) return null;

  const eventStarted = now >= new Date(event.date + "T00:00:00");
  const diff = deadline - now;
  const deadlinePassed = diff <= 0;
  const eventEndedButWindowOpen = isOver(event) && !deadlinePassed;

  // Only show during or after the event, not before
  if (!eventStarted) return null;

  if (deadlinePassed) {
    return (
      <div style={{
        padding: "12px 16px", borderRadius: 12,
        background: th.accentBgSubtle("#E74C3C"),
        border: `1.5px solid ${"#E74C3C"}30`,
        display: "flex", alignItems: "center", gap: 10
      }}>
        <span style={{ fontSize: 18 }}>🔒</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#E74C3C" }}>Move Window Closed</div>
          <div style={{ fontSize: 12, color: th.textMuted, marginTop: 2 }}>
            Exclusive move requires an Elite TM or the December Community Day recap.
          </div>
        </div>
      </div>
    );
  }

  const hours = Math.floor(diff / 36e5);
  const minutes = Math.floor((diff % 36e5) / 6e4);
  const seconds = Math.floor((diff % 6e4) / 1000);

  return (
    <div style={{
      padding: "12px 16px", borderRadius: 12,
      background: eventEndedButWindowOpen ? th.accentBgSubtle("#E74C3C") : th.accentBgSubtle("#F39C12"),
      border: `1.5px solid ${eventEndedButWindowOpen ? "#E74C3C" : "#F39C12"}30`,
      display: "flex", alignItems: "center", gap: 10
    }}>
      <span style={{ fontSize: 18 }}>{eventEndedButWindowOpen ? "🚨" : "⏰"}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: eventEndedButWindowOpen ? "#E74C3C" : "#F39C12" }}>
          {eventEndedButWindowOpen ? "Evolve Now — Move Window Closing!" : "Exclusive Move Window"}
        </div>
        <div style={{ fontSize: 12, color: th.textSecondary, marginTop: 2 }}>
          Evolve to get the exclusive move before the window closes.
        </div>
      </div>
      <div style={{
        display: "flex", gap: 3, alignItems: "center",
        fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
        fontSize: 15, color: eventEndedButWindowOpen ? "#E74C3C" : "#F39C12",
        fontVariantNumeric: "tabular-nums"
      }}>
        {hours > 0 && <>{String(hours).padStart(2, "0")}h </>}
        {String(minutes).padStart(2, "0")}m {String(seconds).padStart(2, "0")}s
      </div>
    </div>
  );
}

function CountdownTimer({dateStr,color,over}) {
  const th = useTheme();
  const [cd,setCd]=useState(getCountdown(dateStr));
  useEffect(()=>{const i=setInterval(()=>setCd(getCountdown(dateStr)),1000);return()=>clearInterval(i);},[dateStr]);
  if(!cd && over) return <span style={{fontSize:12,color:th.textMuted,fontWeight:600}}>Event Over</span>;
  if(!cd) return <span style={{fontSize:12,color:"#2ECC71",fontWeight:700}}>LIVE NOW</span>;
  return (<div style={{display:"flex",gap:4,alignItems:"center"}}>{[["D",cd.days],["H",cd.hours],["M",cd.minutes],["S",cd.seconds]].map(([l,v],i)=>(<div key={l} style={{display:"flex",alignItems:"center",gap:1}}><div style={{background:th.countdownBg(color),border:`1.5px solid ${th.countdownBorder(color)}`,borderRadius:7,padding:"3px 6px",minWidth:32,textAlign:"center",fontWeight:700,fontSize:14,fontVariantNumeric:"tabular-nums",color,fontFamily:"'JetBrains Mono',monospace",transition:"transform 0.15s ease",animation:l==="S"?"countdownTick 1s ease infinite":"none"}}>{String(v).padStart(2,"0")}</div><span style={{fontSize:9,color:th.textMuted,fontWeight:600}}>{l}</span>{i<3&&<span style={{color:th.border,fontWeight:300,marginLeft:1,fontSize:12}}>:</span>}</div>))}</div>);
}

function EventCard({event,onSelect,index=0}) {
  const th = useTheme();
  const days=daysUntil(event.date),active=isActive(event),isPast=isOver(event);
  return (
    <button onClick={()=>onSelect(event)} style={{display:"flex",flexDirection:"column",gap:12,padding:"18px 18px 16px",background:th.cardBg(active,event.color),border:`1.5px solid ${th.cardBorder(active,event.color)}`,borderRadius:16,cursor:"pointer",textAlign:"left",transition:"all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",opacity:isPast?0.5:1,width:"100%",boxShadow:th.shadow,position:"relative",overflow:"hidden",fontFamily:"inherit",animation:`fadeSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94) ${index*0.06}s both`}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=event.color+"60";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 8px 25px ${event.color}18`;}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor=th.cardBorder(active,event.color);e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=th.shadow;}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${event.color},${event.color}88,${event.color})`,backgroundSize:"200% 100%",animation:"gradientShift 3s ease infinite"}}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:10}}>
        <div style={{display:"flex",alignItems:"center",gap:10,flex:1,minWidth:0}}>
          <div style={{width:40,height:40,borderRadius:11,background:th.accentBg(event.color),display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{event.icon}</div>
          <div style={{minWidth:0}}>
            <h3 style={{margin:0,fontSize:15,fontWeight:700,color:th.text,lineHeight:1.3}}>{event.title}</h3>
            <div style={{display:"flex",gap:6,marginTop:4,alignItems:"center",flexWrap:"wrap"}}>
              <span style={{fontSize:10,fontWeight:700,color:event.color,background:th.accentBg(event.color),padding:"2px 8px",borderRadius:20,letterSpacing:0.3}}>{event.type}</span>
              {active&&<span style={{fontSize:10,fontWeight:700,color:"#fff",background:"#2ECC71",padding:"2px 8px",borderRadius:20,animation:"badgeBounce 2s ease infinite"}}>LIVE</span>}
            </div>
          </div>
        </div>
        {!isPast&&!active&&days<=60&&<div style={{fontSize:11,fontWeight:700,whiteSpace:"nowrap",paddingTop:2,color:days<=3?"#E74C3C":days<=7?"#F39C12":th.textMuted}}>{days===0?"TODAY":days===1?"TOMORROW":`${days}d`}</div>}
      </div>
      <p style={{margin:0,fontSize:13.5,color:th.textSecondary,lineHeight:1.55}}>{event.summary}</p>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
        <div style={{fontSize:12,color:th.textMuted,fontWeight:500}}>📅 {formatDateRange(event.date,event.endDate)} · {event.time}</div>
        {!isPast&&<CountdownTimer dateStr={event.date} color={event.color} over={isPast}/>}
      </div>
    </button>
  );
}

function EventDetail({event,onBack}) {
  const th = useTheme();
  return (
    <div style={{animation:"fadeSlideIn 0.3s ease"}}>
      <button onClick={onBack} style={{display:"inline-flex",alignItems:"center",gap:6,background:"none",border:"none",cursor:"pointer",fontSize:14,color:th.textMuted,fontWeight:500,padding:"4px 0",marginBottom:16,fontFamily:"inherit"}}>← Back</button>
      <div style={{background:th.surface,borderRadius:20,border:`1.5px solid ${th.border}`,overflow:"hidden",boxShadow:th.shadowLg}}>
        <div style={{background:th.detailHeaderBg(event.color),padding:"24px 20px",borderBottom:`2px solid ${th.detailHeaderBorder(event.color)}`}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <div style={{width:50,height:50,borderRadius:14,background:th.accentBg(event.color),border:`2px solid ${th.countdownBorder(event.color)}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>{event.icon}</div>
            <div>
              <div style={{fontSize:10,fontWeight:700,color:event.color,letterSpacing:1.2,textTransform:"uppercase",marginBottom:3,display:"flex",gap:6,alignItems:"center"}}>{event.type}{isActive(event)&&<span style={{background:"#2ECC71",color:"#fff",padding:"1px 7px",borderRadius:20,fontSize:9}}>LIVE NOW</span>}</div>
              <h2 style={{margin:0,fontSize:20,fontWeight:800,color:th.text}}>{event.title}</h2>
            </div>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:14,alignItems:"center"}}>
            <div style={{fontSize:13,color:th.textSecondary,fontWeight:500}}>📅 {formatDateRange(event.date,event.endDate)}</div>
            <div style={{fontSize:13,color:th.textSecondary,fontWeight:500}}>🕐 {event.time}</div>
            <CountdownTimer dateStr={event.date} color={event.color} over={isOver(event)}/>
          </div>
        </div>
        <div style={{padding:"20px 20px 24px",display:"flex",flexDirection:"column",gap:22}}>
          <p style={{margin:0,fontSize:14.5,color:th.textSecondary,lineHeight:1.65}}>{event.summary}</p>
          <MoveDeadlineBanner event={event} />
          {event.details.bosses&&<DetailSection title="Featured Encounters" emoji="🎯" items={event.details.bosses} color={event.color}/>}
          {event.details.bonuses&&<DetailSection title="Active Bonuses" emoji="✨" items={event.details.bonuses} color="#27AE60"/>}
          {event.details.tips&&(<div><h4 style={{margin:"0 0 10px 0",fontSize:13,fontWeight:700,color:th.text,display:"flex",alignItems:"center",gap:8}}><span>💡</span> Trainer Tips</h4><div style={{display:"flex",flexDirection:"column",gap:6}}>{event.details.tips.map((tip,i)=>(<div key={i} style={{padding:"10px 14px",borderRadius:10,background:th.tipBg,border:`1px solid ${th.tipBorder}`,fontSize:13.5,color:th.tipText,lineHeight:1.5}}>{tip}</div>))}</div></div>)}
        </div>
      </div>
    </div>
  );
}

function DetailSection({title,emoji,items,color}) {
  const th = useTheme();
  return (<div><h4 style={{margin:"0 0 8px 0",fontSize:13,fontWeight:700,color:th.text,display:"flex",alignItems:"center",gap:8}}><span>{emoji}</span> {title}</h4><div style={{display:"flex",flexDirection:"column",gap:5}}>{items.map((item,i)=>(<div key={i} style={{display:"flex",alignItems:"baseline",gap:10,padding:"7px 12px",borderRadius:9,background:th.accentBgSubtle(color),fontSize:13.5,color:th.textSecondary,lineHeight:1.45}}><div style={{width:5,height:5,borderRadius:"50%",background:color,flexShrink:0,marginTop:6}}/>{item}</div>))}</div></div>);
}

function NewsDetail({announcement,onBack}) {
  const th = useTheme();
  return (
    <div style={{animation:"fadeSlideIn 0.3s ease"}}>
      <button onClick={onBack} style={{display:"inline-flex",alignItems:"center",gap:6,background:"none",border:"none",cursor:"pointer",fontSize:14,color:th.textMuted,fontWeight:500,padding:"4px 0",marginBottom:16,fontFamily:"inherit"}}>← Back to news</button>
      <div style={{background:th.surface,borderRadius:20,border:`1.5px solid ${th.border}`,overflow:"hidden",boxShadow:th.shadowLg}}>
        <div style={{padding:"24px 20px",borderBottom:`1.5px solid ${th.border}`}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <span style={{fontSize:11,fontWeight:700,background:th.tagBg(announcement.tag),color:th.tagText(announcement.tag),padding:"4px 12px",borderRadius:20,letterSpacing:0.3}}>{announcement.tag}</span>
            <span style={{fontSize:12,color:th.textFaint,fontWeight:500}}>{formatDate(announcement.date)}</span>
          </div>
          <h2 style={{margin:0,fontSize:20,fontWeight:800,color:th.text,lineHeight:1.3}}>{announcement.title}</h2>
        </div>
        <div style={{padding:"20px 20px 24px",display:"flex",flexDirection:"column",gap:20}}>
          <p style={{margin:0,fontSize:14.5,color:th.textSecondary,lineHeight:1.65}}>{announcement.fullBody}</p>
          {announcement.sections&&announcement.sections.map((s,i)=>(<div key={i}><h4 style={{margin:"0 0 10px 0",fontSize:14,fontWeight:700,color:th.text}}>{s.heading}</h4><div style={{display:"flex",flexDirection:"column",gap:5}}>{s.items.map((item,j)=>(<div key={j} style={{display:"flex",alignItems:"baseline",gap:10,padding:"8px 14px",borderRadius:10,background:th.tagBg(announcement.tag),fontSize:13.5,color:th.textSecondary,lineHeight:1.5}}><div style={{width:5,height:5,borderRadius:"50%",background:th.tagText(announcement.tag),flexShrink:0,marginTop:6}}/>{item}</div>))}</div></div>))}
        </div>
      </div>
    </div>
  );
}

function AnnouncementCard({announcement,onSelect,index=0}) {
  const th = useTheme();
  return (
    <button onClick={()=>onSelect(announcement)} style={{padding:"14px 18px",background:th.surface,border:`1.5px solid ${th.border}`,borderRadius:14,display:"flex",flexDirection:"column",gap:7,boxShadow:th.shadow,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:"inherit",transition:"all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",animation:`fadeSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94) ${index*0.06}s both`}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor=th.tagText(announcement.tag)+"40";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 8px 20px rgba(0,0,0,0.08)`;}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor=th.border;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow=th.shadow;}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
        <span style={{fontSize:10,fontWeight:700,background:th.tagBg(announcement.tag),color:th.tagText(announcement.tag),padding:"3px 10px",borderRadius:20,letterSpacing:0.3}}>{announcement.tag}</span>
        <span style={{fontSize:11,color:th.textFaint,fontWeight:500}}>{formatDate(announcement.date)}</span>
      </div>
      <h4 style={{margin:0,fontSize:14,fontWeight:700,color:th.text}}>{announcement.title}</h4>
      <p style={{margin:0,fontSize:13.5,color:th.textSecondary,lineHeight:1.5}}>{announcement.body}</p>
      <div style={{fontSize:12,color:th.tagText(announcement.tag),fontWeight:600,transition:"transform 0.2s ease",display:"inline-flex",alignItems:"center",gap:4}}>Read more <span style={{display:"inline-block",transition:"transform 0.2s ease"}}>→</span></div>
    </button>
  );
}

function FilterPills({active,options,onSelect}) {
  const th = useTheme();
  return (<div style={{display:"flex",gap:7,overflowX:"auto",paddingBottom:4,WebkitOverflowScrolling:"touch",scrollbarWidth:"none"}}>{options.map(opt=>(<button key={opt} onClick={()=>onSelect(opt)} style={{padding:"6px 14px",borderRadius:20,border:active===opt?`1.5px solid ${th.pillActiveBg}`:`1.5px solid ${th.pillBorder}`,background:active===opt?th.pillActiveBg:th.pillBg,color:active===opt?th.pillActiveText:th.pillText,fontSize:12,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.15s ease",fontFamily:"inherit"}}>{opt}</button>))}</div>);
}

function Header({onHome}) {
  const th = useTheme();
  const bp = useBP();
  const isMobile = bp === "mobile";
  return (
    <header style={{padding:isMobile?"14px 18px":"16px 32px",borderBottom:`1.5px solid ${th.border}`,background:th.headerBg,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",position:"sticky",top:0,zIndex:100,width:"100%"}}>
      <div onClick={onHome} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:isMobile?10:14}}>
        <div style={{width:isMobile?34:40,height:isMobile?34:40,borderRadius:isMobile?9:11,background:"linear-gradient(135deg,#E74C3C,#F39C12)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:isMobile?13:15,color:"#fff",fontWeight:800,letterSpacing:-0.5}}>TW</div>
        <div>
          <div style={{fontSize:isMobile?16:20,fontWeight:800,color:th.text,letterSpacing:-0.3,lineHeight:1.2}}>{COMMUNITY_NAME}</div>
          <div style={{fontSize:isMobile?10:12,color:th.textMuted,fontWeight:500,letterSpacing:0.2}}>{COMMUNITY_TAGLINE}</div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const dark = useDarkMode();
  const bp = useBreakpoint();
  const th = t(dark);
  const isMobile = bp === "mobile";
  const isDesktop = bp === "desktop";
  const [selectedEvent,setSelectedEvent]=useState(null);
  const [selectedNews,setSelectedNews]=useState(null);
  const [filter,setFilter]=useState("All");
  const [newsFilter,setNewsFilter]=useState("All");
  const [tab,setTab]=useState("events");
  const [openYears,setOpenYears]=useState({});
  const toggleYear = (y) => setOpenYears(prev => ({...prev, [y]: !prev[y]}));
  const filteredEvents=useMemo(()=>{let s=[...EVENTS].sort((a,b)=>new Date(a.date)-new Date(b.date));if(filter!=="All")s=s.filter(e=>e.type===filter);return s;},[filter]);
  const upcomingEvents = filteredEvents.filter(e => !isOver(e));
  const pastEvents = filteredEvents.filter(e => isOver(e));
  const pastByYear = useMemo(() => {
    const groups = {};
    pastEvents.forEach(ev => {
      const year = new Date(ev.date + "T12:00:00").getFullYear();
      if (!groups[year]) groups[year] = [];
      groups[year].push(ev);
    });
    Object.keys(groups).forEach(y => groups[y].sort((a,b) => new Date(b.date) - new Date(a.date)));
    return groups;
  }, [pastEvents]);
  const archiveYears = Object.keys(pastByYear).sort((a,b) => b - a);
  const NEWS_TAGS = ["All", ...Array.from(new Set(ANNOUNCEMENTS.map(a => a.tag)))];
  const filteredAnnouncements = newsFilter === "All" ? ANNOUNCEMENTS : ANNOUNCEMENTS.filter(a => a.tag === newsFilter);
  const threeMonthsAgo = useMemo(() => { const d = new Date(); d.setMonth(d.getMonth() - 3); return d; }, []);
  const recentNews = filteredAnnouncements.filter(a => new Date(a.date + "T12:00:00") >= threeMonthsAgo);
  const archivedNews = filteredAnnouncements.filter(a => new Date(a.date + "T12:00:00") < threeMonthsAgo);
  const [openNewsYears, setOpenNewsYears] = useState({});
  const toggleNewsYear = (y) => setOpenNewsYears(prev => ({...prev, [y]: !prev[y]}));
  const archivedNewsByYear = useMemo(() => {
    const groups = {};
    archivedNews.forEach(a => {
      const year = new Date(a.date + "T12:00:00").getFullYear();
      if (!groups[year]) groups[year] = [];
      groups[year].push(a);
    });
    Object.keys(groups).forEach(y => groups[y].sort((a,b) => new Date(b.date) - new Date(a.date)));
    return groups;
  }, [archivedNews]);
  const newsArchiveYears = Object.keys(archivedNewsByYear).sort((a,b) => b - a);
  const heroEvent=EVENTS.filter(e=>!isOver(e)).sort((a,b)=>new Date(a.date)-new Date(b.date))[0];
  const activeEvents=EVENTS.filter(isActive);
  const hero=activeEvents[0]||heroEvent;

  const shell = {minHeight:"100vh",background:th.bg,fontFamily:"'Outfit','DM Sans',-apple-system,BlinkMacSystemFont,sans-serif",color:th.text,width:"100%"};
  const main = {padding:isMobile?"16px 14px":isDesktop?"24px 32px":"20px 24px",display:"flex",flexDirection:"column",gap:isMobile?16:20};

  const content = selectedEvent ? (
    <main style={main}><EventDetail event={selectedEvent} onBack={()=>setSelectedEvent(null)}/></main>
  ) : selectedNews ? (
    <main style={main}><NewsDetail announcement={selectedNews} onBack={()=>setSelectedNews(null)}/></main>
  ) : (
    <main style={main}>
      {hero&&(<div onClick={()=>setSelectedEvent(hero)} style={{background:th.heroBg(hero.color),border:`1.5px solid ${th.heroBorder(hero.color)}`,borderRadius:isMobile?18:24,padding:isMobile?"20px 18px 16px":"28px 28px 22px",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",overflow:"hidden",animation:"scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94)"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 12px 30px ${hero.color}20`;}}
        onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}>
        <div style={{fontSize:isMobile?10:11,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:isMobile?6:8,color:activeEvents.length>0?"#2ECC71":hero.color,display:"flex",alignItems:"center",gap:6}}>
          {activeEvents.length>0?(<><span style={{width:7,height:7,borderRadius:"50%",background:"#2ECC71",display:"inline-block",animation:"liveDot 2s ease infinite"}}/> Happening Now</>):"⏱ Coming Up Next"}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:isMobile?10:16}}>
          <div><h2 style={{margin:"0 0 4px 0",fontSize:isMobile?18:24,fontWeight:800,color:th.text}}>{hero.icon} {hero.title}</h2><div style={{fontSize:isMobile?12:14,color:th.textMuted,fontWeight:500}}>{formatDateRange(hero.date,hero.endDate)} · {hero.time}</div></div>
          <CountdownTimer dateStr={hero.date} color={hero.color} over={false}/>
        </div>
      </div>)}
      <div style={{display:"flex",borderBottom:`2px solid ${th.tabBorder}`,marginTop:4}}>
        {["events","news"].map(tb=>(<button key={tb} onClick={()=>setTab(tb)} style={{flex:1,padding:"11px 0",background:"none",border:"none",borderBottom:tab===tb?`2.5px solid ${th.tabActive}`:"2.5px solid transparent",color:tab===tb?th.tabActive:th.tabInactive,fontSize:13,fontWeight:700,cursor:"pointer",textTransform:"uppercase",letterSpacing:1,transition:"all 0.15s ease",fontFamily:"inherit"}}>{tb==="events"?`📅 Events (${upcomingEvents.length})`:`📢 News (${filteredAnnouncements.length})`}</button>))}
      </div>
      {tab==="events"&&(<div style={{display:"flex",flexDirection:"column",gap:14}}>
        <FilterPills active={filter} options={EVENT_TYPES} onSelect={(f)=>{setFilter(f);setOpenYears({});}}/>
        {upcomingEvents.length===0&&archiveYears.length===0?(<div style={{textAlign:"center",padding:40,color:th.textFaint,fontSize:14}}>No {filter} events scheduled yet.</div>):(
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <div style={{display:"flex",flexDirection:"column",gap:isMobile?10:14,width:"100%"}}>
              {upcomingEvents.map((ev,i)=><EventCard key={ev.id} event={ev} onSelect={setSelectedEvent} index={i}/>)}
            </div>
            {(archiveYears.length>0)&&(
              <div style={{width:"100%",display:"flex",flexDirection:"column",gap:10}}>
              <div style={{marginTop:upcomingEvents.length>0?12:0,display:"flex",alignItems:"center",gap:10}}>
                <div style={{flex:1,height:1,background:th.border}}/>
                <span style={{fontSize:11,fontWeight:700,color:th.textMuted,letterSpacing:1,textTransform:"uppercase",whiteSpace:"nowrap"}}>Archived Events</span>
                <div style={{flex:1,height:1,background:th.border}}/>
              </div>
            {archiveYears.map(year=>{
              const items = pastByYear[year];
              const isOpen = !!openYears[year];
              const label = filter === "All" ? `${items.length} past event${items.length===1?"":"s"}` : `${items.length} past ${filter} event${items.length===1?"":"s"}`;
              return (
                <div key={year} style={{marginTop:upcomingEvents.length>0?6:0}}>
                  <button onClick={()=>toggleYear(year)} style={{
                    display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",
                    padding:"14px 18px",background:th.surface,border:`1.5px solid ${th.border}`,
                    borderRadius:isOpen?"16px 16px 0 0":16,cursor:"pointer",fontFamily:"inherit",
                    transition:"all 0.2s ease",boxShadow:th.shadow
                  }}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:36,height:36,borderRadius:10,background:th.accentBg("#636E72"),display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>📋</div>
                      <div style={{textAlign:"left"}}>
                        <div style={{fontSize:15,fontWeight:700,color:th.text}}>{year}</div>
                        <div style={{fontSize:12,color:th.textMuted,fontWeight:500}}>{label}</div>
                      </div>
                    </div>
                    <div style={{fontSize:18,color:th.textMuted,transition:"transform 0.2s ease",transform:isOpen?"rotate(180deg)":"rotate(0deg)"}}>▾</div>
                  </button>
                  {isOpen&&(
                    <div style={{border:`1.5px solid ${th.border}`,borderTop:"none",borderRadius:"0 0 16px 16px",overflow:"hidden",animation:"fadeSlideIn 0.25s ease"}}>
                      {items.map((ev,i)=>(
                        <button key={ev.id} onClick={()=>setSelectedEvent(ev)} style={{
                          display:"flex",alignItems:"center",gap:12,padding:"14px 18px",
                          background:th.surface,border:"none",borderTop:i>0?`1px solid ${th.border}`:"none",
                          cursor:"pointer",textAlign:"left",width:"100%",fontFamily:"inherit",
                          transition:"background 0.15s ease"
                        }}
                          onMouseEnter={e=>{e.currentTarget.style.background=th.surfaceHover;}}
                          onMouseLeave={e=>{e.currentTarget.style.background=th.surface;}}
                        >
                          <div style={{width:34,height:34,borderRadius:9,background:th.accentBg(ev.color),display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0}}>{ev.icon}</div>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:14,fontWeight:600,color:th.text,lineHeight:1.3}}>{ev.title}</div>
                            <div style={{fontSize:12,color:th.textMuted,marginTop:2}}>{formatDate(ev.date)}</div>
                          </div>
                          <span style={{fontSize:10,fontWeight:700,color:ev.color,background:th.accentBg(ev.color),padding:"2px 8px",borderRadius:20,flexShrink:0}}>{ev.type}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            </div>)}
          </div>
        )}
      </div>)}
      {tab==="news"&&(<div style={{display:"flex",flexDirection:"column",gap:14}}>
        <FilterPills active={newsFilter} options={NEWS_TAGS} onSelect={(f)=>{setNewsFilter(f);setOpenNewsYears({});}}/>
        {recentNews.length===0&&newsArchiveYears.length===0?(<div style={{textAlign:"center",padding:40,color:th.textFaint,fontSize:14}}>No {newsFilter==="All"?"":newsFilter+" "}posts yet.</div>):(
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{display:"flex",flexDirection:"column",gap:isMobile?8:12,width:"100%"}}>
              {recentNews.map((a,i)=><AnnouncementCard key={a.id} announcement={a} onSelect={setSelectedNews} index={i}/>)}
            </div>
            {newsArchiveYears.length>0&&(
              <div style={{marginTop:recentNews.length>0?12:0,display:"flex",alignItems:"center",gap:10}}>
                <div style={{flex:1,height:1,background:th.border}}/>
                <span style={{fontSize:11,fontWeight:700,color:th.textMuted,letterSpacing:1,textTransform:"uppercase",whiteSpace:"nowrap"}}>Archived News</span>
                <div style={{flex:1,height:1,background:th.border}}/>
              </div>
            )}
            {newsArchiveYears.map(year=>{
              const items = archivedNewsByYear[year];
              const isOpen = !!openNewsYears[year];
              const label = newsFilter === "All" ? `${items.length} older post${items.length===1?"":"s"}` : `${items.length} older ${newsFilter} post${items.length===1?"":"s"}`;
              return (
                <div key={year} style={{marginTop:recentNews.length>0?6:0}}>
                  <button onClick={()=>toggleNewsYear(year)} style={{
                    display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",
                    padding:"14px 18px",background:th.surface,border:`1.5px solid ${th.border}`,
                    borderRadius:isOpen?"16px 16px 0 0":16,cursor:"pointer",fontFamily:"inherit",
                    transition:"all 0.2s ease",boxShadow:th.shadow
                  }}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:36,height:36,borderRadius:10,background:th.accentBg("#636E72"),display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>📰</div>
                      <div style={{textAlign:"left"}}>
                        <div style={{fontSize:15,fontWeight:700,color:th.text}}>{year}</div>
                        <div style={{fontSize:12,color:th.textMuted,fontWeight:500}}>{label}</div>
                      </div>
                    </div>
                    <div style={{fontSize:18,color:th.textMuted,transition:"transform 0.2s ease",transform:isOpen?"rotate(180deg)":"rotate(0deg)"}}>▾</div>
                  </button>
                  {isOpen&&(
                    <div style={{border:`1.5px solid ${th.border}`,borderTop:"none",borderRadius:"0 0 16px 16px",overflow:"hidden",animation:"fadeSlideIn 0.25s ease"}}>
                      {items.map((a,i)=>(
                        <button key={a.id} onClick={()=>setSelectedNews(a)} style={{
                          display:"flex",alignItems:"center",gap:12,padding:"14px 18px",
                          background:th.surface,border:"none",borderTop:i>0?`1px solid ${th.border}`:"none",
                          cursor:"pointer",textAlign:"left",width:"100%",fontFamily:"inherit",
                          transition:"background 0.15s ease"
                        }}
                          onMouseEnter={e=>{e.currentTarget.style.background=th.surfaceHover;}}
                          onMouseLeave={e=>{e.currentTarget.style.background=th.surface;}}
                        >
                          <span style={{fontSize:10,fontWeight:700,background:th.tagBg(a.tag),color:th.tagText(a.tag),padding:"3px 8px",borderRadius:20,flexShrink:0}}>{a.tag}</span>
                          <div style={{flex:1,minWidth:0}}>
                            <div style={{fontSize:14,fontWeight:600,color:th.text,lineHeight:1.3}}>{a.title}</div>
                            <div style={{fontSize:12,color:th.textMuted,marginTop:2}}>{formatDate(a.date)}</div>
                          </div>
                          <div style={{fontSize:13,color:th.textFaint}}>→</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>)}
    </main>
  );

  return (
    <BPCtx.Provider value={bp}>
    <ThemeCtx.Provider value={th}>
      <div style={shell}>
        <style>{globalCSS}</style>
        <Header onHome={()=>{setSelectedEvent(null);setSelectedNews(null);setTab("events");}}/>
        {content}
        <footer style={{textAlign:"center",padding:isMobile?"20px 16px":"28px 24px",fontSize:isMobile?11:12,color:th.textFaint,fontWeight:500,borderTop:`1px solid ${th.footerBorder}`}}>
          {COMMUNITY_NAME} · Not affiliated with Niantic, The Pokémon Company, or Nintendo
        </footer>
      </div>
    </ThemeCtx.Provider>
    </BPCtx.Provider>
  );
}

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{margin:0;padding:0;width:100%;overflow-x:hidden;-webkit-font-smoothing:antialiased}
  ::-webkit-scrollbar{display:none}

  @keyframes fadeSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
  @keyframes scaleIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
  @keyframes slideDown{from{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes countdownTick{0%{transform:scale(1)}50%{transform:scale(1.08)}100%{transform:scale(1)}}
  @keyframes heroGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0)}50%{box-shadow:0 0 20px 2px rgba(255,255,255,0.05)}}
  @keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes badgeBounce{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
  @keyframes liveDot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:0.4}}

  button:active{transform:scale(0.97)!important}
  button{transition:all 0.2s cubic-bezier(0.25,0.46,0.45,0.94)}
`;
