import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

@observer
export default class GradeTestDetails extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='GradeTestDetails'>
        <Header
          back={true}
          center='等级考试'
          right='' />
        <div className='page-content'>
          <iframe src='http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=280' width='100%' height='100%' frameBorder='0' />
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

// interface IState {
//   user: any;
// }
