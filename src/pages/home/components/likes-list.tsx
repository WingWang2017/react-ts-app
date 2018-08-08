import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { Avatar } from 'src/components';

interface IProps {
  item?: any;
}

@observer
export default class LikesList extends React.Component<IProps, {}> {

  public render() {
    return (
      <ul className='tab' id='like-list'>
        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>

        <StyledDIV className='border1px'>
          <Avatar user_id={1} sex='female' avatar='' />
          <StyledName>平凡</StyledName>
          <div className='wpLikes wpLikes-on' />
        </StyledDIV>
      </ul>
    );
  }

}

const StyledDIV = Styled.li`
  display: flex;
  padding: .16rem .32rem;
  background-color: #fff;
`;

const StyledName = Styled.p`
  display: flex;
  align-items: center;
  font-size: .32rem;
  color: #119c8f;
  width: 100%;
`;
