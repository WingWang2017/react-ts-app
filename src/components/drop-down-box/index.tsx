import * as React from 'react';

import { observer, inject } from 'mobx-react';

import { Transition } from 'react-transition-group';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';

interface IProps {
  dropDown?: IDropDown;
  leftItem: Iitem[];
  rightItem: Iitem[];

  onLeftClick?(item: Iitem): void;
  onRightClick?(item: Iitem): void;
}

interface IDropDown {
  state: any;
  setState(ags?: any): any;
}

// interface IState {
//   user: any;
// }

@inject('dropDown')
@observer
export default class DropDownBox extends React.Component<IProps, {}> {

  public static defaultProps = {
    onLeftClick: () => { },
    onRightClick: () => { }
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <Transition
        in={this.props.dropDown!.state.in} timeout={100} >
        {(status: any) => (
          <>
            <StyeldBox className={`drop-down drop-down-${status}`} onClick={this.onClose}>
              <Lists item={this.props.leftItem} className='left' onClick={this.onLeftClick} />
              <Lists item={this.props.rightItem} className='right' onClick={this.onRightClick} />
            </StyeldBox>
            <MaskLayer onClick={this.onClose} className={`mask mask-${status}`} />
          </>
        )}
      </Transition>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onHide(): void {
    this.props.dropDown!.setState({ in: false });
  }

  private onClose = (): void => {
    this.onHide();
  }

  private onLeftClick = (item: Iitem): void => {
    this.props.onLeftClick!(item);
  }

  private onRightClick = (item: Iitem): void => {
    this.onHide();
    this.props.onRightClick!(item);
  }

}

interface IListsProps {
  item: IProps['leftItem'];
  className: string;
  onClick(item: Iitem): void;
}

interface IListsState {
  index: number;
}

interface Iitem {
  id: number;
  title: string;
}


@observer
class Lists extends React.Component<IListsProps, IListsState> {

  public static defaultProps = {
    className: '',
    onClick: () => { }
  };

  public state = {
    index: 0
  };

  public render() {
    return (
      <StyledLists className={this.props.className}>
        {
          this.props.item.map((item: Iitem, index: number) => {
            return (
              <li
                key={item.id}
                className={`border1px ${this.state.index === index ? 'on' : ''}`}
                onClick={this.onClick(item, index)}>
                {item.title}
              </li>
            );
          })
        }
      </StyledLists>
    );
  }

  private onClick = (item: Iitem, index: number) => (e: React.MouseEvent<Element>): void => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      index
    });
    if (index !== this.state.index) {
      this.props.onClick(item);
    }
  }

}

const StyeldBox = Styled.div`
  position: absolute;
  top: 2.6rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 888;
  & ~ .mask {
    z-index: 777;
  }
`;

const StyledLists = Styled.ul`
  float: left;
  width: 50%;
  max-height: 100%;
  overflow-y: auto;

  & li {
    display: flex;
    align-items: center;
    height: .96rem;
    padding: 0 .32rem;
  }

  &.left {
    background-color: #efefef;
  }

  &.left .active-state,
  &.left .on {
    background-color: #fff;
  }

  &.right {
    background-color: #fff;
  }

  &.right .active-state,
  &.right .on {
    color: #119C8F;
  }
`;
