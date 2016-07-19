import React from 'react';

import AppNotes from './app.notes';
import DropDownMenu from './dropdown.menu';
import DropDownSelect from './dropdown.select';

let AppCtrlSty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px 0 0'
}

let DropDownSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  paddingLeft: '0px',
  width: '33%'
}

export default class AppCtrl extends React.Component {
   render() {
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 15 DropDown<br/><br/>
        <div id='menuColumns' className='FlexBox' style={{height: '100%'}}>
          <div id='DropDownMenu' style={DropDownSty}>
            <DropDownMenu />
          </div>
          <div id='DropDownSelect' style={DropDownSty}>
            <DropDownSelect />
          </div>
        </div>
        <AppNotes/>
      </div>
    );
  }
}
