import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Transition } from 'react-transition-group';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';

interface IProps {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  isDefine?: boolean;
  onDefine?: any;
  onConfirm?: any;
  removeChild?: any;
  color?: string;
}

class WpActions extends React.Component<IProps, {}> {

  public static defaultProps = {
    title: '提示',
    confirmText: '删除',
    cancelText: '取消',
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
    const theme = {
      color: this.props.color || '#333',
      margin_bottom: this.props.isDefine
    };
    return (
      <Transition
        in={this.state.in} timeout={100} >
        {(status: any) => (
          <>
            <MaskLayer onClick={this.onCancel} className={`mask mask-${status}`} />
            <StyledDiv className={`fade fade-${status}`}>
              {
                this.props.isDefine
                  ? <button className='actionsButton border1px' onClick={this.props.onDefine}>{this.props.title}</button>
                  : <p className='actionsTitle border1px'>{this.props.title}</p>
              }
              <StyledButtonTwo
                theme={theme}
                onClick={this.onConfirm} >
                {this.props.confirmText}
              </StyledButtonTwo>
              <StyledButton
                onClick={this.onCancel}>
                {this.props.cancelText}
              </StyledButton>
            </StyledDiv>
          </>
        )}
      </Transition>
    );
  }
}

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
  .actionsTitle{
    line-height: 1.24rem;
    background: #fff;
    color: #888;
    font-size: 0.3rem;
    position: relative;
  }
`;

const StyledButton = Styled.button`
  display: block;
  border: 0;
  width: 100%;
  line-height: 1rem;
  background: #fff;
  font-size: .36rem;
  &.active-state{
    background: #F0F1F4;
  }
`;

const StyledButtonTwo = StyledButton.extend`
  color: ${props => props.theme.color};
  margin-bottom: ${props => props.theme.margin_bottom ? '0' : '.14rem'};
`;
