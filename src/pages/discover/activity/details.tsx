import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Title, Button } from 'src/components';


interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

@observer
export default class Details extends React.Component<IProps, {}> {

  public state = {

  };

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-name='activity-details'>
        <Header
          back={true}
          center='活动详情'
          right='' />

        <div className='page-content'>
          <StyeldDiv>
            <p className='title'>130000：职涯发展与心理咨询研讨会职涯发展与心理咨询研讨会</p>
            <p className='text'>活动时间：11/30 11:30~12/15 12:30 </p>
            <p className='text'>活动地点：朝晖校区 子良C区就业指导中心 </p>
            <p className='text'>活动类型：职业发展 </p>
            <p className='text'>报名时间：剩余23时59分60秒</p>
            <p className='text'>报名费用：免费</p>
            <p className='text'>报名人数：已报名111人/限额200人</p>
          </StyeldDiv>
          <StyledCotent className='border-color-d8'>
            <Title content='活动介绍：' />
            <StyledText>
              Bob Moses是来自加拿大的新锐电子音乐组合，他们的音乐不如摇滚那般躁动，而是节奏感混合歌手磁性的吟唱，迷幻中带着柔和，形成独特的音乐风格。热曲“Tearing Me up”于2017年获得第59届格莱美“最 佳舞曲制作”提名，2017年是他们首次来中国巡演。
乐队主要成员是Tom Howie 汤姆.霍威 与 Jimmy Vallance 吉米.瓦伦斯。其中乐队成员Vallance 也是出自于音乐作曲家世家，父母都是加拿大著名的作曲家及制作人。
正如青春电影通常讲述的那样，Howie与Vallance 是一同在温哥华的中学与高中同学。两人不仅仅是非常要好的朋友，在音乐上也是有着共同的爱好，组建乐队之前也有涉及加利福尼亚朋克，西北摇滚及极简电子。Howei 和Vallance 先后搬到纽约然后开始了他们共同的音乐事业生涯。最早的作品都是在Howie纽约 的公寓里录制完成的。之后他们搬到一起共同进行创作与工作。
两人于2012年发布了首张专辑“Hands to Hold”,第二张专。
</StyledText>
          </StyledCotent>
        </div>
        <StyledFooter>
          <Button />
        </StyledFooter>
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}


const StyeldDiv = Styled.div`
  padding: .32rem .32rem .48rem;
  margin-bottom: .16rem;
  background-color: #fff;

  & .title {
    margin-bottom: .32rem;
    line-height: 1.5;
    font-size: .36rem;
  }

  & .text {
    margin-bottom: .16rem;
    line-height: 1.6;
    font-size: .28rem;
    color: #666;
  }
`;

const StyledCotent = Styled.div`
  padding: 0 .32rem;
  background-color: #fff;

  & > div:first-child {
    padding: 0;
  }
`;

const StyledText = Styled.div`
  padding: .32rem 0 .97rem;
  line-height: 1.6;
  font-size: .28rem;
  color: #666;
`;

const StyledFooter = Styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  padding: .16rem .4rem;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(51,51,51,.1);
`;
