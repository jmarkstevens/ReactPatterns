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
  
  let cacheSty = props.fromPage === 'cache' ? SelectedSty : SpanSty;
  let eventSty = props.fromPage === 'event' ? SelectedSty : SpanSty;
  let homeSty = props.fromPage === 'home' ? SelectedSty : SpanSty;
  let objectSty = props.fromPage === 'object' ? SelectedSty : SpanSty;
  let radiumSty = props.fromPage === 'radium' ? SelectedSty : SpanSty;

  return (
    <div id="NavBarSty" className="FlexBoxCenter" style={NavBarSty}>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span id="home" style={homeSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Home</span>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span id="event" style={eventSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Window Event</span>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span id="object" style={objectSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Window Object</span>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span id="radium" style={radiumSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Radium</span>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span id="cache" style={cacheSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Cache</span>
      <span style={spanSpacerSty}>&nbsp;</span>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavMenuAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
