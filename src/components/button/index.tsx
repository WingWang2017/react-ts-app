import * as React from 'react';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

@observer
class Button extends React.Component<IProps, {}> {

  public static defaultProps = {
    content: '确定',
    disabled: false,
    onClick: () => { }
  };

  public render() {
    const theme = {
      width: this.props.width,
      height: this.props.height,
      margin: this.props.margin,
      border: this.props.border,
      bgColor: this.props.bgColor,
      color: this.props.color,
      borderRadius: this.props.borderRadius,
      fontSize: this.props.fontSize
    };
    return (
      <StyledButton
        theme={theme}
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
        {this.props.content}
      </StyledButton>
    );
  }

}

interface IProps {
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  content?: string;
  disabled?: boolean;
  onClick?: any;
}

// interface IState {
//   value: string
// }

const StyledButton = Styled.button`
  width: ${props => props.theme.width || '100%'};
  height: ${props => props.theme.height || '.88rem'};
  margin: ${props => props.theme.margin || '0'};
  border: ${props => props.theme.border || '0'};
  border-radius: ${props => props.theme.borderRadius || '4px'};
  background-color: ${props => props.theme.bgColor || '#81D8D0'};
  font-size: ${props => props.theme.fontSize || '.32rem'};
  color: ${props => props.theme.color || '#fff'};
`;

export default Button;
