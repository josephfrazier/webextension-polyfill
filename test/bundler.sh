#!/usr/bin/env bash
set -euo pipefail # http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -x # print commands as they are executed

browserify test/bundler.js -o browserify.js && node browserify.js && rm browserify.js
webpack test/bundler.js webpack.js >/dev/null && node webpack.js && rm webpack.js
