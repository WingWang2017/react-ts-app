import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';
import { observer } from 'mobx-react';

interface IProps {
  type: string;
  data: any[];
  removeChild: () => void;
  onClick(index: number): void;
}

@observer
class WpActions extends React.Component<IProps, {}> {

  public static defaultProps = {
    data: [],
    onClick: () => { }
  };

  public state = {

  };

  public render() {
    return (
      <>
        <StyledMenu>
          <StyledMain>
            {
              this.props.data.map((item: any, index: number) => {
                return (
                  <StyledLink
                    key={index}
                    href={item.link}
                    className='border1px'
                    onClick={this.onClick(index)}>
                    {item.title}
                  </StyledLink>
                );
              })
            }
          </StyledMain>
        </StyledMenu>
        <MaskLayer onClick={this.onClose} />
      </>
    );
  }

  public componentDidMount() {
    document.addEventListener('backbutton', this.hide.bind(this), false);
  }

  public componentWillUnmount() {
    document.removeEventListener('backbutton', this.hide.bind(this), false);
  }

  private hide() {
    this.props.removeChild();
  }

  private onClose = () => {
    this.hide();
  }

  private onClick = (index: number) => (): void => {
    this.hide();
    this.props.onClick(index);
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
    }, 10);
  }
  ReactDOM.render(
    <WpActions removeChild={removeChild.bind(this, div)} {...config} />,
    div
  );
}

const StyledMenu = Styled.div`
  position: fixed;
  top: .88rem;
  right: .2rem;
  z-index: 99999;
  width: 2.5rem;
  text-align: center;
  border-radius: 4px;
  color: #353535;
  background-color: #fff;

  &::after {
    position: absolute;
    z-index: 12;
    top: -.26rem;
    right: .16rem;
    width: 0;
    height: 0;
    content: "";
    border: .13rem solid #000;
    border-color: transparent transparent #fff;
  }
`;

const StyledMain = Styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const StyledLink = Styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: .9rem;

  &.active-state {
    background-color: #e3e4e8;
  }
`;
