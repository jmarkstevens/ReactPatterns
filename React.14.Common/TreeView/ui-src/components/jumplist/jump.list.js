import React, {Component} from 'react';

import JTreeViewB from './../common/jTreeViewB';

export default class JumpList extends Component {
	render() {
		let options = {
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
