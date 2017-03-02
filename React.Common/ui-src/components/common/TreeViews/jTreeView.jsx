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

const JTreeViewNode = (props) => {
  const iconHandler = () => {
    if (props.node.children && props.node.children.length > 0) {
      props.iconClick(props.node);
    } else {
      clickHandler();
    }
  };
  const clickHandler = () => { props.titleClick(props.node); };
  let titleColors = inCustomColors ? inCustomColors : defaultColors;
  let titleSty = {marginTop: '2px'};
  let childNodes;
  let pSty = nottogglable;

  if (props.node.children && props.node.children.length > 0) {
    childNodes = props.node.children.map((child, index) => {
      return (
        <li key={index} style={liSty}>
          <JTreeViewNode node={child} iconClick={props.iconClick} titleClick={props.titleClick} />
        </li>
      );
    });
    titleSty.color = props.node.selected ? titleColors.parentSelected : titleColors.parent;
  } else {
    titleSty.color = props.node.selected ? titleColors.endnodeSelected : titleColors.endnode;
  }

  let isClosed = true;
  if (props.node.closed != null) isClosed = props.node.closed;

  let branch = (
    <ul id="ulStyle" style={ulStyle}>
      {childNodes}
    </ul>
  );
  if (isClosed) branch = null;

  let iconType = lodashGet(props, inOptions.typeName);
  if (iconType == inOptions.icon.sun) iconSty.background = 'url(\'./img/sun.ico\') 0/16px no-repeat';
  else if (iconType == inOptions.icon.leaf) iconSty.background = 'url(\'./img/leaf.ico\') 0/16px no-repeat';
  else if (iconType == inOptions.icon.snow) iconSty.background = 'url(\'./img/snow.ico\') 0/16px no-repeat';
  else iconSty.background = 'url(\'./img/sun.ico\') 0/16px no-repeat';

  return (
    <div id="TreeNode">
      <div id="pSty" style={pSty} className="FlexBox">
        <div id="iconSty" onClick={iconHandler} style={iconSty}>&nbsp;</div>
        <div id="titleSty" onClick={clickHandler} style={titleSty} >
          {props.node.title}
        </div>
      </div>
      {branch}
    </div>
  );
};

function JTreeView({data, options, iconClick, titleClick, customColors}) {
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

module.exports = JTreeView;
