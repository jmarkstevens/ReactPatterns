import React, {Component} from 'react';
import _ld from 'lodash';

import DList from './dnd.list';
import DList2 from './dnd.list2';
import JList from './common/jList';

var DndCtrlSty = {
	height: '100%',
	padding: '0 10px 0 30px'
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

var list = [
	{id: 'l1', label: 'first of list'},
	{id: 'l2', label: 'second line of list'},
	{id: 'l3', label: 'third line of list'},
	{id: 'l4', label: 'fourth line of list'},
	{id: 'l5', label: 'fifth line of list'},
	{id: 'l6', label: 'sixth line of list'}
]

class DndCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var isMobile = this.props.isMobile;
		var messages = this.props.messages;
		return (
			<div id='DndCtrlSty' className='FlexBox' style={DndCtrlSty}>
				<DList2 data={list} isMobile={isMobile} />
				<DList data={list} isMobile={isMobile} />
				<DList data={this.state.list} dndDone={this.dndDone} />
				<div style={{marginLeft: '10px'}}>
					<span style={startLineStyle}>drag start</span><br/>
					<span style={overLineStyle}>drag over</span><br/>
					<span style={endLineStyle}>drag end</span><br/>
					<JList data={messages} />
				</div>
			</div>
		);
	}
}

export default class DndCtrl extends DndCtrlRender {
	constructor() {
	  super();
		this.state = {list: _ld.cloneDeep(list)};
		this.binder('dndDone');
	}
	dndDone(startID, endID) {
		var newList = this.state.list;
		var startObj = _ld.findWhere(newList, {id: startID});
		var startIndex = _ld.indexOf(newList, startObj);
		newList.splice(startIndex, 1);
		var endObj = _ld.findWhere(newList, {id: endID});
		var endIndex = _ld.indexOf(newList, endObj) + 1;
		newList.splice(endIndex, 0, startObj);
		this.setState.list = newList;
	}
}
