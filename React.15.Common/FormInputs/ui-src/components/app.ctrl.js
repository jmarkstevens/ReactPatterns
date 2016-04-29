import React from 'react';

import Actions from './../flux/Actions';
import JInput from './common/jInput';

import BasicStore from './../flux/Basic.Store';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

let checkBoxSty = {
  boxSizing: 'border-box',
  display: 'inline-block',
  lineHeight: '18px',
  marginLeft: '2px',
  outline: 'none',
  position: 'relative'
};

let radioSty = {color: "blue"}

let input3Sty = {color: 'green'};

let inputLabel = {margin: '0 5px'};

let textInput1 = {name: 'text', type: 'text', textValue: '', focus: true};
let checkInput1 = {name: 'checkbox', type: 'checkbox', style: checkBoxSty};
let colorInput = {name: 'color', type: 'color'};
let fileInput = {name: 'folder', type: 'file'};
let numberInput = {name: 'number', type: 'number', min: 0, max: 100};
let rangeInput = {name: 'range', type: 'range', min: 0, max: 100};

let radioInput1 = {name: 'radioGroup', type: 'radio', radioValue: 'set'};
let radioInput2 = {name: 'radioGroup', type: 'radio', radioValue: 'setkey'};
let radioInput3 = {name: 'radioGroup', type: 'radio', radioValue: 'key'};

class AppCtrlRender extends React.Component {
   render() {
     let inputData = this.state.data;

    textInput1.textValue = inputData.text;
    checkInput1.checkedValue = inputData.checkbox;
    colorInput.colorValue = inputData.color;
    numberInput.numberValue = inputData.number;
    rangeInput.numberValue = inputData.range;
    fileInput.folderValue = inputData.folder;

    let currentRadioGroupValue = this.state.data.radioGroup;
    radioInput1.radioChecked = (currentRadioGroupValue == radioInput1.radioValue);
    radioInput2.radioChecked = (currentRadioGroupValue == radioInput2.radioValue);
    radioInput3.radioChecked = (currentRadioGroupValue == radioInput3.radioValue);

    let selected = inputData.checkbox ? 'true' : 'false';
    let radioGroupName1 = 'key1'; //must be distinct for each use of JRadioGroup
    let radioValue = inputData.radioGroup;
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 15 Form input<br/><br/>
        Text: <JInput input={textInput1} handleChange={this.handleValueChange} /><br/><br/>
        Checkbox: <JInput input={checkInput1} handleChange={this.handleValueChange} /> Value: {selected}<br/><br/>
        Color: <JInput input={colorInput} handleChange={this.handleValueChange} /> Value: {colorInput.colorValue}<br/><br/>
        File: <JInput input={fileInput} handleChange={this.handleValueChange} /> Value: {fileInput.folderValue}<br/><br/>
        Number: <JInput input={numberInput} handleChange={this.handleValueChange} /> Value: {numberInput.numberValue}<br/><br/>
        Range: <JInput input={rangeInput} handleChange={this.handleValueChange} /> Value: {rangeInput.numberValue}<br/><br/>

        Radio Input: &nbsp;
        <JInput input={radioInput1} handleChange={this.handleValueChange} />&nbsp;Set &nbsp;
        <JInput input={radioInput2} handleChange={this.handleValueChange} />&nbsp;Set/Key &nbsp;
        <JInput input={radioInput3} handleChange={this.handleValueChange} />&nbsp;Key &nbsp;
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
  }

  componentDidMount() { this.unsubscribe = BasicStore.listen(this.storeDidChange); };
  componentWillUnmount() { this.unsubscribe(); };

  storeDidChange = () => { this.setState(getState()); };
  handleValueChange = (name, value) => { Actions.editRecord(name, value); };
}
