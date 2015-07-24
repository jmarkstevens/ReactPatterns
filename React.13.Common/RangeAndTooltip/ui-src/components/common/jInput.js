import React, {Component} from 'react';
import lodash from 'lodash';

class JInputRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var inputSty = {color: 'red'};
		if (lodash.has(this.props.input, 'style')) inputSty = this.props.input.style;
		var textValue = this.state.textValue;
		var colorValue = this.state.colorValue
		var booleanValue = this.state.booleanValue;
		var min = this.state.min;
		var max = this.state.max;
		var step = this.state.step;
		var numberValue = this.state.numberValue;
		var inputType = lodash.has(this.props.input, 'type') ? this.props.input.type : 'text';

		var returnChecked = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					checked={booleanValue}
					onChange={this.handleCheckedChange} />
			)

		var returnColor = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					value={colorValue}
					onChange={this.handleColorValueChange} />
			)

		var returnNumber = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					value={numberValue}
					min={min} max={max} step={step}
					onChange={this.handleNumberValueChange} />
			)

		var returnText = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					value={textValue}
					onChange={this.handleTextValueChange} />
			)
		var returnIt;
		switch (inputType) {
			case 'checkbox': returnIt = returnChecked; break;
			case 'color': returnIt = returnColor; break;
			case 'number': 
			case 'range': returnIt = returnNumber; break;
			default: returnIt = returnText; break;
		}

		return (returnIt);
	}
}

export default class JInput extends JInputRender {
	constructor() { 
	  super();
		this.state = {
			textValue: '#1A3212', 
			colorValue: '#1A3212', 
			booleanValue: false, 
			min: 0, max: 100, step: 1,
			numberValue: 0
		}; 
	  this.binder('handleCheckedChange', 'handleColorValueChange', 'handleNumberValueChange', 'handleTextValueChange');
	}

	componentWillReceiveProps(nextProps) {
		if (lodash.has(nextProps.input, 'textValue') && (this.state.textValue != nextProps.input.textValue)) 
			this.setState({textValue: nextProps.input.textValue});
		if (lodash.has(nextProps.input, 'focus') && nextProps.input.focus) React.findDOMNode(this.refs.inputRef).focus();
		if (lodash.has(nextProps.input, 'booleanValue') && (this.state.booleanValue != nextProps.input.booleanValue)) 
			this.setState({booleanValue: nextProps.input.booleanValue});
		if (lodash.has(nextProps.input, 'min') && (this.state.min != nextProps.input.min)) 
			this.setState({min: nextProps.input.min});
		if (lodash.has(nextProps.input, 'max') && (this.state.max != nextProps.input.max)) 
			this.setState({max: nextProps.input.max});
		if (lodash.has(nextProps.input, 'step') && (this.state.step != nextProps.input.step)) 
			this.setState({step: nextProps.input.step});
		if (lodash.has(nextProps.input, 'numberValue') && (this.state.numberValue != nextProps.input.numberValue)) 
			this.setState({numberValue: nextProps.input.numberValue});
	}
	handleCheckedChange(event) { 
		var newValue = event.target.checked;
		this.setState({booleanValue: newValue});
		this.props.handleChange(this.props.input.name, newValue); 
	}
	handleColorValueChange(event) { 
		var newValue = event.target.value;
		this.setState({colorValue: newValue});
		this.props.handleChange(this.props.input.name, newValue); 
	}
	handleNumberValueChange(event) { 
		var newValue = event.target.value;
		this.setState({numberValue: newValue});
		this.props.handleChange(this.props.input.name, newValue); 
	}
	handleTextValueChange(event) { 
		var newValue = event.target.value;
		this.setState({textValue: newValue});
		this.props.handleChange(this.props.input.name, newValue); 
	}
}



