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
    expect(wrapper.find('br').length).toEqual(2);
  });
  it('checks Gallery count', () => {
    expect(wrapper.find('Gallery').length).toEqual(1);
  });
  it('checks JButton count', () => {
    expect(wrapper.find('JButton').length).toEqual(1);
  });
  it('checks shallow state PicList', () => {
    expect(wrapper.state('PicList')).toEqual([]);
  });
  it('checks shallow state hideGallery', () => {
    expect(wrapper.state('hideGallery')).toEqual(true);
  });
  it('checks shallow text', () => {
    expect(wrapper.text()).toContain('React 15 Gallery');
  });
});
