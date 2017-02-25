import React from 'react';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import JList from '../common/List/jList';

let ListSty = {
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

export default function List(props) {
  if (props.hide) return null;
  return (
    <div id="List" className="contentPage" style={ListSty}>
      <br /><br />
      <JList data={list} />
      <JList data={list} listStyle={listSty} />
      <JList data={list} lineStyle={lineSty} />
      <br />
      <JList data={list} spanLine="1" />
      <JList data={list} lineStyle={lineSty} listStyle={listSty} spanLine="1" />
      <AppNotes AppText={AppText.p1Text} />
    </div>
  );
}
