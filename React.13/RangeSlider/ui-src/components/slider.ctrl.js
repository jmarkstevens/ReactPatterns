import React, {Component} from 'react';

import SliderDnd from './slider.dnd';
import SliderValue from './slider.value';

var SliderCtrlSty = {
	height: '24px',
	padding: '0 10px',
	width: '500px'
}

class SliderCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var lowValue = this.props.sliderObj.low;
		var highValue = this.props.sliderObj.high;
		return (
			<div id='SliderCtrlSty' style={SliderCtrlSty}>
				<SliderValue sliderObj={this.props.sliderObj} lowValue={lowValue} highValue={highValue} />
				<SliderDnd
					sliderObj={this.props.sliderObj}
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
		this.binder('sliderChange', 'sliderStartChange');
	}
	sliderStartChange(index) {
		this.isLowValue = (Math.abs(this.props.sliderObj.low - index) < 5);
		var value = this.isLowValue ? this.props.sliderObj.low : this.props.sliderObj.high;
		this.index = value - index;
	}
	sliderChange(value) {
		var newValue = value - this.index;
		if (this.isLowValue) this.props.handleChange(this.props.sliderObj.name, 'low', newValue);
		else this.props.handleChange(this.props.sliderObj.name, 'high', newValue);
	}
}
