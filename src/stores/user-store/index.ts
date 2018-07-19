import { observable, action } from 'mobx';

class UserState {

  @observable public user = {
    ...localStorage.user && JSON.parse(localStorage.user)
  };

  @action public setState(): void {

  }
}


const userState = new UserState();

export default userState;
