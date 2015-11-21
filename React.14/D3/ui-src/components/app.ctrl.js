import React from 'react';

import Simple from './simple';
import BarChart from './BarChart';

let AppCtrlSty = {
	backgroundColor: 'white',
	height: '100%',
	padding: '0 10px 0 0'
}

export default class AppCtrl extends React.Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 0.14 D3<br/><br/>
				<Simple />
				<br/><br/>
				<BarChart data={[1, 3, 5, 2]} />
			</div>
		);
	}
}
