import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, LinkList } from 'src/components';

import { Button, Alert } from 'src/components';

import Styled from 'styled-components';

@observer
export default class Setting extends React.Component<IProps, IState> {

  public state = {
  };

  public $f7: any;

  public render() {
    const user = localStorage.user && JSON.parse(localStorage.user);
    return (
      <div className='navbar-fixed page' data-name='setting'>
        <Header
          back={true}
          center='设置'
          right={null} />
        <div className='page-content'>
          <ul>
            <LinkList link='/my/setting/bindMobile' title='手机号码' after={user && user.mobile} />
            <LinkList link='/my/setting/changePassword' title='修改密码' />
            <LinkList link='/my/setting/privacy' title='隐私设置' border={false} marginBottom={true} />
            <LinkList link='/my/setting/notification' title='消息通知' border={false} marginBottom={true} />
            <LinkList link='/my/setting/about' title='关于最青春' border={false} marginBottom={true} />
            <LinkList link='#' title='清除缓存' after='10.21MB' arrow={false} border={false} />
          </ul>
          <StyledDiv>
            <Button
              content='退出登录'
              bgColor='#F7827C'
              height='.96rem'
              onClick={this.onButton} />
          </StyledDiv>

        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onButton = (): void => {
    import('src/components/actions').then(({ default: actions }) => {
      actions.default({
        title: '确定退出登录吗？',
        confirmText: '确定',
        color: '#F7827C',
        onConfirm: () => {
          localStorage.clear();
          Alert.default({
            content: '退出成功',
            afterHide: () => {
              this.props.f7router.navigate('/login');
            }
          });
        }
      });
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  forumState: any;
}

interface IState {
  user?: any;
}

const StyledDiv = Styled.div`
  padding: 1.12rem .4rem 0;
`;
