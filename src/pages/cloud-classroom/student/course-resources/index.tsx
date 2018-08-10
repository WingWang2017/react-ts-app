import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, LinkList } from 'src/components';

import { word_icon } from 'src/images';

@observer
export default class CourseResources extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='course-resources'>
        <Header
          back={true}
          center='课程资源'
          right='' />
        <div className='page-content'>
          <ul className='border-left-32'>
            <LinkList link='#' padding='.24rem .32rem' icon={word_icon} imgSize='.96rem' title='调停课：本周课程调整' after='08:53' arrow={false} />
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
