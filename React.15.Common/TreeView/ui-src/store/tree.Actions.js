import { apiSetClippetsTree } from '../store/api.Actions';

export function selectedTreeNode(node) {
  return dispatch => {
    dispatch(selectedTreeNode(node));
    dispatch(setClippetsTree());
  }
}

export function setClippetsTree() {
  return {
    type: 'SetClippetsTree'
  }
}

export function selectTreeNode(node) {
  return {
    type: 'SelectTreeNode',
    node: node
  }
}

export function setTreeNodeClosed(node) {
  return {
    type: 'SetTreeNodeClosed',
    node: node
  }
}

export function saveTreeEdit(node) {
  return {
    type: 'SaveTreeEdit',
    node: node
  }
}

export function saveTreeNew(node, location) {
  return {
    type: 'SaveTreeNew',
    node: node,
    location: location
  }
}

export function treeActions(action) {
  switch (action) {
    case 'new': return {type: 'ShowNew'}; break;
    case 'edit': return {type: 'ShowEdit'}; break;
    case 'moveUp': return {type: 'MoveUp'}; break;
    case 'moveDown': return {type: 'MoveDown'}; break;
    case 'remove': return {type: 'Remove'}; break;
    case 'cancelEdit': return {type: 'CancelEdit'}; break;
    case 'cancelNew': return {type: 'CancelNew'}; break;
  }
}
