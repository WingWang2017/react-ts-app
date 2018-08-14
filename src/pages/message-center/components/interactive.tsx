import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { ItemList } from 'src/components';

@observer
export default class Interactive extends React.Component<IProps, {}> {

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
              <StyledTitle><span className='name'>平凡</span>赞了你的校内论坛</StyledTitle>
              <StyledText>你好，在干什么呢？我这边有</StyledText>
              <StyledTime>3:24</StyledTime>
            </>
          }
          right={
            <StyledDiv theme='#81D8D0' onClick={this.onHead} />
          }
          onClick={this.onClick} />
      </ul>
    );
  }

  public componentDidMount() {

  }

  private onClick = () => {
    alert(1);
  }

  private onHead = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    e.preventDefault();
    alert(2);
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
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
  width: 100%;
  line-height: 1.8;
  color: #999;
  font-size: .24rem;
`;

const StyledTitle = Styled.div`
  width: 100%;
  line-height: 1.5;

  & .name {
    color: #119C8F;
  }
`;

const StyledText = Styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 4.28rem;
  line-height: 1.6;
  font-size: .28rem;
  color: #999;
`;
