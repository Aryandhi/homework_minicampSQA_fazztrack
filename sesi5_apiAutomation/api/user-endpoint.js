const httpCaller = require('supertest');
const URL = httpCaller('http://localhost:1234');

//search user use parameter statis
function getUserStatic() {
  return URL.get('/v1/users?name=ramadhan')
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
}

// search user use params dinamis
function getUser(inputName) {
  return URL.get(`/v1/users?name=${inputName}`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
}

function postUser(bodyRequest) {
  return URL.post(`/v1/users`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(bodyRequest)
}

module.exports = {
  getUserStatic,
  getUser,
  postUser,
};