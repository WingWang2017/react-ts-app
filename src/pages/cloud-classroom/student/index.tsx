import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

@observer
export default class Student extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='student'>
        <Header
          back={true}
          center='计算机组成原理'
          right={
            <a href='#' title=''>课程详情</a>
          } />
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
