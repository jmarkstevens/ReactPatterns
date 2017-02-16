import React from 'react';

import JButton from '../common/jButton';
import NavBar from '../common/nav.bar';
import JPageIndicator from '../common/mxPageIndicator/jPageIndicator';

import AppStyle from '../common/app.style';
import ExamplesPop from './examples.pop';

import ExamplesStyle from './examples.style';
import ExamplesText from './examples.text';

const useTest = 0;
const testOrNot = useTest ? 'test.' : '';
const srcUrl1 = `http://${testOrNot}palminfo.org`;
const srcUrl2 = `http://${testOrNot}codeviewer.calitek.com`;
// const srcUrl3 = `http://${testOrNot}gallery.jmarkstevens.com`;
const srcUrl3 = `http://${testOrNot}clippets.calitek.com`;

const pageNumSty = {position: 'absolute', top: '0', right: '400px', zIndex: '5'};
const pageDescSty = {color: '#eee', margin: '0 7px', paddingTop: '5px'};

const showNoteBtn = {buttonid: 'hideNote', text: 'Show Notes'};
const hideNoteBtn = {buttonid: 'hideNote', text: 'Hide Notes'};
const noteBtnsSty = {position: 'absolute', top: '3px', right: '250px', zIndex: '5'};

const pageNumber = 3;

export default class examplePage extends React.Component {
  state = {page: 1, hideNote: false};
  _handlePageIndicatorClick = (index) => {
    if (this.state.page !== (index + 1)) this.setState({page: index + 1});
  }
  showNoteHandler = () => { this.setState({hideNote: !this.state.hideNote}); }
  render() {

    if (this.props.hide) return null;
    let iframeSty = Object.assign({}, ExamplesStyle.iFrameSty);
    iframeSty.height = window.innerHeight * .968;
    let iFrameDivSty = Object.assign({}, ExamplesStyle.iframeDivSty);
    iFrameDivSty.height = window.innerHeight * .968;
    let currentPage = this.state.page;
    let currentSrc, noteText;
    switch (currentPage) {
      case 1: currentSrc = srcUrl1; noteText = ExamplesText.note1; break;
      case 2: currentSrc = srcUrl2; noteText = ExamplesText.note2; break;
      case 3: currentSrc = srcUrl3; noteText = ExamplesText.note3; break;
      // case 4: currentSrc = srcUrl4; noteText = ExamplesText.note4; break;
    }

    let showNoteBtnSty = this.state.hideNote ? {} : {display: 'none'};
    let hideNoteBtnSty = this.state.hideNote ? {display: 'none'} : {};
    
    let bottomBtnDivSty = Object.assign({}, AppStyle.bottomBtnDivSty);
    bottomBtnDivSty.display = currentPage < pageNumber ? 'block' : 'none';
    let topBtnDivSty = Object.assign({}, AppStyle.topBtnDivSty);
    topBtnDivSty.top = '5px';
    
    let pageDesc = `Page ${currentPage} of ${pageNumber}`;
    return (
      <div id="ExamplesPageSty" style={ExamplesStyle.ExamplesPageSty}>
        <div id="navBarDiv" ref={(ref) => { this.navBarRef = ref; }}><NavBar fromPage="examples" /></div>
        <div id="iFrameDiv" style={iFrameDivSty}>
          <iFrame id="iFrame" src={currentSrc} style={iframeSty} />
        </div>
        <div id="pageNum" style={pageNumSty}>
          <div id="pageDesc" style={pageDescSty}>{pageDesc}</div>
        </div>
        <div id="showNoteBtns" style={noteBtnsSty}>
          <div id="showNoteBtn" style={showNoteBtnSty}>
            <JButton btn={showNoteBtn} parentClickHandler={this.showNoteHandler} />
          </div>
          <div id="hideNoteBtn" style={hideNoteBtnSty}>
            <JButton btn={hideNoteBtn} parentClickHandler={this.showNoteHandler} />
          </div>
        </div>
        <ExamplesPop hide={this.state.hideNote} subText={noteText} />
        <div style={topBtnDivSty}>
          {pageDesc}
          <JPageIndicator activeIndex={currentPage - 1} count={3} onClick={this._handlePageIndicatorClick} />
        </div>
      </div>
    );
  }
}
