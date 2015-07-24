import React, {Component} from 'react';
import lodash from 'lodash';

import Actions from '../flux/Actions';
import JTooltip from './common/jTooltip';
import JDropSelect from './common/jDropSelect';
import JRangeSlider from './common/jRangeSlider';
import JInput from './common/jInput';

var applyBtn = { buttonid: "apply", text: "Apply", style: 'Btn24' };
var clearBtn = { buttonid: "clear", text: "Clear", style: 'Btn24' };

var filterData = [];

function setData(vr) {
	filterData = [
		{name: 'lowtemp', type: 'range', title:'Your Low Temp', place: 'bottom',
			rtype:'single', rmin: '-1', rmax: '34',
			tip: vr.props.hoverValues.LowTemp, item: vr.props.filterList.lowtemp},
		{name: 'leaftype', type: 'drop', title:'Leaf type', place: 'bottom',
			tip: vr.props.hoverValues.LeafType, item: vr.props.filterList.leaftype},
		{name: 'height', type: 'range', title:'Height range', place: 'bottom',
			rtype: 'double', rmin: '1', rmax: '85',
			tip: vr.props.hoverValues.Height, item: vr.props.filterList.height},
		{name: 'width', type: 'range', title:'Width range', place: 'bottom',
			rtype: 'double', rmin: '1', rmax: '30',
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

var FilterSty = {
	backgroundColor: '#e1ded5',
	color: 'black',
	lineHeight: '18px',
	maxWidth: '330px',
	minWidth: '300px',
	overflow: 'auto',
	padding: '15px',
	zIndex: '1'
};

var checkBoxSty = {
	boxSizing: 'border-box',
	display: 'inline-block',
	lineHeight: '18px',
	marginLeft: '2px',
	marginTop: '2px',
	outline: 'none',
	position: 'relative'
};

var titleLineSty = {
	display: 'flex',
	flexDirection: 'row'
};

var titleDivSty = { display: 'inline-block', lineHeight: '18px', position: 'relative' };

var FilterMapSty = {
	marginBottom: '20px',
	width: '100%'
};

var titleSty = {
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

var toolTipSty = {display: 'inline-block', zIndex: '100'};
var rangeDivSty = {width: '100%'};
var isDesktop = true;

function filterMap(item, index) {
	var adjust = { left: 0, top: 0 };

	var tooltip = <div id='toolTipSty' style={toolTipSty}><JTooltip data={item.tip} adjust={adjust} place={item.place} /></div>;
	var dataline = '';
	if (item.type == 'range') {
		var range = [];
		var itemValue;
		if (item.rtype == 'single') {
			itemValue = item.item.value;
			range.push(-1);
			range.push(item.item.value);
		}
		else {
			itemValue = item.item.value.more + '-' + item.item.value.less;
			range.push(item.item.value.more);
			range.push(item.item.value.less);
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
					<JRangeSlider min={item.rmin} max={item.rmax} range={range} onAfterChange={this.onRangeSelect} itemName={item.name} isDesktop={isDesktop} />
				</div>
		);
	}
	else if (item.type == 'check') {
		var checkInput = {name: item.name, type: 'checkbox', booleanValue: item.item.value, style: checkBoxSty};
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
		var options = item.item.options;
		var defaultOption = lodash.findWhere(options, {value: item.item.value});
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

class FilterCtrlRender extends Component {
	render() {
		isDesktop = true;
		var vr = this;
		setData(vr);
		var children = filterData.map(filterMap, vr);
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
		window.alert('onCheckSelect name: ' + itemName + ' - value: ' + value);
		Actions.changeFilterValue(itemName, value); 
	}
	onDropSelect(itemName, value) { 
		window.alert('onDropSelect name: ' + itemName + ' - value: ' + value.value);
		Actions.changeFilterValue(itemName, value.value); 
	}
	onRangeSelect(itemName, value) { Actions.changeFilterValue(itemName, value); }
}

