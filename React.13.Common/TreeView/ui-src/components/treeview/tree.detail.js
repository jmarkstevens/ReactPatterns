import React, {Component} from 'react';

import JInput from '../common/jInput';
import JRadioGroup from '../common/jRadioGroup';

var treeDetailSty = {margin: '10px 10px'};
var inputLabelSty = {margin: '0 5px'};
var inputTextSty = {color: 'black', margin: '0 5px', width: '100%'};

var titleInput = {name: 'title', type: 'text', style: inputTextSty, focus: true};

class TreeDetailRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		titleInput.textValue = this.props.treeNode.title;
		var name = this.props.name;
		var type = this.props.treeNode.type;
		return (
			<div id="treeDetail" style={treeDetailSty}>
				<JRadioGroup
					name={name}
					value={type}
					ref="keyGroup"
					onChange={this.handleTypeChange}
				>
					<div>
						<label id='inputLabel1' style={inputLabelSty}>
							<input type="radio" value="dev" /> Dev
						</label>
						<label id='inputLabel2' style={inputLabelSty}>
							<input type="radio" value="home"/> Home
						</label>
						<label id='inputLabel3' style={inputLabelSty}>
							<input type="radio" value="sys"/> System
						</label>
					</div>
				</JRadioGroup><br/>
				<JInput input={titleInput} handleChange={this.handleTitleChange} /><br/>
			</div>
		);
	}
}

export default class TreeDetail extends TreeDetailRender {
	constructor() {
	  super();
		this.state = {title: 'Hello!'};
	  this.binder('handleTitleChange', 'handleTypeChange');
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.title != nextProps.treeNode.title) this.setState({title: nextProps.treeNode.title})
	}
	handleTypeChange(event) { this.props.handleChange('type', event.target.value); }
	handleTitleChange(name, value) { this.props.handleChange(name, value); }
}
