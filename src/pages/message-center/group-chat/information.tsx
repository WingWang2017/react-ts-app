import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Avatar, LinkList, ItemList, Button } from 'src/components';

import { Toggle } from 'framework7-react';

import {
  qunliao_add_icon,
  qunliao_delete_icon
} from 'src/images';

@observer
export default class Information extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='group-information'>
        <Header
          back={true}
          center='群信息(2)'
          right='' />
        <div className='page-content'>
          <StyledList className='bg-white margin-bottom-16'>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>我是平凡的</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>
            <li className='list'>
              <Avatar />
              <p className='name ellipsis'>名字</p>
            </li>

            <li className='list'>
              <StyledListLink
                href='/message/group-chat/information/new-members'
                title='新增'
                theme={{ bgImg: qunliao_add_icon }} />
            </li>
            <li className='list'>
              <StyledListLink
                href='/message/group-chat/information/delete-members'
                title='删除'
                theme={{ bgImg: qunliao_delete_icon }} />
            </li>
          </StyledList>

          <ul>
            <LinkList title='群名称' after={<p onClick={this.onSetName}>最青春开发小组</p>} />
            <ItemList darkColor={true} marginBottom='.16rem' left='群消息免打扰' right={<Toggle defaultChecked={true} />} />
            <LinkList title='清空聊天记录' arrow={false} />
          </ul>

          <StyledDiv>
            <Button content='退出该群' bgColor='#F7827C' onClick={this.onSignOut} />
          </StyledDiv>

        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onSetName = () => {
    import('src/components/confirm').then(({ default: confirm }) => {
      confirm.edit({
        title: '编辑群名称',
        tipsType: 'important'
      });
    });
  }

  private onSignOut = () => {
    import('src/components/confirm').then(({ default: confirm }) => {
      confirm.default({
        title: '确定退出该群吗？',
        tipsType: 'important'
      });
    });
  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }

const StyledList = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: .32rem .22rem .08rem;

  & .list {
    flex: 0 0 auto;
    width: .96rem;
    margin: 0 .22rem .24rem;

    & > p:first-child {
      width: 100%;
      height: .96rem;
    }
  }

  & .name {
    height: .4rem;
    line-height: .4rem;
    margin-top: .08rem;
    text-align: center;
    font-size: .24rem;
    color: #222;
  }
`;

const StyledListLink = Styled.a`
  display: block;
  width: .96rem;
  height: .96rem;
  background: url("${props => props.theme.bgImg}") no-repeat center center / 100% 100%;
`;

const StyledDiv = Styled.div`
  margin: .88rem .4rem 0;
`;
