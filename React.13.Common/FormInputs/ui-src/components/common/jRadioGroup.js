import React, {Component} from 'react';

class JRadioGroupRender extends Component {
  binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  render() {
    return (
      <div onChange={this.props.onChange}>
        {this.props.children}
      </div>
    );
  }
}

export default class JRadioGroup extends JRadioGroupRender {
  constructor() { 
    super();
    this.state = {defaultValue: ''}; 
    this.binder('setRadioNames', 'getRadios', 'setCheckedRadio', 'getCheckedValue');
  }

  componentDidMount() { this.setRadioNames(); this.setCheckedRadio(); }
  componentDidUpdate() { this.setRadioNames(); this.setCheckedRadio(); }

  getCheckedValue() {
    var $radios = this.getRadios();

    for (var i = 0, length = $radios.length; i < length; i++) {
      if ($radios[i].checked) return $radios[i].value;
    }
    return null;
  }

  getRadios() { return React.findDOMNode(this).querySelectorAll('input[type="radio"]'); }

  setCheckedRadio() {
    var $radios = this.getRadios();
    var destinationValue = this.props.value != null ? this.props.value : this.state.defaultValue;

    for (var i = 0, length = $radios.length; i < length; i++) {
      var $radio = $radios[i];
      if ($radio.value == destinationValue) $radio.checked = true;
    }
  }

  setRadioNames() {
    var $radios = this.getRadios();
    
    for (var i = 0, length = $radios.length; i < length; i++) {
      $radios[i].setAttribute('name', this.props.name);
    }
  }
}
