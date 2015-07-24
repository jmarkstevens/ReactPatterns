import React, {Component} from 'react';

import AboutPage from './about/about.page';
import HomePage from './home/home.page';

import AppStore from '../flux/App.Store';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var allPageSty = {
	height: '100%',
	margin: '0',
	overflow: 'hidden',
	padding: '0',
	width: '100%'
};

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var page = this.state.appState.currentPage;
		var aboutSty = page == 'about' ? {} : {display: 'none'};
		var homeSty = page == 'home' ? {} : {display: 'none'};
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				<div id='allPageSty' style={allPageSty}>
					<span id='aboutSty' style={aboutSty}><AboutPage /></span>
					<span id='homeSty' style={homeSty}><HomePage /></span>
				</div>
			</div>
		);
	}
}

var getState = function() { return {appState: AppStore.getAppState(),}; };

export default class AppCtrl extends AppCtrlRender {
	constructor() { 
	  super();
		this.state = getState(); 
	  this.binder('storeDidChange');
	}

	componentDidMount() { this.unsubscribe = AppStore.listen(this.storeDidChange); }
	componentWillUnmount() { this.unsubscribe(); }
	storeDidChange() { this.setState(getState()); }
}


