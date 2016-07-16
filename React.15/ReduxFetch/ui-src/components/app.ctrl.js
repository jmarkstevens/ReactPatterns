import React from 'react';
import { connect } from 'react-redux';

import AppNotes from './app.notes';
import { apiSetData } from '../actions/api.Actions';

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
      "Project": "ReduxFetch",
      "currentDateTime": new Date().toLocaleString()
    }
    this.props.dispatch(apiSetData(newData));
  };
  render() {
    let data1 = JSON.stringify(this.props.Data1, null, 2);
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 15 Redux with fetch polyfill<br/><br/>
        Data1: {data1}<br/><br/>
        <AppNotes/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AppCtrl);
