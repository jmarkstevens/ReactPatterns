import React from 'react';

let listSty = {};
let listStyleDefault = {};

let lineSty = {};
let lineStyleDefault = {
  color: '#00303f',
  marginLeft: '7px'
};

function divMap(item, index) {
  return (<div style={lineSty} key={index}>{item}</div>);
}

function spanMap(item, index) {
  return (<span style={lineSty} key={index}>{item}</span>);
}

export default function JList({data, lineStyle, listStyle, spanLine}) {
  listSty = listStyle ? listStyle : listStyleDefault;
  lineSty = lineStyle ? lineStyle : lineStyleDefault;
  var list;
  if (spanLine) list = data.map(spanMap);
  else list = data.map(divMap);
  return (
    <div id="JListSty" style={listSty}>
      {list}
    </div>
  );
}
