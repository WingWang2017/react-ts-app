
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
  camera: any;
}

declare var navigator: Navigator;

declare var module: NodeModule;

declare var StatusBar: any;
declare var cordova: any;
declare var device: any;
declare var Camera: any;

interface Storage {
  version: string;
  device_sn: string;
  user: string;
  hasSchool: boolean;
}

declare var localStorage: Storage;


interface F7App {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

declare var f7App: F7App;

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

declare namespace F7 {

  export interface Dom {
    $: any;
    router: F7router;
    statusbar: any;
    params: any;
    photoBrowser: any;
    lazy: any;
    tab: any;
  }

  export interface F7router {
    back(args?: any): void;
    load(args?: any): void;
    loadBack(args?: any): void;
    navigate(args?: any): void;
    url: string;
    currentRoute: any;
  }

  export interface F7route {
    params: any;
    path: string;
    query: any;
    route: any;
    url: string;
  }
}
