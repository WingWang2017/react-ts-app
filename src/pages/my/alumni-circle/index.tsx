import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { Header, ForumList } from 'src/components';

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
export default class AlumniCircle extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='alumni-circle'>
        <Header
          back={true}
          center='我的校友圈'
          right='' />
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

  private onDelete = (): void => {

  }

  private onLike = (): void => {

  }

  private sendComments = (): void => {

  }

  private onDeleteThisComment = (): void => {

  }

}
