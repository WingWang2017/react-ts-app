import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, ItemList, Star } from 'src/components';

import Label from './components/label';

import { StyledDiv, StyledTitle, StyledTags, StyledUL, StyledTextarea } from './style';

// 评价页

@observer
export default class Evaluate extends React.Component<IProps, {}>{

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='Evaluate'>
        <Header
          back={true}
          center='匿名评价'
          right={
            <a href='#' className='link'>确定</a>
          } />
        <div className='page-content'>
          <StyledDiv className='margin-bottom-12'>
            <StyledTitle>标签</StyledTitle>
            <StyledTags>
              <Label value='考试容易' />
              <Label value='作业容易' />
              <Label value='很使用' />
              <Label value='作业多' />
              <Label value='考试多' />
              <Label value='挺有趣' />
              <Label value='推荐' />
              <Label value='容易通过' />
              <Label value='得高分' />
              <Label value='学渣慎选' />
              <Label value='老师颜值高' />
              <Label value='挂科' />
            </StyledTags>
          </StyledDiv>

          <StyledDiv className='margin-bottom-8'>
            <StyledTitle>评分</StyledTitle>
            <ul className='border-left-32 border-color-d8'>
              <ItemList
                left='考试次数：'
                right={
                  <Star data={['很少考试', '不太考试', '一般', '较多考试', '很多考试']} />
                } />
              <ItemList
                left='考试难度：'
                right={
                  <Star data={['很简单', '简单', '一般', '比较难', '非常难']} />
                } />
            </ul>
          </StyledDiv>
          <StyledUL className='border-left-32 border-color-d8 margin-bottom-8'>
            <ItemList
              left='作业次数：'
              right={
                <Star data={['很少作业', '较少作业', '一般', '较多作业', '很多作业']} />
              } />
            <ItemList
              left='作业难度：'
              right={
                <Star data={['很简单', '简单', '一般', '比较难', '非常难']} />
              } />
          </StyledUL>
          <StyledUL className='border-left-32 border-color-d8 margin-bottom-8'>
            <ItemList
              left='点名次数：'
              right={
                <Star data={['很少点名', '较少点名', '一般', '较多点名', '很多点名']} />
              } />
            <ItemList
              left='教师亲切：'
              right={
                <Star data={['很严肃', '严肃', '一般', '亲切', '非常亲切']} />
              } />
          </StyledUL>
          <StyledUL className='border-left-32 border-color-d8 margin-bottom-8'>
            <ItemList
              left='教师专业度：'
              right={
                <Star data={['很不专业', '不太专业', '一般', '专业', '非常专业']} />
              } />
            <ItemList
              left='课程实用度：'
              right={
                <Star data={['很不实用', '不太实用', '一般', '实用', '非常实用']} />
              } />
          </StyledUL>
          <StyledUL className='border-left-32 border-color-d8 margin-bottom-8'>
            <ItemList
              left='整体满意度：'
              right={
                <Star data={['很不满意', '不太满意', '一般', '满意', '非常满意']} />
              } />
          </StyledUL>

          <StyledDiv className='margin-bottom-12'>
            <StyledTitle>心得</StyledTitle>
            <StyledTextarea
              rows={8}
              maxLength={150}
              placeholder='请输入150个字以内' />
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
  f7router?: F7.F7router;
  f7route?: F7.F7route;
}

// interface IState {
//   user: any;
// }
