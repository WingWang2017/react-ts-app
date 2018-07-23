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
            <a href='#' className='link' onClick={this.onShare} >
              <img src={fenxiangIcon} alt='点击分享' className='wpIcon' width='.36rem' />
            </a>
          } />
        <div className='page-content'>
          <table className='table'>
            <tbody>
              <tr>
                <th />
                <th>性质</th>
                <th>科目名称</th>
                <th>学分</th>
                <th>成绩</th>
              </tr>
              <tr>
                <th>1</th>
                <td>必修课</td>
                <td>毛泽东思想和中国特色社会主义理论体系概论Ⅰ</td>
                <td>3</td>
                <td>98</td>
              </tr>
              <tr>
                <th>2</th>
                <td>必修课</td>
                <td>计算机组成原理</td>
                <td>3</td>
                <td>不及格</td>
              </tr>
              <tr>
                <th>2</th>
                <td>必修课</td>
                <td>计算机组成原理</td>
                <td>3</td>
                <td>不及格</td>
              </tr>
              <tr>
                <th>2</th>
                <td>必修课</td>
                <td>计算机组成原理</td>
                <td>3</td>
                <td>不及格</td>
              </tr>
            </tbody>
          </table>
          <StyledDiv>
            <StyledTitle>班主任评语</StyledTitle>
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
const StyledDiv = Styled.div`
  margin: 0 .32rem;
  background-color: #fff;
  border: 1px solid #999;
  min-height: 2rem;
`;

const StyledTitle = Styled.div`
  display: flex;
  align-items: center;
  height: .56rem;
  padding: 0 .16rem;
  border-bottom: 1px solid #999;
  font-size: .24rem;
  color: #999
`;

const StyledCentent = Styled.div`
  padding: .16rem;
  line-height: 1.5;
  font-size: .32rem;
`;
