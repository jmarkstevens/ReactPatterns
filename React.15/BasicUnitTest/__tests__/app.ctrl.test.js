"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(8);
  });
  it('checks state.Data1', () => {
    expect(wrapper.state('Data1')).to.be.empty;
  });
  it('checks text contains', () => {
    expect(wrapper.text()).to.contain('React 15 ReFlux with SuperAgent');
  });
});
