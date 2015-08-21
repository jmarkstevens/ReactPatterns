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

var textInput1 = {name: 'text', type: 'text', textValue: '', focus: true};
var checkInput1 = {name: 'checkbox', type: 'checkbox', style: checkBoxSty};
var colorInput = {name: 'color', type: 'color'};
var numberInput = {name: 'number', type: 'number', min: 0, max: 100};
var rangeInput = {name: 'range', type: 'range', min: 0, max: 100};

var radioInput1 = {name: 'radioGroup', type: 'radio', radioValue: 'set'};
var radioInput2 = {name: 'radioGroup', type: 'radio', radioValue: 'setkey'};
var radioInput3 = {name: 'radioGroup', type: 'radio', radioValue: 'key'};

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
 		var inputData = this.state.data;

		textInput1.textValue = inputData.text;
		checkInput1.checkedValue = inputData.checkbox;
		colorInput.colorValue = inputData.color;
		numberInput.numberValue = inputData.number;
		rangeInput.numberValue = inputData.range;

		radioInput1.radioChecked = inputData.radioGroup == 'set';
		radioInput2.radioChecked = inputData.radioGroup == 'setkey';
		radioInput3.radioChecked = inputData.radioGroup == 'key';

		var selected = inputData.checkbox ? 'true' : 'false';
		var radioGroupName1 = 'key1'; //must be distinct for each use of JRadioGroup
		var radioValue = inputData.radioGroup;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 Form input<br/><br/>
				Text: <JInput input={textInput1} handleChange={this.handleValueChange} /><br/><br/>
				Checkbox: <JInput input={checkInput1} handleChange={this.handleValueChange} /> Value: {selected}<br/><br/>
				Color: <JInput input={colorInput} handleChange={this.handleValueChange} /> Value: {colorInput.colorValue}<br/><br/>
				Number: <JInput input={numberInput} handleChange={this.handleValueChange} /> Value: {numberInput.numberValue}<br/><br/>
				Range: <JInput input={rangeInput} handleChange={this.handleValueChange} /> Value: {rangeInput.numberValue}<br/><br/>
	      <JRadioGroup name={radioGroupName1} value={radioValue} ref="keyGroup" onChange={this.handleRadioChange}>
	        <div>Radio Group:
	          <label id='inputLabel1' style={inputLabel}>
	            <input type="radio" value="set" /> Set
	          </label>
	          <label id='inputLabel2' style={inputLabel}>
	            <input type="radio" value="setkey"/> Set/Key
	          </label>
	          <label id='inputLabel3' style={inputLabel}>
	            <input type="radio" value="key"/> Key
	          </label>
	        </div>
	      </JRadioGroup><br/><br/>

				Radio Input: &nbsp;
				<JInput input={radioInput1} handleChange={this.handleValueChange} /> Set &nbsp;
				<JInput input={radioInput2} handleChange={this.handleValueChange} /> Set/Key &nbsp;
				<JInput input={radioInput3} handleChange={this.handleValueChange} /> Key &nbsp;
				Value: {radioValue}
			</div>
		);
	}
}

function getState() { return {data: BasicStore.getData()}; };

export default class AppCtrl extends AppCtrlRender {
	constructor() {
	  super();
		this.state = getState();
	  this.binder('storeDidChange', 'handleValueChange', 'handleRadioChange');
	}

	componentDidMount() {
		this.unsubscribe = BasicStore.listen(this.storeDidChange);
	}
	componentWillUnmount() { this.unsubscribe(); }
	storeDidChange() { this.setState(getState()); }
  handleRadioChange(event) { Actions.editRecord('type', event.target.value); }
	handleValueChange(name, value) { Actions.editRecord(name, value); }
}
