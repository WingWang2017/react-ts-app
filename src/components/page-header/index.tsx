import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { downarrow_icon, downarrow_seleced_icon } from 'src/images';

interface IProps {
  index?: number;
  item: Iitem[];
  onClick?: (index: number) => void;
}

interface IState {
  index: number;
}

interface Iitem {
  title: string;
  arrow: boolean;
}

@observer
export default class CampusForum extends React.Component<IProps, IState> {

  public static defaultProps = {
    index: 0,
    onClick: () => { }
  };

  public state = {
    index: this.props.index!
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <StyledHeader className='page-header border1px border-color-d8'>
        {
          this.props.item.map((item: Iitem, index: number) => {
            return (
              <StyledList
                key={index}
                className={`border-right ${this.state.index === index ? 'on' : ''}`} onClick={this.onClick(index)}>
                {item.title}
                {item.arrow && <StyledIcon />}
              </StyledList>
            );
          })
        }
      </StyledHeader>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount() {

  }

  private onClick = (index: number) => (): void => {
    this.setState({
      index
    });
    this.props.onClick!(index);
  }

}

const StyledHeader = Styled.ul`
  position: absolute;
  top: .88rem;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  height: .8rem;
  background-color: #fff;
`;

const StyledList = Styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  font-size: .28rem;
  &:nth-last-child(2),
  &:nth-last-child(2) ~ & {
    width: 50%;
  }
  &:nth-last-child(3),
  &:nth-last-child(3) ~ & {
    width: 33.333%;
  }

  &.active-state,
  &.on {
    color: #119C8F;
    border-bottom: 1px solid currentColor;
  }
`;

const StyledIcon = Styled.i`
  width: .24rem;
  height: .14rem;
  background: url("${downarrow_icon}") no-repeat center center / .24rem .14rem;
  margin-left: .36rem;

  .active-state > &,
  .on > & {
    background-image: url("${downarrow_seleced_icon}");
  }
`;
