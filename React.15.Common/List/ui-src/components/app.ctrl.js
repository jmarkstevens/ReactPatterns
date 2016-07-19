import React from 'react';

import AppNotes from './app.notes';
import JList from './common/jList';

let AppCtrlSty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px 0 0'
}

let list = [
  'line one of list',
  'another line of list',
  'third line of list',
  'fourth line of list',
  'fifth line of list',
  'sixth line of list'
]

let listSty = {
  border: '1px solid #155765',
  margin: '10px 10px'
}

let lineSty = {
  color: '#373f27',
  marginLeft: '5px'
}

export default class AppCtrl extends React.Component {
  render() {
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        <br/><br/>
        <JList data={list} />
        <JList data={list} listStyle={listSty} />
        <JList data={list} lineStyle={lineSty} />
        <br />
        <JList data={list} spanLine='1' />
        <JList data={list} spanLine='1' lineStyle={lineSty} listStyle={listSty} />
        <AppNotes/>
      </div>
    );
  }
}
