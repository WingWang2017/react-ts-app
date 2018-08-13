import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

import { fenxiangIcon } from 'src/images';

@observer
export default class Details extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='Details'>
        <Header
          back={true}
          center='2016/2017 第二学期'
          right={
            <a href='#' onClick={this.onShare} >
              <img src={fenxiangIcon} alt='点击分享' className='wpIcon' width='.36rem' />
            </a>
          } />
        <div className='page-content'>
          <ul>
            <StyledList className='border1px'>
              <div className='title'>
                <span className='number'>01</span>
                毛泽东思想和中国特色社会主义理论体系概论Ⅰ
              </div>
              <div className='content'>
                <p><span>性质：</span>必修课</p>
                <p><span>学分：</span>3分</p>
                <p><span>成绩：</span>98分</p>
              </div>
            </StyledList>
            <StyledList className='border1px'>
              <div className='title'>
                <span className='number'>02</span>
                毛泽东思想和中国特色社会主义理论体系概论Ⅰ
              </div>
              <div className='content'>
                <p><span>性质：</span>必修课</p>
                <p><span>学分：</span>3分</p>
                <p><span>成绩：</span>98分</p>
              </div>
            </StyledList>
            <StyledList className='border1px'>
              <div className='title'>
                <span className='number'>03</span>
                毛泽东思想和中国特色社会主义理论体系概论Ⅰ
              </div>
              <div className='content'>
                <p><span>性质：</span>必修课</p>
                <p><span>学分：</span>3分</p>
                <p><span>成绩：</span>98分</p>
              </div>
            </StyledList>
          </ul>
          <StyledDiv>
            <StyledTitle className='border1px'>班主任评语</StyledTitle>
            <StyledCentent>公司内部研发了一套UI框架，在配合ts使用的时候，发现很多方法缺少声明，所以我们需要编写声明文件，官方地址如下</StyledCentent>
          </StyledDiv>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onShare = (): void => {
    import('src/components/share').then(({ default: share }) => {
      share({});
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

// interface IState {
//   user: any;
// }
const StyledList = Styled.li`
  padding: .32rem;
  background-color: #fff;
  font-size: .28rem;

  & span {
    color: #999;
    font-weight: 500;
  }

  & .number {
    width: .44rem;
    margin-right: .08rem;
  }

  & .title {
    width: 100%;
    margin-bottom: .32rem;
  }

  & .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const StyledDiv = Styled.div`
  margin-top: .16rem;
  background-color: #fff;
  min-height: 2rem;
  font-size: .28rem;
`;

const StyledTitle = Styled.div`
  display: flex;
  align-items: center;
  height: 1.05rem;
  padding: 0 .32rem;
  color: #999
`;

const StyledCentent = Styled.div`
  padding: .32rem;
  line-height: 1.6;
`;
