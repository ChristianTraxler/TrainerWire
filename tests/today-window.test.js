// Tests for getTodayESTWindow — DST-aware "today in America/New_York" window.
// Run with:  node tests/today-window.test.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SRC = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

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

function makeContext(nowISO) {
  const RealDate = Date;
  const fixedNow = new RealDate(nowISO).getTime();
  class MockDate extends RealDate {
    constructor(...args) { if (args.length === 0) super(fixedNow); else super(...args); }
    static now() { return fixedNow; }
  }
  const ctx = { Date: MockDate, Math, Intl };
  vm.createContext(ctx);
  vm.runInContext(
    extractFn("getTodayESTWindow") + "\n" + extractFn("aggregatePagesByCount"),
    ctx
  );
  return ctx;
}

let passed = 0, failed = 0;
function check(desc, cond) {
  if (cond) { passed++; console.log("  ✓ " + desc); }
  else { failed++; console.log("  ✗ " + desc); }
}

// --- Winter day (EST = UTC-5) ---
console.log("Winter — Jan 15 at 3pm UTC (10am ET):");
{
  const c = makeContext("2026-01-15T15:00:00Z");
  const w = c.getTodayESTWindow();
  check("start is Jan 15 00:00 ET",       w.start === "2026-01-15T00:00:00-05:00");
  check("end   is Jan 16 00:00 ET",       w.end   === "2026-01-16T00:00:00-05:00");
}

console.log("Winter — Jan 15 at 03:00 UTC (Jan 14 10pm ET):");
{
  // 3am UTC on Jan 15 is still Jan 14 in New York.
  const c = makeContext("2026-01-15T03:00:00Z");
  const w = c.getTodayESTWindow();
  check("start rolls back to Jan 14",     w.start === "2026-01-14T00:00:00-05:00");
  check("end   is Jan 15 00:00 ET",       w.end   === "2026-01-15T00:00:00-05:00");
}

// --- Summer day (EDT = UTC-4) ---
console.log("Summer — Jul 4 at 16:00 UTC (12pm ET):");
{
  const c = makeContext("2026-07-04T16:00:00Z");
  const w = c.getTodayESTWindow();
  check("start uses -04:00 offset",       w.start === "2026-07-04T00:00:00-04:00");
  check("end   uses -04:00 offset",       w.end   === "2026-07-05T00:00:00-04:00");
}

// --- DST spring-forward day (Mar 8 2026) ---
console.log("DST spring-forward — Mar 8 2026 noon ET:");
{
  // Noon ET on Mar 8 is 16:00 UTC (already in EDT after the 2am jump).
  const c = makeContext("2026-03-08T16:00:00Z");
  const w = c.getTodayESTWindow();
  check("start is Mar 8 00:00 -05:00 (pre-jump)", w.start === "2026-03-08T00:00:00-05:00");
  check("end   is Mar 9 00:00 -04:00 (post-jump)", w.end   === "2026-03-09T00:00:00-04:00");
}

// --- aggregatePagesByCount ---
console.log("aggregatePagesByCount sorts and groups:");
{
  const c = makeContext("2026-06-04T12:00:00Z");
  const rows = [
    { page: "events" }, { page: "home" }, { page: "events" },
    { page: "events" }, { page: "raids" }, { page: "home" }
  ];
  const out = c.aggregatePagesByCount(rows);
  check("returns sorted desc",  JSON.stringify(out) === JSON.stringify([
    { page: "events", count: 3 },
    { page: "home",   count: 2 },
    { page: "raids",  count: 1 }
  ]));
}

console.log("aggregatePagesByCount handles empty + missing page field:");
{
  const c = makeContext("2026-06-04T12:00:00Z");
  check("empty array → []",     JSON.stringify(c.aggregatePagesByCount([])) === "[]");
  check("missing page skipped", JSON.stringify(c.aggregatePagesByCount([{ page: "" }, { page: null }, { page: "x" }])) ===
                                 JSON.stringify([{ page: "x", count: 1 }]));
}

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
