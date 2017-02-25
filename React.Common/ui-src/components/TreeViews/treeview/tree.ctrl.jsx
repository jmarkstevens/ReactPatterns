import React from 'react';
import {connect} from 'react-redux';

import {apiSetTreeView} from '../../../store/api/api.Actions';
import TreeList from './tree.list';
import TreeMenu from './tree.menu';
import TreeEdit from './tree.edit';
import TreeNew from './tree.new';

let TreeCtrlRenderSty = {height: 'calc(100% - 19px)'};

class TreeCtrl extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.treeData && (nextProps.treeData !== this.props.treeData)) {
      apiSetTreeView({data: nextProps.treeData});
    }
  }
  render() {
  let hideTreeEdit = !this.props.showTreeEdit;
  let hideTreeNew = !this.props.showTreeNew;
  return (
    <div id="TreeCtrlRenderSty" style={TreeCtrlRenderSty}>
      <TreeMenu />
      <TreeList treeData={this.props.treeData} />
      <TreeEdit treeNode={this.props.currentTreeNode} hide={hideTreeEdit} />
      <TreeNew hide={hideTreeNew} />
    </div>
  );
  }
}

function mapStateToProps(store) {
  return {
    treeData: store.treeState.treeData,
    currentTreeNode: store.treeState.currentTreeNode,
    showTreeEdit: store.treeState.showTreeEdit,
    showTreeNew: store.treeState.showTreeNew
  };
}

export default connect(mapStateToProps)(TreeCtrl);
