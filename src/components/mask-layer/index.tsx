import * as React from 'react';

import Styled from 'styled-components';

export default class MaskLayer extends React.Component<Iprops, {}> {

  public static defalutProps = {
    onClick: () => { }
  };

  public render() {
    const theme = {
      bgColor: this.props.bgClolr
    };
    return (
      <StyledDiv
        className={this.props.className}
        onClick={this.props.onClick}
        theme={theme} />
    );
  }
}

interface Iprops {
  onClick?: any;
  bgClolr?: string;
  className?: string;
}

const StyledDiv = Styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: ${ props => props.theme.bgColor || 'rgba(0, 0, 0, .4)'};
`;
