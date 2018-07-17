import * as React from 'react';

import { observable, action, computed } from "mobx";
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { search_icon } from 'src/images';

class Store {
  @observable public state: IState = {
    value: '',
    isShow: true
  };

  @action public setState = (obj: any) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

  @computed public get isHide(): boolean {
    return this.state.value.length <= 0;
  }

}

@observer
export default class Search extends React.Component<IProps, {}> {

  public static defaultProps = {
    placeholder: '搜索',
    maxLength: 11,
    onChange: () => { }
  };

  public state = {
  };

  public store: any = new Store;

  public render() {
    const theme = {
      icon: this.store.state.isShow
    };
    return (
      <StyledInput
        type='search'
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        theme={theme} />
    );
  }

  public onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    this.store.setState({ value });
    this.props.onChange!(value);
  }

  public onFocus = (): void => {
    this.store.setState({ isShow: false });
  }

  public onBlur = (): void => {
    this.store.setState({ isShow: true });
  }

}

interface IProps {
  children?: any;
  placeholder?: string;
  maxLength?: number;
  onChange?: (value: string) => void;
}

interface IState {
  value: string;
  isShow: boolean;
}

const StyledInput = Styled.input`
  width: 100%;
  height: 100%;
  padding-left: ${props => props.theme.icon ? `.6rem !important` : '0'};
  box-sizing: border-box;
  font-size: .28rem;
  color: #333;
  background:  no-repeat left center / .34rem .34rem;
  background-image: ${props => props.theme.icon ? `url("${search_icon}")` : 'none'};
`;
