/**
 * Created by user on 2018/2/6/006.
 */

import BaseResourceLoader, { IOptionsWithWindowOptionsWithResourceLoader } from '@jsdom-extra/resource-loader';

export * from './lib/pack';

import { LazyCookie } from 'lazy-cookies';
import { LazyCookieJar } from './lib/cookies';

export { LazyCookie, LazyCookieJar }

import { CookieJar, RequestJar, wrapCookieJarForRequest, IRequestCookieJar, requestToJSDOM } from './lib/from-url';
export { CookieJar, RequestJar, wrapCookieJarForRequest, IRequestCookieJar, requestToJSDOM }

import { JSDOM } from './lib/pack';
export { JSDOM }
export default JSDOM;
