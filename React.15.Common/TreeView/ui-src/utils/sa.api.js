import request from 'superagent';

import Actions from '../flux/Actions';

module.exports = {
  getAppStore() { request.get('/routes/getAppStore').end((err, res) => { this.gotAppStore(res.body); }); },
  gotAppStore: function(data) { Actions.gotAppStore(data); },

  getGenusList() { request.get('/routes/getGenusList').end((err, res) => { this.gotGenusList(res.body); }); },
  gotGenusList: function(data) { Actions.gotGenusList(data); },

  getImageList() { request.get('/routes/getImageList').end((err, res) => { this.gotImageList(res.body); }); },
  gotImageList: function(data) { Actions.gotImageList(data); },

  getTreeView() { request.get('/routes/getTreeView').end((err, res) => { this.gotTreeView(res.body); }); },
  gotTreeView: function(data) { Actions.gotTreeView(data); },

  setAppStoreData: function(data) { request.post('/routes/setAppStoreData').send(data).end(); },
  setGenusList: function(data) { request.post('/routes/setGenusList').send(data).end(); },
  setTreeView: function(data) { request.post('/routes/setTreeView').send(data).end(); },
};
