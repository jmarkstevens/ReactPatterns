"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(2);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(31);
  });
  it('checks JProgressBar count', () => {
    expect(wrapper.find('JProgressBar').length).to.equal(9);
  });
  it('checks JButton count', () => {
    expect(wrapper.find('JButton').length).to.equal(4);
  });
  it('checks shallow state progressIndex', () => {
    expect(wrapper.state('progressIndex')).to.equal(10);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).to.contain('React 15 ProgressBar');
  });
});
