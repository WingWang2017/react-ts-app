import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, ItemList } from 'src/components';

@observer
export default class HistoryAttendance extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='history-attendance'>
        <Header
          back={true}
          center='历史考勤'
          right='' />
        <div className='page-content'>
          <ul className='border-left-32'>
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
            <ItemList left='1' center='第一周 星期一 第3～4节' right='出席' leftWidth='.72rem' darkColor={true} />
          </ul>
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
