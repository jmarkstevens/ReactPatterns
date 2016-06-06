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
    expect(wrapper.find('br').length).toEqual(31);
  });
  it('checks JProgressBar count', () => {
    expect(wrapper.find('JProgressBar').length).toEqual(9);
  });
  it('checks JButton count', () => {
    expect(wrapper.find('JButton').length).toEqual(4);
  });
  it('checks shallow state progressIndex', () => {
    expect(wrapper.state('progressIndex')).toEqual(10);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 ProgressBar');
  });
});
