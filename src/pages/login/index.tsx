import * as React from 'react';

import { observable, action, computed, trace } from "mobx";
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, Logo, InputText, InputPassword, Button, Alert } from 'src/components';

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
    return phone.length > 0 && (/^1[34578]\d{9}$/.test(phone)) && password.length > 0 && password.length >= 6;
  }

}

@observer
class Login extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public store: any = new Store;

  public render() {
    trace();
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
      </div>
    );
  }

  public componentDidMount(): void {
    f7App = {
      f7router: this.props.f7router,
      f7route: this.props.f7route
    };
    deviceready(() => {
      this.$f7.statusbar.setBackgroundColor('#9bb1b3');
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

    fetchAjax.signin(phone, password).then(res => {
      console.log(res);
      if (!res.errcode) {
        Alert.default({
          content: '登陆成功！'
        });
        localStorage.user = JSON.stringify({
          tel: phone,
          token: res.resource.token
        });
        this.$f7.router.navigate('/login/school');
      } else {
        Alert.default({
          content: res.errmsg
        });
      }
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
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

export default Login;
