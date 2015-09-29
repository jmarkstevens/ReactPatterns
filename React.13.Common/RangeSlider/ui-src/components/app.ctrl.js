import React, {Component} from 'react';

import Actions from '../flux/Actions';
import AppStore from '../flux/App.Store';

import JRangeSlider from './common/jRangeSlider';
import JList from './common/jList';

var AppCtrlSty = {
	padding: '0 10px 0 0'
}

var sliderObj1 = {
	min: 10,
	max: 90,
	step: 1,
	low: 10,
	high: 90,
	name: 'obj1'
}

var sliderObj2 = {
	min: -5,
	max: 35,
	step: 1,
	low: -5,
	high: 35,
	isSingle: true,
	name: 'obj2'
}

var sliderObj3 = {
	min: 10,
	max: 90,
	step: 1,
	low: 10,
	high: 90,
	name: 'obj3',
	size: 1.2
}

var sliderObj4 = {
	min: -5,
	max: 35,
	step: 1,
	low: -5,
	high: 35,
	isSingle: true,
	name: 'obj4',
	size: 1.3
}

var innerSty = {
	width: '100%'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var messages = this.state.appData.messages;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 RangeSlider
				<br/><br/>
				<div className='FlexBox JustAround'>
					<div style={innerSty}>
						<JRangeSlider sliderObj={this.state.sliderObj1} handleChange={this.handleSliderChange1} message={this.handleMessage}/>
					</div>
					<div style={innerSty}>
						<JRangeSlider sliderObj={this.state.sliderObj2} handleChange={this.handleSliderChange2} message={this.handleMessage}/>
					</div>
				</div>
				<br/><br/>
				<div className='FlexBox JustAround'>
					<div style={innerSty}>
						<JRangeSlider sliderObj={this.state.sliderObj3} handleChange={this.handleSliderChange3} message={this.handleMessage}/>
					</div>
					<div style={innerSty}>
						<JRangeSlider sliderObj={this.state.sliderObj4} handleChange={this.handleSliderChange4} message={this.handleMessage}/>
					</div>
				</div>
				<br/><br/>
				<div className='FlexBox JustBetween'>
					<JList data={messages}/>
				</div>
			</div>
		);
	}
}

var getInitialAppState = function() {
	return {
		appData: AppStore.getAppData(),
		sliderObj1: sliderObj1,
		sliderObj2: sliderObj2,
		sliderObj3: sliderObj3,
		sliderObj4: sliderObj4
	};
};

var getAppState = function() { return { appData: AppStore.getAppData() }; };

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getInitialAppState();
	  this.binder('appStoreDidChange', 'handleSliderChange1', 'handleSliderChange2', 'handleSliderChange3', 'handleSliderChange4', 'handleMessage');
	}

	componentDidMount() {
		var navPlatform = window.navigator.platform;
		Actions.setWindowDefaults(navPlatform);
	}
	componentWillMount() { AppStore.onAny(this.appStoreDidChange); }
	componentWillUnmount() { AppStore.offAny(this.appStoreDidChange); }
	appStoreDidChange() { this.setState(getAppState()); }
	handleSliderChange1(name, field, value) {
		var newSliderObj = this.state.sliderObj1;
		if (field == 'low') newSliderObj.low = value;
		else if (field == 'high') newSliderObj.high = value;
		this.setState({sliderObj1: newSliderObj});
	}
	handleSliderChange2(name, field, value) {
		var newSliderObj = this.state.sliderObj2;
		if (field == 'low') newSliderObj.low = value;
		else if (field == 'high') newSliderObj.high = value;
		this.setState({sliderObj2: newSliderObj});
	}
	handleSliderChange3(name, field, value) {
		var newSliderObj = this.state.sliderObj3;
		if (field == 'low') newSliderObj.low = value;
		else if (field == 'high') newSliderObj.high = value;
		this.setState({sliderObj3: newSliderObj});
	}
	handleSliderChange4(name, field, value) {
		var newSliderObj = this.state.sliderObj4;
		if (field == 'low') newSliderObj.low = value;
		else if (field == 'high') newSliderObj.high = value;
		this.setState({sliderObj4: newSliderObj});
	}
	handleMessage(message) { Actions.newMessage(message); }
}
