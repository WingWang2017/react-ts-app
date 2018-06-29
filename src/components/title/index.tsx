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
      <StyledDiv>
        <p>{this.props.centent}</p>
        {
          this.props.link &&
          <a
            href={this.props.link}
            title={this.props.linkName}
            className='link'>
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
  centent?: string;
}

// interface IState {
//   content: string;
// }

const StyledDiv = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 .2rem;
  line-height: 2.2;
  > .link {
    color: #119c8f;
    font-size: .3rem;
  }
  > .active-state {
    color: #222;
  }
`;

export default Title;
