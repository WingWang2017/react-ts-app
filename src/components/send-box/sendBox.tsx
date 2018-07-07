import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';

import { emojiIcon } from 'src/images';

interface IProps {
	removeChild?: any;
	onSureSendMes?: any;
	messageType?: any;
	placeholder?: string;
	maxLength?: number;
}

interface IState {
	mesData: string;
}

@observer
class SendBox extends React.Component<IProps, IState> {

	public static defaultProps = {
		placeholder: '',
		maxLength: '100',
		onSureSendMes: () => { }
	};

	public state = {
		mesData: ''
	};

	public onHide() {
		this.props.removeChild();
	}

	public onClose = () => {
		this.onHide();
	}

	public onChange = (event: any) => {
		const value = event.target.value;
		if (value) {
			this.setState({
				mesData: value
			});
		} else {
			this.setState({
				mesData: ''
			});
		}
	}

	public onBlur = (event: any) => {
		this.setState({
			mesData: event.target.value
		});
	}

	public onSureSendMes = () => {
		this.props.onSureSendMes(this.state.mesData, this.props.messageType);
		this.onHide();
	}

	public onFocus = () => {
		// setTimeout(() => {
		// 	$$('body')[0].scrollTop = 10000;
		// }, 500);
	}

	public componentDidMount() {
		document.addEventListener('backbutton', this.onHide.bind(this), false);
	}

	public componentWillUnmount() {
		document.removeEventListener('backbutton', this.onHide.bind(this), false);
	}

	public render() {
		return (
			<>
				<MaskLayer bgClolr='none' onClick={this.onClose} />
				<StyledDiv>
					<input
						type='text'
						placeholder={this.props.placeholder}
						maxLength={this.props.maxLength}
						className='sendInput'
						onChange={this.onChange}
						onBlur={this.onBlur}
						autoFocus={true}
						onFocus={this.onFocus}
					/>
					<img src={emojiIcon} alt='表情' className='sendFace' />
					<button
						className={`sendMes ${this.state.mesData && 'sendMesOn'}`}
						onClick={this.onSureSendMes} >
						发送
					</button>
				</StyledDiv>
			</>
		);
	}
}

export default function ContainerSendBox(config: any) {
	const div = document.createElement('div');
	// window.$$('.home')[0].appendChild(div);
	document.body.appendChild(div);
	function removeChild() {

		const unmountResult = ReactDOM.findDOMNode(div);
		if (unmountResult && div.parentNode) {
			div.parentNode.removeChild(div);
		}
	}
	ReactDOM.render(
		<SendBox removeChild={removeChild.bind(this, div)} {...config} />,
		div
	);
}

const StyledDiv = Styled.div`
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99999;

	height: 1.02rem;
	padding: 0 0.24rem;

	display: flex;
	align-items: center;

	border-top: 2px solid #fff;
	box-sizing: border-box;

	background: rgba(245, 245, 247, .85);


	.sendBox::after{
		position: absolute;
		top: -1px;
		right: 0;
		left: 0;
		z-index: 1;

		content: '';

		height: 1px;
		background: #ebebeb;
	}

	.sendInput{
		height: 0.75rem;
		padding: 0 0.15rem;
		border: 1px solid #dcdcdc;
		border-radius: 12px;
		background: #FDFDFE;

		flex: 1 0 auto;
	}

	.sendFace,
	.sendFace img{
		width: 0.66rem;
		height: 0.66rem;
	}

	.sendFace{
		margin: 0 0.2rem;
	}

	.sendMes{
		width: 1.14rem;
		height: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
		background: #fdfdff;
		border: 1px solid #dcdcdc;
		border-radius: 4px;
		box-shadow: border-box;
		color: #b2b2b2;
	}

	.sendMesOn{
		background: #119c8f;
		border-color: #078579;
		color: #fff;
	}
`;
