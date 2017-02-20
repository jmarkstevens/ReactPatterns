import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {treeActions} from '../../store/tree.Actions';
import JButton from '../common/jButton';

const TreeMenuSty = {
  fontSize: '.9em',
  height: '40px',
  marginBottom: '10px',
  textAlign: 'center',
  verticalAlign: 'middle'
};

const newBtn = {buttonid: 'new', icon: 'fa fa-file-text-o fa-2x', style: 'BtnImg', assignStyle: {color: '#419079'}};
const editBtn = {buttonid: 'edit', icon: 'fa fa-pencil fa-2x', style: 'BtnImg'};
const moveUpBtn = {buttonid: 'moveUp', icon: 'fa fa-arrow-up fa-2x', style: 'BtnImg'};
const moveDownBtn = {buttonid: 'moveDown', icon: 'fa fa-arrow-down fa-2x', style: 'BtnImg'};
const removeBtn = {buttonid: 'remove', icon: 'fa fa-trash-o fa-2x', style: 'BtnImg'};

class TreeMenu extends React.Component {
  onSelect = (btn) => { this.props.treeActions(btn); };
  render() {
    return (
      <div id="TreeMenuSty" style={TreeMenuSty}>
        <JButton btn={newBtn} parentClickHandler={this.onSelect} />
        &nbsp;
        <JButton btn={editBtn} parentClickHandler={this.onSelect} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <JButton btn={moveUpBtn} parentClickHandler={this.onSelect} />
        &nbsp;
        <JButton btn={moveDownBtn} parentClickHandler={this.onSelect} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <JButton btn={removeBtn} parentClickHandler={this.onSelect} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({treeActions}, dispatch);
}

export default connect(null, mapDispatchToProps)(TreeMenu);
