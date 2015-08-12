import React, {Component} from 'react';

import DCtrl from './dnd.ctrl';

var AppCtrlSty = {
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				<br/><br/>
				React 1.3 Drag and Drop<br/><br/>
				<DCtrl /><br/><br/>
				The left list is the test pattern. I used the style to show different colors when events were triggered.
				The right list emplements the movement of a list item.
				<br/><br/>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {}
