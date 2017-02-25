import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectTreeNode, setTreeNodeClosed} from '../../../store/treeview/tree.Actions';
import TreeView from '../../common/TreeViews/jTreeView';

const options = {
  icon: {sun: 'dev', leaf: 'home', snow: 'sys'},
  typeName: ['node', 'type']
};

const TreeList = (props) => {
  const iconHandler = (node) => { props.setTreeNodeClosed(node); };
  const clickHandler = (node) => { props.selectTreeNode(node); };
  return (
    <div>
      <TreeView
        data={props.treeData}
        options={options}
        iconClick={iconHandler}
        titleClick={clickHandler}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectTreeNode, setTreeNodeClosed}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeList);
