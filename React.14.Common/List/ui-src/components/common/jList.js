import React from 'react';

let listSty = {}
let listStyle = {}

let lineSty = {}
let lineStyle = {
  color: '#FBF7C3',
  marginLeft: '7px'
}

function divMap(item, index) {
  return (<div style={lineSty} key={index}>{item}</div>)
}

function spanMap(item, index) {
  return (<span style={lineSty} key={index}>{item}</span>)
}

export default class JList extends React.Component {
  render() {
    listSty = this.props.listStyle ? this.props.listStyle : listStyle;
    lineSty = this.props.lineStyle ? this.props.lineStyle : lineStyle;
    var list;
    if (this.props.spanLine) list = this.props.data.map(spanMap);
    else list = this.props.data.map(divMap);
    return (
      <div id='JListSty' style={listSty}>
        {list}
      </div>
    );
  }
}
