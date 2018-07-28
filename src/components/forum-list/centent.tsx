import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import { deviceready } from 'src/utils';

interface IProps {
  link?: string;
  item: any;
}

@observer
export default class MainCentent extends React.Component<IProps, {}> {


  public $f7: F7.Dom;

  public render() {
    return (
      <StyledCentent className='border1px'>
        <a href={this.props.link} title=''>
          {this.props.item.title && <StyledTitle>{this.props.item.title}</StyledTitle>}
          {this.props.item.content && <StyledText>{this.props.item.content}</StyledText>}
        </a>
        {this.props.item.details && <p className='wpForumText'>{this.props.item.details}</p>}
        {
          this.props.item.price &&
          <p className='wpInfo'>
            <span className='wpPrice'>¥{this.props.item.price}</span>|<span className='wpStatus'>{this.props.item.newold_name}</span>
          </p>
        }
        <ImgList
          imgs={this.props.item.images}
          onPhotoPage={this.onPhotoPage} />
      </StyledCentent>
    );
  }

  private onPhotoPage = (imgs: string, index: number) => () => {
    const photoBrowser = this.$f7.photoBrowser.create({
      photos: imgs.slice(),
      theme: 'dark',
      type: 'standalone',
      exposition: true,
      navbar: false,
      toolbar: false,
      on: {
        open: () => {
          deviceready(() => {
            StatusBar.backgroundColorByHexString("#000000");
          });
        },
        closed: () => {
          deviceready(() => {
            StatusBar.backgroundColorByHexString("#81D8D0");
          });
          photoBrowser.destroy();
        },
        tap: () => {
          photoBrowser.close();
        }
      }
    });
    photoBrowser.open(index);
  }

}


// 图片展示区
const ImgList = observer((props) => {
  if (!props.imgs) {
    return null;
  }
  return (
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
});


const StyledCentent = Styled.div`
  padding: 0 .32rem .32rem;
  box-sizing: border-box;
  background-color: #fff;
`;

const StyledTitle = Styled.p`
  line-height: 1.5;
  font-size: .32rem;
`;

const StyledText = Styled.p`
  line-height: 1.6;
  font-size: .28rem;
  color: #666;
`;
