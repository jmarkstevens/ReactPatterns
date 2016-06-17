import React from 'react';

import TreeDetail from './tree.detail';
import Actions from '../../flux/Actions';
import JButton from '../common/jButton';

let saveEditBtn = { buttonid: "save", text: "Save" };
let cancelEditBtn = { buttonid: "cancel", text: "Cancel" };

class TreeEditRender extends React.Component {
   render() {
    if (this.props.hide) return null;
    return (
      <div id="treeNewEdit">
        <div id="buttonArea">
          <JButton btn={saveEditBtn} parentClickHandler={this.clickHandler} />
          <JButton btn={cancelEditBtn} parentClickHandler={this.clickHandler} />
        </div>
        <TreeDetail treeNode={this.state.treeNode} name='editNode' handleChange={this.handleChange} />
      </div>
    );
  }
}

export default class TreeEdit extends TreeEditRender {
  state = { treeNode: { nodeid: '', children: [], title: '', type: '' }};

  clickHandler = (buttonid) => {
    let node = this.state.treeNode;
    switch (buttonid) {
      case 'save': Actions.saveTreeEdit(node); break;
      case 'cancel': Actions.treeActions('cancelEdit'); break;
    }
  };
  componentWillReceiveProps = (nextProps) => { this.setState({treeNode: nextProps.treeNode}); };
  handleChange = (field, value) => {
    let node = this.state.treeNode;
    if (field == 'title') node.title = value;
    if (field == 'type') node.type = value;
    this.setState({ treeNode: node });
  };
}
