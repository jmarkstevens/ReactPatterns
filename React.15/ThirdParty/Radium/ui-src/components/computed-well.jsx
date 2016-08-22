import React from 'react';
import Radium from 'radium';

export default class ComputedWell extends React.Component {
  constructor() {
    super();
    this.state =  {dynamicBg: '#000'};
  }
  getStyles = () => {
    return {
      padding: '1em',
      borderRadius: 5,
      background: this.state.dynamicBg
    };
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({dynamicBg: this.inputRef.value});
  };
  render() {
    return (
      <form style={this.getStyles()} onSubmit={this.handleSubmit}>
        <input ref={(ref) => { this.inputRef = ref; }} type="text" placeholder="black" />

        <button>Change Background Color</button>
      </form>
    );
  }
}

ComputedWell = Radium(ComputedWell);
