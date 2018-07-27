import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { Header } from 'src/components';

import MainHeader from 'src/components/forum-list/header';
import MainCentent from 'src/components/forum-list/centent';

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
export default class CampusForumDetails extends React.Component<IProps, {}> {

  public state = {
    item: {}
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-name='CampusForumDetails'>
        <Header
          back={true}
          center='详情'
          right='' />
        <div className='page-content'>
          <MainHeader item={this.state.item} onDelete={this.onDelete} />
          <MainCentent item={this.state.item} link='#' />
        </div>
      </div>
    );
  }

  public componentDidMount() {
    // this.props.forumState.getData(this.props.f7route.params.id);
    this.props.forumState.data.map((item: any) => {
      console.log(item.id, this.props.f7route.params.id);
      if (item.id + '' === this.props.f7route.params.id) {
        this.setState({
          item
        }, () => {
          console.log(this.state.item);
        });
      }
    });
  }

  public componentWillUnmount(): void {

  }

  private onDelete = () => (): void => {

  }

}
