import React from 'react';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

export default class AppCtrl extends React.Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 beta Basic
				<br/><br/>
			</div>
		);
	}
}
