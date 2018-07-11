import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Styled from 'styled-components';

class WpAlert extends React.Component<Iprops, {}> {

  public static defaultProps = {
    content: '',
    icon: '',
    time: 1500,
    afterHide: () => { }
  };

  public state = {
  };

  public componentDidMount(): void {
    setTimeout(() => {
      this.onHide();
    }, this.props.time);
  }

  public onHide(): void {
    this.props.removeChild();
    this.props.afterHide();
  }

  public render() {
    return (
      <StyledDiv>
        {
          this.props.icon && <img src={this.props.icon} className='icon' />
        }
        <p>{this.props.content}</p>
      </StyledDiv>
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
  padding: .24rem;
  border-radius: 6px;
  color: #fff;
  font-size: .28rem;
  background: rgba(0, 0, 0, .5);
  z-index: 999999;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .icon {
    margin: .15rem 0;
  }

  p {
    width: 100%;
    text-align: center;
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
