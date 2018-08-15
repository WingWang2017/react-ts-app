import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, ChatFooter } from 'src/components';

@observer
export default class Chat extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page chatPage' data-name='chat'>
        <Header
          back={true}
          center='平凡'
          right='' />
        <div className='page-content'>
          asdasd
        </div>
        <ChatFooter />
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }
