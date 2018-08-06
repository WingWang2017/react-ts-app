import * as React from 'react';

import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';

import { Header, PageHeader, DropDownBox } from 'src/components';


class Store {

  @observable public state = {
    item: [
      {
        title: '新鲜的',
        arrow: true
      },
      {
        title: '我的',
        arrow: false
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
export default class UsedIdle extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public store = new Store();

  public render() {
    return (
      <div className='navbar-fixed page' data-name='used-idle'>
        <Header
          back={true}
          center='二手闲置'
          right={
            <a href='#' title=''>发布</a>
          } />

        <PageHeader item={this.store.state.item} onClick={this.onClick} />

        <div className='page-content'>asdasd</div>

        <DropDownBox
          key={this.store.state.index}
          leftItem={TYPE}
          rightItem={TIME}
          onLeftClick={this.onLeftClick}
          onRightClick={this.onRightClick} />

      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onClick = (index: number): void => {
    const { state } = this.props.dropDown;

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

      if (this.store.state.index === 0) {
        this.store.setTitle('新鲜的');
      }

    }

    this.store.setState({ index });
  }

  private onShow(): void {
    this.props.dropDown!.setState({ in: true });
  }

  private onHide(): void {
    this.props.dropDown!.setState({ in: false });
  }

  private onLeftClick = () => {

  }

  private onRightClick = () => {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
  dropDown: IDropDown;
}

interface IDropDown {
  state: any;
  setState(ags?: any): void;
}


// interface IState {
//   user: any;
// }

const TYPE = [
  {
    id: 0,
    title: '全部'
  },
  {
    id: 1,
    title: '书籍课本'
  },
  {
    id: 2,
    title: '电子产品'
  },
  {
    id: 3,
    title: '交通工具'
  },
  {
    id: 4,
    title: '女生物语'
  },
  {
    id: 5,
    title: '二手衣物'
  },
  {
    id: 6,
    title: '运动器材'
  },
  {
    id: 7,
    title: '杂货小铺'
  },
  {
    id: 8,
    title: '其他'
  }
];

const TIME = [
  {
    id: 0,
    title: '全部'
  },
  {
    id: 1,
    title: '九成新'
  },
  {
    id: 2,
    title: '八成新'
  },
  {
    id: 3,
    title: '七成新'
  },
  {
    id: 4,
    title: '六成新'
  },
  {
    id: 5,
    title: '五成新'
  },
  {
    id: 6,
    title: '四成新'
  },
  {
    id: 7,
    title: '三成新'
  },
  {
    id: 8,
    title: '二成新'
  },
  {
    id: 9,
    title: '一成新'
  },
];
