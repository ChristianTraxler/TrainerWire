// Regression tests for event start/end countdown logic.
// No framework — run with:  node tests/countdown.test.js
// Extracts the real date functions out of app.js and evaluates them in a
// sandbox where "now" is controllable, so the tests exercise production code.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

// Pull a top-level `function NAME(...) { ... }` block out of app.js by
// brace-matching from its declaration.
function extractFn(name) {
  const start = SRC.indexOf("function " + name + "(");
  if (start === -1) throw new Error("function not found: " + name);
  let depth = 0, i = SRC.indexOf("{", start);
  for (let j = i; j < SRC.length; j++) {
    if (SRC[j] === "{") depth++;
    else if (SRC[j] === "}") { depth--; if (depth === 0) return SRC.slice(start, j + 1); }
  }
  throw new Error("unterminated function: " + name);
}

const FNS = ["parseStartHour", "parseEndHour", "getEventEndDate",
  "getEventStartDate", "isActive", "isOver", "getEndCountdown"];

// Build a sandbox with a Date whose "now" (new Date() with no args) is fixed,
// while new Date(arg) keeps working normally.
function makeContext(nowISO) {
  const RealDate = Date;
  const fixedNow = new RealDate(nowISO).getTime();
  class MockDate extends RealDate {
    constructor(...args) { if (args.length === 0) super(fixedNow); else super(...args); }
    static now() { return fixedNow; }
  }
  const ctx = { Date: MockDate, Math };
  vm.createContext(ctx);
  vm.runInContext(FNS.map(extractFn).join("\n"), ctx);
  return ctx;
}

let passed = 0, failed = 0;
function check(desc, cond) {
  if (cond) { passed++; console.log("  ✓ " + desc); }
  else { failed++; console.log("  ✗ " + desc); }
}

// --- Falinks Super Mega Raid Day: 2-5 PM on May 23, no endDate ---
const falinks = { type: "Raid", date: "2026-05-23", endDate: null, time: "2:00 PM – 5:00 PM" };

console.log("Time-boxed Raid Day (Falinks) AFTER its 5pm end (now = 7:25pm May 23):");
{
  const c = makeContext("2026-05-23T19:25:00");
  check("isOver() is true", c.isOver(falinks) === true);
  check("isActive() is false", c.isActive(falinks) === false);
  check("getEndCountdown() returns null (no time left)", c.getEndCountdown(falinks) === null);
}

console.log("Time-boxed Raid Day (Falinks) DURING window (now = 3:00pm May 23):");
{
  const c = makeContext("2026-05-23T15:00:00");
  check("isActive() is true", c.isActive(falinks) === true);
  const cd = c.getEndCountdown(falinks);
  // end is 5:00:59 PM, so from 3:00:00 PM that's 2h 0m 59s remaining
  check("countdown ~2h left", cd && cd.days === 0 && cd.hours === 2 && cd.minutes === 0);
}

console.log("Time-boxed Raid Day (Falinks) BEFORE window (now = 11:00am May 23):");
{
  const c = makeContext("2026-05-23T11:00:00");
  check("isActive() is false before 2pm start", c.isActive(falinks) === false);
}

// --- Multi-day 5★ rotation boss: stays until 10am the day after endDate ---
const tapuBulu = { type: "Raid", date: "2026-05-20", endDate: "2026-05-26", time: "Raid Hour: Wed May 20, 6–7 PM" };

console.log("Multi-day rotation boss (Tapu Bulu) mid-run (now = May 23 7:25pm):");
{
  const c = makeContext("2026-05-23T19:25:00");
  check("isActive() is true (boss available all run)", c.isActive(tapuBulu) === true);
  check("isOver() is false", c.isOver(tapuBulu) === false);
}

console.log("Multi-day rotation boss (Tapu Bulu) rotates out 10am day after endDate:");
{
  const before = makeContext("2026-05-27T09:00:00"); // before 10am May 27
  check("still active at 9am May 27", before.isActive(tapuBulu) === true);
  const after = makeContext("2026-05-27T10:30:00"); // after 10am May 27
  check("over at 10:30am May 27", after.isOver(tapuBulu) === true);
}

// --- Multi-day Shadow rotation with empty time field ---
const shadowLatios = { type: "Raid", date: "2026-04-04", endDate: "2026-05-05", time: "" };
console.log("Multi-day rotation (Shadow Latios, empty time) ends 10am day after endDate:");
{
  const c = makeContext("2026-05-06T11:00:00");
  check("over at 11am May 6 (day after May 5)", c.isOver(shadowLatios) === true);
  const c2 = makeContext("2026-05-06T09:00:00");
  check("still active at 9am May 6", c2.isActive(shadowLatios) === true);
}

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
