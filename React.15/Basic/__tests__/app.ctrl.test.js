"use strict";

import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.unmock('../ui-src/components/app.ctrl');
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl /> shallow', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(2);
  });
  it('checks text', () => {
    expect(wrapper.text()).toEqual('React 15 Basic');
  });
  it('checks state world', () => {
    expect(wrapper.state('world')).toEqual('');
  });
});

describe('<AppCtrl /> mount', () => {
  const wrapper = mount(<AppCtrl />);
  it('checks text', () => {
    expect(wrapper.text()).toEqual('React 15 BasicHello World');
  });
  it('checks state world', () => {
    expect(wrapper.state('world')).toEqual('Hello World');
  });
});
