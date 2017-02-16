'use strict';

import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';

import AppCtrl from '../ui-src/components/app.ctrl';

describe('shallow(<AppCtrl />) ', () => {
  const wrapper = shallow(<AppCtrl />);
  it('checks div count', () => {
    expect(wrapper.find('div').length).to.equal(1);
  });
  it('checks br count', () => {
    expect(wrapper.find('br').length).to.equal(0);
  });
  it('checks text', () => {
    expect(wrapper.text()).to.equal('Hello World<AppNotes />');
  });
  it('checks state world', () => {
    expect(wrapper.state('world')).to.equal('Hello World');
  });
});

describe('mount(<AppCtrl />) ', () => {
  const wrapper = mount(<AppCtrl />);
  it('checks text', () => {
    expect(wrapper.text()).to.equal('Hello WorldHide notesThis is a minimal starter project when not using flux.\n  The only thing added is the hello world which demonstrates the use of state.');
  });
  it('checks state world', () => {
    expect(wrapper.state('world')).to.equal('Hello World');
  });
});
