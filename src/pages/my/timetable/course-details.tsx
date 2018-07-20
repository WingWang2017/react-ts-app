import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, ItemList } from 'src/components';

@observer
export default class CourseDetails extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='CourseDetails'>
        <Header
          back={true}
          center='课程详情'
          right={
            <a href='#' className='link'>课程评价</a>
          } />
        <div className='page-content'>
          <StyledText>通知提醒</StyledText>
          <ul>
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='课程名称：'
              center='接收通知推送' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='学分：'
              center='3.0' />
            <ItemList
              darkColor={true}
              border={false}
              justifyContent='center'
              leftWidth='1.92rem'
              left='总学时：'
              center='76' />
          </ul>
          <StyledText>上课时间/地点：</StyledText>
          <ul>
            <ItemList
              darkColor={true}
              justifyContent='center'
              center='5～18周 星期一 （3～4）节 教学楼230  ' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='教师姓名：'
              center='张大大' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='教师职称：'
              center='教授' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='学年学期：'
              center='2017/2018学年 第一学期' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='课程类别：'
              center='大类基础课程' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='课程性质：'
              center='必修课' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='授课语言：'
              center='中英文' />
            <ItemList
              darkColor={true}
              border={false}
              justifyContent='center'
              leftWidth='1.92rem'
              left='教材语言：'
              center='中英文' />
          </ul>
          <StyledText>授课进度</StyledText>
          <ul>
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='.72rem'
              left='1：'
              center='第01周 星期一 第03、04节' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='.72rem'
              left='2：'
              center='第02周 星期一 第03、04节' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='.72rem'
              left='3：'
              center='第03周 星期一 第03、04节' />
          </ul>
          <StyledText>考核指标</StyledText>
          <ul>
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='作业完成：'
              center='30%' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='期中考试：'
              center='30%' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='期末考试：'
              center='30%' />
            <ItemList
              darkColor={true}
              justifyContent='center'
              leftWidth='1.92rem'
              left='出席情况：'
              center='10%' />
          </ul>
          <StyledText>课程要求</StyledText>
          <StyledCentent>javascript作为前端的利器，上可撸AI，下可写驱动，（好吧，我承认我瞎编的），但是js作为一门弱类型的动态语言，在给我们带来方便的同时，也会悄悄的埋下坑，尤其是在大型项目中，一不小心，就要加班填坑，所以为了愉(早)快(下)工(班)作，我们选择使用eslint作为javascript的语法检查工具，tslint作为TypeScript 的语法检查工具，我们的目标是</StyledCentent>
          <StyledText>备注</StyledText>
          <StyledCentent>沃尔沃我出生地</StyledCentent>
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

const StyledText = Styled.p`
  display: flex;
  align-items: center;
  min-height: .72rem;
  line-height: 1;
  padding: 0 .32rem;
  color: #999;
  font-size: .28rem;
`;

const StyledCentent = Styled.div`
  min-height: 1.76rem;
  padding: .16rem .32rem;
  line-height: 1.5;
  background: #fff;
  font-size: .32rem;
`;
