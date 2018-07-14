import * as React from 'react';

import { observer } from 'mobx-react';

import { StyledDiv, Input, StyledImg } from './style';

import { signin_hide, login_display } from 'src/images';

@observer
class InputPassword extends React.Component<IProps, IState> {

  public static defaultProps = {
    imgSize: '.3rem',
    inputSize: '.28rem',
    themeColor: 'white',
    placeholder: '请输入',
    length: 11,
    onChange: () => { }
  };

  public state = {
    value: '',
    type: true
  };

  public render() {
    const imgTheme = {
      imgSize: this.props.imgSize,
      inputSize: this.props.inputSize,
      themeColor: this.props.themeColor // black 黑色
    };
    return (
      <StyledDiv margin-bottom={this.props.marginBottom}>
        <Input
          theme={imgTheme}
          type={this.state.type ? 'password' : 'type'}
          maxLength={this.props.length}
          placeholder={this.props.placeholder}
          onChange={this.onChange} />
        <StyledImg onClick={this.onClear} theme={imgTheme}>
          <img
            src={this.state.type ? signin_hide : login_display}
            alt='' />
        </StyledImg>
      </StyledDiv>
    );
  }

  public onChange = (e: any): void => {
    // console.log(e.target.value);
    const value: string = e.target.value;
    this.props.onChange(value);
  }

  public onClear = (): void => {
    this.setState({
      type: !this.state.type
    });

  }

}

interface IProps {
  placeholder?: string;
  length?: number;
  marginBottom?: boolean;
  themeColor?: string;
  imgSize?: string;
  inputSize?: string;
  onChange?: any;
}

interface IState {
  value: string;
  type: boolean;
}

export default InputPassword;
