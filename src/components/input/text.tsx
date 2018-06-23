import * as React from 'react';
import { observer } from 'mobx-react';

import { StyledDiv, Input, StyledImg } from './style';

import { signin_delete } from './../../images';

@observer
class InputText extends React.Component<IProps, IState> {

  public static defaultProps = {
    placeholder: '请输入',
    length: 11,
    onChange: () => { },
    onClear: () => { }
  };

  public state = {
    value: ''
  };

  public render() {
    return (
      <StyledDiv margin-bottom={this.props.marginBottom}>
        <Input
          type='text'
          placeholder={this.props.placeholder}
          maxLength={this.props.length}
          value={this.state.value}
          onChange={this.onChange} />
        <StyledImg onClick={this.onClear} styled-width='.36rem'>
          <img src={signin_delete} alt='' />
        </StyledImg>
      </StyledDiv>
    );
  }

  public onChange = (e: any): void => {
    // console.log(e.target.value);
    const value: string = e.target.value;

    this.setState({
      value
    });
    this.props.onChange(value);
  }

  public onClear = (): void => {
    this.setState({
      value: ''
    });
    this.props.onClear();
  }

}

interface IProps {
  placeholder?: string;
  length?: number;
  marginBottom?: boolean;
  onChange?: any;
  onClear?: any;
}

interface IState {
  value: string;
}

export default InputText;
