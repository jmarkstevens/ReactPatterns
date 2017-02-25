import React from 'react';
import {connect} from 'react-redux';

import NavBar from './common/nav.bar';

import Button from './Button/button.page';
import DropDowns from './DropDowns/dropdown.page';
import FormInput from './FormInput/input.page';
import Gallery from './Gallery/gallery.page';
import List from './List/list.page';
import PageIndicator from './PageIndicator/indicator.page';
import ProgressBar from './ProgressBar/progress.page';
import Sliders from './Sliders/sliders.page';
import Tooltip from './Tooltip/tooltip.page';
import TreeViews from './TreeViews/treeview.page';

let AppCtrlSty = {
  height: '100%',
  margin: '0px',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

function AppCtrl({appState}) {
  let page = appState.currentPage;

  let hideButton = (page != 'Button');
  let hideDropDowns = (page != 'DropDowns');
  let hideFormInput = (page != 'FormInput');
  let hideGallery = (page != 'Gallery');
  let hideList = (page != 'List');
  let hidePageIndicator = (page != 'PageIndicator');
  let hideProgressBar = (page != 'ProgressBar');
  let hideSliders = (page != 'Sliders');
  let hideTooltip = (page != 'Tooltip');
  let hideTreeViews = (page != 'TreeViews');

  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      <NavBar fromPage={page} />
      <Button hide={hideButton} />
      <DropDowns hide={hideDropDowns} />
      <FormInput hide={hideFormInput} />
      <Gallery hide={hideGallery} />
      <List hide={hideList} />
      <PageIndicator hide={hidePageIndicator} />
      <ProgressBar hide={hideProgressBar} />
      <Sliders hide={hideSliders} />
      <Tooltip hide={hideTooltip} />
      <TreeViews hide={hideTreeViews} />
    </div>
  );
}

function mapStateToProps(store) { return {appState: store.appState}; }

export default connect(mapStateToProps)(AppCtrl);
