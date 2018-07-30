import * as React from 'react';

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Footer, Ttitle, List, ForumList } from 'src/components';

import { scanIcon, messageIcon } from 'src/images';

import fetchAjax from 'src/fetch';

import { dateC } from 'src/utils';

import HOCRefreshLoad from 'src/hocComponents/refresh-load';


@inject('forumState')
@observer
class Home extends React.Component<IProps, IState> {

  public state = {
    user: localStorage.user && JSON.parse(localStorage.user)
  };

  public $f7: any;

  @observable private dynamicList: any[] = [];
  @observable private lastPage: number = 1;

  @action public setData(name: any, data: any): void {
    this[name] = data;
  }

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page home' data-name='home'>
        <Header
          left={
            <a href='/qrscanner' className='links'>
              <img src={scanIcon} width='.42rem' height='auto' />
            </a>
          }
          center={this.state.user && this.state.user.school_name}
          right={
            <a href='/message' className='links'>
              <img src={messageIcon} width='.42rem' height='auto' />
            </a>
          } />
        <HomeCentent
          pageName='home'
          lastPage={this.lastPage}
          onRefresh={this.onRefresh}
          onPullUp={this.onPullUp}

          dynamicList={this.dynamicList}
          forumState={this.props.forumState}
          onDelete={this.onDelete}
          onLike={this.onLike}
          sendComments={this.sendComments}
          onDeleteThisComment={this.onDeleteThisComment} />

        <Footer activedLink={1} />
      </div>
    );
  }

  public componentDidMount(): void {
    document.addEventListener('deviceready', this.deviceready.bind(this), false);
    this.getAjax(1);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('deviceready', this.deviceready.bind(this), false);

    // 组件销毁后 销毁/禁用延迟加载
    this.$f7.lazy.destroy('.page-content');
  }

  public deviceready() {
    this.$f7.$('.navbar').removeClass('navbar-hidden');
    this.$f7.statusbar.setBackgroundColor('#81D8D0');
  }

  public async getAjax(page: number): Promise<any> {
    await this.getDynamicCampus();
    await this.getSchoolForum(page);
  }

  // 下拉刷新后的回调
  public onRefresh = (page: number) => {
    console.log(page);
    this.getAjax(page);
  }

  // 上拉加载后的回调
  public onPullUp = (page: number) => {
    this.getSchoolForum(page);
  }

  // 获取动态校园数据，并把数据放在 this.dynamicList 里
  public async getDynamicCampus(): Promise<any> {
    const res: Ajax.AjaxResponse = await fetchAjax.getDynamicCampus();
    if (!res.errcode && res.data) {
      this.setData('dynamicList', res.data);
    }
    return res;
  }

  // 获取校内论坛，并把数据放在 this.props.forumState 里
  public async getSchoolForum(page: number): Promise<any> {
    // const user = localStorage.user && JSON.parse(localStorage.user);
    const res: Ajax.AjaxResponse = await fetchAjax.getSchoolForum('1', page);
    console.log(res.data);
    if (!res.errcode && res.data) {

      if (page === 1) {
        this.props.forumState.setData(res.data.list);
        this.setData('lastPage', res.data.lastPage);

        // 初始化页面上的img延迟加载
        this.$f7.lazy.create('.page-content');
      } else if (page > 1) {
        this.props.forumState.pushData(res.data.list);
      }


    }
    return res;
  }

  // 点击删除自己发的论坛
  public onDelete = (item: any): void => {
    // console.log(this.props.forumState);
    const user = localStorage.user && JSON.parse(localStorage.user);
    fetchAjax.getSchoolForumDelete(user.user_id, item.id).then((res: any) => {
      if (res.errcode) {
        this.props.forumState.removeData(item);
      }
    });
  }

  // 点赞和取消点赞
  public onLike = async (item: any): Promise<any> => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const res = item.zan_status
      ? await fetchAjax.getSchoolForumUnspott(user.user_id, item.id)
      : await fetchAjax.getSchoolForumSpot(user.user_id, item.id);
    if (res.errcode) {
      if (res.errmsg === '点赞成功') {
        this.props.forumState.spot(item.id);
      } else {
        this.props.forumState.unspot(item.id);
      }
    }
    // 第二种点赞和取消点赞方法
    // if (item.zan_status) {
    //   fetchAjax.getSchoolForumUnspott(user.user_id, item.id).then((res: any) => {
    //     if (res.errcode) {
    //       console.log(res);
    //       this.props.forumState.unspot(item.id);
    //     }
    //   });
    // } else {
    //   fetchAjax.getSchoolForumSpot(user.user_id, item.id).then((res: any) => {
    //     if (res.errcode) {
    //       console.log(res);
    //       this.props.forumState.spot(item.id);
    //     }
    //   });
    // }
  }

  public sendComments = (centent: string, mesType: string, scfID: number, commentID: number): void => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const parentID = mesType === 'comment' ? 0 : commentID;
    fetchAjax.getSchoolForumPublicComment(user.user_id, scfID, centent, parentID).then((res: any) => {
      if (res.errcode) {
        this.props.forumState.commentPushData(scfID, res.resource);
      }
    });
  }

  public onDeleteThisComment = (scfID: number, id: number): void => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    fetchAjax.getSchoolForumDelComment(user.user_id, scfID, id).then((res: any) => {
      if (res.errcode) {
        this.props.forumState.commentRemoveData(id);
      }
    });
  }

}

const HomeCentent = observer(HOCRefreshLoad((props: any) => {
  return (
    <>
      <div>
        <Ttitle centent='动态校园' link='#' />
        <StyledUL className='border-left-34'>
          <DynamicList data={props.dynamicList} />
        </StyledUL>
      </div>
      <StyledDiv>
        <Ttitle centent='校内论坛' />
        <ForumList
          data={props.forumState}
          onDelete={props.onDelete}
          onLike={props.onLike}
          sendComments={props.sendComments}
          onDeleteThisComment={props.onDeleteThisComment} />
      </StyledDiv>
    </>
  );
}));

const DynamicList = observer((props: any) => {
  console.log(props.data);
  return (
    props.data.map((item: any) =>
      <li key={item.id} className='border1px'>
        <List link={`/announcement/${item.id}`} linkName={item.title} rightName={dateC(item.public_time)} />
      </li>
    )
  );
});

interface IProps {
  f7router?: any;
  f7route?: any;
  forumState: any;
}

interface IState {
  user: any;
}

const StyledUL = Styled.ul`
  background-color: #fff;
`;

const StyledDiv = Styled.div`
  margin: .2rem 0;
`;

export default Home;
