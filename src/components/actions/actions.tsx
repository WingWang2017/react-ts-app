import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Transition } from 'react-transition-group';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';
import { observer } from 'mobx-react';

interface IProps {
  type: string;
  title?: string;
  color?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  removeChild: () => void;

  textList?: string;
  onListClick: (index: number) => void;
}
@observer
class WpActions extends React.Component<IProps, {}> {

  public static defaultProps = {
    title: '提示',
    confirmText: '删除',
    cancelText: '取消',
    onConfirm: () => { },
    onListClick: () => { }
  };

  public state = {
    in: false
  };

  public render() {
    const theme = {
      color: this.props.color || '#333'
    };
    return (
      <Transition
        in={this.state.in} timeout={100} >
        {(status: any) => (
          <>
            <MaskLayer onClick={this.onCancel} className={`mask mask-${status}`} />
            <StyledDiv className={`fade fade-${status}`}>
              {
                this.props.type === 'default' &&
                <>
                  <p className='actionsTitle border1px'>{this.props.title}</p>
                  <StyledButtonTwo
                    theme={theme}
                    className='border1px'
                    onClick={this.onConfirm} >
                    {this.props.confirmText}
                  </StyledButtonTwo>
                </>
              }
              {
                this.props.type === 'customize' && <Customize textList={this.props.textList} onListClick={this.onListClick} />

              }
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

  public componentDidMount() {
    this.setState({
      in: true
    });
    document.addEventListener('backbutton', this.hide.bind(this), false);
  }

  public componentWillUnmount() {
    document.removeEventListener('backbutton', this.hide.bind(this), false);
  }

  private hide() {
    this.setState({
      in: false
    });
    this.props.removeChild();
  }

  private onConfirm = () => {
    this.hide();
    this.props.onConfirm();
  }

  private onCancel = () => {
    this.hide();
  }

  private onListClick = (index: number) => (): void => {
    this.hide();
    this.props.onListClick(index);
  }

}

const Customize = observer((props: any) => {
  return (
    <>
      {
        props.textList.map((item: any, index: number) => {
          return (
            <StyledButton
              key={index}
              className={`border1px`}
              onClick={props.onListClick(index)}>
              {item}
            </StyledButton>
          );
        })
      }
    </>
  );
});

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
  z-index: 99999;
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
  &:not(.border1px) {
    margin-top: .14rem;
  }
`;

const StyledButtonTwo = StyledButton.extend`
  color: ${props => props.theme.color};
`;
