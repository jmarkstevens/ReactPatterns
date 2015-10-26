import React from 'react';

import JButton from './common/jButton';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

let customSty = {
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

let assignSty = {minWidth: '1px', color: 'red'}

let basicBtn = { buttonid: "basic", text: "Basic" };
let basicBtn18 = { buttonid: "basic18", text: "Basic18", style: "Btn18" };
let basicBtn24 = { buttonid: "basic24", text: "Basic24", style: "Btn24" };
let basicBtn30 = { buttonid: "basic30", text: "Basic30", style: "Btn30" };
let basicBtn40 = { buttonid: "basic40", text: "Basic40", style: "Btn40" };

let basicBtnAssign = { buttonid: "basicAssign", text: "Assign", assignStyle: assignSty };
let basicBtnCst = { buttonid: "basicCustom", text: "Custom", reStyle: customSty };

let basicImgBtn = { buttonid: "basicImg", backimg: "url('./img/sun.ico') 0/30px no-repeat !important", style: "BackImg" };
let basicImg2Btn = { buttonid: "basicImg2", backimg: "url('./img/SLogoS5-48_C.png') 0/40px", style: "BackImg" };
let basicIconBtn = { buttonid: "basicIcon", icon: 'fa fa-arrow-circle-o-up fa-2x', style: "BtnImg" };

let imgSpanSty = {height: '30px', width: '30px'};
let imgSpanSty4 = {height: '40px', width: '40px'};
let btnDivSty = {height: '40px'};

class AppCtrlRender extends React.Component {
	render() {
		let clickResponse = this.state.clicked;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 Buttons<br/><br/>
				<div id='btnDivSty' style={btnDivSty}>
					<JButton btn={basicBtn} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn18} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn24} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn30} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtn40} parentClickHandler={this.clickHandler} />
					<br/><br/>
					<JButton btn={basicBtnAssign} parentClickHandler={this.clickHandler} />
					<JButton btn={basicBtnCst} parentClickHandler={this.clickHandler} />
					<span id='imgSpanSty' style={imgSpanSty}>
						<JButton btn={basicImgBtn} parentClickHandler={this.clickHandler} />
					</span>
					<span id='imgSpanSty4' style={imgSpanSty4}>
						<JButton btn={basicImg2Btn} parentClickHandler={this.clickHandler} />
					</span>
					<JButton btn={basicIconBtn} parentClickHandler={this.clickHandler} />
				</div>
				<br/><br/>
				<br/><br/>
				{clickResponse}
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
		super();
		this.state = {clicked: ''};
	}

	clickHandler = (buttonid) => { this.setState({clicked: 'clickHandler buttonid: ' + buttonid}); }
}
