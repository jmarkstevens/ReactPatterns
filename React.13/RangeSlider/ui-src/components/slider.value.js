import React, {Component} from 'react';

var sliderValueSty = {
	height: '100%',
	padding: '0 10px',
	width: '24px'
}

var lowButtonSty = {
	backgroundColor: '#4C1F00',
	border: 'none',
	borderRadius: '24px',
	color: 'gold',
	height: '24px',
	marginTop: '0',
	padding: '0',
	width: '24px'
}

var highButtonSty = {
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
	margin: '-18px 0 0 6px',
	width: 'calc(100% - 12px)'
}

var defaultIndexSty = {backgroundColor: '#874C08', height: '6px', borderTop: '3px solid #33045B', width: '1%'}

class SliderValueRender extends Component {
	render() {
		var lowValue = this.props.lowValue;
		var highValue = this.props.highValue;
		lowButtonSty.marginLeft = 'calc(' + lowValue + '% - 12px)';
		lowButtonSty.fontSize = lowValue > 99 ? '.7em' : '1em';
		var highMargin = highValue - lowValue;
		highButtonSty.marginLeft = 'calc(' + highMargin + '% - 36px)';
		// highButtonSty.marginRight = 'calc(' + highMargin + '% - 12px)';
		highButtonSty.fontSize = highValue > 99 ? '.7em' : '1em';
		var count = this.props.sliderObj.max - this.props.sliderObj.min;
		var index = highValue - lowValue;
		var percentage = Math.floor(index/count * 100);

		let countSty = this.props.countSty ? this.props.countSty : defaultCountSty;
		let indexSty = this.props.indexSty ? this.props.indexSty : defaultIndexSty;
		indexSty.width = percentage + '%';
		indexSty.marginLeft = lowButtonSty.marginLeft;
		countSty.backgroundColor = this.props.countColor ? this.props.countColor : '#33045B';
		indexSty.backgroundColor = this.props.indexColor ? this.props.indexColor : '#874C08';
		indexSty.borderTopColor = countSty.backgroundColor;
		return (
			<div id='JSlider' style={{height: '100%', width: '100%'}}>
				<div id='buttonDiv' className='FlexBox' style={{marginLeft: '-6px', width: 'calc(100% + 12px)'}}>
					<button id='lowButtonSty' style={lowButtonSty}>
						{lowValue}
					</button>
					<button id='highButtonSty' style={highButtonSty}>
						{highValue}
					</button>
				</div>
				<div id='countSty' style={countSty}>
					<div id='indexSty' style={indexSty}></div>
				</div>
			</div>
		);
	}
}

export default class SliderValue extends SliderValueRender {}
