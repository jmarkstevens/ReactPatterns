"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(5);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(5);
  });
  it('checks TreeCtrl count', () => {
    expect(wrapper.find('TreeCtrl').length).to.equal(1);
  });
  it('checks GenusCtrl count', () => {
    expect(wrapper.find('GenusCtrl').length).to.equal(1);
  });
  it('checks JumpCtrl count', () => {
    expect(wrapper.find('JumpCtrl').length).to.equal(1);
  });
  it('checks shallow state genusList', () => {
    expect(wrapper.state('genusList')).to.deep.equal([]);
  });
  it('checks shallow state currentGenusNode', () => {
    expect(wrapper.state('currentGenusNode')).to.deep.equal({});
  });
  it('checks shallow state currentImageItem', () => {
    expect(wrapper.state('currentImageItem')).to.equal('empty');
  });
  it('checks shallow state showTreeEdit', () => {
    expect(wrapper.state('showTreeEdit')).to.equal(false);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).to.contain('React 15 TreeView');
  });
});
