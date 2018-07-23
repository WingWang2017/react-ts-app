import * as React from 'react';

import { observable, action } from 'mobx';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, LinkList, InputSearch } from 'src/components';

class Store {
  @observable public state: IState = {
    isHide: false
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
export default class CampusHotline extends React.Component<IProps, {}> {

  public state = {};

  public $f7: any;

  public store: IStore = new Store();

  public render() {
    return (
      <div className='navbar-fixed page hotline' data-name='CampusHotline'>
        <Header
          back={true}
          center='校园热线'
          right='' />
        <StyeldDiv className='border1px'>
          <InputSearch placeholder='部门/姓名' onChange={this.onChange} />
        </StyeldDiv>
        <div className='page-content paddingTop'>
          {
            this.store.state.isHide &&
            <>
              <StyledText>最佳匹配</StyledText>
              <table className='table'>
                <tbody>
                  <tr>
                    <td>教务处/督导</td>
                    <td>欧阳天天</td>
                    <td>副处长</td>
                    <td>178-1687-5246</td>
                  </tr>
                  <tr>
                    <td>教务处/督导</td>
                    <td>欧阳天天</td>
                    <td>副处长</td>
                    <td>178-1687-5246</td>
                  </tr>
                  <tr>
                    <td>教务处/督导</td>
                    <td>欧阳天天</td>
                    <td>副处长</td>
                    <td>178-1687-5246</td>
                  </tr>
                </tbody>
              </table>
            </>
          }
          {
            !this.store.state.isHide &&
            <>
              <StyledText>朝晖校区</StyledText>
              <ul className='border-left-34'>
                <LinkList link='#' title='教务处' />
                <LinkList link='#' title='后勤处' />
                <LinkList link='#' title='信息处' />
                <LinkList link='#' title='建筑学院' />
                <LinkList link='#' title='化工学院' />
                <LinkList link='#' title='党支部' />
                <LinkList link='#' title='信息处' />
                <LinkList link='#' title='教务处' />
              </ul>
              <StyledText>屏峰校区</StyledText>
              <ul className='border-left-34'>
                <LinkList link='#' title='教务处' />
                <LinkList link='#' title='后勤处' />
                <LinkList link='#' title='信息处' />
                <LinkList link='#' title='建筑学院' />
                <LinkList link='#' title='化工学院' />
                <LinkList link='#' title='党支部' />
                <LinkList link='#' title='信息处' />
                <LinkList link='#' title='教务处' />
              </ul>
              <StyledText>玉泉校区</StyledText>
              <ul className='border-left-34'>
                <LinkList link='#' title='教务处' />
                <LinkList link='#' title='后勤处' />
                <LinkList link='#' title='信息处' />
                <LinkList link='#' title='建筑学院' />
                <LinkList link='#' title='化工学院' />
                <LinkList link='#' title='党支部' />
                <LinkList link='#' title='信息处' />
                <LinkList link='#' title='教务处' />
              </ul>
            </>
          }
        </div>
      </div>
    );
  }

  public componentDidMount(): void {

  }

  public onChange = (value: string): void => {
    if (value) {
      this.store.setState({ isHide: true });
    } else {
      this.store.setState({ isHide: false });
    }
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
}

interface IState {
  isHide: boolean;
}

interface IStore {
  state: IState;
  setState: (obj: object) => void;
}

const StyeldDiv = Styled.div`
  position: absolute;
  top: .88rem;
  left: 0;
  right: 0;
  z-index: 999;
  height: .92rem;
  padding: 0 .32rem;
  background-color: #fff;
`;

const StyledText = Styled.p`
  margin: .16rem 0;
  padding: 0 .32rem;
  line-height: .44rem;
  color: #999;
  font-size: .28rem;
`;
