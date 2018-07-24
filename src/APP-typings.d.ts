
//  <reference path="../typings/index.d.ts" />
//declare const System: any;

// declare module 'why-did-you-update' {
//   export const whyDidYouUpdate: any;
// }

//declare module 'why-did-you-update';
declare module 'qs';
declare module 'framework7/framework7.esm.bundle';
declare module 'framework7-react';
declare module 'react-loadable';
declare module 'react-transition-group';

interface Navigator {
  splashscreen: {
    hide: () => void
  };
  app: {
    exitApp: () => void
  };
}

declare var navigator: Navigator;

declare var module: NodeModule;

declare var StatusBar: any;
declare var cordova: any;
declare var device: any;


declare var f7App: any;

declare namespace Ajax {
  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse
  }

  // 请求接口数据
  export interface AjaxResponse {
    errcode: number,
    data: any,
    msg: string
  }
}
