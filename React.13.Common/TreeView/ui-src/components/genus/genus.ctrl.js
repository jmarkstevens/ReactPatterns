import React, {Component} from 'react';

import GenusList from './genus.list';

class GenusCtrlRender extends Component {
 	render() {
		return (
			<div>
				<GenusList data={this.props.genusList} />
			</div>
		);
	}
}

export default class GenusCtrl extends GenusCtrlRender {}
