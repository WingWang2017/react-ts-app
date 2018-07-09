import * as React from 'react';

const HOCRefreshLoad = (Component: any) => {
  return class RefreshLoad extends React.Component<any, {}> {

    public $f7: any;

    public render() {
      const { className, ptrDistance, distance, lastPage, ...iProps } = this.props;
      return (
        <div
          className={`page-content ptr-content infinite-scroll-content ${this.props.className || ''}`}
          data-ptr-distance={this.props.ptrDistance || 100}
          data-distance={this.props.distance || 0} >

          <div className='ptr-preloader'>
            <div className='preloader' />
            <div className='ptr-arrow' />
          </div>

          <Component {...iProps} />

          <div className='preloader infinite-scroll-preloader' />

        </div>
      );
    }

    public componentDidMount(): void {
      this.refreshLoad();
    }

    public refreshLoad(): void {
      let loading = false;
      let page = 1;
      const ptr = this.$f7.$(`.${this.props.pageName} .page-content`);
      const scroll = this.$f7.$(`.${this.props.pageName} .infinite-scroll-content`);

      this.$f7.infiniteScroll.create(scroll);

      ptr.on('ptr:refresh', () => {
        page = 1;
        setTimeout(() => {
          this.props.onRefresh();
          this.$f7.ptr.done();
          // this.$f7.infiniteScroll.create(scroll);
          this.$f7.$('.infinite-scroll-preloader').show();
        }, 600);
      });

      scroll.on('infinite', () => {
        if (loading) { return; }
        loading = true;
        if (page >= this.props.lastPage) {
          loading = false;
          // this.$f7.infiniteScroll.destroy(scroll);
          this.$f7.$('.infinite-scroll-preloader').hide();
        } else {
          setTimeout(() => {
            loading = false;
            page++;
            this.props.onPullUp(page);
          }, 300);
        }
      });
    }

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
