import { observable, action } from 'mobx';

class F7 {
  @observable public f7App = {};

  @observable public currentRoute = {};

  @action public setF7App = (res: any) => {
    this.f7App = res;
    console.log(this.f7App);
  }

  @action public setCurrentRoute(res: any) {
    this.currentRoute = res;
    console.log(this.currentRoute);
  }

}

const f7 = new F7();

export default f7;
