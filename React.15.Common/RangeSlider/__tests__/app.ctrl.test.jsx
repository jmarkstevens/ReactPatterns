'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(7);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(6);
  });
  it('checks JRangeSlider count', () => {
    expect(wrapper.find('JRangeSlider').length).to.equal(4);
  });
});
