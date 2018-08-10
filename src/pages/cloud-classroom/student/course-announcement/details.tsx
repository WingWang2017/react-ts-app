import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

@observer
export default class CourseAnnouncementDetails extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='course-announcement-details'>
        <Header
          back={true}
          center='公告'
          right='' />
        <div className='page-content'>
          <StyledDiv className='bg-white'>
            <StyledTitle>调停课：本周课程调整通知</StyledTitle>
            <StyledTime>陶老师    15:08</StyledTime>
            <StyleText>
              各学院（部）：

          实验项目是培养学生实验能力、合作能力和创新能力的重要载体，为贯彻落实《中共浙江工业大学委员会关于全面深化人才培养改革的决定》（浙工大党〔2016〕6号）精神，推动实验教学改革发展，进一步完善实验教学体系建设，学校决定启动2017年度创新性实验项目申报工作。
      现就有关事项通知如下：
      一、建设目标
        提高综合性设计性、创新性实验比例，启迪学生科学思维和创新意识，提高学生实践动手能力，促进学生知识、能力、素质协调发展。
      二、建设内容
         1.新增综合设计性、创新性实验项目，及时融入科技创新和实验教学改革的最新成果，促进实验项目与科研、工程和社会应用实践的有机结合；
        2.制（修）订与之相应的实验教学大纲和实验教学计划，编写高水平、高质量的实验教材、指导书等；
        3.合理采用个人实验、小组合作实验、自主开放实验、网络虚拟实验等实验形式，提高学生的实验兴趣，改善实验教学效果。
      三、项目申报要求
           1.项目须面向学校本科人才培养。
        2.项目负责人应具备一定的实验教学研究能力和实验教学改革实践经验，工作态度认真，责任心强。
           3.每个项目负责人限申报一个课题。
      四、申报额度及其它
          1.每个学院限报5项。每个省级及以上实验教学示范中心可以单独申报2项，不占用学院名额。
        2.各学院（部）须组织申报人在11月30日期前，通过教学项目管理平台申报（http://zjut.zlgc2.chaoxing.com），平台操作手册见（http://zjut.fanya.chaoxing.com/portal/news/info?id=3324）。教学项目平台开放时间：2017年11月6日8：00-11月30日23:00，逾期系统将关闭。
      各学院审核、汇总、排序后（汇总表见附件2）于11月30日前将汇总表（纸版电子版各1份）报送报教务处实践科（联系人：张建勇；电话：88320538,；邮箱：sjk@zjut.edu.cn）。
           3.教务处组织专家进行评审，根据专家组评审意见，公布立项结果。
         4.项目建设周期一般为1年，每个项目予以1-1.5万元的建设经费支持。

      附件压缩包.zip（内含）：

      1.浙江工业大学创新性实验项目申报书

      2.创新性实验项目申报汇总表

            </StyleText>
          </StyledDiv>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }

const StyledDiv = Styled.div`
  padding: .32rem;
`;

const StyledTitle = Styled.div`
  margin-bottom: .16rem;
  font-size: .4rem;
`;

const StyledTime = Styled.div`
  margin-bottom: .32rem;
  font-size: .28rem;
  color: #999;
`;

const StyleText = Styled.div`
  line-height: 1.5;
  font-size: .32rem;
`;
