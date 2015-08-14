import React, {Component} from 'react';

import Actions from './../flux/Actions';

var listSty = {}
var listStyle = {marginLeft: '50px'}

var lineSty = {}
var lineStyle = {
	color: '#FBF7C3',
	marginLeft: '7px'
}
var startLineStyle = {
	color: '#1F1',
	marginLeft: '7px'
}
var overLineStyle = {
	color: '#F11',
	marginLeft: '7px'
}
var endLineStyle = {
	color: '#11F',
	marginLeft: '7px'
}

var mobileLineStyle = {
	color: '#FBF7C3',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}
var startMobileLineStyle = {
	color: '#1F1',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}
var overMobileLineStyle = {
	color: '#F11',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}
var endMobileLineStyle = {
	color: '#11F',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}

function divColorMap(item) {
	if (this.state.startID === item.id) lineSty = startLineStyle;
	else if (this.state.overID === item.id) lineSty = overLineStyle;
	else if (this.state.endID === item.id) lineSty = endLineStyle;
	else lineSty = lineStyle;
	return (
		<div
			style={lineSty}
			id={item.id}
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

class DndListRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		listSty = listStyle;
		if (this.props.isMobile) {
			lineStyle = mobileLineStyle;
			startLineStyle = startMobileLineStyle;
			overLineStyle = overMobileLineStyle;
			endLineStyle = endMobileLineStyle;
		}
		var vm = this;
		var list;
		if (this.props.dndDone) list = this.props.data.map(divMap, vm);
		else list = this.props.data.map(divColorMap, vm);
		return (
			<div id='DndListSty' style={listSty}>
				{list}
			</div>
		);
	}
}

export default class DndList extends DndListRender {
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
		var itemID = event.target.id;
		if (itemID) { this.setState({startID: itemID, overID: '', endID: ''}) };
		Actions.newMessage('DragStart itemID: ' + itemID);
	}
	onThisDragOver(event) {
		event.preventDefault();
		var itemID = event.target.id;
		if (this.state.overID == itemID) return;
		if (itemID) { this.setState({overID: itemID}) };
		Actions.newMessage('DragOver itemID: ' + itemID);
	}
	onThisDragEnd(event) {
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
		if (this.state.overID == element.id) return;
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
