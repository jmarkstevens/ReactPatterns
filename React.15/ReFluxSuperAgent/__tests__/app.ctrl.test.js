"use strict";

import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.unmock('../ui-src/components/app.ctrl');
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl />', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(8);
  });
  it('checks shallow state Data1', () => {
    expect(wrapper.state('Data1')).toEqual({});
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 ReFlux with SuperAgent');
  });
});
