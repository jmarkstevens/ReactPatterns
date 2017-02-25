import React from 'react';
import Radium from 'radium';

class HoverMessage extends React.Component {
  render() {
    let buttonHover = Radium.getState(this.state, 'button', ':hover') ? (<span>{' '}Hovering yes!</span>) : null;
    return (
      <div>
        <button key="button" style={{':hover': {}}}>Hover me!</button>
        {buttonHover}
      </div>
    );
  }
}

module.exports = Radium(HoverMessage);
