import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';


@observer

export default class ItemList extends React.Component<IProps, {}> {

  public static defaultProps = {
    padding: '0 .32rem'
  };

  public state = {};

  public $f7: any;

  public render() {
    const theme = {
      padding: this.props.padding
    };
    return (
      <StyledDiv className='border1px' theme={theme}>
        {this.props.left && <div className='left'>{this.props.left}</div>}
        {this.props.center && <div className='center'>{this.props.center}</div>}
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
  padding?: any;
}

// interface IState {
//   user: any;
// }

const StyledDiv = Styled.li`
  display: flex;
  align-items: stretch;
  min-height: .88rem;
  padding: ${ props => props.theme.padding};
  background-color: #fff;
  font-size: .32rem;
  color: #999;

  &::before {
    left: .32rem;
  }

  .left {
    display: flex;
    align-items: center;
    flex: 1 0 1.6rem;
  }
  .center {
    display: flex;
    align-items: center;
    flex: 1 1 100%;
  }
  .center input {
    padding: 0;
  }
  .right {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
  }
  .right button {
    padding-right: 0;
  }
`;
