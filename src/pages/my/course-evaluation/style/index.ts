import Styled from 'styled-components';

export const StyledDiv = Styled.div`
  background-color: #fff;

  &.margin-bottom-12 {
    margin-bottom: .24rem;
  }
  &.margin-bottom-8 {
    margin-bottom: .16rem;
  }
`;

export const StyledTitle = Styled.div`
  padding: 0 .32rem;
  line-height: .88rem;
  font-size: .4rem;
`;

export const StyledTags = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 .32rem;
`;

export const StyledTag = Styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - .56rem )/ 3);
  height: .6rem;
  margin-bottom: .32rem;
  border-radius: 4px;
  background-color: #81D8D0;
  color: #fff;
  font-size: .24rem;

  &:not(:nth-child(3n)) {
    margin-right: .28rem;
  }
`;

export const StyledLabel = Styled(StyledTag)`
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #999;

  &.active-state,
  &.on {
    border: 1px solid #81D8D0;
    background-color: #81D8D0;
    color: #333;
  }
`;

export const StyledUL = StyledDiv.withComponent('ul');

export const StyledTextarea = Styled.textarea`
  width: 100%;
  min-height: 1.3rem;
  padding: 0 .32rem .32rem;
  box-sizing: border-box;
  line-height: 1.5;
  font-size: .32rem;
  color: #666;
`;
