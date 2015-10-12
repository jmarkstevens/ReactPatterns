import React, {Component} from 'react';

import JList from './common/jList';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

let list = [
	'line one of list',
	'another line of list',
	'third line of list',
	'fourth line of list',
	'fifth line of list',
	'sixth line of list'
]

let lineSty = {
	color: 'brown',
	marginLeft: '5px'
}

let listSty = {
	border: '1px solid orange',
	margin: '10px 10px'
}

export default class AppCtrl extends Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 List<br/><br/>
				<JList data={list} />
				<JList data={list} listStyle={listSty} />
				<JList data={list} lineStyle={lineSty} />
				<br />
				<JList data={list} spanLine='1' />
				<JList data={list} spanLine='1' lineStyle={lineSty} listStyle={listSty} />
			</div>
		);
	}
}
