"use strict";

jest.unmock('../ui-src/components/app.ctrl');
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AppCtrl from '../ui-src/components/app.ctrl';

describe('<AppCtrl />', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).toEqual(2);
  });
  it('checks DropDownMenu count', () => {
    expect(wrapper.find('DropDownMenu').length).toEqual(1);
  });
  it('checks DropDownSelect count', () => {
    expect(wrapper.find('DropDownSelect').length).toEqual(1);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 DropDown');
  });
});
