import React, {Component} from 'react';

import BasicStore from './../flux/Basic.Store';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var data = this.state.treeData;
		data = JSON.stringify(data, null, 2);
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 ReFlux and Electron<br/><br/>
				{data}
			</div>
		);
	}
}

function getState() { return {treeData: BasicStore.getData()}; };

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getState();
	  this.binder('storeDidChange');
	}

	componentDidMount() { this.unsubscribe = BasicStore.listen(this.storeDidChange); }
	componentWillUnmount() { this.unsubscribe(); }
	storeDidChange() { this.setState(getState()); }
}
