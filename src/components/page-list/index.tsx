import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

@observer
export default class PageList extends React.Component<IProps, {}> {

  public static defaultProps = {
    link: '#',
    onClick: () => { }
  };

  public state = {};

  public $f7: F7.Dom;

  public render() {
    const theme = {
      display: this.props.display,
      padding: this.props.padding,
      margin: this.props.margin,
      bgColor: this.props.bgColor,
      activeBgColor: this.props.activeBgColor
    };
    return (
      <li className='border1px'>
        <StyledLink href={this.props.link} title='' theme={theme} onClick={this.onClick}>
          {
            this.props.children
          }
        </StyledLink>
      </li>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onClick = (e: React.MouseEvent<Element>): void => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClick(e);
  }

}

interface IProps {
  link?: string;
  display?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  activeBgColor?: string;
  onClick(e: React.MouseEvent<Element>): void;
}

// interface IState {
//   user: any;
// }

const StyledLink = Styled.a`
  display: ${props => props.theme.display || 'block'};
  flex-wrap: wrap;
  padding: ${props => props.theme.padding || '0 .32rem'};
  margin: ${props => props.theme.margin || '0'};
  background-color: ${props => props.theme.bgColor || '#fff'};

  &.active-state {
    background-color: ${props => props.theme.activeBgColor || '#e3e4e8'};
  }
`;
