import React from 'react';
import _ld from 'lodash';

import DList from './dnd.list';

let DndCtrlSty = {
	padding: '0 10px 0 30px'
}

let list = [
	{id: 'l1', label: 'first line of list'},
	{id: 'l2', label: 'second line of list'},
	{id: 'l3', label: 'third line of list'},
	{id: 'l4', label: 'fourth line of list'},
	{id: 'l5', label: 'fifth line of list'},
	{id: 'l6', label: 'sixth line of list'},
	{id: 'l7', label: 'seventh of list'},
	{id: 'l8', label: 'eighth line of list'},
	{id: 'l9', label: 'nineth line of list'},
	{id: 'l10', label: 'tenth line of list'},
	{id: 'l11', label: 'eleventh line of list'},
	{id: 'l12', label: 'twelth of list'},
	{id: 'l13', label: 'thirteenth line of list'},
	{id: 'l14', label: 'fourteenth line of list'},
	{id: 'l15', label: 'fifteenth line of list'}
]

class DndCtrlRender extends React.Component {
	render() {
		let isMobile = this.props.isMobile;
		return (
			<div id='DndCtrlSty' className='FlexBox' style={DndCtrlSty}>
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
		this.savedItemID = '';
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
