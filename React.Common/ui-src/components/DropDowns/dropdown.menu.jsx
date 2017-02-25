import React from 'react';

import JDropMenu from '../common/DropDowns/jDropMenu';

let DropDownMenuSty = {
  fontSize: '1.2em',
  padding: '2px 2px 0 0',
  position: 'relative',
  right: '0px',
  top: '0px'
};

let options = [
  {value: 'new', label: 'New'},
  {value: 'edit', label: 'Edit'},
  {type: 'seperator', key: '100'},
  {value: 'moveUp', label: 'Move up'},
  {value: 'moveDown', label: 'Move down'},
  {type: 'seperator', key: '101'},
  {value: 'rename', label: 'Rename'},
  {type: 'seperator', key: '102'},
  {value: 'remove', label: 'Remove'}
];

export default class DropDownMenu extends React.Component {
  state = {option: {}};
  onSelect = (option) => { this.setState({option}); };
  render() {
    let optionLabel = this.state.option.label;
    let optionValue = this.state.option.value;
    return (
      <div style={{minHeight: '300px'}}>
        <div id="DropDownMenu" style={DropDownMenuSty}>
          <JDropMenu options={options} onChange={this.onSelect} />
        </div>
        Label: {optionLabel}<br />
        Value: {optionValue}
        <br /><br /><br />
      </div>
    );
  }
}
