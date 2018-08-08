import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, Footer } from 'src/components';

@observer
export default class CloudClassroom extends React.Component<IProps, {}> {

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed toolbar-fixed page' data-name='cloud-classroom'>
        <Header
          left=''
          center='云课堂'
          right='' />
        <div className='page-content'>
          <ul>
            <li className='classroom-list'>
              <a href='/classroom/student' title=''>
                <p className='title'>毛泽东思想和中国特色社会主义理论体系概论</p>
                <p className='name'>
                  <StyledIcon className='iconfont icon-name' />
                  李燕如
                </p>
                <p className='address'>
                  <StyledIcon1 className='iconfont icon-time-location' />
                  1-16周 周二3-4节，周三6-8节，教学楼320
                </p>
              </a>
            </li>
          </ul>
        </div>
        <Footer activedLink={2} />
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

const StyledIcon = Styled.i`
  margin-right: .16rem;
  font-size: .24rem;
  color: #FF7281;
`;

const StyledIcon1 = Styled(StyledIcon)`
  color: #00B575;
`;
