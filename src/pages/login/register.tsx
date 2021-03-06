import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Alert } from 'src/components';

import RegisterCentent from './components/register-centent';

import fetchAjax from 'src/fetch';

import { deviceready } from 'src/utils';

@observer
class Register extends React.Component<IProps, {}> {

  public state = {};

  private child?: any = null;

  public render() {
    return (
      <div className='page login' data-name='register'>
        <RegisterCentent
          onRef={this.onRef}
          onCode={this.onCode}
          onSubmit={this.onSubmit}
          buttonName='注册' />
        <Footer>注册代表您已阅读并同意<a href='#'>《最青春网络使用协议》</a></Footer>
      </div>
    );
  }

  public componentDidMount(): void {

    deviceready(() => {

    });
  }

  public onRef = (ref: any): void => {
    this.child = ref;
  }

  // 发送注册的验证码
  public onCode = async (phone: string): Promise<any> => {
    const res: Ajax.AjaxResponse = await fetchAjax.getSmscode(phone);
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

  // 注册的提交
  public onSubmit = async (data: IState): Promise<any> => {

    interface IObj {
      mobile: string;
      user_id: string;
      token: string;
    }
    const { phone, password, code } = data;
    const res: Ajax.AjaxResponse = await fetchAjax.register(phone, password, code);

    if (!res.errcode) {
      Alert.success({
        content: res.msg,
        afterHide: () => {
          const obj: IObj = {
            mobile: phone,
            user_id: res.data.user_id,
            token: res.data.token
          };
          localStorage.user = JSON.stringify(obj);
          this.props.f7router.navigate({
            url: `/login/bindInfo`
          });
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

export default Register;
