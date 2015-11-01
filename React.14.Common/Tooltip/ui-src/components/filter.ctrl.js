import React from 'react';

import Actions from '../flux/Actions';
import JTooltip from './common/jTooltip';
import JDropSelect from './common/jDropSelect';
import JRangeSlider from './common/jRangeSlider';
import JInput from './common/jInput';

let applyBtn = { buttonid: "apply", text: "Apply", style: 'Btn24' };
let clearBtn = { buttonid: "clear", text: "Clear", style: 'Btn24' };

let filterData = [];

function setData(vr) {
	filterData = [
		{name: 'lowtemp', type: 'range', title:'Your Low Temp', place: 'bottom',
			rtype:'single', rmin: -1, rmax: 34, size: 1.2,
			tip: vr.props.hoverValues.LowTemp, item: vr.props.filterList.lowtemp},
		{name: 'leaftype', type: 'drop', title:'Leaf type', place: 'bottom',
			tip: vr.props.hoverValues.LeafType, item: vr.props.filterList.leaftype},
		{name: 'height', type: 'range', title:'Height range', place: 'bottom',
			rtype: 'double', rmin: 1, rmax: 85, size: 1.3,
			tip: vr.props.hoverValues.Height, item: vr.props.filterList.height},
		{name: 'width', type: 'range', title:'Width range', place: 'bottom',
			rtype: 'double', rmin: 1, rmax: 30, size: 1.4,
			tip: vr.props.hoverValues.Width, item: vr.props.filterList.width},
		{name: 'trunktype', type: 'drop', title:'Single or multi trunk', place: 'right',
			tip: vr.props.hoverValues.TrunkType, item: vr.props.filterList.trunktype},
		{name: 'sunexposure', type: 'drop', title:'Sun exposure', place: 'right',
			tip: vr.props.hoverValues.SunExposure, item: vr.props.filterList.sunexposure},
		{name: 'watertolerance', type: 'drop', title:'Water preference', place: 'right',
			tip: vr.props.hoverValues.WaterTolerance, item: vr.props.filterList.watertolerance},
		{name: 'wettolerant', type: 'check', title:'Wet tolerant', place: 'top',
			tip: vr.props.hoverValues.BogTolerant, item: vr.props.filterList.wettolerant},
		{name: 'droughttolerant', type: 'check', title:'Drought tolerant', place: 'top',
			tip: vr.props.hoverValues.DraughtTolerant, item: vr.props.filterList.droughttolerant},
		{name: 'growthspeed', type: 'drop', title:'Growth speed', place: 'top',
			tip: vr.props.hoverValues.GrowthSpeed, item: vr.props.filterList.growthspeed},
		{name: 'dryairtolerance', type: 'drop', title:'Dry air tolerance', place: 'top',
			tip: vr.props.hoverValues.DryAirTolerance, item: vr.props.filterList.dryairtolerance}
	];
}

let FilterSty = {
	backgroundColor: '#e1ded5',
	color: 'black',
	lineHeight: '18px',
	maxWidth: '330px',
	minWidth: '300px',
	overflow: 'auto',
	padding: '15px',
	zIndex: '1'
};

let checkBoxSty = {
	boxSizing: 'border-box',
	display: 'inline-block',
	lineHeight: '18px',
	marginLeft: '2px',
	marginTop: '2px',
	outline: 'none',
	position: 'relative'
};

let titleDivSty = { display: 'inline-block', lineHeight: '18px', position: 'relative' };

let FilterMapSty = {
	marginBottom: '20px',
	width: '100%'
};

let titleSty = {
	background: 'transparent',
	boxSizing: 'border-box',
	cursor: 'default',
	height: '18px',
	lineHeight: '18px',
	overflow: 'hidden',
	outline: 'none',
	position: 'relative',
	textAlign: 'left',
	transition: 'all 200ms ease',
	width: '100%'
};

let toolTipSty = {display: 'inline-block', zIndex: '100'};
let rangeDivSty = {width: '100%'};
let sliderDivSty = {margin: '0 10px 0 0', width: '100%'};
let isDesktop = true;

function filterMap(item, index) {
	let adjust = { left: 0, top: 0 };

	let tooltip = <div id='toolTipSty' style={toolTipSty}><JTooltip data={item.tip} adjust={adjust} place={item.place} /></div>;
	let dataline = '';
	if (item.type == 'range') {
		let itemValue = '';
		let sliderObj = {
			min: item.rmin,
			max: item.rmax,
			step: 1,
			name: item.name,
			size: item.size
		}
		if (item.rtype == 'single') {
			itemValue = item.item.value;
			sliderObj.isSingle = true;
			sliderObj.low = item.rmin;
			sliderObj.high = item.item.value;
		}
		else {
			itemValue = item.item.value.low + '-' + item.item.value.high;
			sliderObj.low = item.item.value.low;
			sliderObj.high = item.item.value.high;
		}
		dataline = (
				<div id='rangeDivSty' style={rangeDivSty}>
					<div id='titleLineSty' className='FlexBox'>
						{tooltip}
						<div id='titleDivSty' style={titleDivSty}>
							<div id="titleSty" style={titleSty}>
								{item.title}: {itemValue}
							</div>
						</div>
					</div>
					<div id='sliderDivSty' style={sliderDivSty}>
						<JRangeSlider sliderObj={sliderObj} handleChange={this.onRangeSelect} isDesktop={isDesktop} />
					</div>
				</div>
		);
	}
	else if (item.type == 'check') {
		let checkInput = {name: item.name, type: 'checkbox', checkedValue: item.item.value, style: checkBoxSty};
		dataline = (
			<div id='titleLineSty' className='FlexBox'>
				{tooltip}
				<div id='titleDivSty' style={titleDivSty}>
					<div id="titleSty" style={titleSty}>
						{item.title}:
					</div>
				</div>
				<JInput input={checkInput} handleChange={this.onCheckSelect} />
			</div>
		);
	}
	else if (item.type == 'drop') {
		let options = item.item.options;
		let defaultOption = options[0];
		dataline = (
			<div id='titleLineSty' className='FlexBox'>
				{tooltip}
				<div id='titleDivSty' style={titleDivSty}>
					<div id="titleSty" style={titleSty}>
						{item.title}: &nbsp;
					</div>
				</div>
				<JDropSelect options={options} itemName={item.name} onChange={this.onDropSelect} defaultSelected={defaultOption} />
			</div>
		);
	}
	return <div id='FilterMapSty' key={index} style={FilterMapSty}>{dataline}</div>;
}

class FilterCtrlRender extends React.Component {
	render() {
		isDesktop = true;
		let vr = this;
		setData(vr);
		let children = filterData.map(filterMap, vr);
		return (
			<div id='FilterSty' style={FilterSty}>
				{children}
				<br/>
				<br/>
			</div>
		);
	}
}

export default class FilterCtrl extends FilterCtrlRender {
	onCheckSelect(itemName, value) {
		// window.alert('onCheckSelect name: ' + itemName + ' - value: ' + value);
		Actions.changeFilterValue(itemName, value);
	}
	onDropSelect(itemName, option) {
		// window.alert('onDropSelect name: ' + itemName + ' - value: ' + option.value);
		Actions.changeFilterValue(itemName, option.value);
	}
	onRangeSelect(name, field, value) {
		let nameField = name + field;
		Actions.changeFilterValue(nameField, value);
	}
}
