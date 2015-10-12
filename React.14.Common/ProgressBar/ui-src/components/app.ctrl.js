import React, {Component} from 'react';

import JButton from './common/jButton';
import JProgressBar from './common/jProgressBar';

let AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

let customCountSty = {
	backgroundColor: '#33045B',
	height: '5px',
	marginRight: '5px',
	marginTop: '6px',
	width: '100%'
}

let customIndexSty = {backgroundColor: '#874C08', height: '5px', width: '1%'}

let firstItemBtn = {buttonid: "first", icon: 'fa fa-fast-backward fa-lg', style: "BtnImg"};
let previousItemBtn = {buttonid: "previous", icon: 'fa fa-backward fa-lg', style: "BtnImg"};

let nextItemBtn = {buttonid: "next", icon: 'fa fa-forward fa-lg', style: "BtnImg"};
let lastItemBtn = {buttonid: "last", icon: 'fa fa-fast-forward fa-lg', style: "BtnImg"};

let ButtonAreaSty = {
	fontSize: '.9em',
	height: '24px',
	marginBottom: '10px',
	marginTop: '10px',
	verticalAlign: 'middle'
};

let progressData = {count: 100, index: 0};

class AppCtrlRender extends Component {
	render() {
		progressData.index = this.state.progressIndex;
		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				React 1.4 ProgressBar<br/><br/>
				<br/>default<br/><br/>
				<JProgressBar data={progressData} />
				<br/>center<br/><br/>
				<JProgressBar data={progressData} position='center' />
				<br/>after<br/><br/>
				<JProgressBar data={progressData} position='after' />
				<br/>before<br/><br/>
				<JProgressBar data={progressData} position='before' />
				<br/>beforenafter<br/><br/>
				<JProgressBar data={progressData} position='beforenafter' />
				<br/>none<br/><br/>
				<JProgressBar data={progressData} position='none' />
				<br/>indexColor<br/><br/>
				<JProgressBar data={progressData} indexColor='#fff' />
				<br/>countColor<br/><br/>
				<JProgressBar data={progressData} countColor='#000' />
				<br/>customStyle<br/><br/>
				<JProgressBar data={progressData} countSty={customCountSty} indexSty={customIndexSty} />
				<br/><br/>
				<div id='ButtonAreaSty' className="FlexBox" style={ButtonAreaSty}>
					<JButton btn={firstItemBtn} parentClickHandler={this.clickHandler} />
					&nbsp;
					<JButton btn={previousItemBtn} parentClickHandler={this.clickHandler} />
					<JButton btn={nextItemBtn} parentClickHandler={this.clickHandler} />
					&nbsp;
					<JButton btn={lastItemBtn} parentClickHandler={this.clickHandler} />
				</div>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() {
		super();
		this.state = {progressIndex: 0};
	}
	clickHandler = (buttonid) => {
		let newIndex = this.state.progressIndex;
		switch (buttonid) {
			case 'first': newIndex = 0; break;
			case 'previous': newIndex -= newIndex > 0 ? 1 : 0; break;
			case 'next': newIndex += newIndex < 99 ? 1 : 0; break;
			case 'last': newIndex = 99; break;
		}
		this.setState({progressIndex: newIndex})
	}
}
