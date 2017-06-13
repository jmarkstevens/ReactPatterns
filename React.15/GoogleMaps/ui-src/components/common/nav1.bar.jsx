import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {appNavMenuAction} from '../../store/app/app.actions';
import AppColors from './app.colors';

let NavBarSty = {
  background: AppColors.siWhiteWhite,
  lineHeight: '3.2em',
  overflow: 'hidden',
  padding: '0px'
};

let spanSty = {
  color: AppColors.siBlack,
  cursor: 'pointer',
  fontFamily: "'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'sans-serif'",
  fontSize: '1.5em',
  fontWeight: '500',
  display: 'inline-block',
  WebkitTransform: 'scale(1.5,1)',
  MozTransform: 'scale(1.5,1)',
  MsTransform: 'scale(1.5,1)',
  OTransform: 'scale(1.5,1)',
  transform: 'scale(1.5,1)'
};

const sinetImgSty = {
  display: 'block',
  height: '40px',
  margin: 'auto 10px',
  width: '105px'
};

const spanSpacerSty = {padding: '0 3em'};

const NavBar = props => {
  const onMouseEnter = event => {
    if (props.navEnter) props.navEnter(event.target.id);
  };
  const onMouseLeave = event => {
    if (props.navLeave) props.navLeave(event.target.id);
  };
  const navClick = event => {
    props.appNavMenuAction(event.target.id);
    if (props.navEnter) props.navEnter('');
  };
  let SelectedSty = Object.assign({}, spanSty);
  SelectedSty.color = AppColors.siOrangeLite;

  let dashboardSty = props.fromPage === 'dashboard' ? SelectedSty : Object.assign({}, spanSty);
  let hideMapPageSty = props.fromPage === 'hideMapPage' ? SelectedSty : Object.assign({}, spanSty);

  return (
    <div id="NavBarSty" className="FlexBox" style={NavBarSty}>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span
        id="dashboard"
        style={dashboardSty}
        onClick={navClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Map Page
      </span>
      <span style={spanSpacerSty}>&nbsp;</span>
      <span
        id="hideMapPage"
        style={hideMapPageSty}
        onClick={navClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Hide Map Page
      </span>
      <span style={spanSpacerSty}>&nbsp;</span>
    </div>
  );
};

function mapStateToProps(store) {
  return {appState: store.appState};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavMenuAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
