import React, {Component} from 'react';

import JButton from './common/jButton';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

var customSty = {
	backgroundColor: '#000',
	borderBottomColor: '#cea',
	borderLeftColor: '#93a363',
	borderRightColor: '#cea',
	borderTopColor: '#93a363',
	borderRadius: '6px',
	color: '#fff',
	cursor: 'pointer',
	fontSize: '0.9rem',
	lineHeight: '100%',
	margin: '0 3px',
	outline: 'none',
	whiteSpace: 'nowrap'
}

var assignSty = {minWidth: '1px', color: 'red'}

var basicBtn = { buttonid: "basic", text: "Basic" };
var basicBtn18 = { buttonid: "basic18", text: "Basic18", style: "Btn18" };
var basicBtn24 = { buttonid: "basic24", text: "Basic24", style: "Btn24" };
var basicBtn30 = { buttonid: "basic30", text: "Basic30", style: "Btn30" };
var basicBtn40 = { buttonid: "basic40", text: "Basic40", style: "Btn40" };
var basicIconBtn = { buttonid: "basicIcon", icon: 'fa fa-arrow-circle-o-up fa-2x', style: "BtnImg" };
var basicImgBtn = { buttonid: "basicImg", backimg: "url('./img/sun.ico') 0/30px no-repeat !important", style: "BackImg" };
var basicImg2Btn = { buttonid: "basicImg2", backimg: "url('./img/SLogoS5-48_C.png') 0/40px", style: "BackImg" };
var basicBtnCst = { buttonid: "basicCustom", text: "Custom", reStyle: customSty };
var basicBtnAssign = { buttonid: "basicCustom", text: "Assign", assignStyle: assignSty };

var imgSpanSty = {height: '30px', width: '30px'};
var imgSpanSty4 = {height: '40px', width: '40px'};
var btnDivSty = {height: '40px'};

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				AppCtrl<br/><br/>
				<div id='btnDivSty' style={btnDivSty}>
					<JButton btn={basicBtn} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn18} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn24} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn30} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtnAssign} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtnCst} parentClickHandler={this.clickHandler} />
					<JButton btn={basicIconBtn} parentClickHandler={this.clickHandler} />
					<span id='imgSpanSty' style={imgSpanSty}>
						<JButton btn={basicImgBtn} parentClickHandler={this.clickHandler} />
					</span>
					<span id='imgSpanSty4' style={imgSpanSty4}>
						<JButton btn={basicImg2Btn} parentClickHandler={this.clickHandler} />
					</span>
					<JButton btn={basicBtn40} parentClickHandler={this.clickHandler} />
				</div>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() { super(); this.binder('clickHandler'); }
	clickHandler(buttonid) { console.log('clickHandler buttonid: ', buttonid); }
}

