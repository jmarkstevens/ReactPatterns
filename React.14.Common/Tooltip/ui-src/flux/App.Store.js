import Reflux from 'reflux';

import Actions from './Actions';

let _appState = {currentPage: 'home'};
let _hoverValues = {};

let _filterList = {
	lowtemp: { value: 34, options: {}},
	leaftype: { value: '', options: [{label: 'Any', value: 'Any'}]},
	height: { value: {low: 1, high: 85}, options: {}},
	width: { value: {low: 1, high: 30}, options: {}},
	trunktype: { value: '', options: [{label: 'Any', value: 'Any'}]},
	sunexposure: { value: '', options: [{label: 'Any', value: 'Any'}]},
	watertolerance: { value: '', options: [{label: 'Any', value: 'Any'}]},
	wettolerant: { value: false, options: {}},
	droughttolerant: { value: false, options: {}},
	growthspeed: { value: '', options: [{label: 'Any', value: 'Any'}]},
	dryairtolerance: { value: '', options: [{label: 'Any', value: 'Any'}]}
};

function _setFilterValues() {
	_filterList.lowtemp.value = 34;
	_filterList.leaftype.value = _filterList.leaftype.options[0].value;
	_filterList.height.value.high = 85;
	_filterList.height.value.low = 1;
	_filterList.width.value.high = 30;
	_filterList.width.value.low = 1;
	_filterList.trunktype.value = _filterList.trunktype.options[0].value;
	_filterList.sunexposure.value = _filterList.sunexposure.options[0].value;
	_filterList.watertolerance.value = _filterList.watertolerance.options[0].value;
	_filterList.wettolerant.value = false;
	_filterList.droughttolerant.value = false;
	_filterList.growthspeed.value = _filterList.growthspeed.options[0].value;
	_filterList.dryairtolerance.value = _filterList.dryairtolerance.options[0].value;
	AppStore.trigger();
}

function _setFilterOptions() {
	_filterList.leaftype.options = [
		{label: 'Any', value: 'Any'},
		{label: 'Feather', value: 'fethr'},
		{label: 'Fan', value: 'fan'}
	];
	_filterList.trunktype.options = [
		{label: 'Any', value: 'Any'},
		{label: 'Single stem', value: 'single'},
		{label: 'Multi-trunk', value: 'multi'}
	];
	_filterList.sunexposure.options = [
		{label: 'Any', value: 'Any'},
		{label: 'Full', value: 'full'},
		{label: 'Partial', value: 'part'},
		{label: 'Shade', value: 'shade'}
	];
	_filterList.watertolerance.options = [
		{label: 'Any', value: 'Any'},
		{label: 'Very little', value: 'light'},
		{label: 'Little', value: 'little'},
		{label: 'Regular', value: 'reg'},
		{label: 'Extra', value: 'xtra'}
	];
	_filterList.growthspeed.options = [
		{label: 'Any', value: 'Any'},
		{label: 'Extremely slow', value: 'slow3'},
		{label: 'Very slow', value: 'slow2'},
		{label: 'Slow', value: 'slow1'},
		{label: 'Moderate', value: 'mod'},
		{label: 'Fast', value: 'fast1'},
		{label: 'Very fast', value: 'fast2'},
		{label: 'Extremely fast', value: 'fast3'}
	];
	_filterList.dryairtolerance.options = [
		{label: 'Any', value: 'Any'},
		{label: 'Very low', value: 'low2'},
		{label: 'Low', value: 'low1'},
		{label: 'Fair', value: 'fair'},
		{label: 'High', value: 'high1'},
		{label: 'Very high', value: 'high2'}
	];
	_setHoverValues();
}

function _setHoverValues() {
	_hoverValues.LowTemp = 'LowTemp';
	_hoverValues.LeafType = 'LeafType' + " <br> "
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like';
	_hoverValues.Height = 'Height';
	_hoverValues.Width = 'Width';
	_hoverValues.TrunkType = 'TrunkType';
	_hoverValues.SunExposure = 'SunExposure';
	_hoverValues.WaterTolerance = 'WaterTolerance';
	_hoverValues.BogTolerant = 'BogTolerant';
	_hoverValues.DraughtTolerant = 'DraughtTolerant';
	_hoverValues.GrowthSpeed = 'GrowthSpeed';
	_hoverValues.DryAirTolerance = 'DryAirTolerance' + " <br> "
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like'
	+ ' This is a bunch of text for the tool tip. Lets see what it displays like. Perhaps it will wrap the way we would like';

	_hoverValues.showPrev = 'show previous item';
	_hoverValues.ShowFullImage = 'display full window';
	_hoverValues.upTree = 'move to species/genus';
	_hoverValues.downTree = 'move to species/part';
	_hoverValues.ImagePageClick = 'show cultural information';
	_hoverValues.showNext = 'show next item';
	_hoverValues.ShowFullImageFalse = 'leave full window';
	_setFilterValues();
}

function _changeFilterValue(itemName, value) {
	switch (itemName) {
		case 'lowtemphigh': _filterList.lowtemp.value = value; break;
		case 'leaftype': _filterList.leaftype.value = value; break;
		case 'heightlow': _filterList.height.value.low = value; break;
		case 'heighthigh': _filterList.height.value.high = value; break;
		case 'widthlow': _filterList.width.value.low = value; break;
		case 'widthhigh': _filterList.width.value.high = value; break;
		case 'trunktype': _filterList.trunktype.value = value; break;
		case 'sunexposure': _filterList.sunexposure.value = value; break;
		case 'watertolerance': _filterList.watertolerance.value = value; break;
		case 'wettolerant': _filterList.wettolerant.value = value; break;
		case 'droughttolerant': _filterList.droughttolerant.value = value; break;
		case 'growthspeed': _filterList.growthspeed.value = value; break;
		case 'dryairtolerance': _filterList.dryairtolerance.value = value; break;
		case '': _filterList.itemName.value = value; break;
	}
	AppStore.trigger();
}

let AppStoreObject = {
	listenables: Actions,
	setFilterOptions: _setFilterOptions,
	changeFilterValue: _changeFilterValue,

	getHoverValues() { return _hoverValues; },
	getFilterList() { return _filterList; }
}
const AppStore = Reflux.createStore(AppStoreObject);
export default AppStore;
