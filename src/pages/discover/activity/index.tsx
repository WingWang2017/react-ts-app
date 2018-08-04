import * as React from 'react';

import { observable, action } from "mobx";
import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { Header, InputSearch, PageHeader, DropDownBox } from 'src/components';

import Content from './content';

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
  dropDown: IDropDown;
}

interface IDropDown {
  state: any;
  setState(ags?: any): void;
}

interface Iitem {
  id: number;
  title: string;
}

class Store {

  @observable public state = {
    item: [
      {
        title: '校内',
        arrow: true
      },
      {
        title: '校外',
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
export default class Activity extends React.Component<IProps, {}> {

  public state = {

  };

  public $f7: F7.Dom;

  public store = new Store();

  public render() {
    return (
      <div className='navbar-fixed page' data-name='activity'>
        <Header
          back={true}
          center='活动报名'
          right='' />

        <StyeldDiv className='border1px page-search'>
          <InputSearch placeholder='活动名称/编号' onChange={this.onChange} />
        </StyeldDiv>

        <PageHeader item={this.store.state.item} onClick={this.onClick} />

        <Content />

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

  private onChange = (): void => {

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
        this.store.setTitle('校内');
      }
      if (this.store.state.index === 1) {
        this.store.setTitle('校外');
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

  private onLeftClick = (item: Iitem): void => {
    // console.log(item);

    this.store.setTitle(item.title);
  }

  private onRightClick = (item: Iitem): void => {
    // console.log(item);
  }

}

const TYPE = [
  {
    id: 0,
    title: '全部'
  },
  {
    id: 1,
    title: '就业创业'
  },
  {
    id: 2,
    title: '学习发展'
  },
  {
    id: 3,
    title: '人文艺术'
  },
  {
    id: 4,
    title: '自然科学'
  },
  {
    id: 5,
    title: '交流研讨'
  },
  {
    id: 6,
    title: '校园社团'
  },
  {
    id: 7,
    title: '趣味休闲'
  },
  {
    id: 8,
    title: '体育运动'
  },
  {
    id: 9,
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
    title: '近一周'
  },
  {
    id: 2,
    title: '近一个月'
  },
  {
    id: 3,
    title: '近三个月'
  },
];

const StyeldDiv = Styled.div`
  position: absolute;
  top: .88rem;
  left: 0;
  right: 0;
  z-index: 999;
  height: .92rem;
  padding: 0 .32rem;
  background-color: #fff;
`;
