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
		var defaultOption = this.state.option.value ? this.state.option : lodash.findWhere(options, {value: 'Any'});
		var selectedName = this.state.name;
		var selectedLabel = this.state.option.label;
		var selectedValue = this.state.option.value;
		return (
			<div>
				<div id='DropDownSelectSty' style={DropDownSelectSty}>
						<JDropSelect options={options} itemName={name} onChange={this.onDropSelect} defaultSelected={defaultOption} />
				</div>
				Item name: {selectedName}<br/>
				Selected label: {selectedLabel}<br/>
				Selected value: {selectedValue}
			</div>
		)
	}
}

export default class DropDownSelect extends DropDownSelectRender {
	constructor() {
	  super();
		this.state = {name: '', option: {}};
	  this.binder('onDropSelect');
	}
	onDropSelect(name, option) { this.setState({name: name, option: option}); }
}
