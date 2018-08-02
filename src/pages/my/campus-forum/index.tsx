import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { Header, ForumList, PageHeader } from 'src/components';

import { HOCRefreshLoad } from 'src/hocComponents/refresh-load';

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
  forumState: any;
}

// interface IState {
//   user: any;
// }

@inject('forumState')
@observer
export default class CampusForum extends React.Component<IProps, {}> {

  public state = {
    index: 1,
    item: [
      {
        title: '新的问题',
        arrow: true
      },
      {
        title: '我来解答',
        arrow: false
      },
      {
        title: '我的问题',
        arrow: false
      }
    ]
  };

  public $f7: F7.Dom;
  public lastPage: number = 1;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='CampusForum'>
        <Header
          back={true}
          center='校内论坛'
          right='' />
        <PageHeader item={this.state.item} onClick={this.onClick} />
        <HOCForumList
          pageName='campus-forum'
          lastPage={this.lastPage}
          onRefresh={this.onRefresh}
          onPullUp={this.onPullUp}

          data={this.props.forumState}
          onDelete={this.onDelete}
          onLike={this.onLike}
          sendComments={this.sendComments}
          onDeleteThisComment={this.onDeleteThisComment} />
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onRefresh = (): void => {

  }

  private onPullUp = (): void => {

  }

  private onDelete = (): void => {

  }

  private onLike = (): void => {

  }

  private sendComments = (): void => {

  }

  private onDeleteThisComment = (): void => {

  }

  private onClick = (index: number): void => {
    console.log(index);
  }

}

const HOCForumList = observer(HOCRefreshLoad((props) => {
  return (
    <ForumList
      data={props.data}
      onDelete={props.onDelete}
      onLike={props.onLike}
      sendComments={props.sendComments}
      onDeleteThisComment={props.onDeleteThisComment} />
  );
}));
