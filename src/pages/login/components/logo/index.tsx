import * as React from 'react';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { logo } from 'src/images';


const Logo = observer((props: any) => {
  return (
    <StyledLogo theme={props.theme}>
      <img src={logo} alt='' />
    </StyledLogo>
  );
});


const StyledLogo = Styled.div`
  width: 100%;
  height:  ${props => props.theme === 'large' ? '5.8rem' : '4.9rem'};
  padding-top: ${props => props.theme === 'large' ? '2.6rem' : '1.86rem'};
  padding-left: .78rem;
  box-sizing: border-box;
  img {
    width: 4.26rem;
    height: 2rem;
    margin: 0 auto;
    display: block;
  }
`;

export default Logo;
