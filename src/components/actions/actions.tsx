import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Transition } from 'react-transition-group';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';

interface IProps {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  className?: string;
  isDefine?: boolean;
  onDefine?: any;
  onConfirm?: any;
  removeChild?: any;
}

class WpActions extends React.Component<IProps, {}> {

  public static defaultProps = {
    title: '提示',
    confirmText: '删除',
    cancelText: '取消',
    className: '',
    isDefine: false,
    onDefine: () => { },
    onConfirm: () => { }
  };

  public state = {
    in: false
  };

  public hide() {
    this.setState({
      in: false
    });
    this.props.removeChild();
  }

  public onConfirm = () => {
    this.hide();
    this.props.onConfirm();
  }

  public onCancel = () => {
    this.hide();
  }

  public componentDidMount() {
    this.setState({
      in: true
    });
    document.addEventListener('backbutton', this.hide.bind(this), false);
  }

  public componentWillUnmount() {
    document.removeEventListener('backbutton', this.hide.bind(this), false);
  }

  public render() {
    const isPorps = {
      in: this.state.in,
      title: this.props.title,
      confirmText: this.props.confirmText,
      cancelText: this.props.cancelText,
      className: this.props.className,
      isDefine: this.props.isDefine,
      onDefine: this.props.onDefine,
      onConfirm: this.onConfirm,
      onCancel: this.onCancel
    };
    return <Actions {...isPorps} />;
  }
}

const Actions = (props: any) =>
  <Transition
    in={props.in} timeout={100} >
    {(status: any) => (
      <>
        <MaskLayer onClick={props.onCancel} className={`mask mask-${status}`} />
        <StyledDiv className={`fade fade-${status}`}>
          {
            props.isDefine
              ? <button className='actionsButton border1px' onClick={props.onDefine}>{props.title}</button>
              : <p className='actionsTitle border1px'>{props.title}</p>
          }
          <button
            className={`actionsButton ${(props.confirmText === '删除' || props.confirmText === '残忍拒绝') ? 'margin14' : 'margin15'} ${props.className}`}
            onClick={props.onConfirm} >
            {props.confirmText}
          </button>
          <button className='actionsButton' onClick={props.onCancel}>{props.cancelText}</button>
        </StyledDiv>
      </>
    )}
  </Transition>;

export default function ContainerWpActions(config: any) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function removeChild() {

    setTimeout(() => {
      const unmountResult = ReactDOM.findDOMNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }, 600);
  }
  ReactDOM.render(
    <WpActions removeChild={removeChild.bind(this, div)} {...config} />,
    div
  );
}

const StyledDiv = Styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 9999;
  background: #EFEFF4;
  text-align: center;

  .actionsButton{
    display: block;
    border: 0;

    width: 100%;
    line-height: 1.0rem;

    background: #fff;
    font-size: 0.36rem;
  }
  .actionsButton.active-state{
    background: #F0F1F4;
  }
  .actionsTitle{
    line-height: 1.24rem;
    background: #fff;
    color: #888;
    font-size: 0.3rem;
    position: relative;
  }

  .margin14{
    margin-bottom: 0.14rem;
    color: #F7827C;
  }
  .margin15{
    margin-bottom: 0.14rem;
  }
`;
