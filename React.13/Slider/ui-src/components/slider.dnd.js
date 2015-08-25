import _ld from 'lodash';
import React, {Component} from 'react';

import Actions from './../flux/Actions';

var listSty = {}
var listStyle = {
	height: '100%',
	padding: '0',
	width: '500px'
}

var lineSty = {}
var lineStyle = {
	color: '#FBF7C3',
	height: '100%',
	marginTop: '-20px'
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

function divColorMap(item, index) {
	imageDivStyle.backgroundColor = 'transparent';
	lineSty = lineStyle;
	// lineSty.width = '1%';
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
			<div style={imageDivStyle}><img id={index} src='./img/1x1TransShim.gif' style={imageStyle} /></div>
		</div>
	)
}

class SliderDndRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		listSty = listStyle;
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

export default class SliderDnd extends SliderDndRender {
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

// onTouchStart={this.onThisTouchStart} onTouchMove={this.onThisTouchMove}
