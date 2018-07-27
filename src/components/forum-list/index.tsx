import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import Like from '../like';

import Header from './header';
import Centent from './centent';

import { dateC } from 'src/utils';

interface Iprops {
  data: any;
  onDelete: any;
  onLike: any;
  sendComments: any;
  onDeleteThisComment: any;
}

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
                <Header item={item} onDelete={this.onDelete} />
                <Centent
                  item={item}
                  link={`/home/campusForumDetails/${item.id}`} />
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

  private onDelete = (item: any) => (): void => {
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
`;


export default ForumList;
