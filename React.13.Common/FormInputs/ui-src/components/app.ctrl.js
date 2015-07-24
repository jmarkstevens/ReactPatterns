import React, {Component} from 'react';

import Actions from './../flux/Actions';
import JInput from './common/jInput';
import JRadioGroup from './common/jRadioGroup';

import BasicStore from './../flux/Basic.Store';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var checkBoxSty = {
	boxSizing: 'border-box',
	display: 'inline-block',
	lineHeight: '18px',
	marginLeft: '2px',
	outline: 'none',
	position: 'relative'
};

var radioSty = {color: "blue"}

var input3Sty = {color: 'green'};

var inputLabel = {margin: '0 5px'};

var textInput1 = {name: 'title', type: 'text', textValue: '', focus: true};
var textInput2 = {name: 'nodeid', type: 'text', textValue: 'textInput2', focus: false};
var checkInput1 = {name: 'selected', type: 'checkbox', booleanValue: true, style: checkBoxSty};
var colorInput = {name: 'color', type: 'color'};
var numberInput = {name: 'number', type: 'number', min: 0, max: 100};
var rangeInput = {name: 'range', type: 'range', min: 0, max: 100};

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
 		var inputData = this.state.data;
		textInput1.textValue = inputData.title;
		textInput2.textValue = inputData.nodeid;

		checkInput1.booleanValue = inputData.selected;
		var selected = inputData.selected ? 'selected=true' : 'selected=false';

		colorInput.colorValue = this.state.color;
		numberInput.numberValue = this.state.number;
		rangeInput.numberValue = this.state.range;
		var radioGroupName1 = 'key1'; //must be distinct for each use of JRadioGroup
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				<JInput input={textInput1} handleChange={this.handleValueChange} /><br/>
				<JInput input={textInput2} handleChange={this.handleValueChange} /><br/>
				<JInput input={checkInput1} handleChange={this.handleValueChange} /> {selected}<br/><br/>
	      <JRadioGroup name={radioGroupName1} value={inputData.type} ref="keyGroup" onChange={this.handleRadioChange}>
	        <div>
	          <label id='inputLabel1' style={inputLabel}>
	            <input type="radio" value="set" style={input3Sty} /> Set 
	          </label>
	          <label id='inputLabel2' style={inputLabel}>
	            <input type="radio" value="setkey"/> Set/Key 
	          </label>
	          <label id='inputLabel3' style={inputLabel}>
	            <input type="radio" value="key"/> Key 
	          </label>
	        </div>
	      </JRadioGroup><br/><br/>

				<JInput input={colorInput} handleChange={this.handleColorChange} /> color picker value: {colorInput.colorValue}<br/><br/>
				<JInput input={numberInput} handleChange={this.handleNumberChange} /> number value: {numberInput.numberValue}<br/><br/>
				<JInput input={rangeInput} handleChange={this.handleRangeChange} /> range value: {rangeInput.numberValue}<br/><br/>

			</div>
		);
	}
}

function getState() { return {data: BasicStore.getData()}; };

export default class AppCtrl extends AppCtrlRender {
	constructor() { 
	  super();
		this.state = {
			data: [{title: 'title', type: 'type', selected: 'selected'}], 
			color: '#1A3212', number: 10, range: 20
		}; 
	  this.binder('storeDidChange', 'handleValueChange', 'handleRadioChange', 'handleColorChange', 'handleNumberChange', 'handleRangeChange');
	}

	componentDidMount() { 
		this.unsubscribe = BasicStore.listen(this.storeDidChange); 
	}
	componentWillUnmount() { this.unsubscribe(); }
	storeDidChange() { this.setState(getState()); }
  handleRadioChange(event) { Actions.editRecord('type', event.target.value); }
	handleValueChange(name, value) { Actions.editRecord(name, value); }
	handleColorChange(name, value) { this.setState({color: value}); }
	handleNumberChange(name, value) { this.setState({number: value}); }
	handleRangeChange(name, value) { this.setState({range: value}); }
}

