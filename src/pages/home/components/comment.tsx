import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Avatar } from 'src/components';

import Like from 'src/components/like';

interface IProps {
  f7router?: F7.F7router;
  f7route?: F7.F7route;
  item: any;
}

@observer
export default class Comment extends React.Component<IProps, {}> {

  public render() {
    return (
      <ul className='tab tab-active' id='comment-list'>
        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>

        <StyledList>
          <StyledDIV>
            <Avatar user_id={1} sex='female' avatar='' />
            <StyledName>平凡</StyledName>
          </StyledDIV>
          <StyldContent>回复了<span className='name'>王一水</span>：你说的不对</StyldContent>
          <div className='wpForumFunction'>
            <time className='wpTime'>12:16</time>
            <Like
              data={this.props.item}
              onLike={this.onLike(this.props.item)} />
          </div>
        </StyledList>
      </ul>
    );
  }

  private onLike = (item: any) => (): void => {

  }


}

const StyledList = Styled.li`
  margin-bottom: .08rem;
  background-color: #fff;
`;


const StyledDIV = Styled.div`
  display: flex;
  padding: .32rem .32rem .24rem;
  background-color: #fff;
`;

const StyledName = Styled.p`
  display: flex;
  align-items: center;
  font-size: .32rem;
  color: #119c8f;
  width: 100%;
`;

const StyldContent = Styled.div`
  padding: 0 .32rem;
  line-height: 1.6;
  font-size: .28rem;
  color: #666;

  & .name {
    line-height: 1.6;
    font-size: .28rem;
    color: #119c8f;
  }
`;
