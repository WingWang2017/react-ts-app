import * as React from 'react';

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { PageHeader, DropDownBox } from 'src/components';

class Store {

  @observable public state = {
    item: [
      {
        title: '',
        arrow: true
      }
    ],
    index: 0
  };

  @action public setState = (obj: object) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

  @action public setTitle = (title: string) => {
    this.state.item[this.state.index].title = title;
  }

}

@inject('dropDown')
@observer
export default class PageHeaderDown extends React.Component<IProps, {}> {

  public state = {
    item: this.props.headerItem
  };

  public $f7: F7.Dom;

  public store = new Store();

  public render() {
    return (
      <div className='page-header'>
        <PageHeader item={this.store.state.item} onClick={this.onClick} />

        <DropDownBox
          key={this.store.state.index}
          leftItem={this.props.leftItem}
          rightItem={this.props.rightItem}
          onLeftClick={this.onLeftClick}
          onRightClick={this.onRightClick} />
      </div>
    );
  }

  public componentDidMount() {
    this.store.setState({ item: this.props.headerItem });
  }

  public componentWillUnmount(): void {

  }

  private onClick = (index: number): void => {
    const { state } = this.props.dropDown!;

    if (this.store.state.index === index) {
      if (state.in) {
        this.onHide();
      } else {
        if (this.store.state.item[index].arrow) {
          this.onShow();
        }
      }
    } else {
      this.onHide();

      this.store.setTitle(this.state.item[this.store.state.index].title);

      // if (this.store.state.index === 0) {
      //   this.store.setTitle(this.state.item[0].title);
      // }

      // if (this.store.state.index === 1) {
      //   this.store.setTitle(this.state.item[1].title);
      // }

    }

    this.store.setState({ index });

    this.props.onHeaderClick(index);
  }

  private onShow(): void {
    this.props.dropDown!.setState({ in: true });
  }

  private onHide(): void {
    this.props.dropDown!.setState({ in: false });
  }

  private onLeftClick = (item: Iitem): void => {
    this.store.setTitle(item.title);
    this.props.onLeftClick(item);
  }

  private onRightClick = (item: Iitem): void => {
    this.props.onRightClick(item);
  }

}

interface IProps {
  dropDown?: IDropDown;
  headerItem: any;
  leftItem: any;
  rightItem: any;
  onHeaderClick(index: number): void;
  onLeftClick(item: Iitem): void;
  onRightClick(item: Iitem): void;
}


interface IDropDown {
  state: any;
  setState(ags?: any): void;
}

interface Iitem {
  id: number;
  title: string;
}

// interface IState {
//   user: any;
// }
