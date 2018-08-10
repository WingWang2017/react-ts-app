import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, LinkList } from 'src/components';

@observer
export default class CourseAnnouncement extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='course-announcement'>
        <Header
          back={true}
          center='课程公告'
          right='' />
        <div className='page-content'>
          <ul className='border-left-32'>
            <LinkList link='/classroom/student/course-announcement/details' title='调停课：本周课程调整' after='08:53' arrow={false} />
            <LinkList link='/classroom/student/course-announcement/details' title='调停课：本周课程调整' after='08:53' arrow={false} />
            <LinkList link='/classroom/student/course-announcement/details' title='调停课：本周课程调整' after='08:53' arrow={false} />
            <LinkList link='/classroom/student/course-announcement/details' title='调停课：本周课程调整' after='08:53' arrow={false} />
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
