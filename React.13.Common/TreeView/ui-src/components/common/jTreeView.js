import React, {Component} from 'react';
import lodash from 'lodash';

var TreeRootSty = {lineHeight: '120%'}
var liSty = {listStyleType: 'none'};
var ulSty = {height: 'inherit', WebkitPaddingStart: '16px'};
var ulStyle = {height: 'inherit', WebkitPaddingStart: '16px'};
var iconSty = {marginRight: '10px', width: '16px'};
var titleSty = {color: '#afac87', marginTop: '2px'};

var nottogglable = {
	color: '#FFF',
	cursor: 'pointer',
	margin: '0 0 0 .8em'
};

var togglable = {
	color: '#815C7C',
	cursor: 'pointer',
	margin: '0'
};

var options = {};

var getTreeNode = function(child, index) {
	return <li key={index} style={liSty}><JTreeViewNode node={child} iconClick={this.props.iconClick} titleClick={this.props.titleClick} /></li>;
};

class JTreeViewNodeRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var childNodes;
		var pSty = nottogglable;
		if (lodash.has(this.props.node, 'children') && this.props.node.children.length > 0) {
			childNodes = this.props.node.children.map(getTreeNode, this);

			titleSty.color = this.props.node.selected ? '#7BB53B' : '#AF90A5';
		} else {
			titleSty.color = this.props.node.selected ? '#b58900' : '#afac87';
		}

		var isClosed = true;
		if (lodash.has(this.props.node, 'closed')) isClosed = this.props.node.closed;
		ulStyle.display = isClosed ? 'none' : 'inline-block';
		var props = this.props;
		var iconType = lodash.get(props, options.typeName);
		if (iconType == options.icon.sun) iconSty.background = "url('./img/sun.ico') 0/16px no-repeat !important";
		else if (iconType == options.icon.leaf) iconSty.background = "url('./img/leaf.ico') 0/16px no-repeat !important";
		else if (iconType == options.icon.snow) iconSty.background = "url('./img/snow.ico') 0/16px no-repeat !important";
		else iconSty.background = "url('./img/sun.ico') 0/16px no-repeat !important";

		return (
			<div id='TreeNode'>
				<div id='pSty' style={pSty} className='FlexBox'>
					<div id='iconSty' onClick={this.iconHandler} style={iconSty}>&nbsp;</div>
					<div id='titleSty' onClick={this.clickHandler} style={titleSty} >{this.props.node.title}</div>
				</div>
				<ul id='ulStyle' style={ulStyle}>
					{childNodes}
				</ul>
			</div>
		);
	}
}

class JTreeViewNode extends JTreeViewNodeRender {
	constructor() { 
	  super();
	  this.binder('clickHandler', 'iconHandler');
	}
	iconHandler() { 
		if (lodash.has(this.props.node, 'children') && this.props.node.children.length > 0) {
			this.props.iconClick(this.props.node); 
		} else {
			this.clickHandler();
		}
	}
	clickHandler() { this.props.titleClick(this.props.node); }
}

class JTreeViewRender extends Component {
	render() {
		options = this.props.options;
		var childNodes = this.props.data.map(getTreeNode, this);
		return (
			<div id='TreeRootSty' style={TreeRootSty}>
				<ul id='ulSty' style={ulSty}>
						{childNodes}
				</ul>
			</div>
		);
	}
}

export default class JTreeView extends JTreeViewRender {}
