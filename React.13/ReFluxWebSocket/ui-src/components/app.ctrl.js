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
		var data3 = this.state.Data3;
		data3 = JSON.stringify(data3, null, 2);
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 ReFlux with WebSocket<br/><br/>
				{data}<br/><br/>
				Data2: {data2}<br/><br/>
				Data3: {data3}<br/><br/>
			</div>
		);
	}
}

function getState() {
	return {
		Data: BasicStore.getData(),
		Data2: BasicStore.getData2(),
		Data3: BasicStore.getData3()
	};
};

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
