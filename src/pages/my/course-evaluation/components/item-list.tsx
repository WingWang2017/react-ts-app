import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import fetchAjax from 'src/fetch';

import { leave_teacher_icon, leave_time_icon } from 'src/images';

@observer
export default class ItemList extends React.Component<IProps, IState> {

  public readonly state = {
    courseList: [
      {
        id: 0,
        title: 'asdasd',
        teacher: 'asdasd',
        weekly: '11',
        node: '11',
        class_place: '5222'
      }
    ],
    isHide: true
  };

  public $f7: any;

  public render() {
    const item = this.props.item!;
    return (
      <li className='accordion-item'>
        <a href='#' className='item-link accordion-item-title' onClick={this.onClick}>
          <div className='item-inner'>
            {item.time} {item.title}
          </div>
        </a>
        <div className='accordion-item-content'>
          <StyledList>
            {
              this.state.courseList.map((value: any) => {
                return (
                  <StyledItem key={value.id} href='/my/courseEvaluation/evaluationDetails'>
                    <StyledTitle>{value.title}</StyledTitle>
                    <StyledText>{value.teacher}</StyledText>
                    <StyledText>{value.weekly} {value.node}，{value.class_place}</StyledText>
                  </StyledItem>
                );
              })
            }
          </StyledList>
        </div>
      </li>
    );
  }

  public componentDidMount() {

  }

  private onClick = (): void => {

    this.setState({
      isHide: !this.state.isHide
    }, () => {
      if (!this.state.isHide) {
        fetchAjax.getCourseList().then((res: Ajax.AjaxResponse) => {
          if (!res.errcode && res.data) {
            this.setState({
              courseList: res.data
            });
          }
        });
      }
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  item: IItem;
}

interface IState {
  courseList: any[];
  isHide: boolean;
}

interface IItem {
  title: string;
  time: string;
  id: number;
}


const StyledList = Styled.div`
  margin: .32rem;
`;

const StyledItem = Styled.a`
  display: block;
  min-height: 1.82rem;
  padding: .16rem .32rem;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
  &:not(:last-child) {
    margin-bottom: .16rem;
  }
  &.active-state {
    background-color: #e3e4e8;
  }
`;

const StyledTitle = Styled.div`
  margin-bottom: .16rem;
  font-size: .4rem;
`;

const StyledText = Styled.div`
  padding-left: .34rem;
  line-height: 1.8;
  font-size: .24rem;
  color: #888;
  background: no-repeat left center;
  &:nth-child(2) {
    background-image: url("${leave_teacher_icon}");
    background-size: .3rem .26rem;
  }
  &:last-child {
    background-image: url("${leave_time_icon}");
    background-size: .24rem .24rem;
  }
`;
