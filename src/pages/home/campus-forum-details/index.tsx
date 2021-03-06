import * as React from 'react';

import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

import MainHeader from 'src/components/forum-list/header';
import MainCentent from 'src/components/forum-list/centent';
import MainFooter from 'src/components/forum-list/footer';

import CommentList from 'src/pages/home/components/comment';
import LikesList from 'src/pages/home/components/likes-list';

import { throttle } from 'src/utils';

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

  public headerHeight: any;
  public tabsTitle: any;
  public tabs: any;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-name='CampusForumDetails'>
        <Header
          back={true}
          center='详情'
          right='' />
        <div className='page-content scroll'>
          <div className='content-header bg-white'>
            <MainHeader item={this.state.item} onDelete={this.onDelete} />
            <MainCentent item={this.state.item} />
          </div>
          <StyledTabsTitle className='border1px tabs-title'>
            <li className='li'>10/16</li>
            <li className='li'>
              <a href='#comment-list' title='' className='tab-link tab-link-active'>评论 10</a>
            </li>
            <li className='li'>
              <a href='#like-list' title='' className='tab-link'>赞 5</a>
            </li>
          </StyledTabsTitle>
          <StyledTabs className='tabs'>
            <CommentList item={this.state.item} />
            <LikesList />
          </StyledTabs>
        </div>
        <MainFooter />
      </div>
    );
  }

  public componentDidMount() {
    // this.props.forumState.getData(this.props.f7route.params.id);
    // this.props.forumState.data.map((item: any) => {
    //   if (item.id + '' === this.props.f7route.params.id) {
    //     this.setState({
    //       item
    //     });
    //   }
    // });
    const { forumState, f7route } = this.props;

    const item = forumState.data.filter((value: { id: number }) => (value.id + '' === f7route.params.id))[0];

    this.setState({
      item
    });

    this.tabsTitle = this.$f7.$('.page .page-content .tabs-title');
    this.tabs = this.$f7.$('.page .page-content .tabs');
    this.$f7.$('.page .scroll').on('scroll', throttle(this.onScroll.bind(this), 100, false), false);
  }

  public componentWillUnmount(): void {
    this.$f7.$('.page .scroll').off('scroll', this.onScroll.bind(this), false);
  }

  private onScroll(e: any): void {
    const scrollTop = e.target.scrollTop;
    this.headerHeight = this.$f7.$('.page .page-content .content-header').outerHeight(true);
    console.log(1);
    if (scrollTop >= this.headerHeight) {
      if (!this.tabsTitle.hasClass('fixed')) {
        this.tabsTitle.addClass('fixed');
        this.tabs.addClass('margin');
      }
    } else {
      if (this.tabsTitle.hasClass('fixed')) {
        this.tabsTitle.removeClass('fixed');
        this.tabs.removeClass('margin');
      }
    }
  }

  private onDelete = () => (): void => {

  }

}


const StyledTabsTitle = Styled.ul`
  display: flex;
  align-items: stretch;
  margin-top: .16rem;
  height: .8rem;
  background-color: #fff;

  &.fixed {
    position: fixed;
    top: .88rem;
    right: 0;
    left: 0;
    z-index: 999;
    margin-top: 0;
  }

  & .li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3);
    font-size: .28rem;

    &:first-child {
      color: #999;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: relative;
    }

  }

  & .tab-link-active:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: '';
    width: 1rem;
    height: .04rem;
    transform: translateX(-50%);
    background-color: #81D8D0;
  }

`;

const StyledTabs = Styled.div`
  margin-bottom: .32rem;
  &.margin {
    margin-top: .8rem;
  }
`;
