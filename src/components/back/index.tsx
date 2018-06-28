import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { back_arrow } from 'src/images';


const Link = observer((): any => {
  return (
    <StyledLink href='#' className={`link back`} >
      <img src={back_arrow} alt='' width='.22rem' height='.36rem' />
    </StyledLink>
  );
});

const StyledLink = Styled.a`
  position: absolute;
  top: .78rem;
  left: .3rem;
  width: .4rem;
  height: .4rem;
`;


export default Link;
