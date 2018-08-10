import * as React from 'react';

import { observable, action } from 'mobx';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Header, LinkList, InputSearch } from 'src/components';

import fecthAjax from 'src/fetch';

class Store {
  @observable public state: IState = {
    list: [],
    searchList: [],
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
                  {
                    this.store.state.searchList.map((item: any) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.name}</td>
                          <td>{item.position}</td>
                          <td>{item.mobile}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </>
          }
          {
            !this.store.state.isHide &&
            <>
              {
                this.store.state.list.map((item: any) => {
                  return (
                    <React.Fragment key={item.id}>
                      <StyledText>{item.campus}</StyledText>
                      <ul className='border-left-32'>
                        {
                          item.list.map((value: any) => {
                            return (
                              <LinkList key={value.id} link='#' title={value.title} />
                            );
                          })
                        }
                      </ul>
                    </React.Fragment>
                  );
                })
              }
            </>
          }
        </div>
      </div>
    );
  }

  public componentDidMount() {
    fecthAjax.getCampusHotlineList().then((res: Ajax.AjaxResponse) => {
      if (!res.errcode && res.data) {
        this.store.setState({
          list: res.data
        });
      }
    });
  }

  public onChange = (value: string): void => {
    if (value) {
      fecthAjax.getCampusHotlineSearchList().then((res: Ajax.AjaxResponse) => {
        this.store.setState({
          searchList: res.data
        });
      });
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
  list: any[];
  searchList: any[];
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
