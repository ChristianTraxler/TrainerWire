// Tests for bug report client-side helpers (rate limiter).
// No framework — run with:  node tests/bug-reports.test.js
// Extracts the real `checkBugReportRateLimit` from app.js and evaluates it in
// a vm sandbox so the tests exercise production code without browser globals.

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

const ctx = { MAX_REPORTS_PER_HOUR: 3 };
vm.createContext(ctx);
vm.runInContext(extractFn("checkBugReportRateLimit"), ctx);

let passed = 0, failed = 0;
function eq(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log("  ok   " + label); }
  else { failed++; console.log("  FAIL " + label + "\n    got=" + JSON.stringify(actual) + "\n    exp=" + JSON.stringify(expected)); }
}

const NOW = 1_700_000_000_000;
const MIN = 60 * 1000;

eq("empty history is allowed",
   ctx.checkBugReportRateLimit(NOW, []),
   { allowed: true, count: 0, max: 3 });

eq("null history is allowed",
   ctx.checkBugReportRateLimit(NOW, null),
   { allowed: true, count: 0, max: 3 });

eq("2 in the last hour are allowed",
   ctx.checkBugReportRateLimit(NOW, [NOW - 10*MIN, NOW - 30*MIN]),
   { allowed: true, count: 2, max: 3 });

eq("3 in the last hour are blocked",
   ctx.checkBugReportRateLimit(NOW, [NOW - 5*MIN, NOW - 20*MIN, NOW - 45*MIN]),
   { allowed: false, count: 3, max: 3 });

eq("old entries don't count",
   ctx.checkBugReportRateLimit(NOW, [NOW - 90*MIN, NOW - 120*MIN, NOW - 10*MIN]),
   { allowed: true, count: 1, max: 3 });

eq("1 ms beyond the 60-minute window does not count",
   ctx.checkBugReportRateLimit(NOW, [NOW - 60*MIN - 1]),
   { allowed: true, count: 0, max: 3 });

eq("exactly at the 60-minute boundary still counts (inclusive cutoff)",
   ctx.checkBugReportRateLimit(NOW, [NOW - 60*MIN]),
   { allowed: true, count: 1, max: 3 });

eq("NaN timestamps are ignored",
   ctx.checkBugReportRateLimit(NOW, [NaN, NaN, NaN]),
   { allowed: true, count: 0, max: 3 });

eq("future timestamps fall inside the rolling window",
   ctx.checkBugReportRateLimit(NOW, [NOW + 10*MIN]),
   { allowed: true, count: 1, max: 3 });

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
