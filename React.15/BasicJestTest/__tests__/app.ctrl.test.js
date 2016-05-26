"use strict";

jest.unmock('../ui-src/components/app.ctrl');
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl />', () => {
  it('checks div count', () => {
    const wrapper = shallow(<AppCtrl />);
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('checks br count', () => {
    const wrapper = shallow(<AppCtrl />);
    expect(wrapper.find('br').length).toEqual(2);
  });
  it('checks shallow text', () => {
    const wrapper = shallow(<AppCtrl />);
    expect(wrapper.text()).toEqual('React 15 BasicJestTest');
  });
  it('checks mounted text', () => {
    const wrapper = mount(<AppCtrl />);
    expect(wrapper.text()).toEqual('React 15 BasicJestTestHello World');
  });
  it('checks shallow state', () => {
    const wrapper = shallow(<AppCtrl />);
    expect(wrapper.state('world')).toEqual('');
  });
  it('checks mounted state', () => {
    const wrapper = mount(<AppCtrl />);
    expect(wrapper.state('world')).toEqual('Hello World');
  });
});
