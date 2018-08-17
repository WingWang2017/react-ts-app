import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, InputSearch, CheckList } from 'src/components';



@observer
export default class NewMembers extends React.Component<IProps, {}> {

  public state = {

  };

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='new-members'>
        <Header
          back={true}
          center='新增成员'
          right={
            <button>确定</button>
          } />

        <StyeldDiv className='page-search border1px'>
          <InputSearch placeholder='部门/姓名' onChange={this.onChange} />
        </StyeldDiv>

        <div className='page-content'>
          <StyledText>你的关注</StyledText>
          <ul>
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
            <CheckList />
          </ul>
        </div>

      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onChange = () => {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }

const StyeldDiv = Styled.div`
  position: absolute;
  top: .88rem;
  left: 0;
  right: 0;
  z-index: 999;
  height: .92rem;
  padding: 0 .32rem;
  background-color: #fff;
`;

const StyledText = Styled.p`
  margin: .16rem 0;
  padding: 0 .32rem;
  line-height: .44rem;
  color: #999;
  font-size: .28rem;
`;
