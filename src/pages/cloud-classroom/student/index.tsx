import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Title, LinkList } from 'src/components';

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
            <a href='/my/timetable/courseDetails' title=''>课程详情</a>
          } />
        <div className='page-content'>
          <StyledList>
            <li><a href='/classroom/student/history-attendance'>历史考勤</a></li>
            <li><a href='/classroom/student/course-announcement'>课程公告</a></li>
            <li><a href='/classroom/student/course-resources'>课程资源</a></li>
            <li><a href='/classroom/student/sync-show'>同步放映</a></li>
            <li><a href='#'>问卷测验</a></li>
            <li><a href='#'>教学评价</a></li>
            <li><a href='#'>作业缴交</a></li>
            <li><a href='#'>通讯录</a></li>
          </StyledList>
          <div>
            <Title content='叫醒课题' />
            <ul>
              <LinkList title='1 第一周 星期一 第3～4节' arrow={false} />
              <LinkList title='1 第一周 星期一 第3～4节' arrow={false} />
              <LinkList title='1 第一周 星期一 第3～4节' arrow={false} />
              <LinkList title='1 第一周 星期一 第3～4节' arrow={false} />
              <LinkList title='1 第一周 星期一 第3～4节' arrow={false} />
              <LinkList title='1 第一周 星期一 第3～4节' arrow={false} />
            </ul>
          </div>
        </div>
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

const StyledList = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: .16rem;
  background-color: #fff;

  & li {
    width: 25%;
    height: 1.7rem;
  }

  & a {
    display: block;
    height: 100%;
    padding-top: 1.14rem;
    box-sizing: border-box;
    text-align: center;
    font-size: .24rem;
  }
`;
