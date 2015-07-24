import React, {Component} from 'react';

import JList from './common/jList';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var list = [
	'line one of list',
	'another line of list',
	'third line of list',
	'fourth line of list',
	'fifth line of list',
	'sixth line of list'
]

var lineSty = {
	color: 'brown'
}

var listSty = {
	border: '1px solid orange',
	margin: '10px 10px'
}

class AppCtrlRender extends Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
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

export default class AppCtrl extends AppCtrlRender {}
