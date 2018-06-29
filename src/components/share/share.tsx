import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Transition } from 'react-transition-group';

import Styled from 'styled-components';

import { mostyouth, pengyouquan, weixin, qq, copylink } from 'src/images';

import MaskLayer from '../mask-layer';

class WpShare extends React.Component<Iprops, {}> {

  public static defaultProps = {
    content: '',
    time: 1000,
    afterHide: () => { }
  };

  public state = {
    in: false
  };

  public componentDidMount(): void {
    this.setState({
      in: true
    });
  }

  public onCancel = (): void => {
    this.setState({
      in: false
    });
    this.props.removeChild();
    this.props.afterHide();
  }

  public weChatCircle = (): void => {

  }

  public weChatFriends = (): void => {

  }

  public render() {
    return (

      <Transition
        in={this.state.in} timeout={100} >
        {(status: any) => (
          <>
            <MaskLayer onClick={this.onCancel} className={`mask mask-${status}`} />
            <StyledDiv className={`fade fade-${status}`}>
              <div className='wpShareTitle'>分享到:</div>
              <div className='wpShareCenter border1px'>
                <a href='#' title='最青春'>
                  <img src={mostyouth} alt='最青春' />
                  最青春
                </a>
                <a href='#' title='pengyouquan' onClick={this.weChatCircle}>
                  <img src={pengyouquan} alt='pengyouquan' />
                  微信朋友圈
                </a>
                <a href='#' title='weixin' onClick={this.weChatFriends}>
                  <img src={weixin} alt='weixin' />
                  微信
                </a>
                <a href='#' title='qq'>
                  <img src={qq} alt='qq' />
                  QQ好友
                </a>
                <a href='#' title='copylink'>
                  <img src={copylink} alt='copylink' />
                  复制链接
                </a>
              </div>
              <button className='wpShareCancel' onClick={this.onCancel} >取消</button>
            </StyledDiv>
          </>
        )}
      </Transition>

    );
  }
}

interface Iprops {
  afterHide?: any;
  removeChild?: any;
  time?: number;
  content?: string;
}

const StyledDiv = Styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10000;
	height: 3.84rem;
	background: #f5f5f5;

  .wpShareTitle{
    padding: 0 0.38rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: 0.22rem;
    color: #353535;
  }

  .wpShareCenter{
    display: flex;
    height: calc(3.84rem - 2rem);
    ::after {
      background-color: #b2b2b2;
    }
  }
  .wpShareCenter a{
    width: calc(100% / 3);
    font-size: 0.24rem;
    line-height: 1.6;
    text-align: center;
    color: #353535;
  }
  .wpShareCenter img{
    width: 1.0rem;
    height: 1.0rem;
    display: block;
    margin: 0 auto 0.12rem;
  }
  .wpShareCancel{
    display: block;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    text-align: center;
    color: #353535;
    font-size: 0.34rem;
  }
  .wpShareCancel.active-state{
    background: #dadada;
  }

`;

export default function ContainerWpAlert(config: any) {
  const div = document.createElement('div') as HTMLElement;
  document.body.appendChild(div);
  function removeChild() {
    setInterval(() => {
      const unmountResult = ReactDOM.findDOMNode(div);
      if (unmountResult && div.parentNode) {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    }, 1000);
  }
  ReactDOM.render(
    <WpShare removeChild={removeChild.bind(this, div)} {...config} />,
    div
  );
}
