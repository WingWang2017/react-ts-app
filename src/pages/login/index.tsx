import * as React from 'react';

import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { InputText, InputPassword, Button, Alert } from 'src/components';

import LoginView from './components/login-view';
import Logo from './components/logo';

import fetchAjax from 'src/fetch';

import { deviceready } from 'src/utils';


class Store {

  @observable public state: IState = {
    phone: '',
    password: ''
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
    const { phone, password } = this.state;
    return phone.length > 0 && (/^1[34578]\d{9}$/.test(phone)) && password.length >= 6;
  }

}

@observer
class Login extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public store: any = new Store();

  public render() {
    return (
      <div className='page login' data-name='login'>
        <LoginView>
          <Logo theme='large' />
          <StyledDiv>
            <InputText
              type='tel'
              placeholder='手机号'
              length={11}
              marginBottom={true}
              onChange={this.onPhone}
              onClear={this.onClear} />
            <InputPassword
              placeholder='密码'
              marginBottom={true}
              length={16}
              onChange={this.onPassword} />
            <StyledFooter>
              <a href='/forgetPassword' title='' className='link'>忘记密码</a>
              <a href='/registerl' title='' className='link'>新用户注册</a>
            </StyledFooter>
            <Button
              content='登录'
              disabled={!this.store.isDisabled}
              onClick={this.onSignIn} />
          </StyledDiv>
        </LoginView>
        <Footer>登录代表您已阅读并同意<a href='#'>《最青春网络使用协议》</a></Footer>
      </div>
    );
  }

  public componentDidMount(): void {
    f7App = {
      f7router: this.props.f7router,
      f7route: this.props.f7route
    };
    deviceready(() => {
      this.$f7.statusbar.setBackgroundColor('#8fa4a6');
    });
  }

  public onPhone = (phone: string): void => {
    this.store.setState({ phone });
  }

  public onPassword = (password: string): void => {
    this.store.setState({ password });
  }

  public onClear = (): void => {
    this.store.setState({ phone: '' });
  }

  public onSignIn = (): void => {

    const { phone, password } = this.store.state;

    fetchAjax.signin(phone, password).then((res: Ajax.AjaxResponse) => {
      console.log(res);
      if (!res.errcode && res.data) {
        // Alert.success({
        //   content: '登陆成功！'
        // });
        localStorage.user = JSON.stringify({
          ...res.data
        });
        localStorage.hasSchool = true;
        this.props.f7router.navigate('/home');
      } else if (res.errcode === 2) {
        localStorage.user = JSON.stringify({
          mobile: phone,
          user_id: res.data.user_id,
          token: res.data.token
        });
        this.props.f7router.navigate('/login/bindInfo');
      } else {
        Alert.default({
          content: res.msg
        });
      }
    });
  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

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
  font-size: .24rem;
  > a {
    color: #90F6EC;
  }
`;

const Footer = Styled.div`
  margin-top: -.7rem;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: .24rem;
  > a {
    color: #90F6EC;
  }
`;

export default Login;
