import React from 'react';

import AppNotes from './app.notes';

import RangeSelector from './common/mxRange/jRangeSelector';
import SimpleSlider from './common/mxSlider/jSlider';

let AppCtrlSty = {
  backgroundColor: '#e1ded5',
  borderBottom: '3px solid #636b46',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '900px',
  padding: '10px'
};

let innerSty = {
  width: '100%'
};

const formatter = value => Math.ceil((value * 39) - 5);
const unformatter = value => Math.ceil(((value + 4) / 39) * 100) / 100;

class AppCtrlRender extends React.Component {
  render() {
    let formattedValue = this.state.formattedValue;
    let percentValue = unformatter(formattedValue);
    let lowerValue = this.state.lowerValue;
    let upperValue = this.state.upperValue;
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        <div className="FlexBox JustAround" style={{color: '#000'}}>
          <div style={innerSty}>
            <div>Lower Value: {lowerValue}</div>
            <div>Upper Value: {upperValue}</div>
            <RangeSelector
              lowerValue={lowerValue}
              upperValue={upperValue}
              defaultLowerValue={1}
              defaultUpperValue={85}
              interval={1}
              itemName="RangeSelector"
              lowerBound={1}
              onLowerDragStop={this._handleLowerChange}
              onUpperDragStop={this._handleUpperChange}
              upperBound={85}
            />
          </div>
          <div style={innerSty}>
            <div>Value -5 - 34: {formattedValue}</div>
            <br />
            <SimpleSlider
              formatter={formatter}
              itemName="SimpleSlider"
              onPercentChange={this._handleSliderChange}
              percent={percentValue}
            />
          </div>
        </div>
        <br /><br />
        <button onClick={this._resetState} style={{color: 'black'}}> Reset state</button>
        <br /><br />
        <br /><br />
        <AppNotes />
      </div>
    );
  }
}

let getInitialAppState = function() {
  return {
    formattedValue: 34,
    lowerValue: 1,
    upperValue: 85
  };
};

export default class AppCtrl extends AppCtrlRender {
  state = getInitialAppState();
  _handleSliderChange = (formattedValue) => { this.setState({formattedValue}); }
  _handleLowerChange = (lowerValue) => { this.setState({lowerValue}); }
  _handleUpperChange = (upperValue) => { this.setState({upperValue}); }
  _resetState = () => { this.setState(getInitialAppState()); }
}
