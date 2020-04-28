"use strict";
/**
 * Created by user on 2018/3/18/018.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeHTML = exports.minifyHTML = void 0;
const minify_1 = require("@jsdom-extra/html-util/minify");
Object.defineProperty(exports, "minifyHTML", { enumerable: true, get: function () { return minify_1.minifyHTML; } });
const normalize_1 = require("@jsdom-extra/html-util/normalize");
Object.defineProperty(exports, "normalizeHTML", { enumerable: true, get: function () { return normalize_1.normalizeHTML; } });
//# sourceMappingURL=html.js.map