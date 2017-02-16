import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {appNavMenuAction} from '../../store/app/app.Actions';
import AppColors from './app.colors';

let NavBarSty = {
  background: AppColors.greenery,
  lineHeight: '3em',
  overflow: 'hidden',
  padding: '0px',
};

let spanSty = {
  color: AppColors.white,
  cursor: 'pointer',
  fontFamily: '\'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', \'sans-serif\'',
  fontSize: '1.5em',
  fontWeight: '500',
  display: 'inline-block',
  WebkitTransform: 'scale(1.5,1)',
  MozTransform: 'scale(1.5,1)',
  MsTransform: 'scale(1.5,1)',
  OTransform: 'scale(1.5,1)',
  transform: 'scale(1.5,1)'
};

let spanSpacerSty = {padding: '0 2em'};

class NavBar extends React.Component {
  state = {targetID: 'none'};
  onMouseEnter = (event) => { if (this.props.navEnter) this.props.navEnter(event.target.id); };
  onMouseLeave = (event) => { if (this.props.navLeave) this.props.navLeave(event.target.id); };
  navClick = (event) => {
    this.props.appNavMenuAction(event.target.id);
    if (this.props.navEnter) this.props.navEnter('');
  };
  render() {
    let SpanSty = Object.assign({}, spanSty);
    let SelectedSty = Object.assign({}, SpanSty);
    SelectedSty.color = AppColors.mint;
    
    let examplesSty = this.props.fromPage === 'examples' ? SelectedSty : SpanSty;
    let homeSty = this.props.fromPage === 'home' ? SelectedSty : SpanSty;
    let aboutSty = this.props.fromPage === 'about' ? SelectedSty : SpanSty;
    

    return (
      <div id="NavBarSty" className="FlexBox FlexBoxJustBetween" style={NavBarSty}>
        <div className="FlexBox">
          <span style={spanSpacerSty}>&nbsp;</span>
          <span id="home" style={homeSty} onClick={this.navClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Home</span>
          <span style={spanSpacerSty}>&nbsp;</span>
          <span id="examples" style={examplesSty} onClick={this.navClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>Examples</span>
          <span style={spanSpacerSty}>&nbsp;</span>
          <span id="about" style={aboutSty} onClick={this.navClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>about</span>
          <span style={spanSpacerSty}>&nbsp;</span>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavMenuAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
