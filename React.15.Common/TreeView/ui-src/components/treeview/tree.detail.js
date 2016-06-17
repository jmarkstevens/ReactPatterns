import React from 'react';

import JInput from '../common/jInput';

let treeDetailSty = {margin: '10px 10px'};
let inputLabelSty = {margin: '0 5px'};
let inputTextSty = {color: 'black', margin: '0 5px', width: '100%'};

let titleInput = {name: 'title', type: 'text', style: inputTextSty, focus: true};

let radioInput1 = {name: 'radioGroup', type: 'radio', radioValue: 'dev'};
let radioInput2 = {name: 'radioGroup', type: 'radio', radioValue: 'home'};
let radioInput3 = {name: 'radioGroup', type: 'radio', radioValue: 'sys'};

class TreeDetailRender extends React.Component {
   render() {
    titleInput.textValue = this.props.treeNode.title;

    let currentRadioGroupValue = this.props.treeNode.type;
    radioInput1.radioChecked = (currentRadioGroupValue == radioInput1.radioValue);
    radioInput2.radioChecked = (currentRadioGroupValue == radioInput2.radioValue);
    radioInput3.radioChecked = (currentRadioGroupValue == radioInput3.radioValue);
    return (
      <div id="treeDetail" style={treeDetailSty}>
        <JInput input={radioInput1} handleChange={this.handleValueChange} />&nbsp;Dev &nbsp;
        <JInput input={radioInput2} handleChange={this.handleValueChange} />&nbsp;Home &nbsp;
        <JInput input={radioInput3} handleChange={this.handleValueChange} />&nbsp;System &nbsp;
        <br/><br/>
        <JInput input={titleInput} handleChange={this.handleTitleChange} /><br/>
      </div>
    );
  }
}

export default class TreeDetail extends TreeDetailRender {
  state = {title: 'Hello!'};
  componentWillReceiveProps = (nextProps) => {
    if (this.state.title != nextProps.treeNode.title) this.setState({title: nextProps.treeNode.title})
  };
  handleTitleChange = (name, value) => { this.props.handleChange(name, value); };
  handleValueChange = (name, value) => { this.props.handleChange('type', value); };
}
