import React from 'react';

import AppNotes from './app.notes';
import JumpCtrl from './jumplist/jump.ctrl';
import TreeCtrl from './treeview/tree.ctrl';

import ImageStore from '../flux/Image.Store';
import TreeViewStore from '../flux/TreeView.Store';


let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

let TreeCtrlSty = {
  backgroundColor: '#57652a',
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  paddingLeft: '0px',
  width: '50%'
}
let getNewState = function() {
  return {
    imageList: ImageStore.getImageList(),
    currentImageItem: 'empty',
    treeData: TreeViewStore.getTreeData(),
    currentTreeNode: TreeViewStore.getCurrentTreeNode(),
    showTreeEdit: TreeViewStore.getShowTreeEdit(),
    showTreeNew: TreeViewStore.getShowTreeNew()
  }
}

let getImageState = function() {
  return {
    imageList: ImageStore.getImageList(),
  };
};

let getTreeState = function() {
  return {
    treeData: TreeViewStore.getTreeData(),
    currentTreeNode: TreeViewStore.getCurrentTreeNode(),
    showTreeEdit: TreeViewStore.getShowTreeEdit(),
    showTreeNew: TreeViewStore.getShowTreeNew()
  };
};

class AppCtrlRender extends React.Component {
  render() {
    let currentTreeNode = this.state.currentTreeNode.title;
    let currentImageItem = this.state.currentImageItem.title;
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 15 TreeView<br/><br/>
        <div id='treeColumns' ref='treeColumns' className='FlexBox' style={{height: 'calc(100% - 34px)'}}>
          <div id='TreeCtrlSty' style={TreeCtrlSty}>
            current node: {currentTreeNode}
            <br/>
            <TreeCtrl
              treeData={this.state.treeData}
              currentTreeNode={this.state.currentTreeNode}
              showTreeEdit={this.state.showTreeEdit}
              showTreeNew={this.state.showTreeNew} />
          </div>
          <div id='JumpListSty' style={TreeCtrlSty}>
            current node: {currentImageItem}
            <br/>
            <JumpCtrl imageList={this.state.imageList} clickHandler={this.jumpclick}  />
          </div>
        </div>
        <AppNotes/>
      </div>
    );
  }
}

export default class AppCtrl extends AppCtrlRender {
  state = getNewState();
  componentDidMount = () => {
    this.unsubscribeIM = ImageStore.listen(this.imStoreDidChange);
    this.unsubscribeTV = TreeViewStore.listen(this.tvStoreDidChange);
  };
  componentWillUnmount = () => { this.unsubscribeIM(); this.unsubscribeTV(); };
  jumpclick = (node) => { this.setState({currentImageItem: node});};
  imStoreDidChange = () => { this.setState(getImageState()); };
  tvStoreDidChange = () => { this.setState(getTreeState()); };
}
