import { observable, action } from 'mobx';

class ForumDetailsState {
  @observable public data: any = {};

  @action public setData = (res: any) => {
    this.data = res;
    console.log(this.data);
  }

  @action public pushData = (res: any) => {
    this.data.push(...res);
  }

  @action public removeData = (value: any) => {
    this.data.remove(value);
  }

  @action public commentPushData = (id: number, res: any) => {
    this.data.map((value: any) => {
      if (value.id === id) {
        value.comments.comment_data.push(res);
        value.comments.comment_count++;
      }
    });
  }

  @action public commentRemoveData = (id: number) => {
    this.data.map((val: any) => {
      val.comments.comment_data.map((commentVal: any, index: number) => {
        if (commentVal.comment_id === id) {
          val.comments.comment_data.remove(commentVal);
          val.comments.comment_count--;
        }
      });
    });
  }

  @action public spot = (id: number) => {
    this.data.map((val: any) => {
      if (val.id === id) {
        val.zan_status = 1;
        val.zans_count++;
      }
    });
  }

  @action public unspot = (id: number) => {
    this.data.map((val: any) => {
      if (val.id === id) {
        val.zan_status = 0;
        val.zans_count--;
      }
    });
  }

}

const forumDetailsState = new ForumDetailsState();

export default forumDetailsState;
