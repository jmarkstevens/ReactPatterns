import React from 'react';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

class AppCtrlRender extends React.Component {
  render() {
    let keycode = this.state.keyCode;
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        React 15 Window events
        <br /><br />
        Press any key to see the key code.
        <br /><br />
        Key code: {keycode}
      </div>
    );
  }
}

export default class AppCtrl extends AppCtrlRender {
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
}
