import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';


@observer

export default class ItemList extends React.Component<IProps, {}> {

  public static defaultProps = {
    padding: '0 .32rem',
    ellipsis: false,
    darkColor: false,
    border: true
  };

  public state = {};

  public $f7: any;

  public render() {
    const theme = {
      darkColor: this.props.darkColor,
      padding: this.props.padding,
      marginTop: this.props.marginTop,
      marginBottom: this.props.marginBottom,
      justifyContent: this.props.justifyContent,
      leftWidth: this.props.leftWidth
    };
    return (
      <StyledDiv className={this.props.border ? 'border1px' : ''} theme={theme}>
        {this.props.left && <div className='left'>{this.props.left}</div>}
        {this.props.icon}
        {this.props.center && <div className={`center ${this.props.ellipsis ? 'ellipsis' : ''}`}>{this.props.center}</div>}
        {this.props.right && <div className='right'>{this.props.right}</div>}
      </StyledDiv>
    );
  }

  public componentDidMount() {

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  left?: any;
  center?: any;
  right?: any;
  icon?: any;
  ellipsis?: boolean;
  darkColor?: boolean;
  border?: boolean;
  padding?: any;
  marginTop?: string;
  marginBottom?: string;
  justifyContent?: string;
  leftWidth?: string;
}

// interface IState {
//   user: any;
// }

const StyledDiv = Styled.li`
  display: flex;
  align-items: stretch;
  justify-content: ${ props => props.theme.justifyContent || 'flex-start'};
  min-height: .88rem;
  padding: ${ props => props.theme.padding};
  margin-top: ${ props => props.theme.marginTop || '0'};
  margin-bottom: ${ props => props.theme.marginBottom || '0'};
  background-color: #fff;
  font-size: .32rem;
  color: ${props => props.theme.darkColor ? '#333' : '#999'};

  &::before {
    left: .32rem;
  }

  .left {
    display: flex;
    align-items: center;
    flex: 1 0 ${props => props.theme.leftWidth || '1.6rem'};
    color: ${props => props.theme.darkColor ? '#333' : '#999'};
  }
  .center {
    display: flex;
    align-items: center;
    flex: 1 1 100%;
  }
  .ellipsis {
    line-height: 1.5;
    -webkit-box-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .center input {
    padding: 0;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 0 auto;
  }
  .right button {
    padding-right: 0;
  }
`;
