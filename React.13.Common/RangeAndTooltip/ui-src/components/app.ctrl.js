import React, {Component} from 'react';

import Actions from '../flux/Actions';
import AppStore from '../flux/App.Store';
import FilterCtrl from './filter.ctrl';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var columnSty = {
	height: 'calc(100% - 10px)',
	overflow: 'auto',
	paddingLeft: '0',
	width: '330px'
}

var getState = function() { return {hoverValues: AppStore.getHoverValues(), filterList: AppStore.getFilterList()}; };

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 Range slider and Tooltip<br/><br/>
				<div id='columnSty' style={columnSty}>
					<FilterCtrl filterList={this.state.filterList} hoverValues={this.state.hoverValues} />
				</div>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getState();
	  this.binder('storeDidChange');
	}

	componentDidMount() {
		this.unsubscribe = AppStore.listen(this.storeDidChange);
		Actions.setFilterOptions();
	}
	componentWillUnmount() { this.unsubscribe(); }
	storeDidChange() { this.setState(getState()); }
}
