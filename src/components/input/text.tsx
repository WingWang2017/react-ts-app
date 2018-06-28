import * as React from 'react';

import { observer } from 'mobx-react';

import { StyledDiv, StyledCentent, Input, StyledImg } from './style';

import { signin_delete } from 'src/images';

@observer
class InputText extends React.Component<IProps, IState> {

  public static defaultProps = {
    placeholder: '请输入',
    length: 11,
    onChange: () => { },
    onClear: () => { },
    onBlur: () => { }
  };

  public state = {
    value: ''
  };

  public render() {
    return (
      <StyledDiv margin-bottom={this.props.marginBottom}>
        <StyledCentent>
          <Input
            type='text'
            placeholder={this.props.placeholder}
            maxLength={this.props.length}
            value={this.state.value}
            onBlur={this.onBlur}
            onChange={this.onChange} />
          <StyledImg onClick={this.onClear} styled-width='.28rem' hidden={this.state.value.length === 0} >
            <img src={signin_delete} alt='' />
          </StyledImg>
        </StyledCentent>
        {
          this.props.children && this.props.children
        }
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

  public onBlur = (e: any): void => {
    const value: string = e.target.value;

    this.setState({
      value
    });
    this.props.onBlur(value);
  }

  public onClear = (): void => {
    this.setState({
      value: ''
    });
    this.props.onClear();
  }

}

interface IProps {
  children?: any;
  placeholder?: string;
  length?: number;
  marginBottom?: boolean;
  onChange?: any;
  onClear?: any;
  onBlur?: any;
}

interface IState {
  value: string;
}

export default InputText;
