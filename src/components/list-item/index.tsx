import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

// import { Header } from 'src/components';

import { right_arrow } from 'src/images';

@observer

export default class ListItem extends React.Component<IProps, {}> {

  public static defaultProps = {
    link: '#',
    arrow: true,
    border: true,
    marginTop: false,
    marginBottom: false
  };

  public state = {};

  public $f7: any;

  public render() {
    const theme = {
      arrow: this.props.arrow,
      marginBottom: this.props.marginBottom,
      marginTop: this.props.marginTop
    };
    return (
      <StyledMian className={this.props.border ? 'border1px' : ''} theme={theme}>
        <a href={this.props.link} title={this.props.title} className='list-link'>

          {this.props.icon &&
            <div className='icon'>
              <img src={this.props.icon} width='.46rem' />
            </div>
          }
          <div className='list-title'>{this.props.title}</div>
          {this.props.after && <div className='list-after'>{this.props.after}</div>}
        </a>
      </StyledMian>
    );
  }

  public componentDidMount() {

  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  link?: string;
  title?: string;
  after?: string;
  icon?: string;
  arrow?: boolean;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
}

// interface IState {
//   user: any;
// }

const StyledMian = Styled.li`
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  min-height: .8rem;
  font-size: .32rem;
  margin-top: ${props => props.theme.marginTop ? '.24rem' : '0'};
  margin-bottom: ${props => props.theme.marginBottom ? '.24rem' : '0'};
  &::after {
    left: .34rem;
    background: #d8d8d8;
  }
  .list-link {
    display: flex;
    align-items: center;
    height: .8rem;
    width: 100%;
    padding: 0 .6rem 0 .34rem;
    box-sizing: border-box;
    background-size: .18rem .3rem;
    background-repeat: no-repeat;
    background-position: calc(100% - 15px);
    background-image: ${props => props.theme.arrow ? `url("${right_arrow}")` : 'none'};
  }
  .list-link.active-state {
    background-color: #e3e4e8;
  }
  .icon {
    display: flex;
    align-items: center;
    height: 100%;
    flex: 0 1 .82rem;
  }
  .list-title {
    min-width: 0;
    flex-shrink: 1;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .list-after {
    white-space: nowrap;
    flex-shrink: 0;
    display: flex;
    margin-left: auto;
    color: #999;
  }
`;
