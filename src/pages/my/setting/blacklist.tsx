import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, LinkList, ItemList, InputSearch } from 'src/components';

import { Boy, Girl, balcklist_icon } from 'src/images';

@observer
export default class Blacklist extends React.Component<IProps, {}> {

  public state = {
    isCentent: true
  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='blacklist'>
        <Header
          back={true}
          center='黑名单'
          right={null} />
        <div className='page-content'>
          <ul>
            <ItemList
              center={
                <InputSearch />
              } />
          </ul>
          {
            this.state.isCentent
              ? <Centent />
              : <DefaultCentent />
          }
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

}

const Centent = observer(() => {
  return (
    <>
      <StyledText>全部用户</StyledText>
      <ul className='not-border'>
        <LinkList
          icon={Boy}
          imgSize='.96rem'
          padding='.24rem .32rem'
          arrow={false}
          title={
            <>
              <div className='name boy'>王琦</div>
              <div className='class-name'>数字媒体1402</div>
            </>
          } />
        <LinkList
          icon={Girl}
          imgSize='.96rem'
          padding='.24rem .32rem'
          arrow={false}
          title={
            <>
              <div className='name girl'>王琦</div>
              <div className='class-name'>数字媒体1402</div>
            </>
          } />
      </ul>
    </>
  );
});

const DefaultCentent = observer(() => {
  return (
    <>
      <StyledImg src={balcklist_icon} />
      <StyledTist>没有添加黑名单</StyledTist>
    </>
  );
});

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

const StyledImg = Styled.img`
  width: 4.64rem;
  height: 3.36rem;
  margin: 1.74rem auto .72rem;
  display: block;
`;
const StyledTist = Styled.p`
  text-align: center;
  font-size: .24rem;
  color: #797979;
`;
