import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
// import { Framework7 } from 'framework7-react';

import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { LoginView, InputText, InputPassword, Button, Select, Back, Alert } from './../../components';

import fetchAjax from './../../fetch';

import SelectRoles from './select-roles';


@inject('f7')
@observer
class School extends React.Component<{ f7?: any }, IState> {

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
              placeholder='密码'
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
    const { f7App, currentRoute } = this.props.f7;
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
        content: '请输入密码！'
      });
    }

    if (password.length < 6) {
      return Alert.default({
        content: '密码不能小于6位数！'
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
        number: string;
        school_type: string;
        school_name: string;
        user_id: number;
      }

      const obj: IObj = JSON.parse(localStorage.user);
      obj.number = account;
      obj.school_type = schoolType;
      obj.school_name = this.getSchoolName(schoolType, schoolList).school_name;
      obj.user_id = res.resource.user_id;
      localStorage.user = JSON.stringify(obj);

      localStorage.hasSchool = true;

      f7App.mainView.router.loadPage('/home');
    }

    Alert.default({
      content: res.errmsg
    });

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