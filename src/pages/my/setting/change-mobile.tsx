import * as React from 'react';

import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, ItemList, InputText, SmsCode, Alert } from 'src/components';

import fetchAjax from 'src/fetch';

class Store {
  @observable public state: IState = {
    mobile: '',
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
    const { mobile, code } = this.state;
    return mobile.length > 0 && code.length >= 4;
  }

}
@observer
export default class ChangeMobile extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public child?: any = null;

  public store: any = new Store();

  public render() {
    return (
      <div className='navbar-fixed page' data-name='chengeMobile'>
        <Header
          back={true}
          center='更换手机号'
          right={
            <button
              className='link'
              disabled={!this.store.isDisabled}
              onClick={this.onConfirm} >
              确定
            </button>
          } />
        <div className='page-content'>
          <StyledText>更换手机号后，下次登录可使用新手机号登录</StyledText>
          <ul className='border-left-34'>
            <ItemList
              left='新手机号'
              padding='0 0 0 .32rem'
              center={
                <InputText
                  placeholder='请输入新的手机号码'
                  themeColor='black'
                  inputSize='.32rem'
                  onChange={this.onMoblie}
                  onClear={this.onClearMoblie} />
              } />
            <ItemList
              left='验证码'
              border={false}
              center={
                <InputText
                  placeholder='请输入验证码'
                  themeColor='black'
                  inputSize='.32rem'
                  length={6}
                  clearHidden={false}
                  onChange={this.onCode}
                  onClear={this.onClearCode} />
              }
              right={
                <SmsCode
                  phone={this.store.state.mobile}
                  onRef={this.onRef}
                  onClick={this.onGetCode}
                  color='#F3AF4E' />
              } />
          </ul>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  // 验证码组件的实例
  public onRef = (ref: any): void => {
    this.child = ref;
  }

  // 从input组件里获取value, 并保存在store数据里的moblie
  public onMoblie = (mobile: string): void => {
    this.store.setState({ mobile });
  }

  // 从input组件里获取value, 并保存在store数据里的code
  public onCode = (code: string): void => {
    this.store.setState({ code });
  }

  // input组件里清除按钮，清除store里的数据moblie
  public onClearMoblie = (): void => {
    this.store.setState({ mobile: '' });
  }

  // input组件里清除按钮，清除store里的数据code
  public onClearCode = (): void => {
    this.store.setState({ code: '' });
  }

  // 手机号校验成功后，发送验证码
  public onGetCode = (): void => {
    const { mobile } = this.store.state;

    if (!mobile) {
      return Alert.default({
        content: `请输入手机号！`
      });
    }

    if (!(/^1[34578]\d{9}$/.test(mobile))) {
      return Alert.default({
        content: '请输入正确的手机号!'
      });
    }

    fetchAjax.edcode(mobile).then((res) => {
      if (!res.errcode && res.data) {
        alert(res.data.code);
        console.log(this.child);
        this.child.onStartCountdown();
      }
      Alert.default({
        content: res.msg
      });
    });

  }

  public onConfirm = (): void => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const { mobile: newMobile, code } = this.store.state;
    import('src/components/confirm').then(({ default: confirm }) => {
      confirm.default({
        content: `确定将学号${user.mobile}与<br />手机号${newMobile}绑定？`,
        onConfirm: () => {
          fetchAjax.changeMobile({
            old_mobile: user.mobile,
            mobile: newMobile,
            code
          }).then((res: any) => {
            if (!res.errcode) {
              Alert.success({
                content: '手机更换成功',
                afterHide: () => {
                  user.mobile = newMobile;
                  localStorage.user = JSON.stringify(user);
                  this.props.f7router.back('/my/setting', {
                    force: true,
                    ignoreCache: true
                  });
                }
              });
              return;
            }
            Alert.default({
              content: res.msg
            });
          });
        }
      });
    });

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  forumState: any;
}

interface IState {
  mobile: string;
  code: string;
}

const StyledText = Styled.p`
  margin: .16rem 0;
  padding: 0 .32rem;
  line-height: .44rem;
  color: #999;
  font-size: .28rem;
`;
