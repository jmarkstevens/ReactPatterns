import React from 'react';

import JPageIndicator from '../common/PageIndicator/jPageIndicator';

import AppStyle from '../common/app.style';
import IndicatorPop from './indicator.pop';

import IndicatorStyle from './indicator.style';
import IndicatorText from './indicator.text';

const pageNumber = 4;

export default class IndicatorPage extends React.Component {
  state = {page: 1, hideNote: false};
  _handlePageIndicatorClick = (index) => {
    if (this.state.page !== (index + 1)) this.setState({page: index + 1});
  }
  showNoteHandler = () => { this.setState({hideNote: !this.state.hideNote}); }
  render() {

    if (this.props.hide) return null;
    let currentPage = this.state.page;
    let noteText;
    switch (currentPage) {
      case 1: noteText = IndicatorText.note1; break;
      case 2: noteText = IndicatorText.note2; break;
      case 3: noteText = IndicatorText.note3; break;
      case 4: noteText = IndicatorText.note4; break;
    }

    
    let bottomBtnDivSty = Object.assign({}, AppStyle.bottomBtnDivSty);
    bottomBtnDivSty.display = currentPage < pageNumber ? 'block' : 'none';
    let topBtnDivSty = Object.assign({}, AppStyle.topBtnDivSty);
    topBtnDivSty.top = '50px';
    
    let pageDesc = `Page ${currentPage} of ${pageNumber}`;
    return (
      <div id="IndicatorPage" className="contentPage" style={IndicatorStyle.IndicatorPageSty}>
        <IndicatorPop hide={this.state.hideNote} subText={noteText} />
        <div style={topBtnDivSty}>
          {pageDesc}
          <JPageIndicator activeIndex={currentPage - 1} count={4} onClick={this._handlePageIndicatorClick} />
        </div>
      </div>
    );
  }
}
