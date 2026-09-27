// Guards against duplicate ids in the EVENTS and ANNOUNCEMENTS arrays.
// No framework — run with:  node tests/unique-ids.test.js
// Lookups use Array.find(), so a duplicate id silently opens the wrong card.

const fs = require("fs");
const path = require("path");

const SRC = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

// Walk `const NAME = [ ... ];` in app.js, skipping string and template
// literals, and read each top-level entry's `id:`.
// Text-only on purpose: some entries call app functions when evaluated.
function scanArray(name) {
  const decl = "const " + name + " = [";
  const start = SRC.indexOf(decl);
  if (start === -1) throw new Error("array not found: " + name);
  const entries = [];
  let depth = 0, entryStart = -1;
  for (let i = start + decl.length - 1; i < SRC.length; i++) {
    const ch = SRC[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      for (i++; i < SRC.length && SRC[i] !== ch; i++) if (SRC[i] === "\\") i++;
    } else if (ch === "[" || ch === "{" || ch === "(") {
      depth++;
      if (depth === 2 && ch === "{") entryStart = i;
    } else if (ch === "]" || ch === "}" || ch === ")") {
      if (depth === 2 && ch === "}" && entryStart !== -1) {
        const text = SRC.slice(entryStart, i + 1);
        const id = text.match(/^\{\s*id:\s*(\d+)/);
        const title = (text.match(/title:\s*"([^"]*)"/) || [])[1];
        entries.push({ id: id ? Number(id[1]) : null, title });
        entryStart = -1;
      }
      depth--;
      if (depth === 0) return entries;
    }
  }
  throw new Error("unterminated array: " + name);
}

let passed = 0, failed = 0;
function check(label, ok, detail) {
  if (ok) { passed++; console.log("  ✓ " + label); }
  else { failed++; console.log("  ✗ " + label + (detail ? " — " + detail : "")); }
}

function duplicates(list) {
  const seen = new Map();
  for (const item of list) seen.set(item.id, (seen.get(item.id) || 0) + 1);
  return [...seen].filter(([, n]) => n > 1).map(([id, n]) => id + " (×" + n + ")");
}

const EVENTS = scanArray("EVENTS");
const ANNOUNCEMENTS = scanArray("ANNOUNCEMENTS");

for (const [name, list] of [["EVENTS", EVENTS], ["ANNOUNCEMENTS", ANNOUNCEMENTS]]) {
  console.log(name + " (" + list.length + " entries):");
  const missing = list.filter(e => typeof e.id !== "number");
  check("every entry has a numeric id", missing.length === 0, missing.map(e => e.title).join(", "));
  const dups = duplicates(list);
  check("no duplicate ids", dups.length === 0, "duplicated: " + dups.join(", "));
}

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed ? 1 : 0);
