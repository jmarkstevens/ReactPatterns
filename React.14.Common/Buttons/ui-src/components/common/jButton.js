import React, {Component} from 'react';
import lodash from 'lodash';

let standardBtnSty = {
	backgroundColor: '#9a6',
	borderBottomColor: '#cea',
	borderLeftColor: '#93a363',
	borderRightColor: '#cea',
	borderTopColor: '#93a363',
	borderRadius: '6px',
	color: '#eeffee',
	cursor: 'pointer',
	lineHeight: '100%',
	outline: 'none',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap'
};

let standardBtnImg = {
	backgroundColor: 'transparent',
	backgroundImg: 'none',
	backgroundSize: 'contain',
	border: '0',
	color: '#afac87',
	cursor: 'pointer',
	height: 'inherit',
	margin: '0 3px',
	outline: 'none',
	padding: '0',
	verticalAlign: 'middle',
	width: 'inherit'
};

function getStyle(btnProp) {
		let buttonSty = lodash.clone(standardBtnSty);
		let btnStyle = 'Btn30';
		let isDesktop = btnProp.isDesktop ? btnProp.isDesktop : true;
		if (lodash.has(btnProp.btn, 'style')) btnStyle = btnProp.btn.style;
		if (isDesktop) {
			switch (btnStyle) {
				case 'Btn18':
					buttonSty.fontSize = '0.8em';
					buttonSty.height = '18px';
					buttonSty.margin = '0 2px';
					buttonSty.minWidth = '52px';
					buttonSty.padding = '2px';
					break;
				case 'Btn24':
					buttonSty.fontSize = '0.9em';
					buttonSty.height = '24px';
					buttonSty.margin = '0 5px';
					buttonSty.padding = '0.3em';
					break;
				case 'Btn30':
					buttonSty.fontSize = '0.9em';
					buttonSty.height = '30px';
					buttonSty.margin = '0 5px';
					buttonSty.padding = '0.45em';
					break;
				case 'Btn40':
					buttonSty.fontSize = '1.1em';
					buttonSty.height = '40px';
					buttonSty.margin = '0 5px';
					buttonSty.padding = '0.45em .8em';
					break;
				case 'BackImg': buttonSty = lodash.clone(standardBtnImg); buttonSty.background = btnProp.btn.backimg; break;
				case 'BtnImg': buttonSty = standardBtnImg; break;
			}
		} else {
			switch (btnStyle) {
				case 'Btn16':
					buttonSty.height = '24px';
					buttonSty.margin = '0 2px';
					buttonSty.padding = '0.1em 0.3em 0.3em';
					break;
				case 'Btn24':
					buttonSty.height = '30px';
					buttonSty.margin = '0 5px';
					buttonSty.padding = '0.3rem';
					break;
				case 'Btn30':
					buttonSty.fontSize = '1.1em';
					buttonSty.height = '40px';
					buttonSty.margin = '0 5px';
					buttonSty.padding = '0.45em .8em';
					break;
				case 'BtnImg': buttonSty = standardBtnImg; break;
			}
		}
		if (lodash.has(btnProp.btn, 'reStyle')) buttonSty = btnProp.btn.reStyle;
		if (lodash.has(btnProp.btn, 'assignStyle')) buttonSty = lodash.assign(buttonSty, btnProp.btn.assignStyle);
		// if (lodash.has(btnProp, 'selectedId')) {
		// 	var btnID = btnProp.btn.buttonid;
		// 	var selectedId = btnProp.selectedId;
		// 	if (btnID == selectedId) buttonSty.color = "#643970";
		// 	else buttonSty.color = standardBtnSty.color;
		// } else buttonSty.color = standardBtnSty.color;
		return buttonSty;
}

class JButtonRender extends Component {
	render() {
		let buttonSty = getStyle(this.props);
		let renderIt;
		if (lodash.has(this.props.btn, 'img')) {
			renderIt = (
				<button className='HighZ' style={buttonSty} onClick={this.clickHandler}>
					<img src={this.props.btn.img} />
				</button>
			);
		} else if (lodash.has(this.props.btn, 'icon')) {
			renderIt = (
				<button className='HighZ' style={buttonSty} onClick={this.clickHandler}>
					<i className={this.props.btn.icon}></i>
				</button>
			);
		} else {
			renderIt = (
				<button className='HighZ' style={buttonSty} onClick={this.clickHandler}>
					{this.props.btn.text}
				</button>
			);
		}
		return (renderIt);
	}
}

export default class JButton extends JButtonRender {
	clickHandler = () => { if (this.props.parentClickHandler) this.props.parentClickHandler(this.props.btn.buttonid); }
}
