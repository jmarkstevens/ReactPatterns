import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AppNotes from './app.notes';
import JumpCtrl from './jumplist/jump.ctrl';
import TreeCtrl from './treeview/tree.ctrl';

import {apiGetAppData, apiGetImageList, apiGetTreeView} from '../store/api.Actions';


let AppCtrlSty = {
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

class AppCtrlRender extends React.Component {
  render() {
    let currentTreeNode = this.props.currentTreeNode.title;
    let currentImageItem = this.state.currentImageItem.title;
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        React 15 TreeView<br /><br />
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
        <AppNotes />
      </div>
    );
  }
}

class AppCtrl extends AppCtrlRender {
  state = {currentImageItem: {title: 'not selected'}};
  componentWillMount = () => {
    this.props.apiGetAppData();
    this.props.apiGetImageList();
    this.props.apiGetTreeView();
  };
  jumpclick = (node) => { this.setState({currentImageItem: node});};
}

function mapStateToProps(store) {
  return {
    imageList: store.jumpList,
    treeData: store.treeData,
    currentTreeNode: store.currentTreeNode,
    showTreeEdit: store.showTreeEdit,
    showTreeNew: store.showTreeNew
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({apiGetAppData, apiGetImageList, apiGetTreeView}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCtrl);
