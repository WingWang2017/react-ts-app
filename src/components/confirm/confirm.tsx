import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { observer } from 'mobx-react';

import { Transition } from 'react-transition-group';

import Styled from 'styled-components';

import MaskLayer from '../mask-layer';

interface IProps {
	type?: string;
	title?: string;
	content?: string;
	cancelText?: string;
	confirmText?: string;
	removeChild?: any;
	onCancel?: any;
	onConfirm?: any;
}

@observer
class Confirm extends React.Component<IProps, {}> {

	public static defaultProps = {
		type: 'default',
		title: null,
		content: null,
		confirmText: '确定',
		cancelText: '取消',
		onConfirm: () => { },
		onCancel: () => { }
	};

	public state = {
		in: false,
		value: ''
	};

	// <= 隐藏并删除标签
	public onHide() {
		this.setState({
			in: false
		});
		this.props.removeChild();
	}

	public onClose = () => {
		this.onHide();
	}

	// <= 取消
	public onCancel = () => {
		this.onHide();
		this.props.onCancel();
	}

	// <= 确定
	public onConfirm = (e: any) => {
		this.onHide();
		this.props.onConfirm(this.state.value);
	}

	public onChange = (e: any) => {
		const value = e.target.value;
		this.setState({
			value
		});
	}

	public touchstart = (e: any) => {
		e.preventDefault();
	}

	public componentDidMount() {
		this.setState({
			in: true
		});
		document.addEventListener('backbutton', this.onHide.bind(this), false);
	}

	public componentWillUnmount() {
		document.removeEventListener('backbutton', this.onHide.bind(this), false);
	}

	public render() {
		const { onConfirm, onCancel, ...others } = this.props;
		return (
			<Transition
				in={this.state.in} timeout={100} >
				{(status: any) => (
					<>
						<MaskLayer onClick={this.onClose} className={`mask mask-${status}`} />
						<Conmfirm
							onConfirm={this.onConfirm}
							onCancel={this.onCancel}
							onChange={this.onChange}
							className={`fade zooming-${status}`}
							{...others} />
					</>
				)}
			</Transition>
		);
	}
}

const Conmfirm = observer((props: any) => (
	<StyledDiv onTouchStart={props.onTouchStart} className={props.className}>
		{
			props.title && <div className='wpConmfirmText'>{props.title}</div>
		}
		{
			props.type === 'edit'
			&& <input
				type='text'
				className='wpConmfirmInput'
				placeholder={props.placeholder}
				maxLength={props.maxLength}
				onChange={props.onChange} />
		}
		{
			props.content
			&& <div className='wpConmfirmContent' dangerouslySetInnerHTML={{ __html: props.content }} />
		}

		{
			props.type === 'important' ?
				<>
					<button className='wpConmfirmDelete' onClick={props.onConfirm} >{props.confirmText}</button>
					<button className='wpConmfirmCancel' onClick={props.onCancel}>{props.cancelText}</button>
				</>
				:
				<>
					<button className='wpConmfirmCancel' onClick={props.onCancel}>{props.cancelText}</button>
					<button className='wpConmfirmDelete' onClick={props.onConfirm} >{props.confirmText}</button>
				</>
		}
	</StyledDiv>
));

export default function ContainerConfirm(config: any) {
	const div = document.createElement('div');
	div.className = 'flexBox';
	document.body.appendChild(div);
	const removeChild = () => {

		setTimeout(() => {
			const unmountResult = ReactDOM.findDOMNode(div);
			if (unmountResult && div.parentNode) {
				div.parentNode.removeChild(div);
			}
		}, 800);
	};
	ReactDOM.render(
		<Confirm removeChild={removeChild.bind(this, div)} {...config} />,
		div
	);
}

const StyledDiv = Styled.div`
  position: relative;
  z-index: 99999;
  overflow: hidden;
  box-sizing: border-box;
  width: 5.6rem;
  padding: .3rem .35rem;
  border-radius: 8px;
  background: #fff;

.wpConmfirmText {
  position: relative;
  text-align: center;
  color: #000;
  font-size: .36rem;
  line-height: 1rem;
}

.wpConmfirmContent {
  text-align: center;
  color: #000;
  font-size: .32rem;
  line-height: 1.6;
  & span {
    color: #1ab6a0;
  }
}

.wpConmfirmInput {
  box-sizing: border-box;
  width: 100%;
  height: .74rem;
  margin: .15rem 0 0;
  padding: 0 .2rem;
  border: .5px solid #b2b2b2;
  border-radius: 3px;
}

.wpConmfirmDelete,
.wpConmfirmCancel {
  display: block;
  float: left;
  box-sizing: border-box;
  width: 50%;
  height: .78rem;
  margin-top: .35rem;
  text-align: center;
  color: #52d3c7  ;
  border: 1px solid #52d3c7 ;
  font-size: .3rem;
  line-height: .78rem;
}

.wpConmfirmDelete {
  color: #fff;
  background: #52d3c7 ;
}
.wpConmfirmDelete.active-state {
  color: #52d3c7 ;
  background: #fff;
}
.wpConmfirmCancel.active-state {
  color: #fff;
  background: #52d3c7 ;
}

`;
