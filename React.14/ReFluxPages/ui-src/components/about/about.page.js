import React from 'react';
import NavMenu from '../common/nav.menu';

let AboutPageSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 2px)',
	overflow: 'hidden',
	padding: '0',
	width: 'calc(100% - 32px)'
};

export default class AboutPage extends React.Component {
	render() {
		if (this.props.hide) return null;
		return (
			<div style={AboutPageSty}>
				React 0.14 ReFlux used for app state. This is the About Page.
				<NavMenu />
			</div>
		);
	}
}
