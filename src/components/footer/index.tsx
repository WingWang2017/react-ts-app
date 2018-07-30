import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import {
  xiaoquanNormal,
  xiaoquanSelected,
  yunketangNormal,
  yunketangSelected,
  fabu,
  fabu_bg,
  faxianNormal,
  faxianSelected,
  wodeNormal,
  wodeSelected
} from 'src/images';

// import issue from '@pages/issue';

interface IProps {
  activedLink: number;
  f7route?: any;
  slot?: any;
}

@observer
export default class Footer extends React.Component<IProps, {}> {

  public $f7: any;

  // 判断当前路由page页数,>=2就删除cached(0)
  public handleClick = () => {
    // const cached = $$('#main-view .pages>.page');
    // if (cached.length >= 1) {
    //   const leng = cached.length - 1;
    //   for (let i = 0; i < leng; i++) {
    //     cached[i].remove();
    //   }
    // }
    // this.$f7.router.navigate('/login');
  }

  public render() {
    return (
      <StyledDiv>
        {
          data.map((item, index) => {
            const theme = {
              icon: item.icon,
              currIcon: item.currIcon,
              actived: this.props.activedLink === index + 1
            };
            return (
              <StyledA
                key={index}
                href={item.link}
                theme={theme}
                onClick={item.handle ? item.handle : this.handleClick} >
                {item.title}
              </StyledA>
            );
          })
        }
      </StyledDiv>
    );
  }
}
const data = [
  {
    title: '校圈',
    link: '/home',
    icon: xiaoquanNormal,
    currIcon: xiaoquanSelected
  },
  {
    title: '云课堂',
    link: '/cloudClassroom',
    icon: yunketangNormal,
    currIcon: yunketangSelected
  },
  {
    title: '',
    link: '',
    icon: fabu,
    handle: () => { } // issue.default
  },
  {
    title: '发现',
    link: '/discover',
    icon: faxianNormal,
    currIcon: faxianSelected
  },
  {
    title: '我的',
    link: '/my',
    icon: wodeNormal,
    currIcon: wodeSelected
  }
];

const StyledDiv = Styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: .98rem;
  background: #fff;
  box-shadow: 0 0 8px rgba(51,51,51,.1);
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -0.34rem;
    width: 1.2rem;
    height: 1.2rem;
    transform: translateX(-50%);
    z-index: -1;
    background: url("${fabu_bg}") no-repeat 0 0 / 100% 100%;
  }
`;

const StyledA = Styled.a`
  width: 50%;
  height: auto;
  padding-top: .57rem;
  text-align: center;
  color: #222;
  background: no-repeat center 0;
  background-image: url("${props => props.theme.actived && props.theme.currIcon || props.theme.icon}");
  background-size: .6rem .6rem;
  font-size: .18rem;
  line-height: 1.4;
  &:nth-child(3) {
    margin-top: -.16rem;
    padding-top: 0;
    height: .92rem;
    background-size: .92rem .92rem;
  }
`;
