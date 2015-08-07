import React, {Component} from 'react';

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
			onDrop={this.onThisDragEnd}>
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
			onDrop={this.onThisDragEnd}>
			{item.label}
		</div>
	)
}

class DndListRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		listSty = listStyle;
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
		this.binder('onThisDragStart', 'onThisDragOver', 'onThisDragEnd');
	}
	onThisDragStart(event) {
		var itemID = event.target.id;
		if (itemID) { this.setState({startID: itemID, overID: '', endID: ''}) };
	}
	onThisDragOver(event) {
		var itemID = event.target.id;
		if (itemID) { this.setState({overID: itemID}) };
		event.preventDefault();
	}
	onThisDragEnd(event) {
		var itemID = event.target.id;
		if (itemID) { this.setState({endID: itemID, overID: ''}) };
		if (this.props.dndDone) this.props.dndDone(this.state.startID, itemID);
	}
}

//
