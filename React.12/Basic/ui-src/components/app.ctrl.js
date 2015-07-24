var React = require('react');

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

function AppCtrlRender() {
	return (
		<div id='AppCtrlSty' style={AppCtrlSty}>
			AppCtrl Basic
		</div>
	);
}

var AppCtrl = React.createClass({ render: AppCtrlRender });
module.exports = AppCtrl;

