import React, {Component} from 'react';

import MapPage from './map/map.page';
// import SimpleMapPage from './x_simple/simple_map_page.jsx';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				<MapPage />
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {}
