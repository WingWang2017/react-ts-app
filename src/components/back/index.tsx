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
  top: .26rem;
  left: .32rem;
  width: .44rem;
  height: .44rem;
`;


export default Link;
