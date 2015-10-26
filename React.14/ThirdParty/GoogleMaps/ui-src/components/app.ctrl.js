import React from 'react';

import MapPage from './map/map.page';
// import SimpleMapPage from './x_simple/simple_map_page.jsx';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

export default class AppCtrl extends React.Component {
	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				<MapPage />
			</div>
		);
	}
}
