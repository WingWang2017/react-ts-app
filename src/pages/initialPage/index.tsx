import * as React from 'react';

import { observer } from 'mobx-react';

// import { Header } from 'src/components';

@observer
class InitialPage extends React.Component<IProps, {}> {

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

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  forumState: any;
}

// interface IState {
//   user: any;
// }


export default InitialPage;
