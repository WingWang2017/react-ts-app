import * as React from 'react';

import { observer } from 'mobx-react';


interface IProps {
  type: 'radio' | 'checkbox';
}

// interface IState {
//   user: any;
// }

@observer
export default class InitialPage extends React.Component<IProps, {}> {

  public static defaultProps = {
    type: 'radio'
  };

  public state = {};

  public $f7: F7.Dom;

  public render() {
    return (
      <dl>
        <dt className='test-title'>为什么天空是蓝色的？（单选、3分、必答）</dt>
        <dd className='test-list border1px'>
          <label className='test-list-content'>
            <input type={this.props.type} name='radio' className='radio' />
            <p>A 我不知道</p>
          </label>
        </dd>
        <dd className='test-list border1px'>
          <label className='test-list-content'>
            <input type={this.props.type} name='radio' className='radio' />
            <p>B 我知道</p>
          </label>
        </dd>
        <dd className='test-list border1px'>
          <label className='test-list-content'>
            <input type={this.props.type} name='radio' className='radio' />
            <p>C 我知道</p>
          </label>
        </dd>
      </dl>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

}
