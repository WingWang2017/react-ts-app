import * as React from 'react';

import { trace } from "mobx";
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, Logo, InputText, InputPassword, Button, Alert } from 'src/components';

import fetchAjax from 'src/fetch';

import { deviceready } from 'src/utils';

@observer
class Login extends React.Component<{}, IState> {

  public state = {
    phone: '',
    password: ''
  };

  public render() {
    trace();
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
            <StyledFooter>
              <a href='/registerlAndRegisterl/retrieve' title='' className='link'>忘记密码</a>
              <a href='/registerlAndRegisterl/registerl' title='' className='link'>新用户注册</a>
            </StyledFooter>
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
    // f7App.mainView.params.swipeBackPage = false;
    const cached = $$('#main-view .pages>.page');
    if (cached.length >= 1) {
      const leng = cached.length - 1;
      for (let i = 0; i < leng; i++) {
        cached[i].remove();
      }
    }

    deviceready(() => {
      StatusBar.hide();
    });

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
        f7App.mainView.router.loadPage('/login/school/1');
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

const StyledFooter = Styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .3rem;
  font-size: .26rem;
  > a {
    color: #fff;
  }
`;

export default Login;
