import { observable, action } from 'mobx';

interface IState {
  in: boolean;
}

class DropDown {

  @observable public state: IState = {
    in: false
  };

  @action public setState = (obj: object) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

}

const dropDown = new DropDown();

export default dropDown;
