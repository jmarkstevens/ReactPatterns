import React from 'react';
import lodashGet from 'lodash/get';

let TreeRootSty = {lineHeight: '120%'};
let liSty = {listStyleType: 'none'};
let ulSty = {height: 'inherit', WebkitPaddingStart: '16px'};
let ulStyle = {height: 'inherit', WebkitPaddingStart: '16px'};
let iconSty = {marginRight: '10px', width: '16px'};

let nottogglable = {
  color: '#FFF',
  cursor: 'pointer',
  margin: '0 0 0 .8em'
};

let inOptions = {};
let inCustomColors = {};

const defaultColors = {
  parent: '#AF90A5',
  parentSelected: '#7BB53B',
  endnode: '#afac87',
  endnodeSelected: '#b58900'
};

class JTreeViewNode extends React.Component {
  iconHandler = () => {
    if (this.props.node.children && this.props.node.children.length > 0) {
      this.props.iconClick(this.props.node);
    } else {
      this.clickHandler();
    }
  };
  clickHandler = () => { this.props.titleClick(this.props.node); };
  render() {
    let titleColors = inCustomColors ? inCustomColors : defaultColors;
    let titleSty = {marginTop: '2px'};
    let childNodes;
    let pSty = nottogglable;

    if (this.props.node.children && this.props.node.children.length > 0) {
      childNodes = this.props.node.children.map((child, index) => {
        return (
          <li key={index} style={liSty}>
            <JTreeViewNode node={child} iconClick={this.props.iconClick} titleClick={this.props.titleClick} />
          </li>
        );
      });
      titleSty.color = this.props.node.selected ? titleColors.parentSelected : titleColors.parent;
    } else {
      titleSty.color = this.props.node.selected ? titleColors.endnodeSelected : titleColors.endnode;
    }

    let isClosed = true;
    if (this.props.node.closed != null) isClosed = this.props.node.closed;

    let branch = (
      <ul id="ulStyle" style={ulStyle}>
        {childNodes}
      </ul>
    );
    if (isClosed) branch = null;

    let props = this.props;
    let iconType = lodashGet(props, inOptions.typeName);
    if (iconType == inOptions.icon.sun) iconSty.background = 'url(\'./img/sun.ico\') 0/16px no-repeat';
    else if (iconType == inOptions.icon.leaf) iconSty.background = 'url(\'./img/leaf.ico\') 0/16px no-repeat';
    else if (iconType == inOptions.icon.snow) iconSty.background = 'url(\'./img/snow.ico\') 0/16px no-repeat';
    else iconSty.background = 'url(\'./img/sun.ico\') 0/16px no-repeat';

    return (
      <div id="TreeNode">
        <div id="pSty" style={pSty} className="FlexBox">
          <div id="iconSty" onClick={this.iconHandler} style={iconSty}>&nbsp;</div>
          <div id="titleSty" onClick={this.clickHandler} style={titleSty} >
            {this.props.node.title}
          </div>
        </div>
        {branch}
      </div>
    );
  }
}

export default function JTreeView({data, options, iconClick, titleClick, customColors}) {
  inOptions = options;
  inCustomColors = customColors;
  let childNodes = data.map((child, index) => {
    return (
      <li key={index} style={liSty}>
        <JTreeViewNode node={child} iconClick={iconClick} titleClick={titleClick} />
      </li>
    );
  });
  return (
    <div id="TreeRootSty" style={TreeRootSty}>
      <ul id="ulSty" style={ulSty}>
          {childNodes}
      </ul>
    </div>
  );
}
