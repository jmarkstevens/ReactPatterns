import React from 'react';

import AboutPage from './about/about.page';
import HomePage from './home/home.page';

import AppStore from '../flux/App.Store';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

let allPageSty = {
	height: '100%',
	margin: '0',
	overflow: 'hidden',
	padding: '0',
	width: '100%'
};

class AppCtrlRender extends React.Component {
 	render() {
		let page = this.state.appState.currentPage;
		let hideAbout = (page != 'about');
		let hideHome = (page != 'home');
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				<div id='allPageSty' style={allPageSty}>
					<AboutPage hide={hideAbout} />
					<HomePage hide={hideHome} />
				</div>
			</div>
		);
	}
}

let getState = function() { return {appState: AppStore.getAppState(),}; };

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getState();
	}

	componentDidMount = () => { this.unsubscribe = AppStore.listen(this.storeDidChange); }
	componentWillUnmount = () => { this.unsubscribe(); }
	storeDidChange = () => { this.setState(getState()); }
}

// <span id='aboutSty' style={aboutSty}>
// 	<AboutPage show={showAbout} />
// </span>
