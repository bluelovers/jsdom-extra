"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toughCookie = require("tough-cookie");
exports.toughCookie = toughCookie;
const jsdom_1 = require("jsdom");
exports.CookieJar = jsdom_1.CookieJar;
const cookies_1 = require("request/lib/cookies");
exports.RequestJar = cookies_1._RequestJar;
const resource_loader_1 = require("jsdom/lib/jsdom/browser/resource-loader");
exports.wrapCookieJarForRequest = resource_loader_1.wrapCookieJarForRequest;
function unwrapCookieJarFromRequest(requestJar) {
    return requestJar._jar;
}
exports.unwrapCookieJarFromRequest = unwrapCookieJarFromRequest;
const self = require("./request-jar");
exports.default = self;