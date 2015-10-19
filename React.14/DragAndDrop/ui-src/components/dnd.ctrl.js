import React, {Component} from 'react';
import _ld from 'lodash';

import DList from './dnd.list';
import DiList from './dndi.list';

let DndCtrlSty = {
	padding: '0 10px 0 30px'
}

let list = [
	{id: 'l1', label: 'first of list'},
	{id: 'l2', label: 'second line of list'},
	{id: 'l3', label: 'third line of list'},
	{id: 'l4', label: 'fourth line of list'},
	{id: 'l5', label: 'fifth line of list'},
	{id: 'l6', label: 'sixth line of list'}
]

class DndCtrlRender extends Component {
	render() {
		let isMobile = this.props.isMobile;
		return (
			<div id='DndCtrlSty' className='FlexBox' style={DndCtrlSty}>
				<DiList data={list} isMobile={isMobile} />
				<DiList data={this.state.list} dndDone={this.dndDone} />
				<DList data={list} isMobile={isMobile} />
				<DList data={this.state.list} dndDone={this.dndDone} />
			</div>
		);
	}
}

export default class DndCtrl extends DndCtrlRender {
	constructor() {
	  super();
		this.state = {list: _ld.cloneDeep(list)};
	}
	dndDone = (startID, endID) => {
		let newList = this.state.list;
		let startObj = _ld.findWhere(newList, {id: startID});
		let startIndex = _ld.indexOf(newList, startObj);
		newList.splice(startIndex, 1);
		let endObj = _ld.findWhere(newList, {id: endID});
		let endIndex = _ld.indexOf(newList, endObj) + 1;
		newList.splice(endIndex, 0, startObj);
		this.setState.list = newList;
	}
}
