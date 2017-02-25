import React from 'react';

let EventPageSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

export default class EventPage extends React.Component {
  state = {keyCode: 0};
  componentDidMount = () => {
    window.addEventListener('keydown', this.keyDownListener);
  };
  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.keyDownListener);
  };
  keyDownListener = (event) => {
    let intKey = (window.Event) ? event.which : event.keyCode;
    this.setState({keyCode: intKey});
  };
  render() {
    if (this.props.hide) return null;
    let keycode = this.state.keyCode;
    return (
      <div id="EventPage" className="contentPage" style={EventPageSty}>
        React 15 Window events
        <br /><br />
        Press any key to see the key code.
        <br /><br />
        Key code: {keycode}
      </div>
    );
  }
}
