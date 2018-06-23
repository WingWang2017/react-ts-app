import * as React from 'react';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

@observer
class Button extends React.Component<IProps, {}> {

  public static defaultProps = {
    content: '确定',
    onClick: () => { }
  };

  public render() {
    const theme = {
      width: this.props.width,
      height: this.props.height,
      border: this.props.border,
      bgColor: this.props.bgColor,
      color: this.props.color,
      borderRadius: this.props.borderRadius,
      fontSize: this.props.fontSize
    };
    return (
      <StyledButton
        theme={theme}
        onClick={this.props.onClick}>
        {this.props.content}
      </StyledButton>
    );
  }

}

interface IProps {
  width?: string;
  height?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  content?: string;
  onClick?: any;
}

// interface IState {
//   value: string
// }

const StyledButton = Styled.button`
  width: ${props => props.theme.width || '100%'};
  height: ${props => props.theme.height || '.8rem'};
  border: ${props => props.theme.border || '0'};
  border-radius: ${props => props.theme.borderRadius || '6px'};
  background-color: ${props => props.theme.bgColor || '#81D8D0'};
  font-size: ${props => props.theme.fontSize || '.3rem'};
  color: ${props => props.theme.color || '#fff'};
`;

export default Button;
