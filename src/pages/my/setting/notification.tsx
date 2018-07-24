import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, ItemList } from 'src/components';

import { Toggle } from 'framework7-react';

@observer
export default class Notification extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='notification'>
        <Header
          back={true}
          center='消息通知'
          right={null} />
        <div className='page-content'>
          <StyledText>通知提醒</StyledText>
          <ul className='border-left-34'>
            <ItemList
              darkColor={true}
              border={false}
              justifyContent='center'
              marginBottom='.24rem'
              center='接收通知推送'
              right={<Toggle defaultChecked={true} />} />
            <ItemList
              darkColor={true}
              justifyContent='center'
              center='上课前5分钟提醒'
              right={<Toggle />} />
            <ItemList
              darkColor={true}
              justifyContent='center'
              center='聊天消息提醒'
              right={<Toggle />} />
            <ItemList
              darkColor={true}
              border={false}
              justifyContent='center'
              marginBottom='.24rem'
              center='互助代办'
              right={<Toggle />} />
            <ItemList
              darkColor={true}
              justifyContent='center'
              center='声音'
              right={<Toggle defaultChecked={true} />} />
            <ItemList
              darkColor={true}
              border={false}
              justifyContent='center'
              center='振动'
              right={<Toggle defaultChecked={true} />} />
          </ul>
          <StyledText>当最青春在运行时，你可以设置是否需要声音或者动。</StyledText>
        </div>
      </div>
    );
  }

  public componentDidMount() {

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
