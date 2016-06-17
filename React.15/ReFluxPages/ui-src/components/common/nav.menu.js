import React from 'react';

import Actions from '../../flux/Actions';
import JDropMenu from './jDropMenu';

let NavMenuSty = {
  fontSize: '1.2em',
  padding: '8px 8px 0 0',
  position: 'absolute',
  right: '0px',
  top: '0px'
};

export default class NavMenu extends React.Component {
  onSelect = (option) => { Actions.appActions(option.value); };
  render() {
    let options = [
      { value: 'home', label: 'Home' },
      { value: 'about', label: 'About' }
    ];

    return (
      <div style={NavMenuSty}>
        <JDropMenu options={options} onChange={this.onSelect} />
      </div>
    )
  }
}
