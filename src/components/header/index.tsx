import * as React from 'react';

import { observer } from 'mobx-react';

// import Styled from 'styled-components';

// import { LoginView, InputText, InputPassword, Button, Select, Back, Alert } from './../../components';

import { backIcon } from 'src/images';

@observer
class Header extends React.Component<IProps, {}> {

  public static defaultProps = {
    onBack: () => { }
  };

  public state = {

  };

  public render() {
    return (
      <div className='navbar'>
        <div className='navbar-inner header padding'>
          <Left
            left={this.props.left}
            back={this.props.back}
            onBack={this.onBack} />
          <div className='center'>{this.props.center}</div>
          <div className='right'>{this.props.right}</div>
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
    this.props.onBack();
  }

}

const width = { width: '.22rem' };

const Left = (props: any) => {
  return (
    <div className='left'>
      {
        props.back ?
          <a className={`link back`}
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
}

// interface IState {
//   // dasd
// }

export default Header;
