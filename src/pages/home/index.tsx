import * as React from 'react';

import { observable, action, trace } from 'mobx';
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
    user: JSON.parse(localStorage.user)
  };

  @observable private dynamicList: any[] = [];
  @observable private lastPage: number = 1;

  @action public setData(name: any, data: any): void {
    this[name] = data;
  }

  public render() {
    trace();
    return (
      <div className='navbar-fixed toolbar-fixed page home' data-page='home'>
        <Header
          left={
            <a href='/qrscanner' data-animate-pages={false} className='link'>
              <img src={scanIcon} width='.42rem' height='auto' />
            </a>
          }
          center={this.state.user.school_name}
          right={
            <a href='/message' className='link'>
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

  public componentDidMount() {

    this.removeCached();

    this.getAjax();
  }

  public async getAjax(): Promise<any> {
    await this.getDynamicCampus();
    await this.getSchoolForum(1);
  }

  // 下拉刷新后的回调
  public onRefresh = () => {
    this.getAjax();
  }

  // 上拉加载后的回调
  public onPullUp = (page: any) => {
    this.getSchoolForum(page);
  }

  // 获取动态校园数据，并把数据放在 this.dynamicList 里
  public async getDynamicCampus(): Promise<any> {
    const res = await fetchAjax.getDynamicCampus();
    if (res.errcode) {
      this.setData('dynamicList', res.resource.data);
    }
    return res;
  }

  // 获取校内论坛，并把数据放在 this.props.forumState 里
  public async getSchoolForum(page: number): Promise<any> {
    const user = JSON.parse(localStorage.user);
    const res = await fetchAjax.getSchoolForum(user.user_id, page);
    if (res.errcode) {
      page === 1
        ? this.props.forumState.setData(res.resource.data)
        : this.props.forumState.pushData(res.resource.data);
      this.setData('lastPage', res.resource.lastPage);
      f7App.initImagesLazyLoad($$('.page-content'));
    }
    return res;
  }

  // 加载首页的时候，删除上页的page, 禁用当前页面的右滑回上一页
  public removeCached(): void {
    // f7App.mainView.params.swipeBackPage = false;
    const cached = $$('#main-view .pages>.page');
    if (cached.length >= 1) {
      const leng = cached.length - 1;
      for (let i = 0; i < leng; i++) {
        cached[i].remove();
      }
    }
  }

  // 点击删除自己发的论坛
  public onDelete = (item: any): void => {
    // console.log(this.props.forumState);
    const user = JSON.parse(localStorage.user);
    fetchAjax.getSchoolForumDelete(user.user_id, item.id).then((res: any) => {
      if (res.errcode) {
        this.props.forumState.removeData(item);
      }
    });
  }

  // 点赞和取消点赞
  public onLike = async (item: any): Promise<any> => {
    const user = JSON.parse(localStorage.user);
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
    const user = JSON.parse(localStorage.user);
    const parentID = mesType === 'comment' ? 0 : commentID;
    fetchAjax.getSchoolForumPublicComment(user.user_id, scfID, centent, parentID).then((res: any) => {
      if (res.errcode) {
        this.props.forumState.commentPushData(scfID, res.resource);
      }
    });
  }

  public onDeleteThisComment = (scfID: number, id: number): void => {
    const user = JSON.parse(localStorage.user);
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
      <div style={{ height: '210px' }}>asdasd</div>
      <div>
        <Ttitle centent='动态校园' link='#' />
        <ul>
          <DynamicList data={props.dynamicList} />
        </ul>
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
  return (
    props.data.map((item: any) =>
      <li key={item.id}>
        <List link={`/announcement/${item.id}`} linkName={item.title} rightName={dateC(item.public_time)} />
      </li>
    )
  );
});

interface IProps {
  forumState: any;
}

interface IState {
  user: any;
}

const StyledDiv = Styled.div`
  margin: .2rem 0;
`;

export default Home;
