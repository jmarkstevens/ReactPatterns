import React from 'react';
import lodashGet from 'lodash/get';

let TreeRootSty = {lineHeight: '21px'}
let liSty = {listStyleType: 'none'};
let ulSty = {WebkitPaddingStart: '16px'};
let ulStyle = {WebkitPaddingStart: '16px'};
let iconSty = {height: '21px', marginRight: '10px', width: '16px'};
let titleSty = {color: '#afac87', height: '21px', marginTop: '2px'};

let nottogglable = {
  color: '#FFF',
  cursor: 'pointer',
  margin: '0 0 0 12px'
};

let togglable = {
  color: '#815C7C',
  cursor: 'pointer',
  margin: '0px'
};

let options = {};

let getTreeNode = function(child, index) {
  return <li key={index} style={liSty}><JTreeViewBNode node={child} titleClick={this.props.titleClick} /></li>;
};

class JTreeViewBNodeRender extends React.Component {
  render() {
    let childNodes;
    let pSty = nottogglable;
    if (this.props.node.children && this.props.node.children.length > 0) {
      childNodes = this.props.node.children.map(getTreeNode, this);
      pSty = togglable;
    }

    let branch = null;
    if (this.state.visible) {
      branch = (
        <ul id='ulStyle' style={ulStyle}>
          {childNodes}
        </ul>
      )
    }

    let props = this.props;
    let iconType = lodashGet(props, options.typeName);
    if (iconType == options.icon.sun) iconSty.background = "url('./img/sun.ico') 0/16px no-repeat";
    else if (iconType == options.icon.leaf) iconSty.background = "url('./img/leaf.ico') 0/16px no-repeat";
    else if (iconType == options.icon.snow) iconSty.background = "url('./img/snow.ico') 0/16px no-repeat";
    else iconSty.background = "url('./img/sun.ico') 0/16px no-repeat";

    let titleName = this.props.node.title;

    return (
      <div id='TreeNode'>
        <div id='pSty' style={pSty} className='FlexBox'>
          <div id='iconSty' onClick={this.iconHandler} style={iconSty}>&nbsp;</div>
          <div id='titleSty' onClick={this.clickHandler} style={titleSty} >{titleName}</div>
        </div>
        {branch}
      </div>
    );
  }
}

class JTreeViewBNode extends JTreeViewBNodeRender {
  state = {visible: false};
  iconHandler = () => {
    if (this.props.node.children && this.props.node.children.length > 0) {
      this.setState({visible: !this.state.visible});
    } else { this.props.titleClick(this.props.node); }
  };
  clickHandler = () => { this.props.titleClick(this.props.node); };
}

export default class JTreeViewB extends React.Component {
  render() {
    options = this.props.options;
    let childNodes = this.props.data.map(getTreeNode, this);
    return (
      <div id='TreeRootSty' style={TreeRootSty}>
        <ul id='ulSty' style={ulSty}>
            {childNodes}
        </ul>
      </div>
    );
  }
}
