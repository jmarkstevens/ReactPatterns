import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AppNotes from './app.notes';
import {apiSetData} from '../store/Actions';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

class AppCtrl extends React.Component {
  componentWillMount = () => {
    let newData = {
      'React version': '15',
      'Project': 'Redux with Electron',
      'currentDateTime': new Date().toLocaleString()
    };
    this.props.apiSetData(newData);
  };
  render() {
    let data1 = this.props.Data1;
    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        React Version: {data1['React version']}<br /><br />
        Project: {data1.Project}<br /><br />
        Current date/time: {data1.currentDateTime}<br /><br />
        <AppNotes />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {Data1: store.data1};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({apiSetData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCtrl);
