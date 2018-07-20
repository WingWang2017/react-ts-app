import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, LinkList } from 'src/components';

@observer
export default class Result extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='Result'>
        <Header
          back={true}
          center='成绩'
          right={
            <a href='/my/result/gradeTest' className='link'>等级考试</a>
          } />
        <div className='page-content'>
          <ul className='not-border'>
            <LinkList link='/my/result/details' title='2016/2017 第二学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
            <LinkList link='/my/result/details' title='2016/2017 第三学期' />
          </ul>
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
