import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { ItemList } from 'src/components';

@observer
export default class Chat extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <ul>
        <ItemList
          darkColor={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#81D8D0' onClick={this.onHead}>学校</StyledDiv>
          }
          center={
            <>
              <StyledName>平凡</StyledName>
              <StyledText>你好，在干什么呢？我这边有</StyledText>
            </>
          }
          right={
            <StyledTime>3:24</StyledTime>
          }
          onClick={this.onClick(0)} />
        <ItemList
          darkColor={true}
          padding='.24rem .32rem'
          icon={
            <StyledDiv theme='#81D8D0' onClick={this.onHead}>学校</StyledDiv>
          }
          center={
            <>
              <StyledName>平凡，张三</StyledName>
              <StyledText>你好，在干什么呢？我这边有</StyledText>
            </>
          }
          right={
            <StyledTime>3:24</StyledTime>
          }
          onClick={this.onClick(1)} />
      </ul>
    );
  }

  public componentDidMount() {

  }

  private onClick = (index: number) => () => {
    if (index) {
      f7App.f7router.navigate('/message/group-chat');
    } else {
      f7App.f7router.navigate('/message/chat');
    }
  }

  private onHead = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    e.preventDefault();
    alert(2);
  }

}

interface IProps {
  f7router?: F7.F7router;
  f7route?: F7.F7route;
}

// interface IState {
//   user: any;
// }

const StyledDiv = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1 0 .96rem;
  height: .96rem;
  margin-right: .32rem;
  border-radius: 4px;
  background-color: ${props => props.theme || '#81D8D0'};
  font-size: .32rem;
  color: #fff;
`;

const StyledTime = Styled.time`
  height: 100%;
  min-width: 1rem;
  line-height: 1.8;
  text-align: right;
  color: #999;
  font-size: .24rem;
`;

const StyledName = Styled.div`
  width: 100%;
  line-height: 1.5;
  color: #119C8F;
`;

const StyledText = Styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 4.28rem;
  font-size: .28rem;
  color: #999;
`;
