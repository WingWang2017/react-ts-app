import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

@observer
class InitialPage extends React.Component<IProps, IState> {

  public state = {
    user: JSON.parse(localStorage.user)
  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-page='initialPage'>
        <Header
          left='left'
          center='最青春'
          right='right' />
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

interface IState {
  user: any;
}


export default InitialPage;
