import * as React from 'react';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { logo } from 'src/images';


const Logo = observer((props: any) =>
  <StyledLogo>
    <img src={logo} alt='' />
  </StyledLogo>
);

const StyledLogo = Styled.div`
  width: 100%;
  height: 5.5rem;
  padding-top: 2.5rem;
  box-sizing: border-box;
  img {
    width: 4.26rem;
    height: 2rem;
    margin: 0 auto;
    display: block;
  }
`;

export default Logo;
