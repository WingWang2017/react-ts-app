import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Boy, Girl } from 'src/images';

// header

export default observer((props) => {
  return (
    <StyledDIV>
      <StyledHead href={`/detailed/${props.item.user_id}`} className={props.item.sex}>
        <img src={props.item.avatar} alt='' />
      </StyledHead>
      <StyledName>
        {props.item.user_name || props.item.nickname}
        {props.item.type_name && <span>{props.item.type_name}</span>}
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

const StyledHead = Styled.a`
  flex: 0 0 .8rem;
  height: .8rem;
  overflow: hidden;
  margin-right: .16rem;
  background-size: 100% 100%;
  background-image: url('${props => props.className === 'female' ? Girl : Boy}');
  & img {
    width: 100%;
    height: 100%;
  }
`;

const StyledName = Styled.p`
  font-size: .32rem;
  color: #119c8f;
  width: 100%;
`;
