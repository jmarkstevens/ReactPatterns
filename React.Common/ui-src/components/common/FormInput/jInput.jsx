import React from 'react';

class JInput extends React.Component {
  state = {textValue: ''};

  componentDidMount = () => {
    if (this.props.input.textValue) this.setState({textValue: this.props.input.textValue});
    if (this.props.input.focus) this.inputRef.focus();
  };
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.input.textValue && (this.state.textValue != nextProps.input.textValue))
      {this.setState({textValue: nextProps.input.textValue});}
  };

  handleCheckedChange = (event) => { this.props.handleChange(this.props.input.name, event.target.checked); };
  handleTextValueChange = (event) => {
    let newValue = event.target.value;
    this.setState({textValue: newValue});
    this.props.handleChange(this.props.input.name, newValue);
  };
  handleValueChange = (event) => { this.props.handleChange(this.props.input.name, event.target.value); };
  handleFolderChange = (event) => { this.props.handleChange(this.props.input.name, event.target.value); };
  render() {
    let inputSty = this.props.input.style || {color: '#4d2c3d'};
    let inputType = this.props.input.type || 'text';
    let returnIt = '';


    switch (inputType) {
      case 'checkbox': {
        let checkedValue = (this.props.input.checkedValue != null) ? this.props.input.checkedValue : false;
        returnIt = (
          <input
            ref={(ref) => { this.inputRef = ref; }}
            type={inputType}
            style={inputSty}
            checked={checkedValue}
            onChange={this.handleCheckedChange}
          />
        );
        break;
      }
      case 'radio': {
        let radioValue = this.props.input.radioValue || '';
        let radioChecked = (this.props.input.radioChecked != null) ? this.props.input.radioChecked : false;
        returnIt = (
          <input
            ref={(ref) => { this.inputRef = ref; }}
            type={inputType}
            style={inputSty}
            checked={radioChecked}
            value={radioValue}
            onChange={this.handleValueChange}
          />
        );
        break;
      }
      case 'color': {
        let colorValue = this.props.input.colorValue || '#1A3212';
        returnIt = (
          <input
            type={inputType}
            ref={(ref) => { this.inputRef = ref; }}
            style={inputSty}
            value={colorValue}
            onChange={this.handleValueChange}
          />
        );
        break;
      }
      case 'number':
      case 'range': {
        let numberValue = this.props.input.numberValue || 0;
        let min = this.props.input.min || 0;
        let max = this.props.input.max || 100;
        let step = this.props.input.step || 1;
        returnIt = (
          <input
            type={inputType}
            ref={(ref) => { this.inputRef = ref; }}
            style={inputSty}
            value={numberValue}
            min={min} max={max} step={step}
            onChange={this.handleValueChange}
          />
        );
        break;
      }
      case 'file': {
        returnIt = (
          <input
            type={inputType}
            ref={(ref) => { this.inputRef = ref; }}
            style={inputSty}
            onChange={this.handleFolderChange}
            multiple
          />
        );
        break;
      }
      default: {
        let textValue = this.state.textValue;
        returnIt = (
          <input
            type={inputType}
            ref={(ref) => { this.inputRef = ref; }}
            style={inputSty}
            value={textValue}
            onChange={this.handleTextValueChange}
          />
        );
        break;
      }
    }

    return (returnIt);
  }
}

JInput.propTypes = {
  input: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

// const input.object = {
//   name: 'string - id returned to handleValueChange', Required
//   type: 'string - text(default), checkbox, color, file, number, range and radio',
//   focus: 'bool - focus on this ref',
//   style: 'object - replace default style',
//   min: 'int - number and range type min value',
//   max: 'int - number and range type max value',
//   step: 'int - number and range type step value',
//   radioValue: 'string - radio type label/value',
//   radioChecked: 'bool - radio type selected'
// };

module.exports = JInput;
