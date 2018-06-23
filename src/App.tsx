import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
import { Framework7App, Statusbar, Views, View, Pages } from 'framework7-react';

import { observer, inject } from 'mobx-react';

import routes from './routes';

import Login from './pages/login';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

const f7AppConfig = {
  modalTitle: '提示信息',
  modalButtonOk: '确认',
  modalButtonCancel: '取消',
  swipeBackPage: true,
  imagesLazyLoadThreshold: 50,
  // pushState: true
};

@inject('f7')
@observer
class App extends React.Component<{ f7?: any }, IState> {

  public state = {
    index: '1',
    data: []
  };

  public componentDidMount(): void {

  }

  public onFramework7Init = (f7: any): void => {
    this.props.f7.setF7App(f7);
  }

  public onRouteChange = (route: any): void => {
    this.props.f7.setCurrentRoute(route);
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
