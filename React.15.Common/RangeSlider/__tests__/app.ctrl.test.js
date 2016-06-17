"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(8);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(6);
  });
  it('checks JRangeSlider count', () => {
    expect(wrapper.find('JRangeSlider').length).to.equal(4);
  });
  it('checks JList count', () => {
    expect(wrapper.find('JList').length).to.equal(1);
  });
  it('checks shallow state appData', () => {
    expect(wrapper.state('appData')).to.deep.equal({isMobile: false, messages: []});
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).to.contain('React 15 RangeSlider');
  });
});
