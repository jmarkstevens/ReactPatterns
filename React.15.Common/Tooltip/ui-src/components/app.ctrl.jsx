import React from 'react';

import AppNotes from './app.notes';
import JTooltip from './common/jTooltip';

let AppCtrlSty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px'
};

let columnSty = {
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  paddingLeft: '0px',
  width: '330px'
};

let titleSty = {
  background: 'transparent',
  boxSizing: 'border-box',
  cursor: 'default',
  height: '18px',
  lineHeight: '18px',
  overflow: 'hidden',
  outline: 'none',
  position: 'relative',
  textAlign: 'left',
  transition: 'all 200ms ease',
  width: '100%'
};

let toolTipSty = {display: 'inline-block', zIndex: '100'};
let titleDivSty = {display: 'inline-block', lineHeight: '18px', position: 'relative'};

let fillText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
`;

let hoverValues = [
  {title: 'LowTemp', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'bottom'},
  {title: 'LeafType', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'bottom'},
  {title: 'Height', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'bottom'},
  {title: 'Width', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'bottom'},
  {title: 'TrunkType', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'right'},
  {title: 'SunExposure', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'right'},
  {title: 'WaterTolerance', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'right'},
  {title: 'BogTolerant', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'top'},
  {title: 'DraughtTolerant', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'top'},
  {title: 'GrowthSpeed', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'top'},
  {title: 'DryAirTolerance', text: fillText.repeat(Math.ceil(Math.random() * 8)), place: 'top'}
];

function hoverMap(item) {
  let adjust = {left: 0, top: 0};

  let tooltip = <div id="toolTipSty" style={toolTipSty}><JTooltip data={item.text} adjust={adjust} place={item.place} /></div>;
  return (
    <div id="titleLineSty" key={item.title} className="FlexBox" style={{lineHeight: '1.5em'}}>
      {tooltip}
      <div id="titleDivSty" style={titleDivSty}>
        <div id="titleSty" style={titleSty}>
          {item.title}:
        </div>
      </div>
    </div>
  );
}

export default function AppCtrl() {
  let hoverList = hoverValues.map(hoverMap);
  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      <br /><br /><br />
      <div id="columnSty" style={columnSty}>
        {hoverList}
      </div>
      <AppNotes />
    </div>
  );
}
