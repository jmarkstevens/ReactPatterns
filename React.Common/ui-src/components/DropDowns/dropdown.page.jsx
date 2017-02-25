import React from 'react';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import DropDownMenu from './dropdown.menu';
import DropDownSelect from './dropdown.select';
import JMultiSelect from './multi.select';

let DropDownsSty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px 0 0'
};

let DropDownSty = {
  border: 'solid 1px darkslategrey',
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  padding: '10px',
  width: '33%'
};

const ColumnsSty = {
  height: '100%',
};

export default function DropDowns(props) {
  if (props.hide) return null;
  return (
    <div id="DropDowns" className="contentPage" style={DropDownsSty}>
      <br /><br />
      <div id="Columns" className="FlexBox" style={ColumnsSty}>
        <div id="DropDownMenu" style={DropDownSty}>
          <DropDownMenu />
        </div>
        <div id="DropDownSelect" style={DropDownSty}>
          <DropDownSelect />
        </div>
        <div id="MultiSelect" style={DropDownSty}>
          <JMultiSelect />
        </div>
      </div>
      <AppNotes AppText={AppText.p1Text} />
    </div>
  );
}
