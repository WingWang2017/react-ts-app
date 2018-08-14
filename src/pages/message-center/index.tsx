import * as React from 'react';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header } from 'src/components';

import { add_icon } from 'src/images';

import Notice from './components/notice';
import Chat from './components/chat';
import Interactive from './components/interactive';

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
          right={
            <a href='#' title='' onClick={this.onMenu}>
              <img src={add_icon} alt='' width='.42rem' height='auto' />
            </a>
          } />
        <div className='tabs page-content not-border'>
          <div id='tab-1' className='tab tab-active'>
            <Notice />
          </div>
          <div id='tab-2' className='tab'>
            <Chat />
          </div>
          <div id='tab-3' className='tab'>
            <Interactive />
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

  private onMenu = (): void => {
    import('src/components/menu').then(({ default: menu }) => {
      menu.default({
        data: [
          {
            title: '同校搜索',
            link: '#'
          },
          {
            title: '发起聊天',
            link: '#'
          }
        ]
      });
    });
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
