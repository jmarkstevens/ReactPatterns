import React from 'react';

import AppNotes from './app.notes';
import JList from './common/jList';

let AppCtrlSty = {
  borderBottom: '3px solid #cae4db',
  padding: '0 10px 0 0'
};

let list = [
  'line one of list',
  'another line of list',
  'third line of list',
  'fourth line of list',
  'fifth line of list',
  'sixth line of list'
];

let listSty = {
  border: '1px solid #e9e7da',
  margin: '10px 10px'
};

let lineSty = {
  color: '#b4dbc0',
  marginLeft: '5px'
};

export default function AppCtrl() {
  return (
    <div id="AppCtrlSty" style={AppCtrlSty}>
      <br /><br />
      <JList data={list} />
      <JList data={list} listStyle={listSty} />
      <JList data={list} lineStyle={lineSty} />
      <br />
      <JList data={list} spanLine="1" />
      <JList data={list} lineStyle={lineSty} listStyle={listSty} spanLine="1" />
      <AppNotes />
    </div>
  );
}
