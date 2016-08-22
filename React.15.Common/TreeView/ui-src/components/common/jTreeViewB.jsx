import React from 'react';
import lodashGet from 'lodash/get';

let TreeRootSty = {lineHeight: '21px'};
let liSty = {listStyleType: 'none'};
let ulSty = {WebkitPaddingStart: '16px'};
let ulStyle = {WebkitPaddingStart: '16px'};
let iconSty = {height: '21px', marginRight: '10px', width: '16px'};

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

let inOptions = {};

class JTreeViewBNodeRender extends React.Component {
  render() {
    let titleSty = {color: '#afac87', marginTop: '2px'};
    let childNodes;
    let pSty = nottogglable;
    if (this.props.node.children && this.props.node.children.length > 0) {
      childNodes = this.props.node.children.map((child, index) => {
        return (
          <li key={index} style={liSty}>
            <JTreeViewBNode node={child} titleClick={this.props.titleClick} />
          </li>
        );
      });
      pSty = togglable;
      titleSty.color = this.props.node.selected ? '#b58900' : '#afac87';
    } else {
      titleSty.color = this.props.node.selected ? '#7BB53B' : '#AF90A5';
    }

    let branch = null;
    if (this.state.visible) {
      branch = (
        <ul id="ulStyle" style={ulStyle}>
          {childNodes}
        </ul>
      );
    }

    let props = this.props;
    let iconType = lodashGet(props, inOptions.typeName);
    if (iconType == inOptions.icon.sun) iconSty.background = 'url(\'./img/sun.ico\') 0/16px no-repeat';
    else if (iconType == inOptions.icon.leaf) iconSty.background = 'url(\'./img/leaf.ico\') 0/16px no-repeat';
    else if (iconType == inOptions.icon.snow) iconSty.background = 'url(\'./img/snow.ico\') 0/16px no-repeat';
    else iconSty.background = 'url(\'./img/sun.ico\') 0/16px no-repeat';

    let titleName = this.props.node.title;

    return (
      <div id="TreeNode">
        <div id="pSty" style={pSty} className="FlexBox">
          <div id="iconSty" onClick={this.iconHandler} style={iconSty}>&nbsp;</div>
          <div id="titleSty" onClick={this.clickHandler} style={titleSty} >{titleName}</div>
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

export default function JTreeViewB({data, options, titleClick}) {
  inOptions = options;
  let childNodes = data.map((child, index) => {
    return (
      <li key={index} style={liSty}>
        <JTreeViewBNode node={child} titleClick={titleClick} />
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
