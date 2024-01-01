import request from 'supertest';

import app from './app';

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/invalid-route')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});