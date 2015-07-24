import React, {Component} from 'react';

import DropDownMenu from './dropdown.menu';
import DropDownSelect from './dropdown.select';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var DropDownSty = {
	border: 'solid 1px darkslategrey',
	height: 'calc(100% - 10px)',
	overflow: 'auto',
	paddingLeft: '0',
	width: '33%'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		return (
			<div id='AppCtrlSty' className='FlexBox' style={AppCtrlSty}>
				<div id='DropDownMenu' style={DropDownSty}>
					<DropDownMenu />
				</div>
				<div id='DropDownSelect' style={DropDownSty}>
					<DropDownSelect />
				</div>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {}

