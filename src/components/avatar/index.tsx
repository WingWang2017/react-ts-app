import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Boy, Girl } from 'src/images';

// 头像 Avatar

export default observer((props: IProps) => {
  return (
    <StyledHead href={`/detailed/${props.user_id}`} className={props.sex}>
      <img src={props.avatar} alt='' />
    </StyledHead>
  );
});


interface IProps {
  user_id?: string | number;
  sex?: string;
  avatar?: string;
}

const StyledHead = Styled.a`
  flex: 0 0 .8rem;
  height: .8rem;
  overflow: hidden;
  border-radius: 4px;
  margin-right: .16rem;
  background-size: 100% 100%;
  background-image: url('${props => props.className === 'female' ? Girl : Boy}');
  & img {
    width: 100%;
    height: 100%;
  }
`;
