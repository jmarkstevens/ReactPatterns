import _ld from 'lodash';
import React, {Component} from 'react';

var listSty = {}
var listStyle = {
	height: '100%',
	margin: '-24px 0 0 4px',
	width: 'calc(100% - 8px)'
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
	height: '24px',
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

		var imgCnt = (this.props.sliderObj.max - this.props.sliderObj.min) / this.props.sliderObj.step;
		var imgArray = new Array(imgCnt + 1);
		_ld.fill(imgArray, '0');
		var vm = this;
		var list = imgArray.map(divColorMap, vm);
		return (
			<div id='SliderDndSty' className='FlexBox Stretch' style={listSty}>
				{list}
			</div>
		);
	}
}

export default class JRangeSliderDnd extends JRangeSliderDndRender {
	constructor() {
	  super();
		this.isLow = false;
		this.isHigh = false;
		this.overID = '';
		this.binder('onThisDragStart', 'onThisDragOver', 'onThisDragEnd', 'onThisTouchStart', 'onThisTouchMove', 'onThisTouchEnd', 'onThisDragEnter');
	}
	onThisDragStart(event) {
		event.dataTransfer.effectAllowed = "all";
		var img = document.createElement("img");
    img.src = "./img/1x1TransShim.gif";
    event.dataTransfer.setDragImage = (img, 1, 1);
		var itemID = event.target.id;
		if (isNaN(itemID)) {
			event.preventDefault();
			return;
		}
		this.isLow = (Math.abs(this.props.sliderObj.low - itemID) < 5);
		this.isHigh = (Math.abs(this.props.sliderObj.high - itemID) < 5);
		if (this.isLow || this.isHigh) {
			this.props.sliderStartChange(itemID);
		} else {
			event.preventDefault();
		}
	}
	onThisDragEnter(event) {
		event.preventDefault();
	}
	onThisDragOver(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (isNaN(itemID) || (this.overID == itemID)) return;
		this.overID = itemID;
		this.props.sliderChange(itemID);
	}
	onThisDragEnd(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (isNaN(itemID) || this.overID == itemID) return;
		else this.props.sliderChange(itemID);
	}
	onThisTouchStart(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (isNaN(itemID)) return;
		this.isLow = (Math.abs(this.props.sliderObj.low - itemID) < 5);
		this.isHigh = (Math.abs(this.props.sliderObj.high - itemID) < 5);
		if (this.isLow || this.isHigh) {
			this.props.sliderStartChange(itemID);
		} else {
			event.preventDefault();
		}
	}
	onThisTouchMove(event) {
		event.preventDefault();
		var lastTouch = event.touches.length - 1;
		var x = event.touches[lastTouch].pageX;
		var y = event.touches[lastTouch].pageY;
		var element = document.elementFromPoint(x, y);
		var itemID = element.id;
		if (isNaN(itemID) || (this.overID == itemID) || !(this.isLow || this.isHigh)) return;
		else {
			this.overID = itemID;
			this.props.sliderChange(itemID);
		}
	}
	onThisTouchEnd(event) {
		event.preventDefault();
		var lastTouch = event.changedTouches.length - 1;
		var x = event.changedTouches[lastTouch].pageX;
		var y = event.changedTouches[lastTouch].pageY;
		var element = document.elementFromPoint(x, y);
		var itemID = element.id;
		if (isNaN(itemID) || (this.overID == itemID) || !(this.isLow || this.isHigh)) return;
		else {
			this.props.sliderChange(itemID);
		}
	}
}

var sliderValueSty = {
	height: '100%',
	width: '100%'
}

var lowButtonSty = {
	backgroundColor: '#4C1F00',
	border: 'none',
	borderRadius: '24px',
	color: 'gold',
	height: '24px',
	lineHeight: 'normal',
	marginTop: '0',
	padding: '0',
	width: '24px'
}

var highButtonSty = {
	backgroundColor: '#4C1F00',
	border: 'none',
	borderRadius: '24px',
	color: 'gold',
	height: '24px',
	lineHeight: 'normal',
	marginTop: '0',
	padding: '0',
	width: '24px'
}

var defaultCountSty = {
	backgroundColor: '#33045B',
	borderRadius: '6px',
	height: '12px',
	margin: '-18px 0 0 0px',
	width: '100%'
}

var defaultIndexSty = {backgroundColor: '#874C08', height: '6px', borderTop: '3px solid #33045B', width: '1%'}

class JRangeSliderValueRender extends Component {
	render() {
		var sizeFactor = this.props.sliderObj.size ? this.props.sliderObj.size : 1;
		var font1 = Math.round(1 * sizeFactor);
		var font7 = Math.round(.7 * sizeFactor);
		var count = this.props.sliderObj.max - this.props.sliderObj.min;
		var factor = 100 / count;

		var lowValue = this.props.sliderObj.low;
		var highValue = this.props.sliderObj.high;
		var highLowDiff = highValue - lowValue;

		var leftValue = lowValue - this.props.sliderObj.min;
		var lowMargin = Math.floor(leftValue * factor);
		var buttonDivSty = {};
		let highAdjust = 0;

		if (this.props.sliderObj.isSingle) {
			buttonDivSty.width = 'calc(100% - 0px)';
			lowButtonSty.marginLeft = '0';
			lowButtonSty.display = 'none';
			highAdjust = 24 * sizeFactor;
		} else {
			buttonDivSty.width = 'calc(100% - 0px)';
			lowButtonSty.marginLeft = lowMargin + '%';
			lowButtonSty.display = 'block';
			highAdjust = 48 * sizeFactor;
		}
		lowButtonSty.fontSize = lowValue > 99 ? font7 + 'em' : font1 + 'em';


		var highMargin = Math.ceil(highLowDiff * factor);
		highButtonSty.marginLeft = 'calc(' + highMargin + '% - ' + highAdjust + 'px)';
		highButtonSty.fontSize = highValue > 99 ? font7 + 'em' : font1 + 'em';

		var percentage = Math.floor(highLowDiff * factor);

		let countSty = this.props.countSty ? this.props.countSty : defaultCountSty;
		countSty.backgroundColor = this.props.countColor ? this.props.countColor : '#33045B';

		let indexSty = this.props.indexSty ? this.props.indexSty : defaultIndexSty;
		indexSty.width = percentage + '%';
		indexSty.marginLeft = lowButtonSty.marginLeft;
		indexSty.backgroundColor = this.props.indexColor ? this.props.indexColor : '#874C08';
		indexSty.borderTopColor = countSty.backgroundColor;

		return (
			<div id='sliderValueSty' style={sliderValueSty}>
				<div id='buttonDiv' className='FlexBox' style={buttonDivSty}>
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
	margin: '0 10px',
	width: 'calc(100% - 20px)'
}

class JRangeSliderRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var sizeFactor = this.props.sliderObj.size ? this.props.sliderObj.size : 1;
		var size24 = Math.round(24 * sizeFactor);
		var size18 = Math.round(size24 * .75);
		var size12 = Math.round(size24 * .5);
		var size6 = Math.round(size12 * .5);
		var size3 = Math.round(size6 * .5);
		listStyle.margin = '-' + size24 + 'px 0 0 4px';
		SliderCtrlSty.height = size24 + 'px';
		imageDivStyle.height = size24 + 'px';
		lowButtonSty.borderRadius = size24 + 'px';
		lowButtonSty.height = size24 + 'px';
		lowButtonSty.width = size24 + 'px';
		highButtonSty.borderRadius = size24 + 'px';
		highButtonSty.height = size24 + 'px';
		highButtonSty.width = size24 + 'px';
		defaultCountSty.borderRadius = size6 + 'px';
		defaultCountSty.height = size12 + 'px';
		defaultCountSty.margin = '-' + size18 + 'px 0 0 0px';
		defaultIndexSty.height = size6 + 'px';
		defaultIndexSty.borderTop = size3 + 'px solid #33045B';
		return (
			<div id='SliderCtrlSty' style={SliderCtrlSty}>
				<JRangeSliderValue sliderObj={this.props.sliderObj} />
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
	}
	sliderChange(value) {
		var newValue = value;
		if (this.isLowValue) newValue = Math.max(newValue, this.props.sliderObj.min);
		else newValue = Math.min(newValue, this.props.sliderObj.max);
		var sliderName = this.props.sliderObj.name;
		if (this.isLowValue) this.props.handleChange(sliderName, 'low', newValue);
		else this.props.handleChange(sliderName, 'high', newValue);
	}
}
