'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';

import AppCtrl from '../ui-src/components/app.ctrl';

const mockStore = configureMockStore();

describe('mount(<AppCtrl />)', () => {
  let store = mockStore({data1: {}});
  const wrapper = mount(
    <Provider store={store}>
      <AppCtrl />
    </Provider>
  );
  expect(wrapper.find(AppCtrl).length).to.equal(1);
  const container = wrapper.find(AppCtrl);
  it('checks div count', () => {
    expect(container.find('div').length).to.equal(4);
  });
  it('checks br count', () => {
    expect(container.find('br').length).to.equal(6);
  });
  it('checks props.Data1', () => {
    expect(container.props('Data1')).to.be.empty;
  });
  it('checks text contains', () => {
    expect(container.text()).to.contain('React Version');
  });
});
