import React, {Component} from 'react';

import GenusList from './genus.list';

export default class GenusCtrl extends Component {
 	render() {
		return (
			<div>
				<GenusList data={this.props.genusList} />
			</div>
		);
	}
}
