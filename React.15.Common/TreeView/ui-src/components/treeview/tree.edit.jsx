import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TreeDetail from './tree.detail';
import {treeActions, saveTreeEdit} from '../../store/tree.Actions';
import JButton from '../common/jButton';

let saveEditBtn = {buttonid: 'save', text: 'Save'};
let cancelEditBtn = {buttonid: 'cancel', text: 'Cancel'};

class TreeEdit extends React.Component {
  state = {treeNode: {nodeid: '', children: [], title: '', type: ''}};

  componentWillReceiveProps = (nextProps) => { this.setState({treeNode: nextProps.treeNode}); };
  clickHandler = (buttonid) => {
    let node = this.state.treeNode;
    switch (buttonid) {
      case 'save': this.props.saveTreeEdit(node); break;
      case 'cancel': this.props.treeActions('cancelEdit'); break;
    }
  };
  handleChange = (field, value) => {
    let node = this.state.treeNode;
    if (field == 'title') node.title = value;
    if (field == 'type') node.type = value;
    this.setState({treeNode: node});
  };
  render() {
    if (this.props.hide) return null;
    return (
      <div id="treeNewEdit">
        <div id="buttonArea">
          <JButton btn={saveEditBtn} parentClickHandler={this.clickHandler} />
          <JButton btn={cancelEditBtn} parentClickHandler={this.clickHandler} />
        </div>
        <TreeDetail treeNode={this.state.treeNode} name="editNode" handleChange={this.handleChange} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({treeActions, saveTreeEdit}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeEdit);
