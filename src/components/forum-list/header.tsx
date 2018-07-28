import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Avatar } from 'src/components';

// header

export default observer((props) => {
  return (
    <StyledDIV>
      <Avatar user_id={props.item.user_id} sex={props.item.sex} avatar={props.item.avatar} />
      <StyledName>
        {props.item.user_name}
      </StyledName>
      <button className='wpDelete' onClick={props.onDelete(props.item)} />
    </StyledDIV>
  );
});

const StyledDIV = Styled.div`
  display: flex;
  padding: .32rem .32rem .24rem;
  background-color: #fff;
`;

const StyledName = Styled.p`
  font-size: .32rem;
  color: #119c8f;
  width: 100%;
`;
