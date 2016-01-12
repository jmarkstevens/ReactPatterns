var React = require('react');
var BasicStore = require('./../flux/Basic.Store');

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

function AppCtrlRender() {
	var data = this.state.Data;
	data = JSON.stringify(data, null, 2);
	return (
		<div id='AppCtrlSty' style={AppCtrlSty}>
			React 0.12 ReFlux with WebSocket<br/><br/>
			{data}
		</div>
	);
}

var getState = function() { return {Data: BasicStore.getData(),}; };

var AppCtrl = React.createClass({
	getInitialState: function() { return getState(); },

	componentDidMount: function () { this.unsubscribe = BasicStore.listen(this.storeDidChange); },
	componentWillUnmount: function () { this.unsubscribe(); },
	storeDidChange: function() { this.setState(getState()); },

	render: AppCtrlRender
});
module.exports = AppCtrl;
