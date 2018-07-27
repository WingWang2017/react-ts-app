import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { star_white_icon, star_yellow_icon } from 'src/images';

// 评星组件

@observer
export default class Star extends React.Component<IProps, IState> {

  public static defaultProps = {
    index: 0,
    disabled: false,
    textShow: true
  };

  public state = {
    item: [],
    index: this.props.index!,
    text: ''
  };

  public $f7: any;

  public render() {
    return (
      <>
        <StyledItem>
          {
            this.props.data.map((item: string, index: number) => {
              return (
                <StyledLi
                  key={index}
                  onClick={this.onClick(item, index + 1)}
                  theme={index + 1 <= this.state.index ? star_yellow_icon : star_white_icon} />
              );
            })
          }
        </StyledItem>
        {
          this.props.textShow && <StyledText>{this.state.text}</StyledText>
        }
      </>
    );
  }

  public componentDidMount() {
    if (this.props.index! <= 0) {
      return;
    }
    this.props.data.map((item, index) => {
      if (index + 1 === this.state.index) {
        this.setState({
          text: item
        });
      }
    });
  }

  private onClick = (item: string, index: number) => (): void => {
    if (this.props.disabled) {
      return;
    }
    if (index === this.state.index) {
      return;
    }
    this.setState({
      index,
      text: item
    });
  }

}

interface IProps {
  f7router?: any;
  f7route?: any;
  data: any[];
  index?: number;
  disabled?: boolean;
  textShow?: boolean;
}

interface IState {
  item: any[];
  index: number;
  text: string;
}

const StyledItem = Styled.ul`
  display: flex;
  align-items: center;
  width: 3.3rem;
`;

const StyledLi = Styled.li`
  width: .42rem;
  height: .42rem;
  margin-right: .24rem;
  background: url("${props => props.theme}") no-repeat center center / .38rem .36rem;
`;

const StyledText = Styled.p`
  width: 1.2rem;
  font-size: .28rem;
  color: #666;
`;
