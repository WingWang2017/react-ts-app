import * as React from 'react';

import { observable, action, computed, trace } from "mobx";
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { InputText, InputPassword, Button, Alert } from 'src/components';
import LoginView from './components/login-view';
import Select from './components/select';

import fetchAjax from 'src/fetch';

import SelectRoles from './components/select-roles';

class Store {

  @observable public state: IState = {
    schoolList: [],
    type: 1,
    school_id: 0,
    account: '',
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
    const { school_id, account, password } = this.state;
    return school_id > 0 && account.length > 0 && password.length >= 6;
  }

}
@observer
export default class DindInfo extends React.Component<{}, {}> {

  public state = {};

  public $f7: any;
  public $f7router: any;
  public $f7route: any;

  public store = new Store();

  public render() {
    trace();
    return (
      <div className='page login' data-name='dindInfo'>
        <LoginView>

          {/* <Back /> */}

          <SelectRoles
            value={this.store.state.type}
            onChange={this.onChangeRoles} />

          <StyledDiv>

            <Select
              data={this.store.state.schoolList}
              value='学校'
              onChange={this.onChangeSchool} />

            <InputText
              type='number'
              placeholder={this.store.state.type === 1 ? '学号' : '工号'}
              marginBottom={true}
              onChange={this.onPhone}
              onClear={this.onClear} />

            <InputPassword
              placeholder='教务密码'
              length={16}
              onChange={this.onPassword} />
            <StyledText>首次登录需绑定学校与{this.store.state.type === 1 ? '学号' : '工号'}</StyledText>

            <Button
              content='绑定'
              disabled={!this.store.isDisabled}
              onClick={this.onSignIn} />

          </StyledDiv>

        </LoginView>
      </div>
    );
  }

  public componentDidMount(): void {

    const user = JSON.parse(localStorage.user);
    fetchAjax.getSchoolList(user.token).then(res => {
      this.store.setState({ schoolList: res.data });
    });

  }

  public onChangeRoles = (type: string): void => {
    this.store.setState({ type });
  }

  public onChangeSchool = (schoolID: number) => {
    this.store.setState({ school_id: schoolID });
  }

  public onPhone = (account: string): void => {
    this.store.setState({ account });
  }

  public onPassword = (password: string): void => {
    this.store.setState({ password });
  }

  public onClear = (): void => {
    this.store.setState({ account: '' });
  }

  public onSignIn = async (): Promise<any> => {

    const { user_id } = JSON.parse(localStorage.user);
    const { school_id, type, account, password } = this.store.state;

    const res = await fetchAjax.bindInfo({
      user_id,
      school_id,
      type,
      study_sn: account,
      study_password: password
    });

    console.log(res);
    if (!res.errcode && res.data) {

      localStorage.user = JSON.stringify({ ...res.data });
      localStorage.hasSchool = true;

      this.$f7router.navigate({
        url: '/home',
        animatePages: false,
        reload: true
      });
    }

    Alert.default({
      content: res.msg
    });

  }

}

// interface IProps {

// }

interface IState {
  schoolList: any[];
  school_id: number;
  type: number;
  account: string;
  password: string;
}

const StyledDiv = Styled.div`
  padding: 0 .64rem;
`;

const StyledText = Styled.p`
  line-height: 2.8;
  color: #d8d8d8;
  font-size: .24rem;
`;
