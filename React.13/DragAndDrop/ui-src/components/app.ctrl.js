import React, {Component} from 'react';

import Actions from '../flux/Actions';
import AppStore from '../flux/App.Store';

import DCtrl from './dnd.ctrl';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var isMobile = this.state.appData.isMobile;
		var messages = this.state.appData.messages;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 Drag and Drop<br/><br/>
				<DCtrl isMobile={isMobile} messages={messages} />
			</div>
		);
	}
}

var getAppState = function() {
	// console.log('AppCtrl getAppState');
	return {
		appData: AppStore.getAppData()
	};
};

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getAppState();
	  this.binder('appStoreDidChange');
	}

	componentDidMount() { Actions.setWindowDefaults(window); }
	componentWillMount() { AppStore.onAny(this.appStoreDidChange); }
	componentWillUnmount() { AppStore.offAny(this.appStoreDidChange); }
	appStoreDidChange() { this.setState(getAppState()); }
}
