"use strict";

import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.unmock('../ui-src/components/app.ctrl');
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl />', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(2);
  });
  it('checks FilterCtrl count', () => {
    expect(wrapper.find('FilterCtrl').length).toEqual(1);
  });
  it('checks shallow state hoverValues', () => {
    expect(wrapper.state('hoverValues')).toEqual({});
  });
  it('checks shallow state filterList', () => {
    expect(wrapper.state('filterList')).toEqual({});
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 Range slider and Tooltip');
  });
});
