import React, {Component} from 'react';

class TreeDetailRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var title = this.state.title;
		return (
			<div className="treeDetail">
				<input
					type='text'
					ref='detailTitle'
					className='detailTitle'
					value={title}
					onChange={this.handleTitleChange} />
			</div>
		);
	}
}

export default class TreeDetail extends TreeDetailRender {
	constructor() { 
	  super();
		this.state = {title: 'Hello!'}; 
	  this.binder('handleTitleChange');
	}

	componentWillReceiveProps(nextProps) {
		this.refs.detailTitle.getDOMNode().focus();
		this.setState({title: nextProps.treeNode.title})
	}
	handleTitleChange(event) { this.props.handleChange(event, 'title'); }
}
