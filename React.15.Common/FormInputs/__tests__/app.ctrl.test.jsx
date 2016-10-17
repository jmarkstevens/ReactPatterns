'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

let newState = {
  'text': '',
  'checkbox': false,
  'radioGroup': '',
  'color': '',
  'number': '',
  'range': '',
  'folder': ''
};

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(14);
  });
  it('checks JInput count', () => {
    expect(wrapper.find('JInput').length).to.equal(9);
  });
  it('checks shallow state', () => {
    expect(wrapper.state('data')).to.deep.equal(newState);
  });
});
