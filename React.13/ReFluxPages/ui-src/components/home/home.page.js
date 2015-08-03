import React, {Component} from 'react';

import NavMenu from '../common/nav.menu';

var HomePageSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 2px)',
	overflow: 'hidden',
	padding: '0',
	width: 'calc(100% - 32px)'
};

class HomePageRender extends Component {
	render() {
		var platform = window.navigator.platform;
		var innerWidth = Math.floor(window.innerWidth);
		var innerHeight = Math.floor(window.innerHeight);
		var screenwidth = Math.floor(window.screen.width);
		var screenheight = Math.floor(window.screen.height);
		var devicePixelRatio = Math.floor(window.devicePixelRatio);
		var navigatorproduct = window.navigator.product;
		var navigatoruserAgent = window.navigator.userAgent;
		return (
			<div style={HomePageSty}>
				React 1.3 ReFlux used for app state. This is the Home Page.<br /><br />
				<NavMenu />
				Platform: {platform}<br/>
				Inner Width: {innerWidth}<br/>
				Inner Height: {innerHeight}<br/>
				Screen Width: {screenwidth}<br/>
				Screen Height: {screenheight}<br/>
				Device Pixel Ratio: {devicePixelRatio}<br/>
				Navigator Product: {navigatorproduct}<br/>
				Navigator User Agent: {navigatoruserAgent}<br/>
			</div>
		);
	}
}

export default class HomePage extends HomePageRender {}
