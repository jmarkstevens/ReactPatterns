import React, {Component} from 'react';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var keycode = this.state.keyCode;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.3 Window events<br /><br />
				Key code: {keycode}
			</div>
		);
	}
}

function keyDownListener(event) {
	var intKey = (window.Event) ? event.which : event.keyCode;
	this.setState({keyCode: intKey});
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
		super();
		this.state = {keyCode: 0};
		this.keyDownListener = keyDownListener;
	  this.binder('keyDownListener');
	}
	componentDidMount() {
		React.findDOMNode(this).offsetParent.addEventListener('keydown', this.keyDownListener);
	}
	componentWillUnmount() {
		React.findDOMNode(this).offsetParent.removeEventListener('keydown', this.keyDownListener);
	}
}
