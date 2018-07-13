import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

@observer
class SmsCode extends React.Component<IProps, IState> {

  public static defaultProps = {
    time: 60,
    onClick: () => { }
  };

  public state = {
    content: '获取短信验证码',
    time: 60
  };

  private time?: any = null;

  public render() {
    return (
      <StyledButton onClick={this.onClick}>
        {this.state.content}
      </StyledButton>
    );
  }

  public componentDidMount(): void {
    this.props.onRef(this);
  }

  public componentWillUnmount(): void {
    clearInterval(this.time);
  }

  public onClick = (): void => {

    if (this.state.time !== this.props.time) {
      return;
    }

    this.props.onClick();

  }

  public onStartCountdown(): void {
    this.onCountdown();
    this.time = setInterval(() => {
      this.onCountdown();
    }, 1000);
  }

  public onCountdown(): void {
    this.setState((prevState: { content: string, time: number }) => {
      return {
        content: `${prevState.time--}s`
      };
    }, () => {
      if (this.state.time < 0) {
        clearInterval(this.time);
        this.setState({
          content: '获取短信验证码'
        });
      }
    });
  }

  public onClearInterval(): void {
    clearInterval(this.time);
    this.setState({
      content: '获取短信验证码'
    });
  }

}

interface IProps {
  phone: string;
  time?: number;
  onClick?: any;
  onRef?: any;
}

interface IState {
  content: string;
}

const StyledButton = Styled.button`
  flex: 1 1 4rem;
  box-sizing: border-box;
  padding: 0 .3rem;
  text-align: right;
  color: #90F6EC;
  font-size: .24rem;
`;

export default SmsCode;
