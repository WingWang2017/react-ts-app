import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

@observer
class List extends React.Component<IProps, {}> {

  public static defaultProps = {
    linkName: '查看更多',
    content: ''
  };

  public state = {

  };

  public render() {
    const theme = {
      height: this.props.height,
    };
    return (
      <StyledA
        href={this.props.link}
        title={this.props.linkName}
        theme={theme}
        className='border1px'>
        <p className='left'>{this.props.linkName}</p>
        <span className='right'>
          {this.props.rightName}
        </span>
      </StyledA>
    );
  }

  public componentDidMount(): void {

  }

}

interface IProps {
  link?: string;
  linkName?: string;
  centent?: string;
  rightName?: string;
  height?: string;
}

// interface IState {
//   content: string;
// }

const StyledA = Styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .2rem;
  height: ${props => props.theme.height || '.8rem'};
  font-size: .3rem;

  &.active-state {
    background-color: #ebebeb;
  }

  > .left {
    overflow: hidden;
    flex: 0 1 85%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > .right {
    flex: 1 0 15%;
    text-align: right;
    word-break: normal;
    color: #353535;
    font-size: .26rem;
  }
`;

export default List;
