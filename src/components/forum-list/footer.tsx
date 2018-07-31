import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { faqiliaotian_icon, like_normal_red_icon, like_selected_icon } from 'src/images';

import { throttle } from 'src/utils';

interface IProps {
  link?: string;
}

@observer
export default class MainFooter extends React.Component<IProps, {}> {

  public state = {
    like: false
  };

  public $f7: F7.Dom;

  private onClick = throttle((): void => {
    this.setState({
      like: !this.state.like
    });
  }, 1000, false);

  public render() {
    return (
      <StyledDiv>
        <StyledButton className='border-right'><img src={faqiliaotian_icon} />评论</StyledButton>
        <StyledButton onClick={this.onClick}>
          <img src={this.state.like ? like_selected_icon : like_normal_red_icon} />
          点赞
        </StyledButton>
      </StyledDiv>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}


const StyledDiv = Styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: .98rem;
  background: #fff;
  box-shadow: 0 0 8px rgba(51,51,51,.1);
`;

const StyledButton = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: .28rem;

  &:first-child {
    color: #119C8F;
    img {
      width: .56rem;
      height: .54rem;
    }
  }
  &:last-child {
    color: #F15171;
    img {
      width: .26rem;
      height: .22rem;
      margin-right: .16rem;
    }
  }
`;
