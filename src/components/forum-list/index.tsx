import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import Like from '../like';

import Header from './header';
import Centent from './centent';

import { yinzhang_icon } from 'src/images';

import { dateC } from 'src/utils';

interface Iprops {
  data: any;
  onDelete: any;
  onLike: any;
  sendComments: any;
  onDeleteThisComment: any;
}

// href={`/home/campusForumDetails/${item.id}`}
@observer
class ForumList extends React.Component<Iprops, {}> {

  public static defalutProps = {
    data: [],
    onDelete: () => { },
    onLike: () => { },
    sendComments: () => { },
    onDeleteThisComment: () => { }
  };

  public $f7: F7.Dom;

  public render() {
    return (
      <ul>
        {
          this.props.data.data.map((item: any) => {
            return (
              <StyledLi className='border1px' key={item.id}>
                <a href='#' onClick={this.onClick(item.id)}>
                  <Header item={item} onDelete={this.onDelete} />
                  <Centent item={item} />
                </a>
                <ForumFeatures
                  item={item}
                  onLike={this.onLike}
                  onComment={this.onComment} />
              </StyledLi>
            );
          })
        }
      </ul>
    );
  }

  public componentDidMount(): void {

  }

  private onClick = (id: string | number) => (e: React.MouseEvent<Element>): void => {
    e.stopPropagation();
    e.preventDefault();
    this.$f7.router.navigate(`/home/campusForumDetails/${id}`);
  }

  private onDelete = (item: any) => (e: React.MouseEvent<Element>): void => {
    e.stopPropagation();
    e.preventDefault();
    import('src/components/confirm').then(({ default: confirm }) => {
      confirm.default({
        title: '确定删除吗？',
        onConfirm: () => {
          this.props.onDelete(item);
        }
      });
    });
  }

  private onLike = (item: any) => (): void => {
    this.props.onLike(item);
  }

  private onComment = (item: any) => (): void => {
    import('src/components/send-box').then(({ default: sendbox }) => {
      sendbox.default({
        onSureSendMes: this.onSureSendMes(item.id, 0),
        placeholder: '评论',
        messageType: 'comment'
      });
    });
  }

  private onSureSendMes = (scfID: number, commentID: number) => (centent: string, mesType: string) => {
    if (centent) {
      this.props.sendComments(centent, mesType, scfID, commentID);
    }
  }

}


// 点赞，评论 区
const ForumFeatures = observer((props: any) => {
  const { create_time, comments } = props.item;
  return (
    <div className='wpForumFunction'>
      <time className='wpTime'>{dateC(create_time)}</time>
      <button
        className='wpComment'
        onClick={props.onComment(props.item)}>
        {comments.comment_count}
      </button>
      <Like
        data={props.item}
        onLike={props.onLike(props.item)} />
    </div>
  );
});


const StyledLi = Styled.li`
  margin-bottom: .08rem;
  background-color: #fff;

  & a {
    display: block;
  }
  & a.active-state {
    background-color: #e3e4e8;
  }

  .campus-forum & a {
    background-image: url("${yinzhang_icon}");
    background-repeat: no-repeat;
    background-position: 3.4rem .2rem;
    background-size: 2.64rem 1.92rem;
  }
`;


export default ForumList;
