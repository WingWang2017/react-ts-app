import * as React from 'react';

import { observer } from 'mobx-react';

import { StyledLabel } from '../style';

@observer
export default class Label extends React.Component<IProps, IState> {

  public static defalutProps = {
    value: ''
  };

  public state = {
    select: false
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <StyledLabel onClick={this.onClick} className={this.state.select ? 'on' : ''}>
        {this.props.value}
      </StyledLabel>
    );
  }

  public componentDidMount() {
    console.log(this);
  }

  public componentWillUnmount(): void {

  }

  private onClick = (): void => {
    this.setState({
      select: !this.state.select
    });
  }

}

interface IProps {
  value?: string;
}

interface IState {
  select: boolean;
}
