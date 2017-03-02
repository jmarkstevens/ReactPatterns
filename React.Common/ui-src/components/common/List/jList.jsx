import React from 'react';

let listSty = {};
let listStyleDefault = {};

let lineSty = {};
let lineStyleDefault = {
  color: '#a7b3a5',
  marginLeft: '7px'
};

function divMap(item, index) {
  return (<div style={lineSty} key={index}>{item}</div>);
}

function spanMap(item, index) {
  return (<span style={lineSty} key={index}>{item}</span>);
}

function JList({data, lineStyle, listStyle, spanLine}) {
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

module.exports = JList;
