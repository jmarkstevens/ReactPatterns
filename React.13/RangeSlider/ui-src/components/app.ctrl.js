import React, {Component} from 'react';

import Actions from '../flux/Actions';
import AppStore from '../flux/App.Store';

import JRangeSlider from './common/JRangeSlider';
import JList from './common/jList';

var AppCtrlSty = {
	padding: '0 10px 0 0'
}
var startLineStyle = {
	color: '#1F1',
	marginLeft: '7px'
}
var overLineStyle = {
	color: '#F11',
	marginLeft: '7px'
}
var endLineStyle = {
	color: '#11F',
	marginLeft: '7px'
}

var sliderObj = {
	min: -5,
	max: 105,
	step: 1,
	low: -5,
	high: 105,
	name: 'sliderName'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var messages = this.state.appData.messages;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 RangeSlider
				<br/><br/>
				<div className='FlexBoxWrap'>
					<JRangeSlider sliderObj={this.state.sliderObj} handleChange={this.handleSliderChange}/>
					<JList data={messages}/>
				</div>
			</div>
		);
	}
}

var getInitialAppState = function() {
	return {
		appData: AppStore.getAppData(),
		sliderObj: sliderObj
	};
};

var getAppState = function() {
	// console.log('AppCtrl getAppState');
	return {
		appData: AppStore.getAppData()
	};
};

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getInitialAppState();
	  this.binder('appStoreDidChange', 'handleSliderChange');
	}

	componentWillMount() { AppStore.onAny(this.appStoreDidChange); }
	componentWillUnmount() { AppStore.offAny(this.appStoreDidChange); }
	appStoreDidChange() { this.setState(getAppState()); }
	handleSliderChange(name, field, value) {
		var newSliderObj = this.state.sliderObj;
		if (name == 'sliderName' && field == 'low') newSliderObj.low = Math.max(value, this.state.sliderObj.min);
		else if (name == 'sliderName' && field == 'high') newSliderObj.high = Math.min(value, this.state.sliderObj.max);
		this.setState({sliderObj: newSliderObj});
	}
}
