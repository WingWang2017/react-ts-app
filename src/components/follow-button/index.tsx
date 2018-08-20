import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { follow_icon, yiguanzhu_icon } from 'src/images';

@observer
export default class InitialPage extends React.Component<IProps, {}> {

  public static defaultProps = {
    follow: false
  };

  public state = {
    follow: this.props.follow
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <StyledButton onClick={this.onClick} theme={this.state.follow ? '#999' : '#F3AF4E'}>
        <img src={this.state.follow ? yiguanzhu_icon : follow_icon} className='img' />
        加关注
      </StyledButton>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onClick = (): void => {
    this.setState({
      follow: !this.state.follow
    });
  }

}

interface IProps {
  follow: boolean;
}

// interface IState {
//   user: any;
// }

const StyledButton = Styled.button`
  align-self: center;
  min-width: 1.32rem;
  height: .56rem;
  border: 1px solid currentColor;
  border-radius: 4px;
  color: ${props => props.theme};
  font-size: .24rem;

  & .img {
    margin-right: .1rem;
    width: .2rem;
    height: auto;
  }
`;
