import React, {Component} from 'react';

import Actions from './../flux/Actions';

var listSty = {}
var listStyle = {
	marginLeft: '50px'
}

var lineSty = {}
var lineStyle = {
	color: '#FBF7C3',
	height: '1.2em',
	marginLeft: '7px',
	marginTop: '3px'
}
var startLineStyle = {
	color: '#1F1',
	marginLeft: '7px',
	marginTop: '3px'
}
var overLineStyle = {
	color: '#F11',
	marginLeft: '7px',
	marginTop: '3px'
}
var endLineStyle = {
	color: '#11F',
	marginLeft: '7px',
	marginTop: '3px'
}

var mobileLineStyle = {
	// border: '1px solid blue',
	color: '#FBF7C3',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px',
	verticalAlign: 'middle'
}
var startMobileLineStyle = {
	color: '#1F1',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px',
	verticalAlign: 'middle'
}
var overMobileLineStyle = {
	color: '#F11',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px',
	verticalAlign: 'middle'
}
var endMobileLineStyle = {
	color: '#11F',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px',
	verticalAlign: 'middle'
}
var imageStyle = {height: '100%', width: '100%'}
var imageDivStyle = {
	border: 'thin dotted green',
	height: '1.2em',
	left: '0',
	marginTop: '-1.2em',
	position: 'relative',
	top: '0',
	width: '100%'
}
function divColorMap(item) {
	if (this.state.startID === item.id) lineSty = startLineStyle;
	else if (this.state.overID === item.id) lineSty = overLineStyle;
	else if (this.state.endID === item.id) lineSty = endLineStyle;
	else lineSty = lineStyle;
	return (
		<div
			style={lineSty}
			key={item.id}
			draggable="true"
			onDragStart={this.onThisDragStart}
			onDragOver={this.onThisDragOver}
			onDrop={this.onThisDragEnd}
			onTouchStart={this.onThisTouchStart}
			onTouchMove={this.onThisTouchMove}
			onTouchEnd={this.onThisTouchEnd}
			onTouchCancel={this.onThisTouchEnd}
			>
			{item.label}
			<div style={imageDivStyle}><img id={item.id} src='./img/1x1TransShim.gif' style={imageStyle} /></div>
		</div>
	)
}

function divMap(item) {
	lineSty = lineStyle;
	return (
		<div
			style={lineSty}
			id={item.id}
			key={item.id}
			draggable="true"
			onDragStart={this.onThisDragStart}
			onDragEnter={this.onThisDragOver}
			onDragOver={this.onThisDragOver}
			onDrop={this.onThisDragEnd}
			onTouchStart={this.onThisTouchStart}
			onTouchMove={this.onThisTouchMove}
			onTouchEnd={this.onThisTouchEnd}
			onTouchCancel={this.onThisTouchEnd}
			>
			{item.label}
		</div>
	)
}

class DndImageListRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		listSty = listStyle;
		if (this.props.isMobile) {
			lineStyle = mobileLineStyle;
			startLineStyle = startMobileLineStyle;
			overLineStyle = overMobileLineStyle;
			endLineStyle = endMobileLineStyle;
			imageDivStyle.height = '2em';
			imageDivStyle.marginTop = '-1.6em';
		}
		var vm = this;
		var list;
		if (this.props.dndDone) list = this.props.data.map(divMap, vm);
		else list = this.props.data.map(divColorMap, vm);
		return (
			<div id='DndImageListSty' style={listSty}>
				{list}
			</div>
		);
	}
}

export default class DndImageList extends DndImageListRender {
	constructor() {
	  super();
		this.state = {
			startID: '',
			overID: '',
			endID: ''
		};
		this.binder('onThisDragStart', 'onThisDragOver', 'onThisDragEnd', 'onThisTouchStart', 'onThisTouchMove', 'onThisTouchEnd');
	}
	onThisDragStart(event) {
		// event.dataTransfer.setData('text/plain', 'This text may be dragged');
		event.dataTransfer.effectAllowed = "all";
		var itemID = event.target.id;
		if (itemID) { this.setState({startID: itemID, overID: '', endID: ''}) };
		Actions.newMessage('DragStart itemID: ' + itemID);
	}
	onThisDragOver(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (!itemID || this.state.overID == itemID) return;
		if (itemID) { this.setState({overID: itemID}) };
		Actions.newMessage('DragOver itemID: ' + itemID);
	}
	onThisDragEnd(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (itemID) { this.setState({endID: itemID, overID: ''}) };
		if (this.props.dndDone) this.props.dndDone(this.state.startID, itemID);
		Actions.newMessage('DragEnd itemID: ' + itemID);
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
