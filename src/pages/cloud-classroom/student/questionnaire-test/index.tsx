import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, PageHeader, PageList } from 'src/components';

import { timeLeft } from 'src/utils';

@observer
export default class QuestionnaireTest extends React.Component<IProps, {}> {

  public state = {
    time: 1534228863
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='questionnaire-test'>
        <Header
          back={true}
          center='问卷测验'
          right='' />
        <PageHeader item={[{ title: '测验' }, { title: '问卷' }]} />
        <div className='page-content'>
          <ul>
            <PageList padding='.16rem .32rem'>
              <StyledDiv>
                <div className='title'>第一章 随堂小测</div>
                <div className='title'>s</div>
              </StyledDiv>
              <StyledDiv>
                <div className='text'>10题/总分100 未作答/未公布答案 </div>
                <div className='text'>{timeLeft(this.state.time)}</div>
              </StyledDiv>
            </PageList>
            <PageList padding='.16rem .32rem'>
              <StyledDiv>
                <div className='title'>第一章 随堂小测</div>
                <div className='title'>95分</div>
              </StyledDiv>
              <StyledDiv>
                <div className='text'>10题/总分100 未作答/未公布答案 </div>
                <div className='text'>进行中</div>
              </StyledDiv>
            </PageList>
          </ul>
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
