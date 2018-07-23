import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

@observer
export default class CourseEvaluation extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='CourseEvaluation'>
        <Header
          back={true}
          center='课程评价'
          right='' />
        <div className='page-content'>
          <ul className='list'>
            <li className='accordion-item'>
              <a href='#' className='item-link accordion-item-title'>
                <div className='item-inner'>
                  2016/2017 第二学期
                </div>
              </a>
              <div className='accordion-item-content'>
                <StyledList>
                  <StyledItem>
                    <StyledTitle>计算机组成原理</StyledTitle>
                    <StyledText>李燕如</StyledText>
                    <StyledText>1-16周 周二3-4节，周三6-8节，教学楼320</StyledText>
                  </StyledItem>
                  <StyledItem>
                    <StyledTitle>毛泽东思想和中国特色社会主义理论体系概论</StyledTitle>
                    <StyledText>李燕如</StyledText>
                    <StyledText>1-16周 周二3-4节，周三6-8节，教学楼320</StyledText>
                  </StyledItem>
                  <StyledItem>
                    <StyledTitle>计算机组成原理</StyledTitle>
                    <StyledText>李燕如</StyledText>
                    <StyledText>1-16周 周二3-4节，周三6-8节，教学楼320</StyledText>
                  </StyledItem>
                </StyledList>
              </div>
            </li>
            <li className='accordion-item'>
              <a href='#' className='item-link accordion-item-title'>
                <div className='item-inner'>
                  2016/2017 第二学期
                </div>
              </a>
              <div className='accordion-item-content'>
                <StyledList>
                  <StyledItem>
                    <StyledTitle>计算机组成原理</StyledTitle>
                    <StyledText>李燕如</StyledText>
                    <StyledText>1-16周 周二3-4节，周三6-8节，教学楼320</StyledText>
                  </StyledItem>
                  <StyledItem>
                    <StyledTitle>毛泽东思想和中国特色社会主义理论体系概论</StyledTitle>
                    <StyledText>李燕如</StyledText>
                    <StyledText>1-16周 周二3-4节，周三6-8节，教学楼320</StyledText>
                  </StyledItem>
                  <StyledItem>
                    <StyledTitle>计算机组成原理</StyledTitle>
                    <StyledText>李燕如</StyledText>
                    <StyledText>1-16周 周二3-4节，周三6-8节，教学楼320</StyledText>
                  </StyledItem>
                </StyledList>
              </div>
            </li>
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

const StyledList = Styled.div`
  margin: .32rem;
`;

const StyledItem = Styled.dl`
  min-height: 1.82rem;
  padding: .16rem .32rem;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  &:not(:last-child) {
    margin-bottom: .16rem;
  }
`;

const StyledTitle = Styled.dt`
  margin-bottom: .16rem;
  font-size: .4rem;
`;

const StyledText = Styled.dd`
  line-height: 1.8;
  font-size: .24rem;
`;
