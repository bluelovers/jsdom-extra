import { JSDOM, CookieJar, FromUrlOptions, toughCookie } from 'jsdom';
import { wrapCookieJarForRequest } from 'jsdom/lib/jsdom/browser/resource-loader';
import { IJSDOM, IOptionsJSDOM, URL } from './pack';
import { Promise } from './index';
import * as parseContentType from 'content-type-parser';
export { wrapCookieJarForRequest, parseContentType };
export { DEFAULT_USER_AGENT } from './const';
export { CookieJar, toughCookie };
export interface ICookieJar extends CookieJar {
    enableLooseMode?: boolean;
    store?: {
        idx?: {};
    };
}
export interface IFromUrlOptions extends Partial<FromUrlOptions & IOptionsJSDOM> {
    requestOptions?: Partial<IRequestOptions>;
    cookieJar?: ICookieJar;
}
export interface IRequestOptionsJSDOM {
    resolveWithFullResponse: boolean;
    encoding: null;
    gzip: boolean;
    headers: {
        "User-Agent": string;
        Referer: string;
        Accept: string;
        "Accept-Language": string;
    };
    jar: IRequestJar;
}
export interface IRequestOptions extends Partial<IRequestOptionsJSDOM> {
    method?: 'POST' | 'GET' | string;
    form?: {
        [key: string]: any;
        [key: number]: any;
    };
}
export interface IRequestJar {
    _jar: ICookieJar;
}
export declare function fromURL(url: string | URL, options?: Partial<IFromUrlOptions>): Promise<IJSDOM>;
export interface IResponse {
    headers: {
        [key: string]: any;
    };
    request: {
        href?;
        [key: string]: any;
    };
    body: any;
}
export declare function requestToJSDOM(res: IResponse, parsedURL: URL | string, options: Partial<IFromUrlOptions>): JSDOM;
export declare function normalizeRequestOptions(options: IFromUrlOptions): Partial<IRequestOptions>;
export declare function normalizeFromURLOptions<T>(options: Partial<T & IFromUrlOptions>): Partial<T & IFromUrlOptions>;
export interface INormalizeHTML {
    html: string;
    encoding: string;
}
import * as self from './from-url';
export default self;
