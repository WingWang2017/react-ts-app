import * as React from 'react';

import { observer } from 'mobx-react';

import { Header, PageHeader } from 'src/components';

import Test from './test';
import Questionnaire from './questionnaire';
@observer
export default class QuestionnaireTest extends React.Component<IProps, {}> {

  public state = {
    index: 0
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='questionnaire-test'>
        <Header
          back={true}
          center='问卷测验'
          right='' />
        <PageHeader item={[{ title: '测验' }, { title: '问卷' }]} onClick={this.onClick} />
        <div className='page-content'>
          {
            this.state.index === 0 && <Test />
          }
          {
            this.state.index === 1 && <Questionnaire />
          }
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public componentWillUnmount(): void {

  }

  private onClick = (index: number) => {
    console.log(index);
    this.setState({
      index
    });
  }


}

interface IProps {
  f7router: F7.F7router;
  f7route: F7.F7route;
}

// interface IState {
//   user: any;
// }
