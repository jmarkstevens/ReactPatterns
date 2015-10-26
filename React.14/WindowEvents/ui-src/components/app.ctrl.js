import React from 'react';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

class AppCtrlRender extends React.Component {
	render() {
		let keycode = this.state.keyCode;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 Window events<br /><br />
				Key code: {keycode}
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
		super();
		this.state = {keyCode: 0};
	}
	componentDidMount = () => {
		ReactDom.findDOMNode(this).offsetParent.addEventListener('keydown', this.keyDownListener);
	}
	componentWillUnmount = () => {
		ReactDom.findDOMNode(this).offsetParent.removeEventListener('keydown', this.keyDownListener);
	}
	keyDownListener = (event) => {
		let intKey = (window.Event) ? event.which : event.keyCode;
		this.setState({keyCode: intKey});
	}
}
