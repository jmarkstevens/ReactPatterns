import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {appNavMenuAction} from '../../store/app/app.Actions';
import AppColors from './app.colors';

let NavBarSty = {
  background: AppColors.greenery,
  overflow: 'hidden',
  padding: '.5em 0px',
};

let spanSty = {
  color: AppColors.white,
  cursor: 'pointer',
  fontFamily: '\'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', \'sans-serif\'',
  fontSize: '1.5em',
  fontWeight: '500',
  padding: '0px .5em',
};

// let spanSpacerSty = {padding: '0 .5em'};

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
  
  let buttonSty = props.fromPage === 'Button' ? SelectedSty : SpanSty;
  let dropDownsSty = props.fromPage === 'DropDowns' ? SelectedSty : SpanSty;
  let formInputSty = props.fromPage === 'FormInput' ? SelectedSty : SpanSty;
  let gallerySty = props.fromPage === 'Gallery' ? SelectedSty : SpanSty;
  let listSty = props.fromPage === 'List' ? SelectedSty : SpanSty;
  let pageIndicatorSty = props.fromPage === 'PageIndicator' ? SelectedSty : SpanSty;
  let progressBarSty = props.fromPage === 'ProgressBar' ? SelectedSty : SpanSty;
  let slidersSty = props.fromPage === 'Sliders' ? SelectedSty : SpanSty;
  let tooltipSty = props.fromPage === 'Tooltip' ? SelectedSty : SpanSty;
  let treeViewsSty = props.fromPage === 'TreeViews' ? SelectedSty : SpanSty;
  

  return (
    <div id="NavBarSty" className="FlexBoxCenter" style={NavBarSty}>
      <div id="Button" style={buttonSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Button</div>

      <div id="DropDowns" style={dropDownsSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>DropDowns</div>

      <div id="FormInput" style={formInputSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>FormInput</div>

      <div id="Gallery" style={gallerySty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Gallery</div>

      <div id="List" style={listSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>List</div>

      <div id="PageIndicator" style={pageIndicatorSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>PageIndicator</div>

      <div id="ProgressBar" style={progressBarSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>ProgressBar</div>

      <div id="Sliders" style={slidersSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Sliders</div>

      <div id="Tooltip" style={tooltipSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Tooltip</div>

      <div id="TreeViews" style={treeViewsSty} onClick={navClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>TreeViews</div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({appNavMenuAction}, dispatch);
}

export default connect(null, mapDispatchToProps)(NavBar);
