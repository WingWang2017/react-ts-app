import * as React from 'react';

import { observable, action, computed } from "mobx";
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, Logo, InputText, InputPassword, Button, Back, SmsCode, Alert } from 'src/components';


class Store {

  @observable public state: IState = {
    phone: '',
    password: '',
    code: ''
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
    const { phone, password, code } = this.state;
    return phone.length > 0 && (/^1[34578]\d{9}$/.test(phone)) && code.length > 0 && password.length > 0 && password.length >= 6;
  }

}

@observer
class Register extends React.Component<IProps, {}> {

  public defaultProps = {
    onCode: () => { },
    onSubmit: () => { }
  };

  public state = {};

  public store = new Store;

  public render() {
    return (
      <LoginView>

        <Back />

        <Logo />

        <StyledDiv>

          <InputText
            placeholder='手机号'
            marginBottom={true}
            onChange={this.onPhone}
            onClear={this.onClear} />

          <InputText
            placeholder='验证码'
            marginBottom={true}
            length={6}
            onChange={this.onValidate}
            onClear={this.onClearCode} >
            <SmsCode
              phone={this.store.state.phone}
              time={60}
              onClick={this.onGetCode}
              onRef={this.props.onRef} />
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
            content='注册'
            disabled={!this.store.isDisabled}
            onClick={this.onRegister} />

        </StyledDiv>

      </LoginView>
    );
  }

  public componentDidMount(): void { }

  public onGetCode = async (): Promise<any> => {
    const { phone } = this.store.state;

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

    this.props.onCode(phone);

  }

  public onPhone = (phone: string): void => {
    this.store.setState({ phone });
  }

  public onValidate = (code: string): void => {
    this.store.setState({ code });
  }

  public onPassword = (password: string): void => {
    this.store.setState({ password });
  }

  public onClear = (): void => {
    this.store.setState({ phone: '' });
  }

  public onClearCode = (): void => {
    this.store.setState({ code: '' });
  }

  public onRegister = async (): Promise<any> => {
    this.props.onSubmit({ ...this.store.state });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  onCode: (phone: string) => {};
  onSubmit: (data: IState) => {};
  onRef: any;
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

export default Register;
