const httpCaller = require('supertest');
const URL = httpCaller('http://localhost:1234');

function getUser() {
  return URL.get('/v1/users')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json');
}