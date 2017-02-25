import React from 'react';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import JButton from '../common/Button/jButton';
import JProgressBar from '../common/ProgressBar/jProgressBar';

let ProgressBarSty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px 0 0'
};

let customCountSty = {
  backgroundColor: '#33045B',
  height: '5px',
  marginRight: '5px',
  marginTop: '6px',
  width: '100%'
};

let customIndexSty = {backgroundColor: '#874C08', height: '5px', width: '1%'};
let assignSty = {color: '#4d2c3d'};

let firstItemBtn = {buttonid: 'first', icon: 'fa fa-fast-backward fa-lg', style: 'BtnImg', assignStyle: assignSty};
let previousItemBtn = {buttonid: 'previous', icon: 'fa fa-backward fa-lg', style: 'BtnImg', assignStyle: assignSty};

let nextItemBtn = {buttonid: 'next', icon: 'fa fa-forward fa-lg', style: 'BtnImg', assignStyle: assignSty};
let lastItemBtn = {buttonid: 'last', icon: 'fa fa-fast-forward fa-lg', style: 'BtnImg', assignStyle: assignSty};

let ButtonAreaSty = {
  fontSize: '.9em',
  height: '24px',
  marginBottom: '10px',
  marginTop: '10px',
  verticalAlign: 'middle'
};

let progressData = {count: 120};

export default class ProgressBar extends React.Component {
  state = {progressIndex: 10};
  clickHandler = (buttonid) => {
    let oldIndex = this.state.progressIndex;
    let newIndex = oldIndex;
    switch (buttonid) {
      case 'first': newIndex = 1; break;
      case 'previous': newIndex -= oldIndex > 1 ? 1 : 0; break;
      case 'next': newIndex += oldIndex < progressData.count ? 1 : 0; break;
      case 'last': newIndex = progressData.count; break;
    }
    this.setState({progressIndex: newIndex});
  };
  render() {
    if (this.props.hide) return null;
    progressData.index = this.state.progressIndex;
    return (
      <div id="ProgressBar" className="contentPage" style={ProgressBarSty}>
        <br /><br />
        <br />default<br /><br />
        <JProgressBar data={progressData} />
        <br />center<br /><br />
        <JProgressBar data={progressData} position="center" />
        <br />after<br /><br />
        <JProgressBar data={progressData} position="after" />
        <br />before<br /><br />
        <JProgressBar data={progressData} position="before" />
        <br />beforenafter<br /><br />
        <JProgressBar data={progressData} position="beforenafter" />
        <br />none<br /><br />
        <JProgressBar data={progressData} position="none" />
        <br />indexColor<br /><br />
        <JProgressBar data={progressData} indexColor="#155765" />
        <br />countColor<br /><br />
        <JProgressBar data={progressData} countColor="#155765" />
        <br />customStyle<br /><br />
        <JProgressBar data={progressData} countSty={customCountSty} indexSty={customIndexSty} />
        <br /><br />
        <div id="ButtonAreaSty" className="FlexBox" style={ButtonAreaSty}>
          <JButton btn={firstItemBtn} parentClickHandler={this.clickHandler} />
          &nbsp;
          <JButton btn={previousItemBtn} parentClickHandler={this.clickHandler} />
          <JButton btn={nextItemBtn} parentClickHandler={this.clickHandler} />
          &nbsp;
          <JButton btn={lastItemBtn} parentClickHandler={this.clickHandler} />
        </div>
        <AppNotes AppText={AppText.p1Text} />
      </div>
    );
  }
}
