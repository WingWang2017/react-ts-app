import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
// import { Framework7 } from 'framework7-react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, Logo, InputText, InputPassword, Button, Back, SmsCode, Alert } from 'src/components';

import fetchAjax from 'src/fetch';

import { deviceready } from 'src/utils';

@observer
class Register extends React.Component<{}, IState> {

  public state = {
    phone: '',
    code: '',
    password: ''
  };

  private child?: any = null;

  public render() {
    return (
      <div className='page login' data-page='register'>
        <LoginView>

          <Back />

          <Logo />

          <StyledDiv>

            <InputText
              placeholder='手机号'
              marginBottom={true}
              onBlur={this.onPhone}
              onClear={this.onClear} />

            <InputText
              placeholder='验证码'
              marginBottom={true}
              length={6}
              onBlur={this.onValidate}
              onClear={this.onClear} >
              <SmsCode
                phone={this.state.phone}
                time={60}
                onClick={this.onGetCode}
                onRef={this.onRef} />
            </InputText>

            <InputPassword
              placeholder='密码(6～16位)'
              marginBottom={true}
              length={16}
              onChange={this.onPassword} />

            <StyledFooter>
              密码为6~16个字符，字母/数字/符号中至少两种
            </StyledFooter>

            <Button
              content='下一步'
              onClick={this.onNext} />

          </StyledDiv>

          {
            currentRoute.params.type === 'registerl' &&
            <Footer>注册代表您已阅读并同意<a href='#'>《最青春网络使用协议》</a></Footer>
          }

        </LoginView>
      </div>
    );
  }

  public componentDidMount(): void {
    // ss
    // console.log(this.props.f7.currentRoute.params.type);

    deviceready(() => {
      StatusBar.hide();
    });
  }

  public onRef = (ref: any): void => {
    this.child = ref;
  }

  public onGetCode = async (): Promise<any> => {
    const { phone } = this.state;
    let res: any;

    if (!phone) {
      return Alert.default({
        content: `请输入手机号！`
      });
    }

    if (!(/^1[34578]\d{9}$/.test(phone))) {
      return Alert.default({
        content: '请输入正确的手机号!'
      });
    }

    if (currentRoute.params.type === 'registerl') {
      res = await fetchAjax.getSmscode(this.state.phone);
    } else if (currentRoute.params.type === 'retrieve') {
      res = await fetchAjax.getSmsBackCode(this.state.phone);
    }

    console.log(res);
    if (res.errcode) {
      console.log(this.child);
      this.child.onStartCountdown();
    }

    Alert.default({
      content: res.errmsg
    });

  }

  public onPhone = (phone: string): void => {
    this.setState({
      phone
    });
  }

  public onValidate = (code: string): void => {
    this.setState({
      code
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

  public onNext = (): void => {

    // const user = JSON.parse(localStorage.user);
    const { phone, code, password } = this.state;

    if (!phone) {
      return Alert.default({
        content: `请输入手机号！`
      });
    }

    if (!(/^1[34578]\d{9}$/.test(phone))) {
      return Alert.default({
        content: '请输入正确的手机号!'
      });
    }

    if (!code) {
      return Alert.default({
        content: '请输入验证码!'
      });
    }

    if (!password) {
      return Alert.default({
        content: '请输入密码！'
      });
    }

    if (password.length < 6) {
      return Alert.default({
        content: '密码不能小于6位数！'
      });
    }

    this.onSignin();

  }

  public async onSignin(): Promise<any> {

    let res: any;

    if (currentRoute.params.type === 'registerl') {
      res = await fetchAjax.register(this.state.phone, this.state.password);
    } else if (currentRoute.params.type === 'retrieve') {
      res = await fetchAjax.pwdback(this.state.phone, this.state.password);
    }

    console.log(res);
    if (res.errcode) {
      const obj = {
        tel: this.state.phone,
        token: res.resource.token
      };
      localStorage.user = JSON.stringify(obj);
      f7App.mainView.router.loadPage({
        url: `/login/school/${currentRoute.params.type === 'registerl' ? 0 : 1}`
      });
    }

    Alert.default({
      content: res.errmsg
    });

  }

}


interface IState {
  phone: string;
  code: string;
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
  color: #efefef;
`;

const Footer = Styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: .6rem;
  text-align: center;
  color: #fff;
  font-size: .24rem;
  > a {
    color: #fff;
  }
`;

export default Register;
