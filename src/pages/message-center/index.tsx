import * as React from 'react';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

import Notice from './notice';

class Store {

  @observable public state: IState = {
    activeIndex: 0
  };

  @action public setState = (obj: object) => {
    const keys = Object.keys(obj);

    keys.forEach((key) => {
      if (typeof obj[key] !== 'undefined') {
        this.state[key] = obj[key];
      }
    });
  }

}

@observer
export default class MessageCenter extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public store: IStore = new Store();

  public render() {
    return (
      <div className='navbar-fixed page' data-name='messageCenter'>
        <Header
          back={true}
          center={
            <>
              <a href='#tab-1' className='tab-link tab-link-active' onClick={this.onClick(1)}>通知</a>
              <a href='#tab-2' className='tab-link' onClick={this.onClick(2)}>聊天</a>
              <a href='#tab-3' className='tab-link' onClick={this.onClick(3)}>互动</a>
              <StyledActiveLine className='active-line' theme={this.store.state.activeIndex} />
            </>
          }
          right='' />
        <div className='tabs page-content not-border'>
          <div id='tab-1' className='tab tab-active'>
            <Notice />
          </div>
          <div id='tab-2' className='tab'>
            <div className='block'>
              <p>Tab 2 content</p>
            </div>
          </div>
          <div id='tab-3' className='tab'>
            <div className='block'>
              <p>Tab 3 content</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount() {

  }

  public onClick = (activeIndex: number) => () => {
    this.store.setState({ activeIndex });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

interface IState {
  activeIndex: number;
}

interface IStore {
  state: IState;
  setState: (obj: object) => void;
}

const StyledActiveLine = Styled.p`
  transform: translateX(${props => props.theme * 100 - 100 + '%' || '0%'});
`;
