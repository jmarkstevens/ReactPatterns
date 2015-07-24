import React, {Component} from 'react';

import JumpList from './jump.list';

class JumpCtrlRender extends Component {
 	render() {
		return (
			<div id='JumpCtrl'>
				<JumpList data={this.props.imageList} clickHandler={this.props.clickHandler} />
			</div>
		);
	}
}

export default class JumpCtrl extends JumpCtrlRender {}
