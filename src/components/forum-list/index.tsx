import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import Like from '../like';
import { Confirm, SendBox, Actions } from 'src/components';

import { dateC, entitiestoUtf16 } from 'src/utils';

import { Boy, Girl } from 'src/images';


@observer
class ForumList extends React.Component<Iprops, {}> {

  public static defalutProps = {
    data: [],
    onDelete: () => { },
    onLike: () => { },
    sendComments: () => { },
    onDeleteThisComment: () => { }
  };

  public render() {
    return (
      <ul>
        {
          this.props.data && this.props.data.data.map((item: any) =>
            <StyledLi className='border1px' key={item.id}>
              <StyledHead href={`/detailed/${item.user_id}`} className={item.sex}>
                <img src={item.avatar} alt='' />
              </StyledHead>
              <StyledCentent>
                <StyledName>
                  {item.user_name || item.nickname}
                  {item.type_name && <span>{item.type_name}</span>}
                </StyledName>
                {item.title && <StyledTitle>{item.title}</StyledTitle>}
                {item.content && <StyledText>{item.content}</StyledText>}
                {item.details && <p className='wpForumText'>{item.details}</p>}
                {
                  item.price &&
                  <p className='wpInfo'>
                    <span className='wpPrice'>¥{item.price}</span>|<span className='wpStatus'>{item.newold_name}</span>
                  </p>
                }
                <ImgList
                  imgs={item.images}
                  onPhotoPage={this.onPhotoPage} />
                <ForumFeatures
                  item={item}
                  onDelete={this.onDelete}
                  onLike={this.onLike}
                  onComment={this.onComment} />
                <Comments
                  data={item.comments}
                  onReply={this.onReply} />
              </StyledCentent>
            </StyledLi>
          )
        }
      </ul>
    );
  }

  public componentDidMount(): void {

  }

  public onDelete = (item: any) => (): void => {
    // console.log(item);
    Confirm.default({
      title: '确定删除吗？',
      onConfirm: () => {
        this.props.onDelete(item);
      }
    });
  }

  public onLike = (item: any) => (): void => {
    this.props.onLike(item);
  }

  public onComment = (item: any) => (): void => {
    console.log(item);
    SendBox.default({
      onSureSendMes: this.onSureSendMes(item.id, 0),
      placeholder: '评论',
      messageType: 'comment'
    });
  }

  public onReply = (item: any) => (): void => {
    console.log(item);
    const user = JSON.parse(localStorage.user);
    if (item.comment_user_id === user.user_id) {
      Actions.default({
        title: '删除我的评论？',
        onConfirm: () => {
          this.props.onDeleteThisComment(item.scf_id, item.comment_id);
        }
      });
    } else {
      SendBox.default({
        onSureSendMes: this.onSureSendMes(item.scf_id, item.comment_id),
        placeholder: `回复${item.comment_user_name}：`,
        messageType: 'reply'
      });
    }
  }

  public onSureSendMes = (scfID: number, commentID: number) => (centent: string, mesType: string) => {
    if (centent) {
      this.props.sendComments(centent, mesType, scfID, commentID);
    }
  }

  public onPhotoPage = (imgs: string, index: number) => () => {
    const photoBrowser = f7App.photoBrowser({
      init: true,
      photos: imgs.slice(),
      theme: 'dark',
      backLinkText: '关闭',
      exposition: false
    });
    photoBrowser.open(index);
  }

}

interface Iprops {
  data: any;
  onDelete: any;
  onLike: any;
  sendComments: any;
  onDeleteThisComment: any;
}

// 图片展示区
const ImgList = observer((props) =>
  props.imgs &&
  <div className={`wpForumImg ${props.imgs.length === 1 ? 'wpForumOneImg' : ''}`} >
    {
      props.imgs.map((img: any, imgIndex: number) =>
        <img
          data-src={img}
          key={imgIndex}
          className={`lazy ${props.imgs.length === 1 ? 'oneImg' : ''}`}
          onClick={props.onPhotoPage(props.imgs, imgIndex)} />
      )
    }
  </div>
);

// 点赞，评论 区
const ForumFeatures = observer((props: any) => {
  const { create_time, user_id, comments } = props.item;
  const user = JSON.parse(localStorage.user);
  return (
    <div className='wpForumFunction'>
      <time className='wpTime'>{dateC(create_time)}</time>
      {
        user.user_id === user_id
        && <button className='wpDelete' onClick={props.onDelete(props.item)} >删除</button>
      }
      <button
        className='wpComment'
        onClick={props.onComment(props.item)}>
        {comments.comment_count}
      </button>

      <Like data={props.item} onLike={props.onLike(props.item)} />
    </div>
  );
});

// 评论消息
const Comments = observer((props: any) => {

  if (props.data.comment_data.length > 0) {
    return (
      <div className='wpCommentMes'>
        {
          props.data.comment_data.map((item: any) =>
            <CommentMes
              key={item.comment_id}
              data={item}
              onReply={props.onReply(item)} />
          )
        }
      </div>
    );
  } else {
    return null;
  }
});

// 评论消息列表
const CommentMes = observer(({ data, onReply }) => {
  const dom = <span>回复<button className='wpButton' >{data.parent_name}</button>：</span>;
  return (
    <a href="#" className='wpMes border1px' onClick={onReply} >
      <div className='wpMesName'>{data.comment_user_name}</div>
      <time className='wpMesTime'>{dateC(data.created_time)}</time>
      <div className='wpMesText'>
        {data.parent_name && dom}
        {entitiestoUtf16(data.content)}
      </div>
    </a>
  );
});


const StyledLi = Styled.li`
  display: flex;
  padding: .2rem;
`;

const StyledHead = Styled.a`
  flex: 1 0 0.84rem;
  height: .84rem;
  overflow: hidden;
  background-size: 100% 100%;
  background-image: url('${props => props.className === 'female' ? Girl : Boy}');
`;

const StyledCentent = Styled.div`
  flex: 0 1 100%;
  padding-left: .2rem;
  box-sizing: border-box;
`;

const StyledName = Styled.p`
  font-size: .3rem;
  color: #119c8f;
`;

const StyledTitle = Styled.p`
  padding-bottom: .1rem;
  line-height: 1.4;
  font-size: .32rem;
  color: #000;
`;

const StyledText = Styled.p`
  line-height: 1.6;
  font-size: .3rem;
`;


export default ForumList;
