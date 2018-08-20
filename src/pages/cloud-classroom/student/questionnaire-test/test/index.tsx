import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { PageList, CountDown } from 'src/components';

@observer
export default class Test extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <ul>
        <PageList padding='.16rem .32rem' link='/classroom/student/questionnaire-test/test-details'>
          <StyledDiv>
            <div className='title'>第一章 随堂小测</div>
            <div className='title'>s</div>
          </StyledDiv>
          <StyledDiv>
            <div className='text'>10题/总分100 未作答/未公布答案 </div>
            <div className='text'>
              <CountDown time={1534750040} onEndTime={this.onEndTime} />
            </div>
          </StyledDiv>
        </PageList>
        <PageList padding='.16rem .32rem'>
          <StyledDiv>
            <div className='title'>第一章 随堂小测</div>
            <div className='title'>95分</div>
          </StyledDiv>
          <StyledDiv>
            <div className='text'>10题/总分100 未作答/未公布答案 </div>
            <div className='text'>
              <CountDown time={1534761663} onEndTime={this.onEndTime} />
            </div>
          </StyledDiv>
        </PageList>
        <PageList padding='.16rem .32rem'>
          <StyledDiv>
            <div className='title'>第一章 随堂小测</div>
            <div className='title'>95分</div>
          </StyledDiv>
          <StyledDiv>
            <div className='text'>10题/总分100 未作答/未公布答案 </div>
            <div className='text'>
              <CountDown time={1534752269} onEndTime={this.onEndTime} />
            </div>
          </StyledDiv>
        </PageList>
      </ul>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onEndTime = () => {
    console.log('end');
  }

}

interface IProps {
  f7router?: F7.F7router;
  f7route?: F7.F7route;
}

// interface IState {
//   user: any;
// }


const StyledDiv = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: .52rem;

  & .title {
    font-size: .32rem;
  }

  & .text {
    font-size: .24rem;
    color: #999;
  }
`;
