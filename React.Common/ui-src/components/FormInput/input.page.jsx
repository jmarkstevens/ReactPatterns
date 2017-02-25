import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {editRecord} from '../../store/input/input.Actions';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import JInput from '../common/FormInput/jInput';

let FormInputSty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px 0 0'
};

let checkBoxSty = {
  boxSizing: 'border-box',
  display: 'inline-block',
  lineHeight: '18px',
  marginLeft: '2px',
  outline: 'none',
  position: 'relative'
};

let textInput1 = {name: 'text', type: 'text', textValue: '', focus: true};
let checkInput1 = {name: 'checkbox', type: 'checkbox', style: checkBoxSty};
let colorInput = {name: 'color', type: 'color'};
let fileInput = {name: 'folder', type: 'file'};
let numberInput = {name: 'number', type: 'number', min: 0, max: 100};
let rangeInput = {name: 'range', type: 'range', min: 0, max: 100};

let radioInput1 = {name: 'radioGroup', type: 'radio', radioValue: 'set'};
let radioInput2 = {name: 'radioGroup', type: 'radio', radioValue: 'setkey'};
let radioInput3 = {name: 'radioGroup', type: 'radio', radioValue: 'key'};

const FormInput = (props) => {
  const handleValueChange = (name, value) => { props.editRecord(name, value); };

  if (props.hide) return null;
  let inputData = props.data;

  textInput1.textValue = inputData.text;
  checkInput1.checkedValue = inputData.checkbox;
  colorInput.colorValue = inputData.color;
  numberInput.numberValue = inputData.number ? inputData.number : '#ffffff';
  rangeInput.numberValue = inputData.range;
  fileInput.folderValue = inputData.folder;

  let currentRadioGroupValue = props.data.radioGroup;
  radioInput1.radioChecked = (currentRadioGroupValue == radioInput1.radioValue);
  radioInput2.radioChecked = (currentRadioGroupValue == radioInput2.radioValue);
  radioInput3.radioChecked = (currentRadioGroupValue == radioInput3.radioValue);

  let selected = inputData.checkbox ? 'true' : 'false';
  let radioValue = inputData.radioGroup;
  return (
    <div id="FormInput" className="contentPage" style={FormInputSty}>
      <br /><br />
      Text: <JInput input={textInput1} handleChange={handleValueChange} /><br /><br />
      Checkbox: <JInput input={checkInput1} handleChange={handleValueChange} /> &nbsp;&nbsp;Value: {selected}<br /><br />
      Color: <JInput input={colorInput} handleChange={handleValueChange} /> &nbsp;&nbsp;Value: {colorInput.colorValue}<br /><br />
      File: <JInput input={fileInput} handleChange={handleValueChange} /> &nbsp;&nbsp;Value: {fileInput.folderValue}<br /><br />
      Number: <JInput input={numberInput} handleChange={handleValueChange} /> &nbsp;&nbsp;Value: {numberInput.numberValue}<br /><br />
      Range:
      <div style={{width: '200px'}}>
        <JInput input={rangeInput} handleChange={handleValueChange} />
      </div>
       &nbsp;&nbsp;Value: {rangeInput.numberValue}<br /><br />

      Radio Input: &nbsp;
      <JInput input={radioInput1} handleChange={handleValueChange} />&nbsp;Set &nbsp;
      <JInput input={radioInput2} handleChange={handleValueChange} />&nbsp;Set/Key &nbsp;
      <JInput input={radioInput3} handleChange={handleValueChange} />&nbsp;Key &nbsp;
      &nbsp;&nbsp;Value: {radioValue}
      <AppNotes AppText={AppText.p1Text} />
    </div>
  );
};

function mapStateToProps(store) { return {data: store.inputState}; }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editRecord}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
