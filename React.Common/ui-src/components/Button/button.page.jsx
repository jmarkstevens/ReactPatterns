import React from 'react';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import JButton from '../common/Button/jButton';

let ButtonPageSty = {
  backgroundColor: '#bbb',
  borderBottom: '3px solid #636b46',
  padding: '20px'
};

let customSty = {
  backgroundColor: '#4d2c3d',
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
};

let customImgSty = {
  backgroundColor: 'transparent',
  cursor: 'pointer',
  margin: '0px',
  outline: 'none',
  whiteSpace: 'nowrap'
};

let assignSty = {minWidth: '1px', color: '#4d2c3d'};

let basicBtn = {buttonid: 'basic', text: 'Basic'};
let basicBtn18 = {buttonid: 'basic18', text: 'Basic18', style: 'Btn18'};
let basicBtn24 = {buttonid: 'basic24', text: 'Basic24', style: 'Btn24'};
let basicBtn30 = {buttonid: 'basic30', text: 'Basic30', style: 'Btn30'};
let basicBtn40 = {buttonid: 'basic40', text: 'Basic40', style: 'Btn40'};

let basicBtnAssign = {buttonid: 'basicAssign', text: 'Assign', assignStyle: assignSty};
let basicBtnCst = {buttonid: 'basicCustom', text: 'Custom', reStyle: customSty};
let imageBtnCst = {buttonid: 'imageBtnCst', reStyle: customImgSty};

let basicBackImgBtn = {
  buttonid: 'basicBackImg',
  backimg: "url('./img/sun.ico') 0/30px",
  style: 'BackImg',
  assignStyle: {height: '30px', width: '30px'}
};
let basicBackImg2Btn = {
  buttonid: 'basicBackImg2',
  backimg: "url('./img/SLogoS5-48_C.png') 0/40px",
  style: 'BackImg',
  assignStyle: {height: '40px', width: '40px'}
};

let basicBackImg3Btn = {
  buttonid: 'basicBackImg',
  backimg: "url('./img/flow.png') 0/30px",
  style: 'BackImg',
  assignStyle: {height: '30px', width: '30px'}
};
let basicBackImg4Btn = {
  buttonid: 'basicBackImg2',
  backimg: "url('./img/flow.png') 0/40px",
  style: 'BackImg',
  assignStyle: {height: '40px', width: '40px'}
};

let basicIcon1Btn = {
  buttonid: 'basicIcon1',
  icon: 'fa fa-arrow-circle-o-up fa-1x',
  assignStyle: {height: '50px'}
};
let basicIcon2Btn = {buttonid: 'basicIcon2', icon: 'fa fa-arrow-circle-o-up fa-2x', style: 'BtnIcon'};
let basicIcon3Btn = {buttonid: 'basicIcon3', icon: 'fa fa-arrow-circle-o-up fa-3x'};

let spacerSpanSty = {margin: '0 10px'};

export default class ButtonPage extends React.Component {
  state = {clicked: 'click a button'};
  clickHandler = buttonid => {
    this.setState({clicked: 'clickHandler buttonid: ' + buttonid});
  };
  render() {
    if (this.props.hide) return null;
    let clickResponse = this.state.clicked;
    return (
      <div id="ButtonPage" className="contentPage" style={ButtonPageSty}>
        <br /><br />
        <JButton id="basicBtn" btn={basicBtn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBtn18} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBtn24} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBtn30} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBtn40} parentClickHandler={this.clickHandler} />
        <br /><br /><br />
        <JButton btn={basicBtnAssign} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBtnCst} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBackImgBtn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBackImg2Btn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicIcon1Btn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicIcon2Btn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicIcon3Btn} parentClickHandler={this.clickHandler} />
        <br /><br />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBackImg3Btn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <JButton btn={basicBackImg4Btn} parentClickHandler={this.clickHandler} />
        <span style={spacerSpanSty}>&nbsp;</span>
        <br /><br />
        <br /><br />
        {clickResponse}
        <AppNotes AppText={AppText.p1Text} />
      </div>
    );
  }
}
