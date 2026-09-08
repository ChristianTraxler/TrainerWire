// Regression tests for archived-event date formatting.
// No framework — run with:  node tests/date-format.test.js
// Extracts the real date functions out of app.js and evaluates them in a
// sandbox where "now" is controllable, so the tests exercise production code
// and aren't year-dependent (won't start failing in January).

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

const FNS = ["formatDate", "formatDateRange"];

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
function check(desc, actual, expected) {
  const cond = actual === expected;
  if (cond) { passed++; console.log("  ✓ " + desc); }
  else { failed++; console.log("  ✗ " + desc + " — got " + JSON.stringify(actual) + ", expected " + JSON.stringify(expected)); }
}

// "Now" fixed to 2026-09-08 so results aren't year-dependent.
const c = makeContext("2026-09-08T12:00:00");

console.log("Single date, current year (unchanged):");
check("Mon, Oct 12", c.formatDate("2026-10-12"), "Mon, Oct 12");

console.log("Single date, past year (year appended):");
check("Sun, Oct 12, 2025", c.formatDate("2025-10-12"), "Sun, Oct 12, 2025");

console.log("Same-month range, current year (weekday+month repeated on both ends):");
check("Tue, Sep 8 – Sun, Sep 13", c.formatDateRange("2026-09-08", "2026-09-13"), "Tue, Sep 8 – Sun, Sep 13");

console.log("Same-month range, past year (year once, at the end):");
check("Sat, Oct 11 – Mon, Oct 13, 2025", c.formatDateRange("2025-10-11", "2025-10-13"), "Sat, Oct 11 – Mon, Oct 13, 2025");

console.log("Cross-month range, current year (unchanged):");
check("Tue, Sep 29 – Mon, Oct 5", c.formatDateRange("2026-09-29", "2026-10-05"), "Tue, Sep 29 – Mon, Oct 5");

console.log("Cross-month range, past year (year once, at the end):");
check("Sun, Oct 12 – Sat, Nov 1, 2025", c.formatDateRange("2025-10-12", "2025-11-01"), "Sun, Oct 12 – Sat, Nov 1, 2025");

console.log("Range straddling New Year (both years spelled out):");
check("Mon, Dec 1, 2025 – Thu, Jan 1, 2026", c.formatDateRange("2025-12-01", "2026-01-01"), "Mon, Dec 1, 2025 – Thu, Jan 1, 2026");

console.log("Single-day range (s === e), current year (collapses to single date):");
check("Sat, Sep 26", c.formatDateRange("2026-09-26", "2026-09-26"), "Sat, Sep 26");

console.log("Single-day range (s === e), past year (collapses to single date, year appended):");
check("Fri, Sep 26, 2025", c.formatDateRange("2025-09-26", "2025-09-26"), "Fri, Sep 26, 2025");

console.log("endDate null/undefined (same as single-date case):");
check("null endDate, current year", c.formatDateRange("2026-10-12", null), "Mon, Oct 12");
check("undefined endDate, current year", c.formatDateRange("2026-10-12", undefined), "Mon, Oct 12");
check("null endDate, past year", c.formatDateRange("2025-10-12", null), "Sun, Oct 12, 2025");

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
