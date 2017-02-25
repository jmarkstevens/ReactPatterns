import lodash from 'lodash';
import traverse from 'traverse';

import {apiSetAppData} from '../api/api.Actions';

let _nextID;

function getSetNextNodeID() {
  _nextID += 1;
  apiSetAppData({nextid: _nextID});
  return _nextID;
}

function _gotTreeView(treedata) {
  let _currentTreeNode = _getSelected(treedata);
  if (_currentTreeNode == null) _currentTreeNode = treedata[0];
  return {treeData: treedata, currentTreeNode: _currentTreeNode};
}

function _getSelected(tree) {
  let result = null;
  lodash.each(tree, function(node) {
    if (node.selected) result = node;
    if(result == null && node.children.length > 0) result = _getSelected(node.children);
  });
  return result;
}

function _saveTreeNew(_treeData, treeNode, _currentTreeNode, location) {
  let newNode = treeNode;
  let nodeIndex = _getNodeIndex(_treeData, _currentTreeNode);

  let nextNodeID = getSetNextNodeID();
  let newNodeID;
  if (location == 'child') {
    newNodeID = _currentTreeNode.nodeid + '.' + nextNodeID;
  } else {
    let nodeIdArray = _currentTreeNode.nodeid.split('.');
    nodeIdArray.pop();
    newNodeID = nodeIdArray.join('.') + '.' + nextNodeID;
  }
  newNode.nodeid = newNodeID;

  let tIndex;
  let children;
  let isNotRoot = (nodeIndex.length > 1);
  if (location == 'child') {
    let nodeIndex2 = _getNodeIndex(_treeData, _currentTreeNode);
    nodeIndex2.push('closed');
    traverse(_treeData).set(nodeIndex2, false);
    nodeIndex.push('children');
    children = traverse(_treeData).get(nodeIndex);
    isNotRoot = true;
  } else if (isNotRoot) {
    tIndex = nodeIndex.pop();
    children = traverse(_treeData).get(nodeIndex);
  } else {
    tIndex = nodeIndex[0];
    children = _treeData;
  }
  switch (location) {
    case 'before': break;
    case 'after': {
      let cLength = children.length;
      tIndex = tIndex < cLength ? tIndex + 1 : cLength;
      break;
    }
    case 'child': tIndex = 0; break;
  }
  children.splice(tIndex, 0, Object.assign({}, newNode));
  if (isNotRoot) traverse(_treeData).set(nodeIndex, children);
  else _treeData = children;
  const returnData = _selectTreeNode(_treeData, _currentTreeNode, newNode);
  return returnData;
}

function _saveTreeEdit(_treeData, treeNode) {
  let nodeIndex = _getNodeIndex(_treeData, treeNode);
  traverse(_treeData).set(nodeIndex, Object.assign({}, treeNode));
  return {treeData: _treeData, currentTreeNode: treeNode, showTreeEdit: false};
}

function _moveTreeItem(_treeData, _currentTreeNode, action) {
  let nodeIndex = _getNodeIndex(_treeData, _currentTreeNode);
  let tIndex;
  let children;
  let isNotRoot = (nodeIndex.length > 1);
  if (isNotRoot) {
    tIndex = nodeIndex.pop();
    children = traverse(_treeData).get(nodeIndex);
  }
  else {
    tIndex = nodeIndex[0];
    children = _treeData;
  }
  let currentIndex = tIndex;
  switch (action) {
    case 'MoveUp': tIndex = tIndex > 0 ? tIndex - 1 : 0; break;
    case 'MoveDown': {
      let cLength = children.length;
      tIndex = tIndex < cLength ? tIndex + 1 : cLength;
      break;
    }
    case 'Remove': tIndex = tIndex > 0 ? tIndex - 1 : 0; break;
  }
  if (tIndex != currentIndex || action == 'Remove') {
    let data = children.splice(currentIndex, 1);
    if (action == 'Remove') {
      let newNode = children[tIndex];
      if (newNode != null) _currentTreeNode = newNode;
    }
    else children.splice(tIndex, 0, data[0]);
    if (isNotRoot) traverse(_treeData).set(nodeIndex, children);
    else _treeData = children;
    
    return {treeData: _treeData, currentTreeNode: _currentTreeNode};
  }
}

function _getNodeIndex(_treeData, treeNode) {
  let treeData = _treeData;
  let nodeID = treeNode.nodeid;
  if (lodash.isEmpty(nodeID)) { return []; }

  let nodeIdArray = nodeID.split('.'),
    searchID = nodeIdArray.shift(),
    nodeIndex = [],
    index,
    nextSearchID;

  while (searchID) {
    if (!treeData) { return []; }
    let treeItem = lodash.find(treeData, {nodeid: searchID});
    index = lodash.indexOf(treeData, treeItem);
    if (index < 0) { return []; }
    nodeIndex.push(index);
    nextSearchID = nodeIdArray.shift();
    if (nextSearchID) {
      searchID += '.' + nextSearchID;
      treeData = treeData[index].children;
      if (treeData) { nodeIndex.push('children'); }
    }
    else searchID = nextSearchID;
  }

  return nodeIndex;
}

function _selectTreeNode(_treeData, _currentTreeNode, treeNode) {
  let nodeIndex1 = _getNodeIndex(_treeData, _currentTreeNode);
  nodeIndex1.push('selected');
  traverse(_treeData).set(nodeIndex1, false);
  _currentTreeNode = treeNode;
  let nodeIndex2 = _getNodeIndex(_treeData, _currentTreeNode);
  nodeIndex2.push('selected');
  traverse(_treeData).set(nodeIndex2, true);

  return {treeData: _treeData, currentTreeNode: _currentTreeNode};
}

function _setTreeNodeClosed(_treeData, treeNode) {
  let nodeIndex = _getNodeIndex(_treeData, treeNode);
  nodeIndex.push('closed');
  let visible = traverse(_treeData).get(nodeIndex);
  if (typeof visible === 'undefined') visible = false;
  else visible = !visible;
  if (visible) traverse(_treeData).set(nodeIndex, true);
  else traverse(_treeData).set(nodeIndex, false);

  return {treeData: _treeData};
}

const initialState = {
  nextID: 0,
  treeData: [{}],
  currentTreeNode: {title: 'not selected'},
  showTreeEdit: false,
  showTreeNew: false,
  jumpList: [{}]
};

export default function handleActions(state = initialState, action) {
  let treeCopy = state.treeData.slice(0);
  let currentCopy = Object.assign({}, state.currentTreeNode);
  switch (action.type) {
    case 'GetAppDataDone': _nextID = action.payload; return state;
    case 'GetImageListDone': return {...state, jumpList: action.payload};
    case 'GetTreeViewDone': {
      let gotTreeData = _gotTreeView(action.payload);
      return {...state, ...gotTreeData};
    }
    case 'ShowNew': return {...state, showTreeNew: true};
    case 'ShowEdit': return {...state, showTreeEdit: true};
    case 'CancelEdit': return {...state, showTreeEdit: false};
    case 'CancelNew': return {...state, showTreeNew: false};
    case 'MoveUp':
    case 'MoveDown':
    case 'Remove': {
      let moveTreeData = _moveTreeItem(treeCopy, currentCopy, action.type);
      return {...state, ...moveTreeData};
    }
    case 'SelectTreeNode': {
      let selectTreeData = _selectTreeNode(treeCopy, currentCopy, action.node);
      return {...state, ...selectTreeData};
    }
    case 'SetTreeNodeClosed': {
      let closedTreeData = _setTreeNodeClosed(treeCopy, action.node);
      return {...state, ...closedTreeData};
    }
    case 'SaveTreeEdit': {
      let editTreeData = _saveTreeEdit(treeCopy, action.node);
      return {...state, ...editTreeData};
    }
    case 'SaveTreeNew': {
      let newTreeData = _saveTreeNew(treeCopy, action.node, currentCopy, action.location, state.nextID);
      newTreeData.showTreeNew = false;
      return {...state, ...newTreeData};
    }
    default: return state;
  }
}
