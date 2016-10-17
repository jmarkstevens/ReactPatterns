'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />)', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(2);
  });
  it('checks Gallery count', () => {
    expect(wrapper.find('Gallery').length).to.equal(1);
  });
  it('checks JButton count', () => {
    expect(wrapper.find('JButton').length).to.equal(1);
  });
  it('checks shallow state PicList', () => {
    expect(wrapper.state('PicList')).to.deep.equal([]);
  });
  it('checks shallow state hideGallery', () => {
    expect(wrapper.state('hideGallery')).to.equal(true);
  });
});
