import * as React from 'react';

import { observer } from 'mobx-react';

import Styled from 'styled-components';

import {
	voiceMessage,
	emoji,
	voiceMessageKeyboard,
	chat_more,
	send_selected,
	photo,
	takephoto,
	position
} from 'src/images';

interface IProps {
	onSend(data: any): void;
}

@observer
export default class ChatFooter extends React.Component<IProps, {}> {

	public static defaultProps = {
		onSend: () => { }
	};

	public state = {
		voice: false, // 显示语音状态
		chatBottom: false,
		mesData: '' // 存储要发送的数据
	};

	public $f7: F7.Dom;

	public onVoice = () => {
		this.setState({
			voice: !this.state.voice
		});
	}

	public onChange = (event: any) => {
		this.setState({
			mesData: event.target.value
		});
	}

	public onFocus = () => {
		// alert(window.$$('body')[0].scrollTop)
		window.setTimeout(() => {
			this.onScrollTop();
			this.$f7.$('body')[0].scrollTop = 10000;
		}, 800);
		if (this.state.chatBottom) {
			this.setState({
				chatBottom: false
			}, () => {
				this.onScrollTop();
			});
		}
	}

	public onSend = () => {
		if (this.state.mesData) {
			const data = {
				centent: this.state.mesData,
				time: '11:11',
				id: 22,
				user_id: 3
			};
			this.props.onSend(data);
			this.setState({
				mesData: ''
			});
		} else {
			this.setState({
				chatBottom: !this.state.chatBottom
			}, () => {
				this.onScrollTop();
			});
		}
	}

	public onScrollTop() {
		const pages = this.$f7.$('.chatPage .page-content');
		const page = pages[0];
		if (this.state.chatBottom) {
			pages.addClass('chat-page-content');
		} else {
			pages.removeClass('chat-page-content');
		}
		page.scrollTop = page.scrollHeight;
	}

	public render() {
		return (
			<StyledChatFooter>
				<div className='chatBox'>
					<img src={this.state.voice ? voiceMessageKeyboard : voiceMessage}
						alt=''
						className='chatIcon'
						onClick={this.onVoice} />
					{
						this.state.voice
							? <div className='chatInput center'>按住 说话</div>
							: <input
								type='text'
								value={this.state.mesData}
								className='chatInput'
								onChange={this.onChange}
								onFocus={this.onFocus} />
					}
					<img src={emoji} alt='' className='chatIcon' />
					<img src={this.state.mesData ? send_selected : chat_more} alt='' className='chatIcon' onClick={this.onSend} />
				</div>
				{
					this.state.chatBottom
						? <ul className='chatBottom'>
							<li><img src={photo} />照片</li>
							<li><img src={takephoto} />拍摄</li>
							<li><img src={position} />位置</li>
						</ul>
						: null
				}
			</StyledChatFooter>
		);
	}
}


const StyledChatFooter = Styled.div`
	position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
	background: #f5f5f7;

  & .chatBox {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.04rem;
    padding-right: .18rem;
    border: 1px solid #dcdcdc;
    border-width: .5px 0;
	}

  & .chatIcon {
    flex: 0 0 .6rem;
    height: .6rem;
    margin-left: .18rem;
	}

  & .chatInput {
    flex: 1 1 auto;
    box-sizing: border-box;
    height: .76rem;
    margin-left: .18rem;
    padding: 0 .1rem;
    border: 1px solid #b2b2b2;
		border-radius: 4px;
    background: #fdfdfe;
    line-height: .76rem;
	}

  & .center {
    text-align: center;
	}

  & .chatBottom {
    display: flex;
		min-height: 2.48rem;

    & li {
      width: calc(100% / 3);
      text-align: center;
      color: #888;
      font-size: .26rem;
      line-height: 2;
		}

    & img {
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      margin: .4rem auto 0;
    }
  }
`;
