import * as React from 'react';

const HOCRefreshLoad = (Component: any) => {
  return class RefreshLoad extends React.Component<any, {}> {

    public render() {
      const { className, ptrDistance, distance, lastPage, ...iProps } = this.props;
      return (
        <div
          className={`page-content pull-to-refresh-content infinite-scroll ${this.props.className || ''}`}
          data-ptr-distance={this.props.ptrDistance || 55}
          data-distance={this.props.distance || 1} >

          <div className='pull-to-refresh-layer'>
            <div className='preloader' />
            <div className='pull-to-refresh-arrow' />
          </div>

          <Component {...iProps} />

          <div className='infinite-scroll-preloader'>
            <div className='preloader' />
          </div>

        </div>
      );
    }

    public componentDidMount(): void {
      // this.refreshLoad();
    }

    // public refreshLoad() {
    //   let loading = false;
    //   let page = 1;
    //   const preloader = $$(`.${this.props.pageName} .infinite-scroll-preloader`);
    //   const ptr = $$(`.${this.props.pageName} .pull-to-refresh-content`);
    //   const scroll = $$(`.${this.props.pageName} .infinite-scroll`);

    //   f7App.attachInfiniteScroll(scroll);
    //   preloader.hide();

    //   ptr.on('ptr:refresh', () => {
    //     page = 1;
    //     setTimeout(() => {
    //       this.props.onRefresh();
    //       f7App.pullToRefreshDone();
    //       f7App.attachInfiniteScroll(scroll);
    //     }, 600);
    //   });

    //   scroll.on('infinite', () => {
    //     if (loading) { return; }
    //     loading = true;
    //     if (page >= this.props.lastPage) {
    //       loading = false;
    //       f7App.detachInfiniteScroll(scroll);
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
