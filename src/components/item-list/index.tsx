import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';


@observer

export default class ItemList extends React.Component<IProps, {}> {

  public static defaultProps = {
  };

  public state = {};

  public $f7: any;

  public render() {
    // const theme = {
    //   arrow: this.props.arrow,
    //   marginBottom: this.props.marginBottom,
    //   marginTop: this.props.marginTop
    // };
    return (
      <StyledDiv className='border1px'>
        <div className='left'>{this.props.left}</div>
        <div className='center'>{this.props.center}</div>
        <div className='right'>{this.props.right}</div>
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
}

// interface IState {
//   user: any;
// }

const StyledDiv = Styled.li`
  display: flex;
  align-items: center;
  min-height: .88rem;
  padding: 0 .32rem;
  background-color: #fff;
  font-size: .32rem;
  color: #999;

  &::before {
    left: .32rem;
  }

  .left {
    flex: 1 0 1.6rem;
  }
  .center {
    flex: 1 1 100%;
  }
  .center input {
    padding: 0;
  }
  .right {
    flex: 1 0 auto;
  }
  .right button {
    padding-right: 0;
  }
`;
