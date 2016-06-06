"use strict";

jest.unmock('../ui-src/components/app.ctrl');
import React from 'react';
import { shallow, mount } from 'enzyme';
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl /> shallow', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(8);
  });
  it('checks JButton count', () => {
    expect(wrapper.find('JButton').length).toEqual(10);
  });
  it('checks shallow state', () => {
    expect(wrapper.state('clicked')).toEqual('');
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 Buttons');
  });
});
