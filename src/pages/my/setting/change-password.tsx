import * as React from 'react';

import { observable, action, computed } from "mobx";
import { observer } from 'mobx-react';

// import Styled from 'styled-components';

import { Header, ItemList, InputText, Alert } from 'src/components';

import fetchAjax from 'src/fetch';

class Store {
  @observable public state: IState = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  @action public setState = (obj: object) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

  @computed public get isDisabled(): boolean {
    const { oldPassword, newPassword, confirmPassword } = this.state;
    return oldPassword.length >= 0 && newPassword.length >= 6 && confirmPassword.length >= 6 && newPassword.length === confirmPassword.length;
  }

}
@observer
export default class ChangePassword extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public store: IStore = new Store();

  public render() {
    const user = localStorage.user && JSON.parse(localStorage.user);
    return (
      <div className='navbar-fixed page' data-name='chengePassword'>
        <Header
          back={true}
          center='修改密码'
          right={
            <button
              className='link'
              disabled={!this.store.isDisabled}
              onClick={this.onConfirm} >
              确定
            </button>
          } />
        <div className='page-content'>
          <ul className='border-left-34'>
            <ItemList
              left='手机号'
              center={user && user.mobile} />
            <ItemList
              left='旧密码'
              center={
                <InputText
                  type='password'
                  placeholder='请输入密码'
                  themeColor='black'
                  inputSize='.28rem'
                  length={16}
                  clearHidden={false}
                  onChange={this.onPassword('oldPassword')}
                  onClear={this.onCleaPassword('oldPassword')} />
              } />
            <ItemList
              left='新密码'
              center={
                <InputText
                  type='password'
                  placeholder='6~16个字符，字母/数字/符号中至少两种'
                  themeColor='black'
                  inputSize='.28rem'
                  length={16}
                  clearHidden={false}
                  onChange={this.onPassword('newPassword')}
                  onClear={this.onCleaPassword('newPassword')} />
              } />
            <ItemList
              border={false}
              left='确认密码'
              center={
                <InputText
                  type='password'
                  placeholder='6~16个字符，字母/数字/符号中至少两种'
                  themeColor='black'
                  inputSize='.28rem'
                  length={16}
                  clearHidden={false}
                  onChange={this.onPassword('confirmPassword')}
                  onClear={this.onCleaPassword('confirmPassword')} />
              } />
          </ul>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onPassword = (name: string) => (value: string): void => {
    this.store.setState({ [name]: value });
  }

  public onCleaPassword = (name: string) => (): void => {
    this.store.setState({ [name]: '' });
  }

  public onConfirm = (): void => {
    const { mobile }: { mobile: string } = JSON.parse(localStorage.user);
    const { oldPassword, newPassword, confirmPassword } = this.store.state;
    if (newPassword !== confirmPassword) {
      return Alert.default({
        content: '新密码两次输入不一致，请重新输入'
      });
    }

    fetchAjax.changePassword({
      mobile,
      old_password: oldPassword,
      new_password: newPassword
    }).then((res: { errcode: number, msg: string; data?: object }) => {
      if (!res.errcode) {
        Alert.success({
          content: '密码修改成功',
          afterHide: () => {
            this.props.f7router.back();
          }
        });
        return;
      }
      Alert.default({
        content: res.msg
      });
    });

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  forumState: any;
}

interface IStore {
  state: IState;
  isDisabled: boolean;
  setState: (obj: object) => void;
}

interface IState {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
