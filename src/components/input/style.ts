import Styled from 'styled-components';

const StyledDiv = Styled.div`
  width: 100%;
  height: .8rem;
  position: relative;
  border: 1px solid #fff;
  border-radius: 6px;
  margin-bottom: ${props => props['margin-bottom'] ? '.3rem' : '0'};
`;

const Input = Styled.input`
  width: 100%;
  height: 100%;
  padding: 0 .8rem 0 .25rem;
  border: 0;
  background-color: transparent;
  font-size: .28rem;
  color: #fff;
`;

const StyledImg = Styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: .8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: ${props => props['styled-width']};
    height: auto;
  }
`;

export {
  StyledDiv,
  Input,
  StyledImg
};
