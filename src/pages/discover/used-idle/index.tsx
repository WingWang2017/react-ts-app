import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { Header, PageHeaderDown, ForumList } from 'src/components';
@inject('forumState')
@observer
export default class UsedIdle extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='used-idle'>
        <Header
          back={true}
          center='二手闲置'
          right={
            <a href='#' title=''>发布</a>
          } />

        <PageHeaderDown
          headerItem={HEADER_ITEM}
          leftItem={TYPE}
          rightItem={TIME}
          onHeaderClick={this.onHeaderClick}
          onLeftClick={this.onLeftClick}
          onRightClick={this.onRightClick} />

        <div className='page-content'>
          <ForumList
            data={this.props.forumState}
            onDelete={this.onDelete}
            onLike={this.onLike}
            sendComments={this.sendComments}
            onDeleteThisComment={this.onDeleteThisComment} />
        </div>

      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

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

  private onDelete = (): void => {

  }

  private onLike = (): void => {

  }

  private sendComments = (): void => {

  }

  private onDeleteThisComment = () => {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
  forumState: any;
}

interface Iitem {
  id: number;
  title: string;
}


// interface IState {
//   user: any;
// }

const HEADER_ITEM = [
  {
    title: '新鲜的',
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
