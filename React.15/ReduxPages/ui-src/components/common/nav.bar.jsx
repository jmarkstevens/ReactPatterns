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

const NavBar = (props) => {
  const onMouseEnter = (event) => { if (props.navEnter) props.navEnter(event.target.id); };
  const onMouseLeave = (event) => { if (props.navLeave) props.navLeave(event.target.id); };
  const navClick = (event) => {
    props.appNavMenuAction(event.target.id);
    if (props.navEnter) props.navEnter('');
  };
  let SpanSty = Object.assign({}, spanSty);
  let SelectedSty = Object.assign({}, SpanSty);
  SelectedSty.color = AppColors.mint;
  
  let examplesSty = props.fromPage === 'examples' ? SelectedSty : SpanSty;
  let homeSty = props.fromPage === 'home' ? SelectedSty : SpanSty;
  let aboutSty = props.fromPage === 'about' ? SelectedSty : SpanSty;
  

  return (
    <div id="NavBarSty" className="FlexBox FlexBoxJustBetween" style={NavBarSty}>
      <div className="FlexBox">
        <span style={spanSpacerSty}>&nbsp;</span>
        <span id="home" style={homeSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Home</span>
        <span style={spanSpacerSty}>&nbsp;</span>
        <span id="examples" style={examplesSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Examples</span>
        <span style={spanSpacerSty}>&nbsp;</span>
        <span id="about" style={aboutSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>about</span>
        <span style={spanSpacerSty}>&nbsp;</span>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavMenuAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
