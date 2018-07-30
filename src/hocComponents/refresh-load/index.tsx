import * as React from 'react';

import { Page } from 'framework7-react';

const HOCRefreshLoad = (Component: any) => {
  return class RefreshLoad extends React.Component<any, {}> {

    public state = {
      allowInfinite: true,
      ptrPreloader: true,
      showPreloader: true,
      page: 1
    };

    public $f7: any;

    public render() {
      const { className, ptrDistance, distance, lastPage, ...iProps } = this.props;
      return (
        <Page
          infinite={true}
          ptrPreloader={this.state.ptrPreloader}
          infiniteDistance={0}
          infinitePreloader={this.state.showPreloader}
          onInfinite={this.onScroll}
          ptr={true}
          onPtrRefresh={this.onPtrRefresh}>

          <Component {...iProps} />

        </Page>
      );
    }

    public componentDidMount(): void {
      // this.refreshLoad();
      const el = this.$f7.$(`.${this.props.pageName}`)[0];
      el.addEventListener('page:beforeout', this.onPageBeforeOut.bind(this), false);
      el.addEventListener('page:afterin', this.onPageAfterIn.bind(this), false);
    }

    public componentWillUnmount() {
      const el = this.$f7.$(`.${this.props.pageName}`)[0];
      el.removeEventListener('page:beforeout', this.onPageBeforeOut.bind(this), false);
      el.removeEventListener('page:afterin', this.onPageAfterIn.bind(this), false);
    }

    private onPageBeforeOut(): void {
      this.setState({
        ptrPreloader: false,
        showPreloader: false
      });
    }

    private onPageAfterIn(): void {
      this.setState({
        ptrPreloader: true,
        showPreloader: true
      });
    }

    // 下拉刷新
    private onPtrRefresh = (event: any, done: any): void => {
      setTimeout(() => {
        this.setState({
          page: 1,
          showPreloader: true,
          allowInfinite: true
        }, () => {
          this.props.onRefresh(this.state.page);
        });
        done();
      }, 600);
    }

    // 滚动到底触发事件
    private onScroll = (): void => {
      if (!this.state.allowInfinite) { return; }
      this.setState({ allowInfinite: false });

      if (this.state.page >= this.props.lastPage) {
        this.setState({ showPreloader: false });
        return;
      }

      setTimeout(() => {
        this.setState({ allowInfinite: true });
        this.setState((prevState: { page: number }) => {
          return {
            page: prevState.page + 1
          };
        }, () => {
          this.props.onPullUp(this.state.page);
        });
      }, 300);
    }


    // public refreshLoad(): void {
    //   let loading = false;
    //   let page = 1;
    //   const ptr = this.$f7.$(`.${this.props.pageName} .page-content`);
    //   const scroll = this.$f7.$(`.${this.props.pageName} .infinite-scroll-content`);

    //   this.$f7.infiniteScroll.create(scroll);

    //   ptr.on('ptr:refresh', () => {
    //     page = 1;
    //     setTimeout(() => {
    //       this.props.onRefresh();
    //       this.$f7.ptr.done();
    //       // this.$f7.infiniteScroll.create(scroll);
    //       this.$f7.$('.infinite-scroll-preloader').show();
    //     }, 600);
    //   });

    //   scroll.on('infinite', () => {
    //     if (loading) { return; }
    //     loading = true;
    //     if (page >= this.props.lastPage) {
    //       loading = false;
    //       // this.$f7.infiniteScroll.destroy(scroll);
    //       this.$f7.$('.infinite-scroll-preloader').hide();
    //     } else {
    //       setTimeout(() => {
    //         loading = false;
    //         page++;
    //         this.props.onPullUp(page);
    //       }, 300);
    //     }
    //   });
    // }

    // public refreshLoad() {
    //   let loading = false;
    //   let page = 1;
    //   const preloader = this.$f7.$(`.${this.props.pageName} .infinite-scroll-preloader`);
    //   const ptr = this.$f7.$(`.${this.props.pageName} .pull-to-refresh-content`);
    //   const scroll = this.$f7.$(`.${this.props.pageName} .infinite-scroll`);

    //   this.$f7.infiniteScroll.destroy(scroll);
    //   preloader.hide();

    //   ptr.on('ptr:refresh', () => {
    //     page = 1;
    //     setTimeout(() => {
    //       this.props.onRefresh();
    //       // f7App.pullToRefreshDone();
    //       this.$f7.ptr.done(preloader);
    //       this.$f7.infiniteScroll.destroy(scroll);
    //       // f7App.attachInfiniteScroll(scroll);
    //     }, 600);
    //   });

    //   scroll.on('infinite', () => {
    //     if (loading) { return; }
    //     loading = true;
    //     if (page >= this.props.lastPage) {
    //       loading = false;
    //       // f7App.detachInfiniteScroll(scroll);
    //       this.$f7.infiniteScroll.create(scroll);
    //       preloader.hide();
    //     } else {
    //       preloader.show();
    //       setTimeout(() => {
    //         loading = false;
    //         page++;
    //         this.props.onPullUp(page);
    //       }, 300);
    //     }
    //   });

    // }
  };
};

export default HOCRefreshLoad;
