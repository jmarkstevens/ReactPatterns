import React from 'react';

import AppNotes from './app.notes';
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

let progressData = {count: 120};

class AppCtrlRender extends React.Component {
  render() {
    progressData.index = this.state.progressIndex;
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 15 ProgressBar<br/><br/>
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
        <JProgressBar data={progressData} indexColor='#304030' />
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
        <AppNotes/>
      </div>
    );
  }
}

export default class AppCtrl extends AppCtrlRender {
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
    this.setState({progressIndex: newIndex})
  };
}
