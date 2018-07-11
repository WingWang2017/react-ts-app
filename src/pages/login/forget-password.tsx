import * as React from 'react';

import { observer } from 'mobx-react';

import { Alert } from 'src/components';

import RegisterCentent from './register-centent';

import fetchAjax from 'src/fetch';

@observer
class ForgetPassword extends React.Component<IProps, {}> {

  public state = {};

  private child?: any = null;

  public render() {
    return (
      <div className='page login' data-name='register'>
        <RegisterCentent
          onRef={this.onRef}
          onCode={this.onCode}
          onSubmit={this.onSubmit}
          buttonName='重置' />
      </div>
    );
  }

  public componentDidMount(): void { }

  public onRef = (ref: any): void => {
    this.child = ref;
  }

  // 发送找回密码的验证码
  public onCode = async (phone: string): Promise<any> => {
    const res = await fetchAjax.getSmsBackCode(phone);
    console.log(res);
    if (!res.errcode) {
      alert(res.data.code);
      console.log(this.child);
      this.child.onStartCountdown();
    }

    Alert.default({
      content: res.msg
    });
  }

  // 重置密码的提交
  public onSubmit = async (data: IState): Promise<any> => {
    const { phone, password, code } = data;
    const res = await fetchAjax.pwdback(phone, password, code);

    if (!res.errcode) {
      Alert.success({
        content: res.msg,
        afterHide: () => {
          this.props.f7router.back();
        }
      });
    } else {
      Alert.default({
        content: res.msg
      });
    }
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

interface IState {
  phone: string;
  code: string;
  password: string;
}

export default ForgetPassword;
