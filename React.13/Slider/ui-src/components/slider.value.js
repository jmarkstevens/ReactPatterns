import React, {Component} from 'react';

var sliderValueSty = {
	height: '100%',
	width: '24px'
}

var buttonSty = {
	backgroundColor: '#4C1F00',
	border: 'none',
	borderRadius: '24px',
	color: 'gold',
	height: '24px',
	marginTop: '0',
	padding: '0',
	width: '24px'
}

var defaultCountSty = {
	backgroundColor: '#33045B',
	height: '12px',
	marginRight: '5px',
	marginTop: '-18px',
	width: '100%'
}

var defaultIndexSty = {backgroundColor: '#874C08', height: '6px', borderTop: '3px solid #33045B', width: '1%'}

class SliderValueRender extends Component {
	render() {
		var value = this.props.lowValue;
		buttonSty.marginLeft = 'calc(' + value + '% - 10px)';
		buttonSty.fontSize = value > 99 ? '.7em' : '1em';
		var count = this.props.sliderObj.max;
		var index = value + 1;
		var percentage = Math.floor(index/count * 100);

		let countSty = this.props.countSty ? this.props.countSty : defaultCountSty;
		let indexSty = this.props.indexSty ? this.props.indexSty : defaultIndexSty;
		indexSty.width = percentage + '%';
		countSty.backgroundColor = this.props.countColor ? this.props.countColor : '#33045B';
		indexSty.backgroundColor = this.props.indexColor ? this.props.indexColor : '#874C08';
		indexSty.borderTopColor = countSty.backgroundColor;
		return (
			<div id='JSlider' style={{height: '100%', width: '100%'}}>
				<button id='buttonSty' style={buttonSty}>
					{value}
				</button>
				<div id='countSty' style={countSty}>
					<div id='indexSty' style={indexSty}></div>
				</div>
			</div>
		);
	}
}

export default class SliderValue extends SliderValueRender {}
