export declare const KEYS: string[];
import { DOMWindow } from 'jsdom';
import { IConstructorOptions, IJSDOM, JSDOM } from '../pack';
export interface Global extends NodeJS.Global {
    navigator: {
        userAgent: string;
    };
    document: IGlobalDocument;
    window: IGlobalDOMWindow;
    $jsdom: IGlobalJSDOM;
}
export declare type IGlobalDOMWindow = DOMWindow & {
    XMLHttpRequest?: XMLHttpRequest;
};
export declare type IGlobalDocument = Document & {
    destroy?();
};
export declare var global: Global;
export interface IOptions {
    JSDOM: typeof JSDOM;
    createJSDOM(): IJSDOM;
    createJSDOM: IJSDOM;
}
export declare type IGlobalJSDOM = IJSDOM;
export declare function globalJsdom<T>(html?: any, options?: Partial<T & IConstructorOptions & IOptions>): globalJsdom.IReturn;
export declare function cleanup(global: any): void;
export declare namespace globalJsdom {
    interface IReturn {
        jsdom?: IGlobalJSDOM;
        window: IGlobalDOMWindow;
        document: IGlobalDocument;
        cleanup: () => void;
        global?: Global;
        XMLHttpRequest?: XMLHttpRequest;
    }
}
import * as self from './index';
export default self;
