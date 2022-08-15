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
  return URL.get(`/v1/users`)
    .query(
      {
        name: inputName,
      }
    )
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
}

function postUser(requestBody) {
  return URL.post(`/v1/users`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(requestBody)
}

function putUser(requestBody) {
  return URL.put(`/v1/users`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
    .send(requestBody)
}

function getByIdUser(id) {
  return URL.get(`/v1/users/${id}`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
}

function removeAll() {
  return URL.delete(`/v1/users/removeAll`)
    .set('Connection', 'keep-alive')
    .set('Content-type', 'application/json')
}

module.exports = {
  getUserStatic,
  getUser,
  postUser,
  putUser,
  getByIdUser,
  removeAll,
};