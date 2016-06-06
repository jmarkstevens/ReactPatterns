"use strict";

import React from 'react';
import { shallow, mount, render } from 'enzyme';

jest.unmock('../ui-src/components/app.ctrl');
import AppCtrl from '../ui-src/components/app.ctrl';

let newState = {
  "text": "",
  "checkbox": false,
  "radioGroup": "",
  "color": "",
  "number": "",
  "range": "",
  "folder": ""
};

describe('<AppCtrl />', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(14);
  });
  it('checks JInput count', () => {
    expect(wrapper.find('JInput').length).toEqual(9);
  });
  it('checks shallow state', () => {
    expect(wrapper.state('data')).toEqual(newState);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 Form input');
  });
});
