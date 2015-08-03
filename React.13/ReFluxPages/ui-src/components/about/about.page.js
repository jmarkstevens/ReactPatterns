import React, {Component} from 'react';
import NavMenu from '../common/nav.menu';

var AboutPageSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 2px)',
	overflow: 'hidden',
	padding: '0',
	width: 'calc(100% - 32px)'
};

class AboutPageRender extends Component {
	render() {
		return (
			<div style={AboutPageSty}>
				React 1.3 ReFlux used for app state. This is the About Page.
				<NavMenu />
			</div>
		);
	}
}

export default class AboutPage extends AboutPageRender {}
