import React, {Component} from 'react';

import JTreeViewB from './../common/jTreeViewB';

class JumpListRender extends Component {
	render() {
		var options = {
			icon: {sun: 1, leaf: 2, snow: 3},
			typeName: ['node', 'nodeLevel']
		};
		return (
			<div>
				<JTreeViewB data={this.props.data} options={options} titleClick={this.props.clickHandler} />
			</div>
		);
	}
}

export default class JumpList extends JumpListRender {}
