import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

@observer
export default class Timetable extends React.Component<IProps, {}> {

  public state = {
    weekly: '第一周'
  };

  public $f7: any;

  public picker: IPicker;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='timetable'>
        <Header
          back={true}
          center={
            <div className='demo-picker-device picker-device'>{this.state.weekly}</div>
          }
          right='' />
        <div className='page-content'>
          <table className='curriculum'>
            <tbody>
              <tr>
                <th className='title'>10<br />月</th>
                <th className='title'>周一<time>7</time></th>
                <th className='title'>周二<time>8</time></th>
                <th className='title'>周三<time>9</time></th>
                <th className='title'>周四<time>10</time></th>
                <th className='title'>周五<time>11</time></th>
                <th className='title'>周六<time>12</time></th>
                <th className='title'>周日<time>13</time></th>
              </tr>
              <tr>
                <th className='session'>1</th>
                <td rowSpan={2} className='background1' onClick={this.onLink}>人工智能及其应用<br />@子良<br />A416</td>
                <td rowSpan={2} className='background2'>毛泽东思想和中国特色<br />@子良<br />A416</td>
                <td />
                <td />
                <td rowSpan={2} className='background3'>操作系统原理<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>2</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>3</th>
                <td />
                <td rowSpan={2} className='background4'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td rowSpan={2} className='background5'>计算机图形学<br />@子良<br />A416</td>
                <td rowSpan={2} className='background6'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>4</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>5</th>
                <td />
                <td rowSpan={2} className='background4'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td rowSpan={2} className='background5'>计算机图形学<br />@子良<br />A416</td>
                <td rowSpan={2} className='background6'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>6</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>7</th>
                <td />
                <td rowSpan={2} className='background4'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td rowSpan={2} className='background5'>计算机图形学<br />@子良<br />A416</td>
                <td rowSpan={2} className='background6'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>8</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>9</th>
                <td />
                <td rowSpan={2} className='background4'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td rowSpan={2} className='background5'>计算机图形学<br />@子良<br />A416</td>
                <td rowSpan={2} className='background6'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>10</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>11</th>
                <td />
                <td rowSpan={2} className='background4'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td rowSpan={2} className='background5'>计算机图形学<br />@子良<br />A416</td>
                <td rowSpan={2} className='background6'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>12</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>13</th>
                <td />
                <td rowSpan={2} className='background4'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td rowSpan={2} className='background5'>计算机图形学<br />@子良<br />A416</td>
                <td rowSpan={2} className='background6'>计算机图形学<br />@子良<br />A416</td>
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>14</th>
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th className='session'>15</th>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    this.picker = this.$f7.picker.create({
      inputEl: '.demo-picker-device',
      renderToolbar: () => {
        return `<div class='toolbar'>
        <div class='toolbar-inner'>
          <div class='left'><a href="#" class='link close'>取消</a></div>
          <div class='center'>周次</div>
          <div class='right'><a href="#" class='link popover-close'>确定</a></div>
        </div>
      </div>`;
      },
      cols: [
        {
          textAlign: 'center',
          values: ['第一周', '第二周', '第三周', '第四周', '第五周']
        }
      ],
      on: {
        open: (picker: IPicker) => {
          picker.$el.find('.close').on('click', () => {
            console.log(picker);
            picker.close();
          });
          picker.$el.find('.popover-close').on('click', () => {
            console.log(picker);
            this.setState({
              weekly: picker.value
            });
            picker.close();
          });
        }
      }
    });
  }

  public componentWillUnmount(): void {
    this.picker.destroy('.demo-picker-device');
  }

  public onLink = (): void => {
    this.props.f7router.navigate('/my/timetable/courseDetails');
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

// interface IState {
//   user: any;
// }

interface IPicker {
  $el: any;
  value: string;
  close: () => void;
  destroy: (str?: string) => void;
}
