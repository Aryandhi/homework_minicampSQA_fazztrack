const chai = require('chai');
const expect = chai.expect;
const api = require('../api/user-endpoint');
const scenarioTest = require('../scenarios/put-user');
const jsonSchemaPUT = require('../schemas/put-user-schema.json');

const requestBodyPut = require('../data/dataPutUser.json');
const requestBodyPost = require('../data/dataPostUser.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${scenarioTest.putScenario.description}`, async () => {
  let responseApi;
  before( async () => {
    responseApi = await api.postUser(requestBodyPost);
  })

  after( async () => {
    responseApi = await api.removeAll();
  })
  it(`${scenarioTest.putScenario.positive.case1}`, async () => {
    const sendRequestPut = {
      id: responseApi._body.id,
      firstName: requestBodyPut.firstName,
      lastName: requestBodyPut.lastName,
      age: requestBodyPut.age,
      occupation: requestBodyPut.occupation,
      nationality: requestBodyPut.nationality,
      hobbies: requestBodyPut.hobbies,
      gender: requestBodyPut.gender,
      createdDate: requestBodyPut.createdDate,
      updatedDate: requestBodyPut.updatedDate
    }
    responseApi = await api.putUser(sendRequestPut);
    expect(responseApi.statusCode).to.equal(200);
    expect(responseApi.request._data.occupation).to.equal(sendRequestPut.occupation);
    expect(responseApi.request._data.nationality).to.equal(sendRequestPut.nationality);
    expect(responseApi.body).has.jsonSchema(jsonSchemaPUT);
  })

  it(`${scenarioTest.putScenario.negative.case1}`, async () => {
    const sendRequestPut = {
      id: responseApi._body.id,
      firstName: requestBodyPut.firstName,
      lastName: requestBodyPut.lastName,
      age: 0,
      occupation: requestBodyPut.occupation,
      nationality: requestBodyPut.nationality,
      hobbies: requestBodyPut.hobbies,
      gender: requestBodyPut.gender,
      createdDate: requestBodyPut.createdDate,
      updatedDate: requestBodyPut.updatedDate
    }
    responseApi = await api.putUser(sendRequestPut);
    let err = "you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender"
    expect(responseApi._body.statusCode).to.equal(400);
    expect(responseApi.request._data.age).to.equal(0);
    expect(responseApi._body.message).to.equal(err);
  })

  it(`${scenarioTest.putScenario.negative.case2}`, async () => {
    const sendRequestPut = {
      id: responseApi._body.id,
      firstName: requestBodyPut.firstName,
      lastName: requestBodyPut.lastName,
      age: requestBodyPut.age,
      occupation: requestBodyPut.occupation,
      nationality: requestBodyPut.nationality,
      hobbies: [],
      gender: requestBodyPut.gender,
      createdDate: requestBodyPut.createdDate,
      updatedDate: requestBodyPut.updatedDate
    }
    responseApi = await api.putUser(sendRequestPut);
    let err = 'you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender';
    expect(responseApi._body.statusCode).to.equal(400);
    expect(responseApi.request._data.hobbies.length).to.equal(0);
    expect(responseApi._body.message).to.be.equal(err);
  })

  it(`${scenarioTest.putScenario.negative.case3}`, async () => {
    let err = "user not found";
    responseApi = await api.putUser(requestBodyPut);
    expect(responseApi._body.statusCode).to.equal(404);
    expect(responseApi.request._data.id).to.equal(undefined);
    expect(responseApi._body.message).to.be.equal(err);
  })
})