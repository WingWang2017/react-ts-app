import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Button } from 'src/components';

import { iphone } from 'src/images';

@observer
export default class BindMobile extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    const user = localStorage.user && JSON.parse(localStorage.user);
    return (
      <div className='navbar-fixed page' data-name='bindMobile'>
        <Header
          back={true}
          center='绑定手机号'
          right={null} />
        <div className='page-content'>
          <StyledImg src={iphone} alt='' />
          <StyledText>已绑定手机号</StyledText>
          <StyledMobile>{user && user.mobile}</StyledMobile>
          <StyledDiv>
            <Button
              link='/my/setting/bindMobile/changeMobile'
              content='更换手机号'
              height='.96rem' />
          </StyledDiv>
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
  forumState: any;
}

// interface IState {
//   user: any;
// }

const StyledImg = Styled.img`
  display: block;
  width: 4.64rem;
  margin: .48rem auto 0;
`;

const StyledText = Styled.p`
  margin: .16rem 0;
  line-height: .44rem;
  text-align: center;
  color: #999;
  font-size: .28rem;
`;

const StyledMobile = Styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: .88rem;
  background-color: #fff;
  font-size: .4rem;
`;

const StyledDiv = Styled.div`
  padding: 1.12rem .4rem 0;
`;
