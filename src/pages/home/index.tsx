import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, RefreshLoad, Ttitle, List } from 'src/components';

import { scanIcon, messageIcon } from 'src/images';

import fetchAjax from 'src/fetch';

import { dateC } from 'src/utils';


@observer
class Home extends React.Component<{}, IState> {

  public state = {
    user: JSON.parse(localStorage.user),
    schoolList: [],
    userType: 'student',
    schoolType: '',
    account: '',
    password: '',
    dynamicList: []
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
          <Ttitle centent='动态校园' link='#' />
          <ul>
            <DynamicList data={this.state.dynamicList} />
          </ul>
          <StyledDiv>ada</StyledDiv>
        </RefreshLoad>
      </div>
    );
  }

  public componentDidMount(): void {
    // ss
    this.refreshLoad();

    fetchAjax.getDynamicCampus(this.state.user.access_token, this.state.user.school_type).then(res => {
      console.log(res);
      if (res && res.errcode) {
        this.setState({
          dynamicList: res.resource.data
        });
      }
      console.log(this.state.dynamicList);
    });
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

const DynamicList = observer((props: any) => {
  return (
    props.data.map((item: any) =>
      <li key={item.id}>
        <List link={`/announcement/${item.id}`} linkName={item.title} rightName={dateC(item.public_time)} />
      </li>
    )
  );
});

// interface IProps {

// }

interface IState {
  user: any;
  schoolList: any[];
  schoolType: string;
  userType: string;
  account: string;
  password: string;
  dynamicList: any[];
}

const StyledDiv = Styled.div`
  padding: 0 .64rem;
`;

export default Home;
