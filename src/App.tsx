import * as React from 'react';

import { Framework7App, Statusbar, Views, View, Pages } from 'framework7-react';

import { observer } from 'mobx-react';

import routes from './routes';

// import Home from './pages/home';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

$$ = Dom7;

const f7AppConfig = {
  modalTitle: '提示信息',
  modalButtonOk: '确认',
  modalButtonCancel: '取消',
  swipeBackPage: true,
  imagesLazyLoadThreshold: 50,
  uniqueHistory: true, // App将保持View的导航历史独一无二，它也将删除重复的页面
  // pushState: true
};

@observer
class App extends React.Component<{}, IState> {

  public state = {
    index: '1',
    data: []
  };

  public componentDidMount(): void {

    if (localStorage.user) {
      const user: any = JSON.parse(localStorage.user);
      const hasSchool: boolean = localStorage.hasSchool;
      if (hasSchool && user) {
        f7App.mainView.router.loadPage({
          url: '/home',
          animatePages: false
        });
      }
    }

    if (!localStorage.hasSchool) {
      f7App.mainView.router.loadPage({
        url: '/login',
        animatePages: false
      });
    }

    // f7App.mainView.router.loadPage({
    //   url: '/home',
    //   animatePages: false
    // });

    this.deviceready();

  }

  public deviceready(): void {
    document.addEventListener('deviceready', () => {

      // 主页面上安卓点击实体键后退直接退出app
      document.addEventListener('backbutton', () => {
        const page = f7App.mainView.url;
        if (page === '/home' || page === '/cloudClassroom' || page === '/discover' || page === '/mine' || page === '/login') {
          navigator['app'].exitApp();
        } else {
          f7App.mainView.router.back();
        }
      }, false);

      // 获取app的版本号
      cordova.getAppVersion.getVersionNumber((version: any) => {
        console.log(version);
      });

    }, false);
  }

  public onFramework7Init = (f7: any): void => {
    f7App = f7;
  }

  public onRouteChange = (route: any): void => {
    currentRoute = route;
  }

  public render() {
    return (
      <Framework7App
        themeType='ios'
        routes={routes}
        onFramework7Init={this.onFramework7Init}
        onRouteChange={this.onRouteChange}
        {...f7AppConfig} >

        <Statusbar theme='#81d8d0' />

        <Views>
          <View main={true} id='main-view'>
            <Pages>
              <div className='page' data-page='page' />
            </Pages>
          </View>
        </Views>

      </Framework7App>
    );
  }
}

interface IState {
  index: string;
  data: any[];
}

export default App;
