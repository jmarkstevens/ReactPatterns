import React, {Component} from 'react';

class JInputRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var inputSty = {color: 'red'};
		if (this.props.input.style) inputSty = this.props.input.style;
		var textValue = this.state.textValue;
		var colorValue = this.state.colorValue
		var booleanValue = this.state.booleanValue;
		var min = this.state.min;
		var max = this.state.max;
		var step = this.state.step;
		var numberValue = this.state.numberValue;
		var inputType = this.props.input.type ? this.props.input.type : 'text';

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
			textValue: '',
			colorValue: '#1A3212',
			booleanValue: false,
			min: 0, max: 100, step: 1,
			numberValue: 0
		};
	  this.binder('handleCheckedChange', 'handleColorValueChange', 'handleNumberValueChange', 'handleTextValueChange');
	}

	componentDidMount() {
		if (this.props.input.textValue) this.setState({textValue: this.props.input.textValue});
		if (this.props.input.focus) React.findDOMNode(this.refs.inputRef).focus();
		if (this.props.input.booleanValue) this.setState({booleanValue: this.props.input.booleanValue});
		if (this.props.input.min) this.setState({min: this.props.input.min});
		if (this.props.input.max) this.setState({max: this.props.input.max});
		if (this.props.input.step) this.setState({step: this.props.input.step});
		if (this.props.input.numberValue) this.setState({numberValue: this.props.input.numberValue});
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.input.textValue && (this.state.textValue != nextProps.input.textValue))
			{this.setState({textValue: nextProps.input.textValue});}
		if (nextProps.input.focus) React.findDOMNode(this.refs.inputRef).focus();
		if (nextProps.input.booleanValue && (this.state.booleanValue != nextProps.input.booleanValue))
			this.setState({booleanValue: nextProps.input.booleanValue});
		if (nextProps.input.min && (this.state.min != nextProps.input.min))
			this.setState({min: nextProps.input.min});
		if (nextProps.input.max && (this.state.max != nextProps.input.max))
			this.setState({max: nextProps.input.max});
		if (nextProps.input.step && (this.state.step != nextProps.input.step))
			this.setState({step: nextProps.input.step});
		if (nextProps.input.numberValue && (this.state.numberValue != nextProps.input.numberValue))
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
