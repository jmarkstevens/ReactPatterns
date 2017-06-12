'use strict';

const switchBoard = require('./socket/switchBoard');
const freshApi = require('./socket/freshApi');

module.exports = function(socket) {
  console.log('Socket.io connection made.');

  const updateTicketDone = function(data) {
    socket.emit('server:updateTicketDone', data);
  };
  const onUpdateTicket = function(data) {
    freshApi.updateTicket(data, updateTicketDone);
  };
  socket.on('client:updateTicket', onUpdateTicket);

  const addNewNoteDone = function(data) {
    socket.emit('server:addNewNoteDone', data);
  };
  const onAddNewNote = function(data) {
    freshApi.addNewNote(data, addNewNoteDone);
  };
  socket.on('client:addNewNote', onAddNewNote);

  const addNewTicketDone = function(data) {
    socket.emit('server:addNewTicketDone', data);
  };
  const onAddNewTicket = function(data) {
    freshApi.addNewTicket(data, addNewTicketDone);
  };
  socket.on('client:addNewTicket', onAddNewTicket);

  const getContactsDone = function(data) {
    socket.emit('server:getContactsDone', data);
  };
  const onGetContacts = function(data) {
    freshApi.getContacts(data, getContactsDone);
  };
  socket.on('client:getContacts', onGetContacts);

  const getAgentsDone = function(data) {
    socket.emit('server:getAgentsDone', data);
  };
  const onGetAgents = function(data) {
    freshApi.getAgents(data, getAgentsDone);
  };
  socket.on('client:getAgents', onGetAgents);

  const getConversationsByIDDone = function(data) {
    socket.emit('server:getConversationsByIDDone', data);
  };
  const onGetConversationsByID = function(data) {
    freshApi.getConversationsByID(data, getConversationsByIDDone);
  };
  socket.on('client:getConversationsByID', onGetConversationsByID);

  const getTicketByIDDone = function(data) {
    socket.emit('server:getTicketByIDDone', data);
  };
  const onGetTicketByID = function(data) {
    freshApi.getTicketByID(data, getTicketByIDDone);
    freshApi.getConversationsByID(data, getConversationsByIDDone);
  };
  socket.on('client:getTicketByID', onGetTicketByID);

  const getTicketsByEmailDone = function(data) {
    socket.emit('server:getTicketsByEmailDone', data);
  };
  const onGetTicketsByEmail = function(data) {
    freshApi.getTicketsByEmail(data, getTicketsByEmailDone);
  };
  socket.on('client:getTicketsByEmail', onGetTicketsByEmail);

  const loginTestDone = function(data) {
    socket.emit('server:loginTestDone', data);
  };
  const onLoginTest = function(data) {
    switchBoard.loginTest(data, loginTestDone);
  };
  socket.on('client:loginTest', onLoginTest);
};
