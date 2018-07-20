import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, LinkList } from 'src/components';

import { deviceready } from 'src/utils';

@observer
export default class GradeTest extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='GradeTest'>
        <Header
          back={true}
          center='等级考试'
          right='' />
        <div className='page-content'>
          <ul className='not-border'>
            <LinkList link='#' title='全国大学英语四、六级考试（CET）' onClick={this.onClick(1)} />
            <LinkList link='#' title='全国计算机等级考试（NCRE）' onClick={this.onClick(2)} />
            <LinkList link='#' title='全国计算机应用水平考试（NIT）' onClick={this.onClick(3)} />
            <LinkList link='#' title='全国英语等级考试（PETS）' onClick={this.onClick(4)} />
          </ul>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onClick = (num: number) => (): void => {
    deviceready(() => {
      switch (num) {
        case 1:
          cordova.InAppBrowser.open('http://cet.neea.edu.cn/cet/', '_blank');
          break;
        case 2:
          cordova.InAppBrowser.open('http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=300', '_blank');
          break;
        case 3:
          cordova.InAppBrowser.open('http://zscx.neea.edu.cn/html1/folder/1508/211-1.htm?sid=480', '_blank');
          break;
        case 4:
          cordova.InAppBrowser.open('http://cjcx.neea.edu.cn/html1/folder/1508/206-1.htm?sid=280', '_blank');
          break;
      }
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

// interface IState {
//   user: any;
// }
