import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

@observer
class Title extends React.Component<IProps, {}> {

  public static defaultProps = {
    linkName: '查看更多',
    content: ''
  };

  public state = {

  };

  public render() {
    return (
      <StyledDiv className='border1px'>
        <p>{this.props.content}</p>
        {
          this.props.link &&
          <a
            href={this.props.link}
            title={this.props.linkName} >
            {this.props.linkName}
          </a>
        }
      </StyledDiv>
    );
  }

  public componentDidMount(): void {

  }

}

interface IProps {
  link?: string;
  linkName?: string;
  content?: string;
}

// interface IState {
//   content: string;
// }

const StyledDiv = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem;
  min-height: 1.2rem;
  font-size: .4rem;
  background-color: #fff;
  > p {
    display: flex;
    align-items: center;
  }
  > a {
    display: flex;
    align-items: center;
    color: #119c8f;
    font-size: .3rem;
  }
  > .active-state {
    color: #222;
  }
`;

export default Title;
