import React, {Component} from 'react';

class JInputRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var inputSty = this.props.input.style ? this.props.input.style : {color: 'red'};
		var textValue = this.state.textValue;
		var colorValue = this.props.input.colorValue ? this.props.input.colorValue : '#1A3212';
		var checkedValue = (this.props.input.checkedValue != null) ? this.props.input.checkedValue : false;
		var numberValue = this.props.input.numberValue ? this.props.input.numberValue : 0;
		var radioValue = this.props.input.radioValue ? this.props.input.radioValue : '';
		var radioChecked = (this.props.input.radioChecked != null) ? this.props.input.radioChecked : false;
		var min = this.props.input.min ? this.props.input.min : 0;
		var max = this.props.input.max ? this.props.input.max : 100;
		var step = this.props.input.step ? this.props.input.step : 1;
		var inputType = this.props.input.type ? this.props.input.type : 'text';

		var returnRadio = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					checked={radioChecked}
					value={radioValue}
					onChange={this.handleValueChange} />
			)

		var returnChecked = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					checked={checkedValue}
					onChange={this.handleCheckedChange} />
			)

		var returnColor = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					value={colorValue}
					onChange={this.handleValueChange} />
			)

		var returnNumber = (
				<input
					type={inputType}
					ref='inputRef'
					style={inputSty}
					value={numberValue}
					min={min} max={max} step={step}
					onChange={this.handleValueChange} />
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
			case 'radio': returnIt = returnRadio; break;
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
		this.state = {textValue: ''};
	  this.binder('handleCheckedChange', 'handleTextValueChange', 'handleValueChange');
	}

	componentDidMount() {
		if (this.props.input.textValue) this.setState({textValue: this.props.input.textValue});
		if (this.props.input.focus) React.findDOMNode(this.refs.inputRef).focus();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.input.textValue && (this.state.textValue != nextProps.input.textValue))
			{this.setState({textValue: nextProps.input.textValue});}
	}
	handleCheckedChange(event) { this.props.handleChange(this.props.input.name, event.target.checked); }
	handleTextValueChange(event) {
		var newValue = event.target.value;
		this.setState({textValue: newValue});
		this.props.handleChange(this.props.input.name, newValue);
	}
	handleValueChange(event) { this.props.handleChange(this.props.input.name, event.target.value); }
}
