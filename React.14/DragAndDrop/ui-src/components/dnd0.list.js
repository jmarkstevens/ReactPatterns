import React from 'react';

import Actions from './../flux/Actions';

let listSty = {}
let listStyle = {marginLeft: '50px'}

let lineSty = {}
let lineStyle = {
	color: '#FBF7C3',
	marginLeft: '7px'
}
let startLineStyle = {
	color: '#1F1',
	marginLeft: '7px'
}
let overLineStyle = {
	color: '#F11',
	marginLeft: '7px'
}
let endLineStyle = {
	color: '#11F',
	marginLeft: '7px'
}

let mobileLineStyle = {
	color: '#FBF7C3',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}
let startMobileLineStyle = {
	color: '#1F1',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}
let overMobileLineStyle = {
	color: '#F11',
	height: '2em',
	marginLeft: '7px',
	marginTop: '5px'
}
let endMobileLineStyle = {
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
			dataValue={item.id}
			draggable="true"
			onDragStart={this.onThisDragStart}
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

class DndListRender extends React.Component {
	render() {
		listSty = listStyle;
		if (this.props.isMobile) {
			lineStyle = mobileLineStyle;
			startLineStyle = startMobileLineStyle;
			overLineStyle = overMobileLineStyle;
			endLineStyle = endMobileLineStyle;
		}
		let vm = this;
		let list;
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
	}
	onThisDragStart = (event) => {
		event.dataTransfer.setData('text/plain', 'This text may be dragged');
		let itemID = event.target.id;
		if (itemID) { this.setState({startID: itemID, overID: '', endID: ''}) };
		Actions.newMessage('DragStart itemID: ' + itemID);
	}
	onThisDragOver = (event) => {
		event.preventDefault();
		let x = event.clientX;
	  let y = event.clientY;
	  let element = document.elementFromPoint(x, y);
	  let itemID = element.id;
		if (this.savedItemID != itemID) {
			this.savedItemID = itemID;
			Actions.newMessage('DragOver itemID: ' + itemID);
		}
	}
	onThisDragEnd = (event) => {
		event.preventDefault();
		let itemID = event.target.id;
		if (itemID) { this.setState({endID: itemID, overID: ''}) };
		if (this.props.dndDone) this.props.dndDone(this.state.startID, itemID);
		Actions.newMessage('DragEnd itemID: ' + itemID);
	}
	onThisTouchStart = (event) => {
		event.preventDefault();
		let itemID = event.target.id;
		if (itemID) { this.setState({startID: itemID, overID: '', endID: ''}) };
		Actions.newMessage('TouchStart itemID: ' + itemID);
	}
	onThisTouchMove = (event) => {
		event.preventDefault();
		let lastTouch = event.touches.length - 1;
		let x = event.touches[lastTouch].pageX;
		let y = event.touches[lastTouch].pageY;
		let element = document.elementFromPoint(x, y);
		if (this.state.overID == element.id) return;
		Actions.newMessage('TouchMove element.id: ' + element.id);
		if (element.id) { this.setState({overID: element.id}) };
	}
	onThisTouchEnd = (event) => {
		event.preventDefault();
		let lastTouch = event.changedTouches.length - 1;
		let x = event.changedTouches[lastTouch].pageX;
		let y = event.changedTouches[lastTouch].pageY;
		let element = document.elementFromPoint(x, y);
		Actions.newMessage('TouchEnd element.id: ' + element.id);
		let itemID = element.id;
		if (itemID) { this.setState({endID: itemID, overID: ''}) };
		if (this.props.dndDone) this.props.dndDone(this.state.startID, itemID);
	}
}

// onTouchStart={this.onThisTouchStart} onTouchMove={this.onThisTouchMove}
