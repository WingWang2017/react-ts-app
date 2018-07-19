import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Boy, Girl, boy_icon, girl_icon } from 'src/images';

@observer
export default class Head extends React.Component<IProps, IState> {

  public static defalutProps = {
    sex: 0
  };

  public state = {
    user: localStorage.user && JSON.parse(localStorage.user)
  };

  public $f7: any;

  public render() {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const theme = {
      sex: user && user.sex === 1 ? boy_icon : girl_icon
    };
    return (
      <StyledDiv>
        <StyledHead theme={theme}>
          <dt>
            <img src={this.props.head || user && user.sex === 1 ? Boy : Girl} alt='' />
          </dt>
          <dd>
            <p className='name'>{user && user.realname || '自己'}</p>
            <p className='number'>{user && user.study_sn || '学号'}</p>
          </dd>
          <dd className='class'>数字媒体1402班</dd>
        </StyledHead>
        <StyledUL>
          <li className='border-right'><a href='#' title='' className='link'>校友圈 1</a></li>
          <li className='border-right'><a href='#' title='' className='link'>关注 2</a></li>
          <li className='border-right'><a href='#' title='' className='link'>粉丝 3</a></li>
        </StyledUL>
      </StyledDiv>
    );
  }

  public componentDidMount() {

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  head?: string;
  sex?: number;
}

interface IState {
  user: any;
}

const StyledDiv = Styled.div`
  padding: .34rem .32rem;
  background-color: #fff;
`;

const StyledHead = Styled.dl`
  clear: both;
  dt {
    float: left;
    overflow: hidden;
    width: 1.28rem;
    height: 1.28rem;
    margin-right: .32rem;
  }
  dt img {
    display: block;
    border-radius: 4px;
  }
  dd {
    display: flex;
    align-items: center;
    height: .64rem;
  }
  .name {
    margin-right: .15rem;
    padding-right: .5rem;
    background: no-repeat 100%;
    background-origin: padding-box;
    background-size: .4rem .4rem;
    background-image: url("${props => props.theme.sex}");
    font-size: .4rem;
  }
  .number {
    font-size: .24rem;
    color: #119C8F;
  }
  .class {
    font-size: .24rem;
    color: #999;
  }
`;

const StyledUL = Styled.ul`
  display: flex;
  height: .36rem;
  margin-top: .48rem;
  li {
    position: relative;
    width: calc(100% / 3);
    text-align: center;
  }
  a {
    display: block;
  }
`;
