import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { treeActions } from '../../store/tree.Actions';
import JDropMenu from './../common/jDropMenu';

let TreeMenuSty = {
  fontSize: '1.2em',
  padding: '2px 2px 0 0',
  position: 'relative',
  right: '0px',
  top: '0px'
};

let options = [
  { value: 'new', label: 'New' },
  { value: 'edit', label: 'Edit' },
  { type: 'seperator', key: '100'},
  { value: 'moveUp', label: 'Move up' },
  { value: 'moveDown', label: 'Move down' },
  { type: 'seperator', key: '101'},
  { value: 'rename', label: 'Rename' },
  { type: 'seperator', key: '102'},
  { value: 'remove', label: 'Remove' }
];

class TreeMenu extends React.Component {
  onSelect = (option) => { this.props.treeActions(option.value); };
  render() {
    return (
      <div id='TreeMenuSty' style={TreeMenuSty}>
        <JDropMenu options={options} onChange={this.onSelect} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ treeActions }, dispatch)
}

export default connect(null, mapDispatchToProps)(TreeMenu);
