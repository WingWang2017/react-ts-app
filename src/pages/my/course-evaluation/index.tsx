import * as React from 'react';

import { observer } from 'mobx-react';

import { Header } from 'src/components';

import ItemList from './components/item-list';

import fetchAjax from 'src/fetch';

@observer
export default class CourseEvaluation extends React.Component<IProps, IState> {

  public readonly state = {
    item: [
      {
        time: 'asd',
        title: 'asdasdad',
        id: 0
      }
    ]
  };

  public $f7: any;

  public render() {
    return (
      <div className='navbar-fixed page' data-name='CourseEvaluation'>
        <Header
          back={true}
          center='课程评价'
          right='' />
        <div className='page-content'>
          <ul className='list'>
            {
              this.state.item.map((item: IItem) => {
                return (
                  <ItemList item={item} key={item.id} />
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }

  public componentDidMount() {
    fetchAjax.getSemesterList().then((res: Ajax.AjaxResponse) => {
      if (!res.errcode && res.data) {
        this.setState({
          item: res.data
        });
      }
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

interface IState {
  item: IItem[];
}

interface IItem {
  title: string;
  time: string;
  id: number;
}
