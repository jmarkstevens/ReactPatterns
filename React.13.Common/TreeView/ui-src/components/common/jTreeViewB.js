import React, {Component} from 'react';
import lodash from 'lodash';

var TreeRootSty = {lineHeight: '21px'}
var liSty = {listStyleType: 'none'};
var ulSty = {WebkitPaddingStart: '16px'};
var ulStyle = {WebkitPaddingStart: '16px'};
var iconSty = {height: '21px', marginRight: '10px', width: '16px'};
var titleSty = {color: '#afac87', height: '21px', marginTop: '2px'};

var nottogglable = {
	color: '#FFF',
	cursor: 'pointer',
	margin: '0 0 0 12px'
};

var togglable = {
	color: '#815C7C',
	cursor: 'pointer',
	margin: '0'
};

var options = {};

var getTreeNode = function(child, index) {
	return <li key={index} style={liSty}><JTreeViewBNode node={child} titleClick={this.props.titleClick} /></li>;
};

class JTreeViewBNodeRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var childNodes;
		var pSty = nottogglable;
		if (lodash.has(this.props.node, 'children') && this.props.node.children.length > 0) {
			childNodes = this.props.node.children.map(getTreeNode, this);
			pSty = togglable;
		}

		ulStyle.display = this.state.visible ? 'block' : 'none';
		var props = this.props;
		var iconType = lodash.get(props, options.typeName);
		if (iconType == options.icon.sun) iconSty.background = "url('./img/sun.ico') 0/16px no-repeat !important";
		else if (iconType == options.icon.leaf) iconSty.background = "url('./img/leaf.ico') 0/16px no-repeat !important";
		else if (iconType == options.icon.snow) iconSty.background = "url('./img/snow.ico') 0/16px no-repeat !important";
		else iconSty.background = "url('./img/sun.ico') 0/16px no-repeat !important";

		var titleName = this.props.node.title;

		return (
			<div id='TreeNode'>
				<div id='pSty' style={pSty} className='FlexBox'>
					<div id='iconSty' onClick={this.iconHandler} style={iconSty}>&nbsp;</div>
					<div id='titleSty' onClick={this.clickHandler} style={titleSty} >{titleName}</div>
				</div>
				<ul id='ulStyle' style={ulStyle}>
					{childNodes}
				</ul>
			</div>
		);
	}
}

class JTreeViewBNode extends JTreeViewBNodeRender {
	constructor() { 
	  super();
		this.state = {visible: false}; 
	  this.binder('clickHandler', 'iconHandler');
	}
	iconHandler() { 
		if (lodash.has(this.props.node, 'children') && this.props.node.children.length > 0) {
			this.setState({visible: !this.state.visible});
		} else { this.props.titleClick(this.props.node); }
	}
	clickHandler() { this.props.titleClick(this.props.node); }
}

class JTreeViewBRender extends Component {
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

export default class JTreeViewB extends JTreeViewBRender {}
