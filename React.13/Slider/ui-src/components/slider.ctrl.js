import React, {Component} from 'react';

import SliderDnd from './slider.dnd';
import SliderValue from './slider.value';

var SliderCtrlSty = {
	height: '24px',
	margin: '0 10px',
	width: '500px'
}

var sliderObj = {
	min: 1,
	max: 101,
	step: 1
}

class SliderCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var lowValue = this.state.lowValue;
		return (
			<div id='SliderCtrlSty' style={SliderCtrlSty}>
				<SliderValue sliderObj={sliderObj} lowValue={lowValue} />
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
		this.lowIndex = 0;
		this.state = {startIndex: 0, lowValue: 0};
		this.binder('sliderChange', 'sliderStartChange');
	}
	sliderStartChange(index) {
		var value = this.state.lowValue;
		this.lowIndex = value - index;
		// this.setState({startIndex: newIndex});
	}
	sliderChange(value) {
		var index = this.lowIndex;
		this.setState({lowValue: value - index});
	}
}
