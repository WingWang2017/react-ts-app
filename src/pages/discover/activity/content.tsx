import * as React from 'react';

import { observer } from 'mobx-react';

import { Button } from 'src/components';


@observer
export default class Content extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='page-content'>
        <ul className='activity'>
          <li className='activity-list'>
            <a href='/discover/activity/details' title=''>
              <div className='title'>130000：职涯发展与心理咨询研讨会职涯发展与心理咨询研讨会                             </div>
              <div className='content'>
                <p className='text'>活动时间：11/30 11:30~12/15 12:30 </p>
                <p className='text'>活动地点：朝晖校区 子良C区就业指导中心 </p>
                <p className='text'>活动类型：职业发展 </p>
                <p className='text'>报名时间：剩余23时59分60秒</p>
                <p className='text'>报名费用：免费</p>
                <p className='text'>报名人数：已报名111人/限额200人</p>
              </div>
              <Button content='立即报名' height='.72rem' margin='.24rem 0 .08rem' />
            </a>
          </li>
        </ul>
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
