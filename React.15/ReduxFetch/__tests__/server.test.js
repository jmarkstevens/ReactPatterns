'use strict';

import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
// import sinon from 'sinon';

chai.use(chaiHttp);

describe('server test with chai-http', () => {
  it('checks get /', () => {
    chai.request('../js/server').get('/')
      .end(function (err, res) {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
      });
  });
  it('checks get /routes/getData', () => {
    chai.request('../js/server').get('/routes/getData')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
        expect(res).to.have.header('content-length', '93');
        expect(res).to.be.json;
        console.log('res: ', res.headers);
      });
  });
});
