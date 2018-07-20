import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';

class WpAlert extends React.Component<Iprops, {}> {

  public static defaultProps = {
    content: '',
    icon: '',
    time: 2000,
    afterHide: () => { }
  };

  public state = {
  };

  public time: any;

  public componentDidMount(): void {
    this.time = setTimeout(() => {
      this.onHide();
    }, this.props.time);
  }

  public onHide(): void {
    this.props.removeChild();
    this.props.afterHide();
  }

  public onClick = (): void => {
    this.onHide();
    clearTimeout(this.time);
  }

  public render() {
    return (
      <>
        <MaskLayer bgClolr='none' onClick={this.onClick} />
        <StyledDiv>
          {
            this.props.icon && <p className='icon'><img src={this.props.icon} /></p>
          }
          <p>{this.props.content}</p>
        </StyledDiv>
      </>
    );
  }
}

interface Iprops {
  afterHide?: any;
  removeChild?: any;
  time?: number;
  content?: string;
  icon?: string;
}

const StyledDiv = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 2.8rem;
  padding: .48rem;
  border-radius: 6px;
  color: #fff;
  font-size: .28rem;
  background: rgba(0, 0, 0, .5);
  z-index: 999999;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .icon {
    margin: .15rem 0;
    flex: 0 0 auto;
  }
  .icon img {
    display: block;
    margin: 0 auto;
  }
  p {
    text-align: center;
    line-height: 1.5;
  }
`;

export default function ContainerWpAlert(config: any) {
  const div = document.createElement('div') as HTMLElement;
  setTimeout(() => {
    document.body.appendChild(div);
  }, 350);
  function removeChild() {
    const unmountResult = ReactDOM.findDOMNode(div);
    if (unmountResult && div.parentNode) {
      ReactDOM.unmountComponentAtNode(div);
      div.parentNode.removeChild(div);
    }
  }
  ReactDOM.render(
    <WpAlert removeChild={removeChild.bind(this, div)} {...config} />,
    div
  );
}
