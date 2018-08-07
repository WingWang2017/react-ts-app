import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, InputSearch, PageHeaderDown } from 'src/components';

import Content from './content';

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

interface Iitem {
  id: number;
  title: string;
}


@observer
export default class Activity extends React.Component<IProps, {}> {

  public state = {

  };

  public $f7: F7.Dom;

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

        <PageHeaderDown
          headerItem={HEADER_ITEM}
          leftItem={TYPE}
          rightItem={TIME}
          onHeaderClick={this.onHeaderClick}
          onLeftClick={this.onLeftClick}
          onRightClick={this.onRightClick} />

        <Content />

      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onChange = (): void => {

  }

  private onHeaderClick = (index: number): void => {
    console.log(index);
  }

  private onLeftClick = (item: Iitem): void => {
    console.log(item);
  }

  private onRightClick = (item: Iitem): void => {
    console.log(item);
  }

}

const HEADER_ITEM = [
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
];

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
