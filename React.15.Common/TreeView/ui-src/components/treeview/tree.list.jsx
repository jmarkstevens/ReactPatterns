import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectTreeNode, setTreeNodeClosed} from '../../store/tree.Actions';
import TreeView from './../common/jTreeView';

class TreeList extends React.Component {
  iconHandler = (node) => { this.props.setTreeNodeClosed(node); };
  clickHandler = (node) => { this.props.selectTreeNode(node); };
  render() {
    let options = {
      icon: {sun: 'dev', leaf: 'home', snow: 'sys'},
      typeName: ['node', 'type']
    };
    return (
      <div>
        <TreeView
          data={this.props.treeData}
          options={options}
          iconClick={this.iconHandler}
          titleClick={this.clickHandler}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectTreeNode, setTreeNodeClosed}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeList);
