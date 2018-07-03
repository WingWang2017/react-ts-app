import * as React from 'react';
// import LazyLoad from 'react-lazyload';
import { observer } from 'mobx-react';

// 防止连续点击 点赞
@observer
export default class Button extends React.Component<IProps, IState> {

  public state = {
    disabled: false
  };

  public onClick = () => {
    this.setState({
      disabled: true
    }, () => {
      setTimeout(() => {
        this.setState({
          disabled: false
        });
      }, 800);
    });
    this.props.onLike();
  }

  public render() {
    return (
      <button
        disabled={this.state.disabled}
        className={`wpLikes ${this.props.data.zan_status ? 'wpLikes-on' : ''}`}
        onClick={this.onClick} >
        {this.props.data.zans_count}
      </button>
    );
  }
}

interface IProps {
  onLike?: any;
  data: any;
}

interface IState {
  disabled: boolean;
}
