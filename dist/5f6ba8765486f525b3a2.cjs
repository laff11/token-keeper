"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _bundle = require("./bundle.cjs");

Object.keys(_bundle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _bundle[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bundle[key];
    }
  });
});
// Copyright 2017-2022 @polkadot/ui-settings authors & contributors
// SPDX-License-Identifier: Apache-2.0
var _default = _bundle.settings;
exports.default = _default;