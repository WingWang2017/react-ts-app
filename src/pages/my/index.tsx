import * as React from 'react';

// import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

// import Styled from 'styled-components';

import { Header, Footer, LinkList } from 'src/components';

import Head from './components/head';

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
  // shiguanglvli,
  // shujufenxi,
  yijianfankui,
  lianxiwomen
} from 'src/images';

@inject('userState')
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
            <a href='/my/setting' className='icon-only link icon-only'>
              设置
            </a>
          } />
        <div className='page-content'>
          <Head />
          <ul>
            <LinkList link='/message' title='消息中心' icon={xiaoxizhongxin} border={false} marginTop={true} marginBottom={true} />
            <LinkList link='/my/timetable' title='课表' icon={kebiao} />
            <LinkList link='/my/result' title='成绩' icon={chengji} />
            <LinkList link='#' title='校历' icon={xiaoli} />
            <LinkList link='#' title='培养计划' icon={peiyangfangan} />
            <LinkList link='#' title='校园热线' icon={xiaoyuanrexian} border={false} marginBottom={true} />
            <LinkList link='#' title='请假管理' icon={qingjiashenqing} border={false} marginBottom={true} />
            <LinkList link='#' title='课程评价' icon={kechengpingjia} />
            <LinkList link='#' title='选课指南' icon={xuankezhinan} border={false} marginBottom={true} />
            {/* <LinkList link='#' title='时光履历' icon={shiguanglvli} /> */}
            {/*  <LinkList link='#' title='数据分析' icon={shujufenxi} border={false} marginBottom={true} /> */}
            <LinkList link='#' title='使用说明' icon={yijianfankui} />
            <LinkList link='#' title='联系我们' icon={lianxiwomen} border={false} marginBottom={true} />
          </ul>
        </div>

        <Footer activedLink={5} />
      </div>
    );
  }

  public componentDidMount() {
    console.log(this.props.userState.user);
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  userState: any;
}

interface IState {
  user?: any;
}
