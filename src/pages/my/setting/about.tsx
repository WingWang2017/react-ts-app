import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, LinkList } from 'src/components';

import { logo_img } from 'src/images';

@observer
export default class About extends React.Component<IProps, {}> {

  public state = {
  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='about'>
        <Header
          back={true}
          center='关于最青春'
          right={null} />
        <div className='page-content'>
          <StyledDiv>
            <img src={logo_img} alt='' className='logo-icon' />
            <p className='text'>最青春</p>
            <p className='text'>Most Youth</p>
          </StyledDiv>
          <ul>
            <LinkList link='#' title='当前版本' after={localStorage.version} arrow={false} />
            <LinkList link='#' title='评价最青春' border={false} />
          </ul>
          <StyledFooter>
            <a href='#' className='footer-link' title='《最青春服务使用协议》'>《最青春服务使用协议》</a>
            <p>杭州海蒂崽崽网络科技有限公司 版权所有</p>
            <p>Copyright @ 2014-2017 Heidi Zaizai All Rights Reserved</p>
          </StyledFooter>
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

const StyledDiv = Styled.div`
  height: 4.64rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo-icon {
    height: 1.6rem;
    width: 1.6rem;
    margin-bottom: .12rem;
  }

  .text {
    font-size: .32rem;
    color: #222;
    line-height: 1.6;
  }
`;

const StyledFooter = Styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: .16rem;
  text-align: center;
  font-size: .24rem;
  color: #888;

  .footer-link {
    color: #119C8F;
    line-height: 2.2;
  }
`;
