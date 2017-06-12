'use strict';

const unirest = require('unirest');

const API_KEY = 'XOVl6ShxTowoF7mp3ZE';

function apiGet(apiPath, doneCallBack) {
  const Request = unirest.get(apiPath);

  Request.auth({
    user: API_KEY,
    pass: 'X',
    sendImmediately: true
  }).end(function(response) {
    doneCallBack(response.body);
    if (response.status != 200) {
      console.log('X-Request-Id: ', response.headers['x-request-id']);
    }
  });
}

function apiPost(apiPath, data, doneCallBack) {
  const Request = unirest.post(apiPath);

  Request.auth({
    user: API_KEY,
    pass: 'X',
    sendImmediately: true
  })
    .type('json')
    .send(data)
    .end(function(response) {
      doneCallBack(response.body);
      if (response.status != 200) {
        console.log('X-Request-Id: ', response.headers['x-request-id']);
      }
    });
}

function apiPut(apiPath, data, index, doneCallBack) {
  const Request = unirest.put(apiPath);

  Request.auth({
    user: API_KEY,
    pass: 'X',
    sendImmediately: true
  })
    .type('json')
    .send(data)
    .end(function(response) {
      doneCallBack({ticket: response.body, index});
      if (response.status != 200) {
        console.log('X-Request-Id: ', response.headers['x-request-id']);
      }
    });
}

module.exports.getTicketsByEmail = function(data, doneCallBack) {
  apiGet(`https://sinetsupport.freshdesk.com/api/v2/tickets?email=${data.user_email}`, doneCallBack);
};

module.exports.getTicketByID = function(data, doneCallBack) {
  apiGet(`https://sinetsupport.freshdesk.com/api/v2/tickets/${data.id}`, doneCallBack);
};

module.exports.getConversationsByID = function(data, doneCallBack) {
  apiGet(`https://sinetsupport.freshdesk.com/api/v2/tickets/${data.id}/conversations`, doneCallBack);
};

module.exports.getAgents = function(data, doneCallBack) {
  apiGet(`https://sinetsupport.freshdesk.com/api/v2/agents`, doneCallBack);
};

module.exports.getContacts = function(data, doneCallBack) {
  apiGet(`https://sinetsupport.freshdesk.com/api/v2/contacts`, doneCallBack);
};

module.exports.addNewTicket = function(data, doneCallBack) {
  apiPost(`https://sinetsupport.freshdesk.com/api/v2/tickets`, data, doneCallBack);
};

module.exports.addNewNote = function(data, doneCallBack) {
  apiPost(`https://sinetsupport.freshdesk.com/api/v2/tickets/${data.ticket_id}/notes`, data.sendData, doneCallBack);
};

module.exports.updateTicket = function(data, doneCallBack) {
  apiPut(`https://sinetsupport.freshdesk.com/api/v2/tickets/${data.ticket_id}`, data.update, data.index, doneCallBack);
};

const tickets = 'https://sinetsupport.freshdesk.com/api/v2/tickets';
// apiTest(tickets, 'tickets');

const ticket = 'https://sinetsupport.freshdesk.com/api/v2/tickets/7';
// apiTest(ticket, 'ticket');

const ticketsE = '';
// apiTest(ticketsE, 'ticketsE');

const conversations = 'https://sinetsupport.freshdesk.com/api/v2/tickets/7/conversations';
// apiTest(conversations, 'conversations');

const contact = 'https://sinetsupport.freshdesk.com/api/v2/contacts/27000309936';
// apiTest(contact, 'contact');

const agent = 'https://sinetsupport.freshdesk.com/api/v2/agents/27000309933';
// apiTest(agent, 'agent');

const companies = 'https://sinetsupport.freshdesk.com/api/v2/companies';
// apiTest(companies, 'companies');

const company = 'https://sinetsupport.freshdesk.com/api/v2/companies/27000309933';
// apiTest(company, 'company');

const roles = 'https://sinetsupport.freshdesk.com/api/v2/roles';
// apiTest(roles, 'roles');

const role = 'https://sinetsupport.freshdesk.com/api/v2/roles/27000060379';
// apiTest(role, 'role');
