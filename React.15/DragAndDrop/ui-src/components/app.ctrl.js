import React from 'react';

import Actions from '../flux/Actions';
import AppStore from '../flux/App.Store';

import DCtrl from './dnd.ctrl';
import JList from './common/jList';

let AppCtrlSty = {
	padding: '0 10px 0 0'
}
let startLineStyle = {
	color: '#1F1',
	marginLeft: '7px'
}
let overLineStyle = {
	color: '#F11',
	marginLeft: '7px'
}
let endLineStyle = {
	color: '#11F',
	marginLeft: '7px'
}

class AppCtrlRender extends React.Component {
	render() {
		let isMobile = this.state.appData.isMobile;
		let messages = this.state.appData.messages;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 15 Drag and Drop
				<br/><br/>
				<div className='FlexBoxWrap'>
					<DCtrl isMobile={isMobile}/>
					<div style={{marginLeft: '10px'}}>
						<span style={startLineStyle}>drag start</span><br/>
						<span style={overLineStyle}>drag over</span><br/>
						<span style={endLineStyle}>drag end</span><br/>
					</div>
					<JList data={messages}/>
				</div>
			</div>
		);
	}
}

let getAppState = function() {
	// console.log('AppCtrl getAppState');
	return {
		appData: AppStore.getAppData()
	};
};

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getAppState();
	}

	componentDidMount = () => {
		let navPlatform = window.navigator.platform;
		Actions.setWindowDefaults(navPlatform);
	};
	componentDidMount = () => { this.unsubscribe = AppStore.listen(this.storeDidChange); };
	componentWillUnmount = () => { this.unsubscribe(); };
	storeDidChange = () => { this.setState(getAppState()); };
}
