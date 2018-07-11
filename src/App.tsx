import * as React from 'react';

import { App, Views, View, Statusbar } from 'framework7-react';

import { observer } from 'mobx-react';

import routes from './routes';

import { deviceready } from 'src/utils';

import fetchAjax from 'src/fetch';

// import Home from './pages/home';

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

// $$ = Dom7;

const f7Params = {
  // Array with app routes
  routes,
  // App Name
  name: 'mostyouth',
  // App id
  id: 'com.mostyouth.hdzz',
  // App版本
  version: '1.0.0',
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
class MyApp extends React.Component<{}, IState> {

  public state = {
    index: '1',
    data: []
  };

  public $f7: any;

  public $f7router: any;

  public $f7route: any;

  public $f7ready: any;

  public componentDidMount(): void {

    this.$f7ready((f7: any) => {

      if (localStorage.user) {

        const user: any = JSON.parse(localStorage.user);
        const hasSchool: boolean = localStorage.hasSchool;

        fetchAjax.isToken(user.token).then((res: any) => {
          if (!res.errcode) {
            if (hasSchool && user) {
              localStorage.hasSchool = true;
              setTimeout(() => {
                f7.router.navigate('/home');
              }, 100);
            }
          } else {
            f7.router.navigate('/login');
          }
        });

      }

      if (!localStorage.hasSchool) {
        f7.router.navigate('/login');
      }

    });

    fetchAjax.getDevice().then((res: any) => {
      if (!res.errcode && res.data) {
        localStorage.device_sn = res.data.device_sn;
      }
    });

    deviceready(() => {

      alert(`设备型号：${device.model}`);
      alert(`操作系统名称：${device.platform}`);
      alert(`设备的通用唯一标识符（UUID）：${device.uuid}`);
      alert(`操作系统版本：${device.version}`);
      alert(`设备硬件序列号：${device.serial}`);

      // 获取app的版本号
      cordova.getAppVersion.getVersionNumber((version: any) => {
        console.log(version);
      });


      // 主页面上安卓点击实体键后退直接退出app;
      document.addEventListener('backbutton', () => {
        const page = f7App.f7router.currentRoute.url;
        const isPage = page === '/home' || page === '/cloudClassroom' || page === '/discover' || page === '/mine' || page === '/login' || !page || page === '/';
        if (isPage) {
          navigator['app'].exitApp();
        } else {
          f7App.f7router.back();
        }
      }, false);

    });
  }


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
}

interface IState {
  index: string;
  data: any[];
}

export default MyApp;
