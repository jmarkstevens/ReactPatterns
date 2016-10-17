'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';

import AppCtrl from '../ui-src/components/app.ctrl';

const mockStore = configureMockStore();

const initialState = {
  nextID: 0,
  treeData: [{}],
  currentTreeNode: {title: 'not selected'},
  showTreeEdit: false,
  showTreeNew: false,
  jumpList: [{}]
};

describe('mount(<AppCtrl />)', () => {
  let store = mockStore(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <AppCtrl />
    </Provider>
  );
  expect(wrapper.find(AppCtrl).length).to.equal(1);
  const container = wrapper.find(AppCtrl);
  it('checks div count', () => {
    expect(container.find('div').length).to.equal(23);
  });
  it('checks br count', () => {
    expect(container.find('br').length).to.equal(2);
  });
  it('checks TreeCtrl count', () => {
    expect(container.find('TreeCtrl').length).to.equal(1);
  });
  it('checks JumpCtrl count', () => {
    expect(container.find('JumpCtrl').length).to.equal(1);
  });
  // it('checks shallow state genusList', () => {
  //   expect(container.state('genusList')).to.deep.equal([]);
  // });
  // it('checks shallow state currentGenusNode', () => {
  //   expect(container.state('currentGenusNode')).to.deep.equal({});
  // });
  // it('checks shallow state currentImageItem', () => {
  //   expect(container.state('currentImageItem')).to.equal('empty');
  // });
  // it('checks shallow state showTreeEdit', () => {
  //   expect(container.state('showTreeEdit')).to.equal(false);
  // });
  // it('checks shallow text', () => {
  //   expect(container.text()).to.contain('React 15 TreeView');
  // });
});
