
export function setClippetsTree() { return {type: 'SetClippetsTree'}; }

export function selectTreeNode(node) { return {type: 'SelectTreeNode', node}; }

export function setTreeNodeClosed(node) { return {type: 'SetTreeNodeClosed', node}; }

export function saveTreeEdit(node) { return {type: 'SaveTreeEdit', node}; }

export function saveTreeNew(node, location) { return {type: 'SaveTreeNew', node, location}; }

export function treeActions(action) {
  switch (action) {
    case 'new': return {type: 'ShowNew'};
    case 'edit': return {type: 'ShowEdit'};
    case 'moveUp': return {type: 'MoveUp'};
    case 'moveDown': return {type: 'MoveDown'};
    case 'remove': return {type: 'Remove'};
    case 'cancelEdit': return {type: 'CancelEdit'};
    case 'cancelNew': return {type: 'CancelNew'};
  }
}
