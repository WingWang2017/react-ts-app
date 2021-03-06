import * as React from 'react';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { StyledDiv, StyledCentent, Input, StyledImg } from './style';

import { signin_delete, search_delete } from 'src/images';

class Store {
  @observable public state: IState = {
    value: ''
  };

  @action public setState = (obj: any) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

}
@observer
class InputText extends React.Component<IProps, {}> {

  public static defaultProps = {
    imgSize: '.28rem',
    inputSize: '.28rem',
    themeColor: 'white',
    type: 'text',
    placeholder: '请输入',
    length: 11,
    clearHidden: true,
    onChange: () => { },
    onClear: () => { },
    onBlur: () => { }
  };

  public state = {
  };

  public store: any = new Store;

  public render() {
    const imgTheme = {
      imgSize: this.props.imgSize,
      inputSize: this.props.inputSize,
      themeColor: this.props.themeColor // black 黑色
    };
    return (
      <StyledDiv
        margin-bottom={this.props.marginBottom}
        className={this.props.themeColor === 'white' ? 'mywhite' : 'myblack'} >
        <StyledCentent>
          <Input
            theme={imgTheme}
            type={this.props.type}
            placeholder={this.props.placeholder}
            maxLength={this.props.length}
            value={this.store.state.value}
            onBlur={this.onBlur}
            onChange={this.onChange} />
          {
            this.props.clearHidden &&
            <StyledImg
              onClick={this.onClear}
              theme={imgTheme}
              hidden={this.store.state.value.length === 0} >
              <img src={this.props.themeColor === 'white' ? signin_delete : search_delete} alt='' />
            </StyledImg>
          }
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

    if (this.props.length && value.length > this.props.length) {
      return;
    }

    this.store.setState({
      value
    });

    this.props.onChange(value);
  }

  public onBlur = (e: any): void => {
    const value: string = e.target.value;

    this.store.setState({
      value
    });
    this.props.onBlur(value);
  }

  public onClear = (): void => {
    this.store.setState({
      value: ''
    });
    this.props.onClear();
  }

}

interface IProps {
  children?: any;
  type?: string;
  placeholder?: string;
  length?: number;
  clearHidden?: boolean;
  marginBottom?: boolean;
  themeColor?: string;
  imgSize?: string;
  inputSize?: string;
  onChange?: any;
  onClear?: any;
  onBlur?: any;
}

interface IState {
  value: string;
}

export default InputText;
