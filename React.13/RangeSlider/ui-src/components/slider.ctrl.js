import React, {Component} from 'react';

import SliderDnd from './slider.dnd';
import SliderValue from './slider.value';

var SliderCtrlSty = {
	height: '24px',
	padding: '0 10px',
	width: '500px'
}

var sliderObj = {
	min: 0,
	max: 100,
	step: 1
}

class SliderCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var lowValue = this.state.lowValue;
		var highValue = this.state.highValue;
		return (
			<div id='SliderCtrlSty' style={SliderCtrlSty}>
				<SliderValue sliderObj={sliderObj} lowValue={lowValue} highValue={highValue} />
				<SliderDnd
					sliderObj={sliderObj}
					sliderChange={this.sliderChange}
					sliderStartChange={this.sliderStartChange}
					heightAdjust={SliderCtrlSty.height}
					/>
			</div>
		);
	}
}

export default class SliderCtrl extends SliderCtrlRender {
	constructor() {
	  super();
		this.index = 0;
		this.isLowValue = true;
		this.state = {highValue: 100, lowValue: 1};
		this.binder('sliderChange', 'sliderStartChange');
	}
	sliderStartChange(index) {
		this.isLowValue = (Math.abs(this.state.lowValue - index) < 5);
		var value = this.isLowValue ? this.state.lowValue : this.state.highValue;
		this.index = value - index;
	}
	sliderChange(value) {
		var index = this.index;
		if (this.isLowValue) this.setState({lowValue: value - index});
		else this.setState({highValue: value - index});
	}
}
