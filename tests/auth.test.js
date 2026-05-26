// Tests for the admin auth helpers in app.js.
// Run with:  node tests/auth.test.js

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

function makeFakeStorage() {
  const store = new Map();
  return {
    getItem: k => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
    _store: store
  };
}

const ctx = {
  localStorage: makeFakeStorage(),
  ADMIN_SESSION_KEY: "trainerwire_admin_session",
  atob: s => Buffer.from(s, "base64").toString("binary"),
  Date,
  JSON
};
vm.createContext(ctx);

const fns = ["getAdminSession", "setAdminSession", "clearAdminSession", "decodeJwt", "isAdmin", "getAdminEmail"];
for (const name of fns) vm.runInContext(extractFn(name), ctx);

let passed = 0, failed = 0;
function eq(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) { passed++; console.log("  ok   " + label); }
  else { failed++; console.log("  FAIL " + label + "\n    got=" + JSON.stringify(actual) + "\n    exp=" + JSON.stringify(expected)); }
}

// --- decodeJwt ---
function makeJwt(payload) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${header}.${body}.fake-signature`;
}
eq("decodeJwt extracts email", ctx.decodeJwt(makeJwt({ email: "a@b.com" })).email, "a@b.com");
eq("decodeJwt returns null on garbage", ctx.decodeJwt("not.a.jwt"), null);

// --- session lifecycle ---
eq("getAdminSession is null initially", ctx.getAdminSession(), null);
ctx.setAdminSession({
  access_token: makeJwt({ email: "a@b.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) + 3600
});
eq("isAdmin true with valid session", ctx.isAdmin(), true);

// --- expiry ---
ctx.setAdminSession({
  access_token: makeJwt({ email: "a@b.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) - 10
});
eq("isAdmin false when expired", ctx.isAdmin(), false);

// inside the 30-second pre-expiry buffer — still treated as expired
ctx.setAdminSession({
  access_token: makeJwt({ email: "a@b.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) + 20
});
eq("isAdmin false inside 30s pre-expiry buffer", ctx.isAdmin(), false);

// just past the 30-second buffer — should pass
ctx.setAdminSession({
  access_token: makeJwt({ email: "a@b.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) + 60
});
eq("isAdmin true just past 30s buffer", ctx.isAdmin(), true);

// session missing required fields is rejected by getAdminSession
ctx.localStorage.setItem(ctx.ADMIN_SESSION_KEY, JSON.stringify({ access_token: "x" /* no expires_at */ }));
eq("getAdminSession null when expires_at missing", ctx.getAdminSession(), null);
ctx.localStorage.setItem(ctx.ADMIN_SESSION_KEY, JSON.stringify({ expires_at: 123 /* no access_token */ }));
eq("getAdminSession null when access_token missing", ctx.getAdminSession(), null);

// --- getAdminEmail ---
ctx.setAdminSession({
  access_token: makeJwt({ email: "admin@example.com" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) + 3600
});
eq("getAdminEmail returns email when session valid", ctx.getAdminEmail(), "admin@example.com");
ctx.clearAdminSession();
eq("getAdminEmail null with no session", ctx.getAdminEmail(), null);
ctx.setAdminSession({
  access_token: makeJwt({ /* no email claim */ sub: "abc" }),
  refresh_token: "r",
  expires_at: Math.floor(Date.now() / 1000) + 3600
});
eq("getAdminEmail null when JWT lacks email", ctx.getAdminEmail(), null);

// --- logout ---
ctx.clearAdminSession();
eq("clearAdminSession nukes storage", ctx.getAdminSession(), null);
eq("isAdmin false after clear", ctx.isAdmin(), false);

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
