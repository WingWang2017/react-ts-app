import * as React from 'react';

// import { Dom7 } from 'framework7-react/dist/commonjs/framework7/Framework7';
// import { Framework7 } from 'framework7-react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, RefreshLoad } from './../../components';

import { scanIcon, messageIcon } from './../../images';
// import { Dom7 } from 'framework7';

// import fetchAjax from './../../fetch';


@observer
class Home extends React.Component<{}, IState> {

  public state = {
    user: JSON.parse(localStorage.user),
    schoolList: [],
    userType: 'student',
    schoolType: '',
    account: '',
    password: ''
  };

  private lastPage: number = 0;

  public render() {
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
        <RefreshLoad>
          <StyledDiv>ada</StyledDiv>
        </RefreshLoad>
      </div>
    );
  }

  public componentDidMount(): void {
    // ss
    this.refreshLoad();
  }

  public refreshLoad() {
    let loading = false;
    let page = 1;
    const preloader = $$('.home .infinite-scroll-preloader');
    const ptr = $$('.home .pull-to-refresh-content');
    const scroll = $$('.home .infinite-scroll');

    preloader.hide();
    ptr.on('ptr:refresh', () => {
      page = 1;
      setTimeout(() => {
        f7App.pullToRefreshDone();
        f7App.attachInfiniteScroll(scroll);
      }, 600);
    });

    scroll.on('infinite', () => {
      if (loading) { return; }
      loading = true;
      if (page >= this.lastPage) {
        loading = false;
        f7App.detachInfiniteScroll(scroll);
        preloader.hide();
      } else {
        preloader.show();
        setTimeout(() => {
          loading = false;
          page++;
          // this.loadAjax(page);
        }, 600);
      }
    });

  }

}

// interface IProps {

// }

interface IState {
  user: any;
  schoolList: any[];
  schoolType: string;
  userType: string;
  account: string;
  password: string;
}

const StyledDiv = Styled.div`
  padding: 0 .64rem;
`;

export default Home;
