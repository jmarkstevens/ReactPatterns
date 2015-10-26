import React from 'react';

import DropDownMenu from './dropdown.menu';
import DropDownSelect from './dropdown.select';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

let DropDownSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 10px)',
	overflow: 'auto',
	paddingLeft: '0',
	width: '33%'
}

class AppCtrlRender extends React.Component {
 	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 DropDown<br/><br/>
				<div id='menuColumns' className='FlexBox' style={{height: '100%'}}>
					<div id='DropDownMenu' style={DropDownSty}>
						<DropDownMenu />
					</div>
					<div id='DropDownSelect' style={DropDownSty}>
						<DropDownSelect />
					</div>
				</div>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {}
