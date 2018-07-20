import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, LinkList, ItemList, Radio } from 'src/components';

@observer
export default class Privacy extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='privacy'>
        <Header
          back={true}
          center='隐私设置'
          right={null} />
        <div className='page-content'>
          <LinkList link='/my/setting/privacy/blacklist' title='黑名单' border={false} />
          <StyledText>哪些人可以评论我的校友圈</StyledText>
          <ul className='list'>
            <ItemList
              padding='0'
              center={
                <Radio name='comm-radio' title='所有人' checked={true} onChange={this.onChange} />
              } />
            <ItemList
              padding='0'
              center={
                <Radio name='comm-radio' title='我关注的人' onChange={this.onChange} />
              } />
            <ItemList
              padding='0'
              border={false}
              center={
                <Radio name='comm-radio' title='我的粉丝' onChange={this.onChange} />
              } />
          </ul>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onChange = (): void => {

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
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
