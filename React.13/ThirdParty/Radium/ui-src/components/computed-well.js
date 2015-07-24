import React, {Component} from 'react';
import Radium from 'radium';

class ComputedWellRender extends Component {
  binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  render() {
    return (
      <form style={this.getStyles()} onSubmit={this.handleSubmit}>
        <input ref='input' type='text' placeholder="black" />

        <button>Change Background Color</button>
      </form>
    );
  }
}
ComputedWellRender = Radium(ComputedWellRender);

export default class ComputedWell extends ComputedWellRender {
  constructor() { 
    super();
    this.state =  {dynamicBg: '#000'};
    this.binder('handleSubmit', 'getStyles'); 
  }
  getStyles() {
    return {
      padding: "1em",
      borderRadius: 5,
      background: this.state.dynamicBg
    };
  }
  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({dynamicBg: React.findDOMNode(this.refs.input).value});
  }
}

// this.refs.input.getDOMNode().value
