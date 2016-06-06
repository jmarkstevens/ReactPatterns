"use strict";

import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.unmock('../ui-src/components/app.ctrl');
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl />', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(8);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(6);
  });
  it('checks JRangeSlider count', () => {
    expect(wrapper.find('JRangeSlider').length).toEqual(4);
  });
  it('checks JList count', () => {
    expect(wrapper.find('JList').length).toEqual(1);
  });
  it('checks shallow state appData', () => {
    expect(wrapper.state('appData')).toEqual({isMobile: false, messages: []});
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 RangeSlider');
  });
});
