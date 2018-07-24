import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

// import { Header } from 'src/components';

import { right_arrow } from 'src/images';

@observer

export default class LinkList extends React.Component<IProps, {}> {

  public static defaultProps = {
    link: '#',
    arrow: true,
    border: true,
    marginTop: false,
    marginBottom: false,
    imgSize: '.46rem',
    onClick: () => { }
  };

  public state = {};

  public $f7: any;

  public render() {
    const theme = {
      arrow: this.props.arrow,
      marginBottom: this.props.marginBottom,
      marginTop: this.props.marginTop,
      imgSize: this.props.imgSize,
      padding: this.props.padding
    };
    return (
      <StyledMian className={this.props.border ? 'border1px' : ''} theme={theme}>
        <a href={this.props.link} className='list-link' onClick={this.onClick}>
          {this.props.icon &&
            <div className='icon'>
              <img src={this.props.icon} />
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

  public onClick = (): void => {
    this.props.onClick!();
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  link?: string;
  title?: any;
  after?: string;
  icon?: string;
  arrow?: boolean;
  border?: boolean;
  marginTop?: boolean;
  marginBottom?: boolean;
  padding?: string;
  imgSize?: string;
  onClick?: () => void;
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
  min-height: .88rem;
  font-size: .32rem;
  margin-top: ${props => props.theme.marginTop ? '.24rem' : '0'};
  margin-bottom: ${props => props.theme.marginBottom ? '.24rem' : '0'};
  .list-link {
    display: flex;
    align-items: center;
    min-height: .88rem;
    width: 100%;
    padding: ${props => props.theme.padding || props.theme.arrow ? '0 .6rem 0 .34rem' : '0 .34rem'};
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
    padding-right: .16rem;
    box-sizing: border-box;
  }
  .icon img {
    width: ${props => props.theme.imgSize};
    height: auto;
    border-radius: 4px;
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
