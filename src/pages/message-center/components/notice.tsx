import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { ItemList } from 'src/components';

@observer
export default class Notice extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <ul>
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#81D8D0'>学校</StyledDiv>
          }
          center='学校公告学校公告学校公告学校公告学校公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#81D8D0'>学校</StyledDiv>
          }
          center='学校公告学校公告学校公告学校公告学校公告学校公告学校公告学校公告学校公告学校公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#97B3EF'>作业</StyledDiv>
          }
          center='作业成绩公告成绩'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#FF984E'>考试</StyledDiv>
          }
          center='考试公告考试公告考试公告考试公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#F7827C'>请假</StyledDiv>
          }
          center='这是请假审批结果的公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#59C3EF'>互助<br />代办</StyledDiv>
          }
          center='张大大接单了你的互助代办请尽快确认吧！'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#C194F5'>活动</StyledDiv>
          }
          center='这是活动报名成功的公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#81D8D0'>课程</StyledDiv>
          }
          center='这是课程公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#3580C1'>助教</StyledDiv>
          }
          center='这是成为助教的公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#41D0B6'>更新</StyledDiv>
          }
          center='这是app更新的公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#E64340'>举报</StyledDiv>
          }
          center='这是举报结果的公告'
          right={
            <StyledTime>3:24</StyledTime>
          } />
        <ItemList
          darkColor={true}
          ellipsis={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#FFC300'>课件</StyledDiv>
          }
          center='这是老师发布的课件'
          right={
            <StyledTime>3:24</StyledTime>
          } />
      </ul>
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

const StyledDiv = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1 0 .96rem;
  height: .96rem;
  margin-right: .32rem;
  border-radius: 4px;
  background-color: ${props => props.theme || '#81D8D0'};
  font-size: .32rem;
  color: #fff;
`;

const StyledTime = Styled.time`
  height: 100%;
  min-width: 1rem;
  line-height: 1.8;
  text-align: right;
  color: #999;
  font-size: .24rem;
`;
