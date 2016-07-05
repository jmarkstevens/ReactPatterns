import React from 'react';

import Actions from '../flux/Actions';
import AppNotes from './app.notes';
import AppStore from '../flux/App.Store';
import FilterCtrl from './filter.ctrl';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

let columnSty = {
  height: 'calc(100% - 10px)',
  overflow: 'auto',
  paddingLeft: '0px',
  width: '330px'
}

let getState = function() { return {hoverValues: AppStore.getHoverValues(), filterList: AppStore.getFilterList()}; };

class AppCtrlRender extends React.Component {
   render() {
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 15 Range slider and Tooltip<br/><br/>
        <div id='columnSty' style={columnSty}>
          <FilterCtrl filterList={this.state.filterList} hoverValues={this.state.hoverValues} />
        </div>
        <AppNotes/>
      </div>
    );
  }
}

export default class AppCtrl extends AppCtrlRender {
  state = getState();

  componentDidMount = () => {
    this.unsubscribe = AppStore.listen(this.storeDidChange);
    Actions.setFilterOptions();
  };
  componentWillUnmount = () => { this.unsubscribe(); };
  storeDidChange = () => { this.setState(getState()); };
}
