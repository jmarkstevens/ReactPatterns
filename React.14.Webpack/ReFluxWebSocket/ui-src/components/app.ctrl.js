import React from 'react';

import BasicStore from './../flux/Basic.Store';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

const getState = () => {
	return {
		Data1: BasicStore.getData1(),
		Data2: BasicStore.getData2(),
		Data3: BasicStore.getData3()
	};
};

class AppCtrlRender extends React.Component {
 	render() {
		let data1 = JSON.stringify(this.state.Data1, null, 2);
		let data2 = JSON.stringify(this.state.Data2, null, 2);
		let data3 = JSON.stringify(this.state.Data3, null, 2);
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 ReFlux with WebSocket<br/><br/>
				Data1: {data1}<br/><br/>
				Data2: {data2}<br/><br/>
				Data3: {data3}<br/><br/>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
		super();
		this.state = getState();
	}

	componentDidMount() { this.unsubscribe = BasicStore.listen(this.storeDidChange.bind(this)); }
	componentWillUnmount() { this.unsubscribe(); }
	storeDidChange(id) {
		switch (id) {
			case 'data1': this.setState({Data1: BasicStore.getData1()}); console.log('data1'); break;
			case 'data2': this.setState({Data2: BasicStore.getData2()}); console.log('data2'); break;
			case 'data3': this.setState({Data3: BasicStore.getData3()}); console.log('data3'); break;
			default: this.setState(getState());
		}
	}
}
