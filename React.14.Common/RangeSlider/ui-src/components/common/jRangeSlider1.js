import _ld from 'lodash';
import React, {Component} from 'react';

import Actions from '../../flux/Actions';

var listSty = {}
var listStyle = {
	height: '100%',
	margin: '-24px 0 0',
	width: '100%'
}

var lineSty = {}
var lineStyle = {
	color: '#FBF7C3',
	height: '100%'
}

var imageStyle = {borderImageWidth: '0', height: '100%', width: '100%'}
var imageDivStyle = {
	border: 'none',
	borderImageWidth: '0',
	height: '20px',
	left: '0',
	position: 'relative',
	top: '0',
	width: '100%'
}

var indexAdjust = 0;

function divColorMap(item, index) {
	imageDivStyle.backgroundColor = 'transparent';
	lineSty = lineStyle;
	var id = index + indexAdjust;
	return (
		<div
			style={lineSty}
			key={index}
			className='FlexItem'
			draggable="true"
			onDragStart={this.onThisDragStart}
			onDragEnter={this.onThisDragEnter}
			onDragOver={this.onThisDragOver}
			onDrop={this.onThisDragEnd}
			onTouchStart={this.onThisTouchStart}
			onTouchMove={this.onThisTouchMove}
			onTouchEnd={this.onThisTouchEnd}
			onTouchCancel={this.onThisTouchEnd}
			>
			<div style={imageDivStyle}><img id={id} src='./img/1x1TransShim.gif' style={imageStyle} /></div>
		</div>
	)
}

class JRangeSliderDndRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		listSty = listStyle;
		indexAdjust = this.props.sliderObj.min;
		// Actions.newMessage('indexAdjust: ' + indexAdjust);
		var imgCnt = (this.props.sliderObj.max - this.props.sliderObj.min) / this.props.sliderObj.step;
		var imgArray = new Array(imgCnt + 1);
		_ld.fill(imgArray, '0');
		var vm = this;
		var list = imgArray.map(divColorMap, vm);
		return (
			<div id='SliderDndSty' className='FlexStretch' style={listSty}>
				{list}
			</div>
		);
	}
}

export default class JRangeSliderDnd extends JRangeSliderDndRender {
	constructor() {
	  super();
		this.state = {
			startID: '',
			overID: '',
			endID: ''
		};
		this.binder('onThisDragStart', 'onThisDragOver', 'onThisDragEnd', 'onThisTouchStart', 'onThisTouchMove', 'onThisTouchEnd', 'onThisDragEnter');
	}
	onThisDragStart(event) {
		var img = document.createElement("img");
    img.src = "./img/1x1TransShim.gif";
    event.dataTransfer.setDragImage = (img, 0, 0);
		var itemID = event.target.id;
		if (itemID) {
			this.setState({startID: itemID, overID: '', endID: ''})
			this.props.sliderStartChange(itemID);
			Actions.newMessage('DragStart itemID: ' + itemID);
		};
	}
	onThisDragEnter(event) {
		event.preventDefault();
	}
	onThisDragOver(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (!itemID || this.state.overID == itemID) return;
		this.setState({overID: itemID});
		this.props.sliderChange(itemID);
		Actions.newMessage('DragOver itemID: ' + itemID);
	}
	onThisDragEnd(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (itemID) {
			this.setState({endID: itemID, overID: ''});
			this.props.sliderChange(itemID);
			Actions.newMessage('DragEnd itemID: ' + itemID);
		};
	}
	onThisTouchStart(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (itemID) { this.setState({startID: itemID, overID: '', endID: ''}) };
		Actions.newMessage('TouchStart itemID: ' + itemID);
	}
	onThisTouchMove(event) {
		event.preventDefault();
		var lastTouch = event.touches.length - 1;
		var x = event.touches[lastTouch].pageX;
		var y = event.touches[lastTouch].pageY;
		var element = document.elementFromPoint(x, y);
		if (!element.id || this.state.overID == element.id) return;
		Actions.newMessage('TouchMove element.id: ' + element.id);
		if (element.id) { this.setState({overID: element.id}) };
	}
	onThisTouchEnd(event) {
		event.preventDefault();
		var lastTouch = event.changedTouches.length - 1;
		var x = event.changedTouches[lastTouch].pageX;
		var y = event.changedTouches[lastTouch].pageY;
		var element = document.elementFromPoint(x, y);
		Actions.newMessage('TouchEnd element.id: ' + element.id);
		var itemID = element.id;
		if (itemID) { this.setState({endID: itemID, overID: ''}) };
		if (this.props.dndDone) this.props.dndDone(this.state.startID, itemID);
	}
}

var sliderValueSty = {
	height: '100%',
	padding: '0 10px',
	width: '24px'
}

var lowButtonSty = {
	backgroundColor: '#4C1F00',
	border: 'none',
	borderRadius: '24px',
	color: 'gold',
	height: '24px',
	marginTop: '0',
	padding: '0 3px',
	width: '24px'
}

var highButtonSty = {
	backgroundColor: '#4C1F00',
	border: 'none',
	borderRadius: '24px',
	color: 'gold',
	height: '24px',
	marginTop: '0',
	padding: '0 3px',
	width: '24px'
}

var defaultCountSty = {
	backgroundColor: '#33045B',
	height: '12px',
	margin: '-18px 0 0 0px',
	width: 'calc(100% - 0px)'
}

var defaultIndexSty = {backgroundColor: '#874C08', height: '6px', borderTop: '3px solid #33045B', width: '1%'}

class JRangeSliderValueRender extends Component {
	render() {
		var count = this.props.sliderObj.max - this.props.sliderObj.min;
		var factor = 100 / count;
		// Actions.newMessage('factor: ' + factor);
		var lowValue = this.props.lowValue;
		var highValue = this.props.highValue;
		var highLowDiff = highValue - lowValue;

		var leftValue = lowValue - this.props.sliderObj.min;
		var lowMargin = Math.floor(leftValue * factor);
		lowButtonSty.marginLeft = 'calc(' + lowMargin + '% - 6px)';
		lowButtonSty.fontSize = lowValue > 99 ? '.7em' : '1em';

		var highMargin = Math.floor((highLowDiff) * factor);
		highButtonSty.marginLeft = 'calc(' + highMargin + '% - 38px)';
		highButtonSty.fontSize = highValue > 99 ? '.7em' : '1em';

		var percentage = Math.floor(highLowDiff * factor);

		let countSty = this.props.countSty ? this.props.countSty : defaultCountSty;
		countSty.backgroundColor = this.props.countColor ? this.props.countColor : '#33045B';

		let indexSty = this.props.indexSty ? this.props.indexSty : defaultIndexSty;
		indexSty.width = percentage + '%';
		indexSty.marginLeft = lowButtonSty.marginLeft;
		indexSty.backgroundColor = this.props.indexColor ? this.props.indexColor : '#874C08';
		indexSty.borderTopColor = countSty.backgroundColor;

		return (
			<div id='JSlider' style={{height: '100%', width: '100%'}}>
				<div id='buttonDiv' className='FlexBox' style={{marginLeft: '-6px', width: 'calc(100% + 12px)'}}>
					<button id='lowButtonSty' style={lowButtonSty}>{lowValue}</button>
					<button id='highButtonSty' style={highButtonSty}>{highValue}</button>
				</div>
				<div id='countSty' style={countSty}>
					<div id='indexSty' style={indexSty}></div>
				</div>
			</div>
		);
	}
}

export default class JRangeSliderValue extends JRangeSliderValueRender {}

var SliderCtrlSty = {
	height: '24px',
	padding: '0 10px',
	width: '500px'
}

class JRangeSliderRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var lowValue = this.props.sliderObj.low;
		var highValue = this.props.sliderObj.high;
		return (
			<div id='SliderCtrlSty' style={SliderCtrlSty}>
				<JRangeSliderValue sliderObj={this.props.sliderObj} lowValue={lowValue} highValue={highValue} />
				<JRangeSliderDnd
					sliderObj={this.props.sliderObj}
					sliderChange={this.sliderChange}
					sliderStartChange={this.sliderStartChange}
					heightAdjust={SliderCtrlSty.height}
					/>
			</div>
		);
	}
}

export default class JRangeSlider extends JRangeSliderRender {
	constructor() {
	  super();
		this.valueAdjust = 0;
		this.isLowValue = true;
		this.binder('sliderChange', 'sliderStartChange');
	}
	sliderStartChange(index) {
		this.isLowValue = (Math.abs(this.props.sliderObj.low - index) < 5);
		var value = this.isLowValue ? this.props.sliderObj.low : this.props.sliderObj.high;
		this.valueAdjust = value - index;
	}
	sliderChange(value) {
		var newValue = value - this.valueAdjust;
		if (this.isLowValue) this.props.handleChange('low', newValue);
		else this.props.handleChange('high', newValue);
	}
}
