import * as React from 'react';

// import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

// import Styled from 'styled-components';

import { Header, Footer, ListItem as MyListItem } from 'src/components';

import {
  xiaoxizhongxin,
  kebiao,
  chengji,
  xiaoyuanrexian,
  peiyangfangan,
  xiaoli,
  qingjiashenqing,
  kechengpingjia,
  xuankezhinan,
  shiguanglvli,
  shujufenxi,
  yijianfankui,
  lianxiwomen
} from 'src/images';

@observer
export default class My extends React.Component<IProps, IState> {

  public state = {

  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page my' data-name='my'>
        <Header
          left={null}
          center='我的'
          right={
            <a href='/message' className='link'>
              设置
            </a>
          } />
        <div className='page-content'>
          <ul>
            <MyListItem link='#' title='消息中心' icon={xiaoxizhongxin} border={false} marginTop={true} marginBottom={true} />
            <MyListItem link='#' title='课表' icon={kebiao} />
            <MyListItem link='#' title='成绩' icon={chengji} />
            <MyListItem link='#' title='校历' icon={xiaoli} />
            <MyListItem link='#' title='培养计划' icon={peiyangfangan} />
            <MyListItem link='#' title='校园热线' icon={xiaoyuanrexian} border={false} marginBottom={true} />
            <MyListItem link='#' title='请假管理' icon={qingjiashenqing} border={false} marginBottom={true} />
            <MyListItem link='#' title='课程评价' icon={kechengpingjia} />
            <MyListItem link='#' title='选课指南' icon={xuankezhinan} />
            <MyListItem link='#' title='时光履历' icon={shiguanglvli} />
            <MyListItem link='#' title='数据分析' icon={shujufenxi} border={false} marginBottom={true} />
            <MyListItem link='#' title='使用说明' icon={yijianfankui} />
            <MyListItem link='#' title='联系我们' icon={lianxiwomen} border={false} marginBottom={true} />
          </ul>
        </div>

        <Footer activedLink={5} />
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
  user?: any;
}
