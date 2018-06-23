import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
// import { Framework7 } from 'framework7-react';

import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, Logo, InputText, InputPassword, Button, Alert } from './../../components';

import fetchAjax from './../../fetch';


@inject('f7')
@observer
class Login extends React.Component<{ f7?: any }, IState> {

  public state = {
    phone: '',
    password: ''
  };

  public render() {
    return (
      <div className='page login' data-page='login'>
        <LoginView>
          <Logo />
          <StyledDiv>
            <InputText
              placeholder='手机号'
              marginBottom={true}
              onChange={this.onPhone}
              onClear={this.onClear} />
            <InputPassword
              placeholder='密码'
              marginBottom={true}
              length={16}
              onChange={this.onPassword} />
            <div>
              <a href='#' title=''>忘记密码</a>
              <a href='#' title=''>新用户注册</a>
            </div>
            <Button
              content='下一步'
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

    if (!(/^1[34578]\d{9}$/.test(this.state.phone))) {
      return Alert.default({
        content: '请输入正确的手机号!'
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

    fetchAjax.signin(this.state.phone, this.state.password).then(res => {
      console.log(res);
      if (res.errcode) {
        Alert.default({
          content: '登陆成功！'
        });
        localStorage.user = JSON.stringify({
          tel: this.state.phone,
          token: res.resource.token
        });
        this.props.f7.f7App.mainView.router.loadPage('/login/school');
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

export default Login;
