import React, {Component} from 'react';

var listSty = {}
var listStyle = {}

var lineSty = {}
var lineStyle = {
	color: '#FBF7C3',
	marginLeft: '7px'
}

function divMap(item, index) {
	return (<div style={lineSty} key={index}>{item}</div>)
}

function spanMap(item, index) {
	return (<span style={lineSty} key={index}>{item}</span>)
}

class JListRender extends Component {
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

export default class JList extends JListRender {}
