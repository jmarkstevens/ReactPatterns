import React from 'react';
import {connect} from 'react-redux';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import JumpCtrl from './jumplist/jump.ctrl';
import TreeCtrl from './treeview/tree.ctrl';


let TreeViewsSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

let TreeCtrlSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  paddingLeft: '0px',
  width: '50%'
};

class TreeViews extends React.Component {
  state = {currentImageItem: {title: 'not selected'}};
  jumpclick = (node) => { this.setState({currentImageItem: node});};
  render() {
    if (this.props.hide) return null;
    let currentTreeNode = this.props.currentTreeNode.title;
    let currentImageItem = this.state.currentImageItem.title;
    return (
      <div id="TreeViews" className="contentPage" style={TreeViewsSty}>
        <div id="treeColumns" className="FlexBox" style={{height: 'calc(100% - 34px)'}}>
          <div id="TreeCtrlSty" style={TreeCtrlSty}>
            current node: {currentTreeNode}
            <br />
            <TreeCtrl />
          </div>
          <div id="JumpListSty" style={TreeCtrlSty}>
            current node: {currentImageItem}
            <br />
            <JumpCtrl imageList={this.props.imageList} clickHandler={this.jumpclick}  />
          </div>
        </div>
        <AppNotes AppText={AppText.p1Text} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    imageList: store.treeState.jumpList,
    treeData: store.treeState.treeData,
    currentTreeNode: store.treeState.currentTreeNode,
    showTreeEdit: store.treeState.showTreeEdit,
    showTreeNew: store.treeState.showTreeNew
  };
}

export default connect(mapStateToProps)(TreeViews);
