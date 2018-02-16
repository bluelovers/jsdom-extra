/// <reference types="request" />
import * as toughCookie from 'tough-cookie';
export { toughCookie };
import { CookieJar } from 'jsdom';
export { CookieJar };
import { CookieJar as IRequestCookieJarSource } from 'request';
export { IRequestCookieJarSource };
export declare type IRequestCookieJar<T = toughCookie.CookieJar> = IRequestCookieJarSource & {
    _jar?: T;
    store?: toughCookie.Store;
};
export declare const RequestJar: new <T = toughCookie.CookieJar>(store?: toughCookie.Store, options?: toughCookie.CookieJar.Options) => self.IRequestCookieJar<T>;
import { LazyCookieJar } from '../cookies';
import { wrapCookieJarForRequest } from 'jsdom/lib/jsdom/browser/resource-loader';
export declare function wrapCookieJarForRequest(cookieJar: LazyCookieJar): IRequestCookieJar<LazyCookieJar>;
export declare function wrapCookieJarForRequest(cookieJar: CookieJar): IRequestCookieJar<CookieJar>;
export declare function wrapCookieJarForRequest<T>(cookieJar: T): IRequestCookieJar<T>;
export declare function unwrapCookieJarFromRequest<T = CookieJar | LazyCookieJar>(requestJar: IRequestCookieJar<T>): T;
export { wrapCookieJarForRequest };
import * as self from './request-jar';
export default self;