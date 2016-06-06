"use strict";

import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.unmock('../ui-src/components/app.ctrl');
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl />', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(5);
  });
  it('checks TreeCtrl count', () => {
    expect(wrapper.find('TreeCtrl').length).toEqual(1);
  });
  it('checks GenusCtrl count', () => {
    expect(wrapper.find('GenusCtrl').length).toEqual(1);
  });
  it('checks JumpCtrl count', () => {
    expect(wrapper.find('JumpCtrl').length).toEqual(1);
  });
  it('checks shallow state genusList', () => {
    expect(wrapper.state('genusList')).toEqual([]);
  });
  it('checks shallow state currentGenusNode', () => {
    expect(wrapper.state('currentGenusNode')).toEqual({});
  });
  it('checks shallow state currentImageItem', () => {
    expect(wrapper.state('currentImageItem')).toEqual('empty');
  });
  it('checks shallow state showTreeEdit', () => {
    expect(wrapper.state('showTreeEdit')).toEqual(false);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 TreeView');
  });
});
