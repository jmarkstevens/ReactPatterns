import React from 'react';
import { connect } from 'react-redux';

import AppNotes from './app.notes';
import { apiSetData } from '../store/Actions';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

function mapStateToProps(store) {
  return {
    Data1: store.data1
  };
}

class AppCtrl extends React.Component {
  componentWillMount = () => {
    let newData = {
      "React version": "15",
      "Project": "Redux with Electron",
      "currentDateTime": new Date().toLocaleString()
    }
    this.props.dispatch(apiSetData(newData));
  };
  render() {
    let data1 = this.props.Data1;
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React Version: {data1["React version"]}<br/><br/>
        Project: {data1.Project}<br/><br/>
        Current date/time: {data1.currentDateTime}<br/><br/>
        <AppNotes/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AppCtrl);
