import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, ItemList, InputText, SmsCode } from 'src/components';


@observer
export default class ChangeMobile extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public child?: any = null;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='chengeMobile'>
        <Header
          back={true}
          center='更换手机号'
          right={
            <a href='#' className='link'>确定</a>
          } />
        <div className='page-content'>
          <StyledText>更换手机号后，下次登录可使用新手机号登录</StyledText>
          <ItemList
            left='新手机号'
            center={
              <InputText
                placeholder='请输入新的手机号码'
                themeColor='black'
                inputSize='.32rem' />
            } />
          <ItemList
            left='验证码'
            center={
              <InputText
                placeholder='请输入验证码'
                themeColor='black'
                inputSize='.32rem'
                length={6}
                clearHidden={false} />
            }
            right={
              <SmsCode
                phone='13588118103'
                onRef={this.onRef}
                color='#F3AF4E' />
            } />
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onRef = (ref: any): void => {
    this.child = ref;
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  forumState: any;
}

// interface IState {
//   user: any;
// }

const StyledText = Styled.p`
  margin: .16rem 0;
  padding: 0 .32rem;
  line-height: .44rem;
  color: #999;
  font-size: .28rem;
`;
