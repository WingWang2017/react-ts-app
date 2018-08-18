import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, InputSearch, PageList, Avatar, FollowButton } from 'src/components';

@observer
export default class SchoolSearch extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='school-search'>
        <Header
          back={true}
          center='同校搜索'
          right='' />
        <StyeldDiv className='page-search border1px'>
          <InputSearch placeholder='部门/姓名' onChange={this.onChange} />
        </StyeldDiv>
        <div className='page-content'>
          <StyledText>推荐关注</StyledText>

          <ul>
            <PageList display='flex' padding='.24rem .32rem' link='#' >
              <Avatar size='large' />
              <StyledCotnetnt>
                <p className='name boy'>王琦</p>
                <p className='class-name'>数字媒体1402</p>
              </StyledCotnetnt>
              <FollowButton />
            </PageList>
            <PageList display='flex' padding='.24rem .32rem' link='#' >
              <Avatar size='large' />
              <StyledCotnetnt>
                <p className='name boy'>王琦</p>
                <p className='class-name'>数字媒体1402</p>
              </StyledCotnetnt>
              <FollowButton />
            </PageList>
            <PageList display='flex' padding='.24rem .32rem' link='#' >
              <Avatar size='large' />
              <StyledCotnetnt>
                <p className='name boy'>王琦</p>
                <p className='class-name'>数字媒体1402</p>
              </StyledCotnetnt>
              <FollowButton />
            </PageList>
            <PageList display='flex' padding='.24rem .32rem' link='#' >
              <Avatar size='large' />
              <StyledCotnetnt>
                <p className='name boy'>王琦</p>
                <p className='class-name'>数字媒体1402</p>
              </StyledCotnetnt>
              <FollowButton />
            </PageList>
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

const StyledCotnetnt = Styled.div`
  flex: 1 0 auto;
`;
