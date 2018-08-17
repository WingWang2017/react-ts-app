import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Avatar, ChatFooter } from 'src/components';

import { yuyinIcon, person } from 'src/images';

const width = { width: '.36rem' };
@observer
export default class Chat extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page chatPage' data-name='chat'>
        <Header
          back={true}
          center='平凡'
          right={
            <a href='/detailed/3'>
              <img src={person} alt='' style={width} />
            </a>
          } />
        <div className='page-content'>
          <ul>

            <StyledChatList>
              <time className='time'>下午 4：01</time>
              <div className='center'>
                <Avatar />
                <div className='centent'>
                  <div className='cententBox'>我想跟你说你</div>
                </div>
              </div>
            </StyledChatList>

            <StyledChatList className='mineChat'>
              <time className='time'>下午 4：01</time>
              <div className='center'>
                <div className='centent'>
                  <div className='cententBox'>我想跟你说你我想跟你说你我想跟你说你我想跟你说你我想跟你说你</div>
                </div>
                <Avatar sex='男' />
              </div>
            </StyledChatList>

            <StyledChatList>
              <div className='center'>
                <Avatar />
                <div className='centent'>
                  <div className='cententBox yuyinBox'>
                    <img src={yuyinIcon} alt='' className='yuyinIcon' />
                  </div>
                  <p className='yuyin'>1”</p>
                </div>
              </div>
            </StyledChatList>

            <StyledChatList className='mineChat'>
              <time className='time'>下午 4：01</time>
              <div className='center'>
                <div className='centent'>
                  <div className='cententBox yuyinBox'>
                    <img src={yuyinIcon} alt='' className='yuyinIcon' />
                  </div>
                  <p className='yuyin'>1”</p>
                </div>
                <Avatar sex='男' />
              </div>
            </StyledChatList>

          </ul>
        </div>
        <ChatFooter />
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }

const StyledChatList = Styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: .4rem .24rem .21rem;

  & .time {
    margin-bottom: .27rem;
    padding: 0 .2rem;
    text-align: center;
    color: #fff;
    border-radius: 11px;
    background: #cfcfcf;
    font-size: .24rem;
    line-height: .45rem;
  }

  & .center {
    display: flex;
    width: 100%;
  }

  & .centent {
    width: 100%;
    padding: 0 1.16rem 0 .12rem;
  }

  & .cententBox {
    position: relative;
    display: flex;
    float: left;
    align-items: center;
    box-sizing: border-box;
    min-height: .84rem;
    margin-left: .2rem;
    padding: .18rem .2rem;
    border-radius: 4px;
    background: #fff;
    box-shadow: 1px 1px 1px #d1d1d1;
    line-height: 1.4;

    &.yuyinBox {
      min-width: 2rem;
    }

    &::after {
      position: absolute;
      z-index: 11;
      top: .22rem;
      left: -.3rem;
      content: "";
      border: .15rem solid #fff;
      border-color: transparent #fff transparent transparent;
    }
  }

  & .yuyinIcon {
    display: block;
    width: .28rem;
    height: .36rem;
  }

  & .yuyin {
    float: left;
    padding-left: .1rem;
    color: #8a8a8a;
    font-size: .24rem;
    line-height: .84rem;
  }

  &.mineChat {
    & .centent {
      padding: 0 .12rem 0 1.16rem;
    }

    & .cententBox {
      float: right;
      justify-content: flex-end;
      margin: 0 .2rem 0 0;
      background: #81d8d0;
      box-shadow: -1px 1px 1px #6ac0b8 ;

      &::after {
        right: -.29rem;
        left: inherit;
        border-color: transparent transparent transparent #81d8d0;
      }
    }

    & .yuyinIcon {
      transform: rotate(-180deg);
    }

    & .yuyin {
      float: right;
      padding: 0 .1rem 0 0;
    }
  }
`;
