import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

@observer
export default class Details extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='test-details'>
        <Header
          back={true}
          center='第一章 随堂小测'
          right='' />
        <div className='page-content'>
          <div className='test-header tabs'>
            <a href='#test1' className='tab-link'>1</a>
            <a href='#test2' className='tab-link'>2</a>
            <a href='#test3' className='tab-link'>3</a>
            <a href='#test4' className='tab-link'>4</a>
            <a href='#test5' className='tab-link'>5</a>
          </div>
          <div className='tabs-swipeable-wrap test-content'>
            <div className='tabs'>
              <div id='test1' className='tab tab-active'>asdasd</div>
              <div id='test2' className='tab'>as2223123dasd</div>
              <div id='test3' className='tab'>2223</div>
              <div id='test4' className='tab'>33333</div>
              <div id='test5' className='tab'>444</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }
