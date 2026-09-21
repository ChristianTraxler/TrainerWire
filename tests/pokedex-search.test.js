// Regression tests for the PokéDex search box's query matcher.
// No framework — run with:  node tests/pokedex-search.test.js
// Extracts the real pokedexSearchMatches function out of app.js and evaluates it in a
// sandbox with a small stub DEX/DEX_NAMES, so the tests exercise production code.

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

const FNS = ["pokedexSearchMatches"];

// Build a sandbox with a small stub DEX map + DEX_NAMES (sorted the same way app.js
// builds them: Object.keys(DEX).sort()), then evaluate the extracted function against it.
function makeContext() {
  const DEX = {
    Bulbasaur: 1, Pikachu: 25, Raichu: 26, Pichu: 172, "Ho-Oh": 250,
    Celebi: 251, Mewtwo: 150, Mew: 151, Zubat: 41, "Nidoran♀": 29
  };
  const DEX_NAMES = Object.keys(DEX).sort();
  const ctx = { DEX, DEX_NAMES };
  vm.createContext(ctx);
  vm.runInContext(FNS.map(extractFn).join("\n"), ctx);
  return ctx;
}

let passed = 0, failed = 0;
function check(desc, cond) {
  if (cond) { passed++; console.log("  PASS " + desc); }
  else { failed++; console.log("  FAIL " + desc); }
}

function sameOrder(actual, expected) {
  return Array.isArray(actual) && actual.length === expected.length &&
    actual.every((v, i) => v === expected[i]);
}

const c = makeContext();

console.log("Numeric mode:");
check('"25" -> ["Pikachu","Ho-Oh","Celebi"]', sameOrder(c.pokedexSearchMatches("25"), ["Pikachu", "Ho-Oh", "Celebi"]));
check('"#025" -> same as "25"', sameOrder(c.pokedexSearchMatches("#025"), ["Pikachu", "Ho-Oh", "Celebi"]));
check('" 25 " -> same as "25" (trimmed)', sameOrder(c.pokedexSearchMatches(" 25 "), ["Pikachu", "Ho-Oh", "Celebi"]));
check('"1" -> ["Bulbasaur","Mewtwo","Mew","Pichu"]', sameOrder(c.pokedexSearchMatches("1"), ["Bulbasaur", "Mewtwo", "Mew", "Pichu"]));
check('"999" -> []', sameOrder(c.pokedexSearchMatches("999"), []));
check('"#" -> []', sameOrder(c.pokedexSearchMatches("#"), []));

console.log("Name mode:");
check('"pika" -> ["Pikachu"]', sameOrder(c.pokedexSearchMatches("pika"), ["Pikachu"]));
check('"PIKA" -> ["Pikachu"] (case-insensitive)', sameOrder(c.pokedexSearchMatches("PIKA"), ["Pikachu"]));
check('"2x" -> [] (falls through to name mode, no match)', sameOrder(c.pokedexSearchMatches("2x"), []));

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
