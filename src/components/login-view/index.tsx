import * as React from 'react';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { login } from './../../images';


const LoginView = observer((props: any) =>
  <StyledView>
    {
      props.children
    }
  </StyledView>
);

const StyledView = Styled.div`
  height: 100%;
  width: 100%;
  background: no-repeat 0 0 / 100% 100%;
  background-image: url(${login});
  position: relative;
`;

export default LoginView;
