import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

interface IProps {
  link?: string;
  item: any;
}

@observer
export default class MainCentent extends React.Component<IProps, {}> {


  public $f7: F7.Dom;

  public photoBrowser: any;

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

  public componentDidMount() {

  }

  public componentWillUnmount(): void {
    document.removeEventListener('deviceready', this.deviceready.bind(this), false);
  }

  private onPhotoPage = (imgs: string, index: number) => () => {
    this.photoBrowser = this.$f7.photoBrowser.create({
      photos: imgs.slice(),
      theme: 'dark',
      type: 'standalone',
      exposition: true,
      navbar: false,
      toolbar: false,
      on: {
        open: () => {
          this.onStatusBar('#000000');
        },
        closed: () => {
          this.onStatusBar('#81D8D0');
          this.photoBrowser.destroy();
        },
        click: () => {
          this.photoBrowser.close();
        }
      }
    });
    this.photoBrowser.open(index);
  }

  private onStatusBar(color: string): void {
    document.addEventListener('deviceready', this.deviceready.bind(this, color), false);
  }

  private deviceready(color: string): void {
    StatusBar.backgroundColorByHexString(color);
  }

}


// 图片展示区
const ImgList = observer((props) => {
  if (!props.imgs) {
    return null;
  }
  return (
    <ul className={`wpForumImg`} >
      {
        props.imgs.map((img: string, imgIndex: number) => {
          return (
            <li key={imgIndex} className={`${props.imgs.length === 1 ? 'oneImg' : ''}`}>
              <img data-src={img} className='lazy' onClick={props.onPhotoPage(props.imgs, imgIndex)} />
            </li>
          );
        })
      }
    </ul>
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
