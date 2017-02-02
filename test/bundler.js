"use strict";

global.chrome = {key: "value"};

const assert = require("assert");

// webpack warns (but still works) if this is "../dist/browser-polyfill.js",
// but that's ok because package.json `main` is src/browser-polyfill.js
// so anyone using `import webextension-polyfill` will end up with the src file
const browser = require("../");

assert.equal(browser.key, "value");
