import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, InputText, InputPassword, Button, Select, Back, Alert } from 'src/components';

import fetchAjax from 'src/fetch';

import { deviceready } from 'src/utils';

import SelectRoles from './select-roles';

@observer
class School extends React.Component<{}, IState> {

  public state = {
    schoolList: [],
    userType: 'student',
    schoolType: '',
    account: '',
    password: ''
  };

  public render() {
    return (
      <div className='page login' data-page='school'>
        <LoginView>

          <Back />

          <SelectRoles
            value={this.state.userType}
            onChange={this.onChangeRoles} />

          <StyledDiv>

            <Select
              data={this.state.schoolList}
              value='学校'
              onChange={this.onChangeSchool} />

            <InputText
              placeholder={this.state.userType === 'student' ? '学号' : '工号'}
              marginBottom={true}
              onChange={this.onPhone}
              onClear={this.onClear} />

            <InputPassword
              placeholder='教务密码'
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

    deviceready(() => {
      StatusBar.hide();
    });

    const mainPage = f7App.mainView.url;
    console.log(mainPage);
    // ss
    const user = JSON.parse(localStorage.user);
    fetchAjax.getSchoolList(user.token).then(res => {
      this.setState({
        schoolList: res.resource
      });
    });

  }

  public onChangeRoles = (userType: string): void => {
    this.setState({
      userType
    });
  }

  public onChangeSchool = (e: any) => {
    const schoolType: string = e.target.value;
    this.setState({
      schoolType
    });
  }

  public onPhone = (account: string): void => {
    this.setState({
      account
    });
  }

  public onPassword = (password: string): void => {
    this.setState({
      password
    });
  }

  public onClear = (): void => {
    this.setState({
      account: ''
    });
  }

  public onSignIn = async (): Promise<any> => {

    const user = JSON.parse(localStorage.user);
    const { schoolList, schoolType, userType, account, password } = this.state;
    let res: any;

    if (!schoolType) {
      return Alert.default({
        content: '请选择学校！'
      });
    }

    if (!account) {
      return Alert.default({
        content: `请输入${this.state.userType === 'student' ? '学号' : '工号'}！`
      });
    }

    if (!password) {
      return Alert.default({
        content: '请输入教务密码！'
      });
    }

    if (password.length < 6) {
      return Alert.default({
        content: '教务密码不能小于6位数！'
      });
    }

    // currentRoute.params.state 为0 没有注册过，进行绑定
    // currentRoute.params.state 为1 注册过，直接登录
    if (currentRoute.params.state) {
      res = await fetchAjax.doubleSignin(user.token, schoolType, userType, account, password);
    } else {
      res = await fetchAjax.doubleSigninBind(user.token, schoolType, userType, account, password);
    }

    console.log(res);
    if (res.errcode) {

      interface IObj {
        token: string;
        access_token: string;
        tel: string;
        number: string;
        school_type: string;
        school_name: string;
        user_type: string;
        user_id: number;
      }

      const token = await this.gettoken(user.token);

      const obj: IObj = {
        ...JSON.parse(localStorage.user),
        access_token: token.resource.access_token,
        number: account,
        school_type: schoolType,
        school_name: this.getSchoolName(schoolType, schoolList).school_name,
        user_id: res.resource.user_id,
        user_type: userType,
      };
      localStorage.user = JSON.stringify(obj);

      localStorage.hasSchool = true;

      f7App.mainView.router.loadPage({
        url: '/home',
        animatePages: false,
        reload: true
      });
    }

    Alert.default({
      content: res.errmsg
    });

  }

  public async gettoken(token: string): Promise<any> {
    return await fetchAjax.gettoken(token);
  }

  public getSchoolName(schoolType: string, schoolList: any[]): any {
    return schoolList.filter((e: any) => {
      return e.school_type === schoolType;
    })[0];
  }

}

// interface IProps {

// }

interface IState {
  schoolList: any[];
  schoolType: string;
  userType: string;
  account: string;
  password: string;
}

const StyledDiv = Styled.div`
  padding: 0 .64rem;
`;

export default School;
