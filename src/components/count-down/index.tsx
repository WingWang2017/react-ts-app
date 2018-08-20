import * as React from 'react';

import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import Styled, { css } from 'styled-components';

import { time_icon } from 'src/images';

class Store {

  @observable public state = {
    curr_time: parseInt(new Date().getTime() / 1000 + '', 10),
    end_time: 0,
    rest_time: 0,
    end_date: 0,
    end_hour: 0,
    end_minute: 0,
    end_second: 0
  };

  public time: any;

  @action public setState = (obj: object) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

  @action public start = () => {

    if (this.state.end_time > this.state.curr_time) {

      this.state.rest_time = this.state.end_time - this.state.curr_time;

      this.setState({ rest_time: this.state.rest_time - 1 });
      this.getTime();

      this.time = setInterval(() => {
        this.setState({ rest_time: this.state.rest_time - 1 });
        this.getTime();
        console.log(111);
      }, 1000);
    }

  }

  @action public getTime(): void {
    const { rest_time } = this.state;

    this.state.end_date = parseInt(rest_time / 60 / 60 / 24 + '', 10);
    this.state.end_hour = parseInt(rest_time / 60 / 60 % 24 + '', 10);
    this.state.end_minute = parseInt(rest_time / 60 % 60 + '', 10);
    this.state.end_second = parseInt(rest_time % 60 + '', 10); // 剩余秒数

  }

  @computed public get getTimeStr() {

    const { end_date, end_hour, end_minute, end_second } = this.state;

    if (end_date <= 0) {
      if (end_hour <= 0) {
        if (end_minute <= 0) {
          if (end_second <= 0) {
            clearInterval(this.time);
            return '已结束';
          } else {
            return '剩余' + checkTime(end_second) + '秒';
          }
        } else {
          return '剩余' + checkTime(end_minute) + '分' + checkTime(end_second) + '秒';
        }
      } else {
        return '剩余' + end_hour + '时' + checkTime(end_minute) + '分' + checkTime(end_second) + '秒';
      }
    } else {
      return '剩余' + end_date + '天' + end_hour + '时' + checkTime(end_minute) + '分' + checkTime(end_second) + '秒';
    }

    function checkTime(i: any) { // 将0-9的数字前面加上0，例1变为01
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }

  }

  @action public onClearInterval = () => {
    clearInterval(this.time);
  }

}

@observer
export default class CountDown extends React.Component<IProps, {}> {

  public static defaultProps = {
    onEndTime: () => { }
  };

  public state = {

  };

  public $f7: F7.Dom;

  public store = new Store();

  public render() {
    const { end_date, end_hour, end_minute, end_second } = this.store.state;
    if (end_date <= 0 && end_hour <= 0 && end_minute <= 0 && end_second <= 0 && !this.props.time) {
      this.props.onEndTime();
    }
    return (
      <StyledDiv>
        {this.store.getTimeStr}
      </StyledDiv>
    );
  }

  public componentDidMount() {
    // console.log(this.store.state.curr_time);
    this.store.setState({ end_time: this.props.time });
    this.store.start();
    // console.log(this.store.state);
  }

  public componentWillUnmount(): void {
    this.store.onClearInterval();
  }

}

interface IProps {
  time: number;
  onEndTime(): void;
}

// interface IState {
//   user: any;
// }

const StyledDiv = Styled.div`

  ${props => props.children !== '已结束' && css`
    padding-left: .32rem;
    color: #F7827C;
    background: url(${time_icon}) no-repeat left center / .26rem .26rem;
  `}

`;
