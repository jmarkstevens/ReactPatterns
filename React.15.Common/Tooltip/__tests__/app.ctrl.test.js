"use strict";

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('mount(<AppCtrl />)', () => {
  const wrapper = mount(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(126);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(3);
  });
});
