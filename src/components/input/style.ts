import Styled from 'styled-components';

const StyledDiv = Styled.div`
  width: 100%;
  height: .8rem;
  position: relative;
  border: 1px solid #fff;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: ${props => props['margin-bottom'] ? '.32rem' : '0'};
  display: flex;
  justify-content: space-between;
`;

const StyledCentent = Styled.div`
  position: relative;
  flex: 1 1 100%;
`;

const Input = Styled.input`
  width: 100%;
  height: 100%;
  padding: 0 .8rem 0 .26rem;
  border: 0;
  background-color: transparent;
  font-size: ${props => props.theme.inputSize};
  color: ${props => props.theme.themeColor === 'white' ? '#fff' : '#333'};
`;

const StyledImg = Styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: .8rem;
  height: 100%;
  display: ${ props => props.hidden ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  img {
    width: ${props => props.theme.imgSize};
    height: auto;
  }
`;

export {
  StyledDiv,
  StyledCentent,
  Input,
  StyledImg
};
