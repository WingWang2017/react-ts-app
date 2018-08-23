import * as React from 'react';

import { App, Views, View, Statusbar } from 'framework7-react';

import { observer } from 'mobx-react';

import routes from './routes';

import { deviceready } from 'src/utils';

import fetchAjax from 'src/fetch';


// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }


const f7Params = {
  // Array with app routes
  routes,
  // App Name
  name: 'mostyouth',
  // App id
  id: 'com.mostyouth.hdzz',
  // App版本
  version: localStorage.version,
  // App应用主题
  theme: 'ios',
  params: {
    swipeBackPage: true,
    animate: true
  },
  // 状态栏设置
  statusbar: {
    enabled: false,
    iosBackgroundColor: '#81D8D0',
    iosTextColor: 'white'
  },
  // f7自定义方法
  methods: {

  }
};

@observer
class MyApp extends React.Component<{}, {}> {

  public state = {
  };

  public $f7: F7.Dom;
  public $f7ready: (f7: any) => void;

  public render() {
    return (
      <App params={f7Params} >

        <Statusbar />

        <Views>
          <View
            url='/'
            main={true} />
        </Views>

      </App>
    );
  }

  public componentDidMount(): void {

    fetchAjax.getDevice().then((res: Ajax.AjaxResponse) => {
      if (!res.errcode && res.data) {
        localStorage.device_sn = res.data.device_sn;
      }
    });

    this.$f7ready((f7: any): void => {

      // if (localStorage.user) {

      //   const user: any = JSON.parse(localStorage.user);
      //   const hasSchool: boolean = localStorage.hasSchool;

      //   fetchAjax.isToken(user.token).then((res: Ajax.AjaxResponse) => {
      //     if (!res.errcode) {
      //       if (hasSchool && user) {
      //         localStorage.hasSchool = true;
      //         setTimeout(() => {
      //           f7.router.navigate('/home');
      //         }, 100);
      //       }
      //     } else {
      //       f7.router.navigate('/login');
      //     }
      //   });

      // }

      // if (!localStorage.hasSchool) {
      //   f7.router.navigate('/login');
      // }

      setTimeout(() => {
        f7.router.navigate('/classroom/student/questionnaire-test/test-details');
      }, 1000);


    });

    deviceready(() => { this.deviceready(); });

    // this.$f7.$('#root').on('click', (e: any) => {
    //   // alert(e.target.className);
    //   alert(this.$f7.$('.page-content').attr('style'));
    //   console.log(e);
    // });
  }

  private deviceready(): void {

    // alert(`设备型号：${device.model}`);
    // alert(`操作系统名称：${device.platform}`);
    // alert(`设备的通用唯一标识符（UUID）：${device.uuid}`);
    // alert(`操作系统版本：${device.version}`);
    // alert(`设备硬件序列号：${device.serial}`);

    // 获取app的版本号
    cordova.getAppVersion.getVersionNumber((version: any) => {
      localStorage.version = version;
    });

    // 主页面上安卓点击实体键后退直接退出app;
    document.addEventListener('backbutton', () => {
      const page = f7App.f7router.currentRoute.url;
      // const isPage = page === '/home' || page === '/cloudClassroom' || page === '/discover' || page === '/mine' || page === '/login' || page === '/dindInfo' || !page || page === '/';
      // if (isPage) {
      //   navigator['app'].exitApp();
      // } else {
      //   f7App.f7router.back();
      // }
      switch (page) {
        case '/home':
        case '/classroom':
        case '/discover':
        case '/my':
        case '/login':
        case '/dindInfo':
        case '/':
          navigator.app.exitApp();
          break;
        default:
          f7App.f7router.back();
      }
    }, false);
  }
}

// interface IState {

// }

export default MyApp;
