import * as React from 'react';

import { observer, inject } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Footer, ForumList } from 'src/components';

import {
  huodong_icon,
  ershou_icon,
  huzhu_icon,
  shenghuo_icon
} from 'src/images';

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
export default class Discover extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-name='discover'>
        <Header
          left=''
          center='发现'
          right='' />
        <div className='page-content'>
          <StyledDiv>
            <StyledLink href='/discover/activity' title='' theme={{ icon: huodong_icon }}>活动报名</StyledLink>
            <StyledLink href='#' title='' theme={{ icon: ershou_icon }}>二手闲置</StyledLink>
            <StyledLink href='#' title='' theme={{ icon: huzhu_icon }}>互助代办</StyledLink>
            <StyledLink href='#' title='' theme={{ icon: shenghuo_icon }}>生活精选</StyledLink>
          </StyledDiv>
          <ForumList
            data={this.props.forumState}
            onDelete={this.onDelete}
            onLike={this.onLike}
            sendComments={this.sendComments}
            onDeleteThisComment={this.onDeleteThisComment} />
        </div>
        <Footer activedLink={4} />
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

const StyledDiv = Styled.div`
  display: flex;
  margin-bottom: .16rem;
  background-color: #fff;
`;

const StyledLink = Styled.a`
  width: 25%;
  height: 1.7rem;
  padding-top: 1.14rem;
  box-sizing: border-box;
  text-align: center;
  font-size: .24rem;
  background: #fff no-repeat center .16rem;
  background-size: .9rem .9rem;
  background-clip: padding-box;
  background-image: url("${props => props.theme.icon}");
`;
