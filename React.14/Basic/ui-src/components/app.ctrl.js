import React, {Component} from 'react';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				Es6 Basic .14 beta
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {}
