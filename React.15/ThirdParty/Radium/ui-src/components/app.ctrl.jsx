import React from 'react';
import Radium from 'radium';

import Button from './button';
import ComputedWell from './computed-well';

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
HoverMessage = Radium(HoverMessage);

function TwoSquares() {
  return (
    <div>
      <div key="one" style={[squareStyles.both, squareStyles.one]} />
      <div key="two" style={[squareStyles.both, squareStyles.two]} />
      <div style={{clear: 'both'}} />
    </div>
  );
}
TwoSquares = Radium(TwoSquares);

function Spinner() {
  return (
    <div>
      <div style={spinnerStyles.inner} />
    </div>
  );
}
Spinner = Radium(Spinner);

function Tiles() {
  let tileArray = Array.apply(null, Array(100)).map(function(_, i) {
    return (
      <div style={tileStyle} key={'tile' + i} />
    );
  });
  return (
    <div style={{width: 220}}>
      {tileArray}
      <div style={{clear:'both'}} />
    </div>
  );
}
Tiles = Radium(Tiles);

let squareStyles = {
  both: {
    background: 'black',
    border: 'solid 1px white',
    float: 'left',
    height: 100,
    width: 100
  },
  one: {
    ':hover': {
      background: 'blue',
    }
  },
  two: {
    ':hover': {
      background: 'red',
    }
  }
};

let tileStyle = {
  display: 'block',
  float: 'left',
  background: '#bbb',
  width: 20,
  height: 20,
  textAlign: 'center',
  border: '1px solid white',
  cursor: 'pointer',

  ':hover' : {
    background: '#999'
  }
};

let pulseKeyframes = Radium.keyframes({
  '0%': {width: '10%'},
  '50%': {width: '50%'},
  '100%': {width: '10%'},
});

let spinnerStyles = {
  inner: {
    animation: pulseKeyframes + ' 3s ease 0s infinite',
    background: 'blue',
    height: '4px',
    margin: '0 auto',
  }
};

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

export default class AppCtrl extends React.Component {
  _remount = () => {
    this.setState({shouldRenderNull: true});

    setTimeout(function() {
      this.setState({shouldRenderNull: false});
    }.bind(this), 1000);
  };
  render() {
    if (this.state && this.state.shouldRenderNull) { return null; }
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        <div><HoverMessage /></div>
        <br /><br />

        <div><TwoSquares /></div>
        <br /><br />

        <div><Spinner /></div>
        <br /><br />

        <p>
          <Button onClick={this._remount}>Unmount and remount</Button>
        </p>

        <p>
          <Button>Button</Button>
        </p>

        <p>
          <Button color="red">Button</Button>
        </p>

        <p>
          <Button style={{fontSize: '1.5em', borderRadius: 3}}>
            Button
          </Button>
        </p>

        <Tiles />
        <br /><br />

        <div>
          <ComputedWell>Click me!</ComputedWell>
        </div>
      </div>
    );
  }
}
