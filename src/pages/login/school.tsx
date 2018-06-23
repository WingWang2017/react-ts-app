import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
// import { Framework7 } from 'framework7-react';

import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, InputText, InputPassword, Button, Alert } from './../../components';

import fetchAjax from './../../fetch';

import SelectRoles from './select-roles';


@inject('f7')
@observer
class School extends React.Component<{ f7?: any }, IState> {

  public state = {
    phone: '',
    password: ''
  };

  public render() {
    return (
      <div className='page login' data-page='roles'>
        <LoginView>
          <SelectRoles />
          <StyledDiv>
            <select>
              <option>杭州医学院</option>
              <option>浙江传媒学院</option>
              <option>浙江中医药大学</option>
            </select>
            <InputText
              placeholder='学号'
              marginBottom={true}
              onChange={this.onPhone}
              onClear={this.onClear} />
            <InputPassword
              placeholder='密码'
              marginBottom={true}
              length={16}
              onChange={this.onPassword} />
            <Button
              content='登录'
              onClick={this.onSignIn} />
          </StyledDiv>
        </LoginView>
      </div>
    );
  }

  public componentDidMount(): void {
    // ss

  }

  public onPhone = (phone: string): void => {
    this.setState({
      phone
    });
  }

  public onPassword = (password: string): void => {
    this.setState({
      password
    });
  }

  public onClear = (): void => {
    this.setState({
      phone: ''
    });
  }

  public onSignIn = (): void => {

    if (!this.state.phone) {
      return Alert.default({
        content: '请输入手机号！'
      });
    }

    if (!this.state.password) {
      return Alert.default({
        content: '请输入密码！'
      });
    }

    if (this.state.password.length < 6) {
      return Alert.default({
        content: '密码不能小于6位数！'
      });
    }

    const user = JSON.parse(localStorage.user);

    fetchAjax.doubleSignin(user.token, 'yxy', 'student', this.state.phone, this.state.password).then(res => {
      console.log(res);
      if (res.errcode) {
        Alert.default({
          content: '登陆成功！'
        });
      } else {
        Alert.default({
          content: res.errmsg
        });
      }
    });
  }

}

// interface IProps {

// }

interface IState {
  phone: string;
  password: string;
}

const StyledDiv = Styled.div`
  padding: 0 .64rem;
`;

export default School;
