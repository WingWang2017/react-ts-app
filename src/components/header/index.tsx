import * as React from 'react';

import { observer } from 'mobx-react';

// import Styled from 'styled-components';

import { backIcon } from 'src/images';

@observer
class Header extends React.Component<IProps, {}> {

  public static defaultProps = {
    onBack: () => { }
  };

  public state = {

  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar' slot='fixed'>
        <div className='navbar-inner header sliding'>
          <Left
            left={this.props.left}
            back={this.props.back}
            onBack={this.onBack} />
          <div className='title sliding'>{this.props.center}</div>
          <div className='right sliding'>{this.props.right}</div>
        </div>
      </div>
    );
  }

  public componentDidMount(): void {
    // ss
  }

  public onBack = (): void => {
    // this.props.f7.f7App.attachInfiniteScroll(Dom7('.infinite-scroll'));
    // Dom7('.infinite-scroll-preloader').show();

    // console.log(Dom7);
    // this.$f7.$('.infinite-scroll-preloader').show();
    this.props.onBack();
  }

}

const width = { width: '.22rem' };

const Left = (props: any) => {
  return (
    <div className='left sliding'>
      {
        props.back ?
          <a className={`links back`}
            onClick={props.onBack} >
            <img src={backIcon} className='wpIcon' style={width} />
          </a>
          : props.left
      }
    </div>
  );
};

interface IProps {
  f7?: any;
  left?: any;
  center?: any;
  right?: any;
  back?: boolean;
  onBack?: any;
  slot?: any;
}

// interface IState {
//   // dasd
// }

export default Header;
