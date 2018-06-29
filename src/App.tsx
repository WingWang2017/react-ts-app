import * as React from 'react';

import { Framework7App, Statusbar, Views, View, Pages } from 'framework7-react';

import { observer } from 'mobx-react';

import routes from './routes';

import Login from './pages/login';

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

        <Statusbar />

        <Views>
          <View main={true} id='main-view'>
            <Pages>
              <Login />
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
