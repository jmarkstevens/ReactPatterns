"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(4);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(2);
  });
  it('checks DropDownMenu count', () => {
    expect(wrapper.find('DropDownMenu').length).to.equal(1);
  });
  it('checks DropDownSelect count', () => {
    expect(wrapper.find('DropDownSelect').length).to.equal(1);
  });
});
