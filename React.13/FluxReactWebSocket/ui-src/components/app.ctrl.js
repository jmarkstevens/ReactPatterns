import React, {Component} from 'react';

import BasicStore from './../flux/Basic.Store';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var data = this.state.Data;
		data = JSON.stringify(data, null, 2);
		var data2 = this.state.Data2;
		data2 = JSON.stringify(data2, null, 2);
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 FluxReact with WebSocket<br/><br/>
				{data}<br/><br/>
				Data2: {data2}
			</div>
		);
	}
}

function getState() { return {Data: BasicStore.getData(), Data2: BasicStore.getData2()}; };

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getState();
	  this.binder('storeDidChange');
	}

	componentWillMount() { BasicStore.onAny(this.storeDidChange); }
	componentWillUnmount() { BasicStore.offAny(this.storeDidChange); }
	storeDidChange() { this.setState(getState()); }
}
