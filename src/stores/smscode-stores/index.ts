import { observable, action } from 'mobx';

class CodeStores {
  @observable public status: boolean = false;

  @action public setState = (res: boolean) => {
    this.status = res;
    console.log(this.status, 'mobx');
  }

}

const codeStores = new CodeStores();

export default codeStores;
