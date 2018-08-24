import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, TestQuestions, Button, CountDown } from 'src/components';

import Styled from 'styled-components';

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

/**
 *
 *
 * @interface IState
 * @enum {index, currIndex}
 */
interface IState {
  index: number;
  currIndex: number;
}


/**
 * 测验的详情页
 *
 * @export
 * @class Details
 * @extends {React.Component<IProps, {}>}
 */
@observer
export default class Details extends React.Component<IProps, IState> {

  public state = {
    index: 0,
    currIndex: 0
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='test-details'>
        <Header
          back={true}
          center='第一章 随堂小测'
          right={
            <button disabled={true}>提交</button>
          } />
        <div className='page-content'>

          <TestHeader data={TEST} onClick={this.onTab} index={this.state.index} />

          <div className='tabs-swipeable-wrap test-content'>

            <TestTabs data={TEST} index={this.state.index} />

            <StyledDiv className='color'>
              <Button content='下一题' onClick={this.onClick} />
            </StyledDiv>

            <StyledFooter>
              <CountDown time={1534761663} onEndTime={this.onEndTime} />
            </StyledFooter>

          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    this.$f7.$('.tab').on('tab:show', (e: any) => {
      const currIndex = parseInt(e.target.id.slice(4), 10);
      if (currIndex === this.state.currIndex) {
        return;
      }
      this.setState({
        currIndex
      });
    });
  }

  public componentWillUnmount(): void {

  }

  /**
   * 根据点击的tab的index显示testTab
   * @param {number} currIndex 当前选择的index
   */
  private onTab = (currIndex: number) => () => {
    if (!this.state.index) {
      this.setState({ index: -1 });
    }
    this.setState({
      currIndex
    });
  }


  /**
   *
   * 点击下一题，显示下一个TastTab
   * @private
   * @memberof Details
   */
  private onClick = (): void => {
    if (!this.state.index) {
      this.setState({ index: -1 });
    }

    if (TEST.length - 1 <= this.state.currIndex) {
      return;
    }

    this.setState((prevState: any) => {
      return { currIndex: prevState.currIndex + 1 };
    }, () => {
      console.log(this.state.currIndex);
      this.$f7.tab.show(`#test${this.state.currIndex}`);
    });

  }


  /**
   *
   *  倒计时结束触发的事件
   * @private
   * @memberof Details
   */
  private onEndTime = () => {

  }

}


/**
 * Test的头部组件
 * @param {any} props
 */
const TestHeader = observer((props: any) => {
  return (
    <div className='test-header tabs'>
      {
        props.data.map((item: any, index: number) => {
          return (
            <a
              key={index}
              href={`#test${index}`}
              className={`tab-link ${index === props.index ? 'tab-link-active' : ''}`}
              onClick={props.onClick(index)}>
              {index + 1}
            </a>
          );
        })
      }
    </div>
  );
});

/**
 * Test的主体组件
 * @param {data} props
 * @param {any} item
 * @param {number} index
 */
const TestTabs = observer((props: any) => {
  return (
    <div className='tabs'>
      {
        props.data.map((item: any, index: number) => {
          return (
            <div
              key={index}
              id={`test${index}`}
              className={`tab ${index === props.index ? 'tab-active' : 'swiper-slide'}`}>
              <TestQuestions />
            </div>
          );
        })
      }
    </div>
  );
});

const TEST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const StyledDiv = Styled.div`
  padding: .8rem .4rem;
`;

const StyledFooter = Styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 .4rem;
`;
