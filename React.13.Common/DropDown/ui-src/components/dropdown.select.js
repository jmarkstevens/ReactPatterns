import React, {Component} from 'react';
import lodash from 'lodash';

import JDropSelect from './common/jDropSelect';

var DropDownSelectSty = {
	fontSize: '1.2em',
	padding: '2px 2px 0 0',
	textAlign: 'right'
};

var options = [
	{label: 'Any', value: 'Any'},
	{label: 'Extremely slow', value: 'slow3'},
	{label: 'Very slow', value: 'slow2'},
	{label: 'Slow', value: 'slow1'},
	{label: 'Moderate', value: 'mod'},
	{label: 'Fast', value: 'fast1'},
	{label: 'Very fast', value: 'fast2'},
	{label: 'Extremely fast', value: 'fast3'}
];

class DropDownSelectRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var name = 'growthspeed';
		var defaultOption = lodash.findWhere(options, {value: 'Any'});
		return (
			<div id='DropDownSelectSty' style={DropDownSelectSty}>
					<JDropSelect options={options} itemName={name} onChange={this.onDropSelect} defaultSelected={defaultOption} />
			</div>
		)
	}
}

export default class DropDownSelect extends DropDownSelectRender {
	constructor() { 
	  super();
	  this.binder('onDropSelect');
	}
	onDropSelect(name, option) { window.alert('Item Name: ' + name + ' -  Label: ' + option.label + ' - Value: ' + option.value); }
}
