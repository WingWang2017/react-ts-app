import * as React from 'react';

import { observer } from 'mobx-react';

// import { Header } from 'src/components';

@observer
export default class InitialPage extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-name='initialPage'>
        {/* <Header
          left=''
          center=''
          right='' /> */}
      </div>
    );
  }

  public componentDidMount() {
    f7App = {
      f7router: this.props.f7router,
      f7route: this.props.f7route
    };
  }

  public componentWillUnmount(): void {
    document.addEventListener('deviceready', this.deviceready.bind(this), false);
    document.removeEventListener('deviceready', this.deviceready.bind(this), false);
  }

  public deviceready() {
    navigator.splashscreen.hide();
  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }
