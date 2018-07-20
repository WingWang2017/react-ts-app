import * as React from 'react';

import { observer } from 'mobx-react';

// import { Header } from 'src/components';

@observer
export default class InitialPage extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

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

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

// interface IState {
//   user: any;
// }
