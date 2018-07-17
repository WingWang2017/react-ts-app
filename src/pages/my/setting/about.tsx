import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

@observer
export default class About extends React.Component<IProps, {}> {

  public state = {
  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='about'>
        <Header
          back={true}
          center='关于最青春'
          right={null} />
        <div className='page-content'>
          asdadasd
        </div>
      </div>
    );
  }

  public componentDidMount() {
    alert(localStorage.version!);
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

// interface IState {
//   user: any;
// }
