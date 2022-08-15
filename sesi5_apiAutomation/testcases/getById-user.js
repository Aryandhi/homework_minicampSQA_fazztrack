const chai = require('chai');
const expect = chai.expect;
const api = require('../api/user-endpoint');
const scenarioTest = require('../scenarios/getById-user');
const jsonSchemaGetId = require('../schemas/getById-user-schema.json');

const requestBodyPost = require('../data/dataPostUser.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${scenarioTest.getByIdScenario.description}`, async () => {
  let responseApi;
  before( async () => {
    responseApi = await api.postUser(requestBodyPost);
  })

  after( async () => {
    responseApi = await api.removeAll();
  })
  
  it(`${scenarioTest.getByIdScenario.positive.case1}`, async () => {
    // const id = body.id; //harus dinamis
    let response = await api.getByIdUser(responseApi._body.id);
    expect(response.statusCode).to.equal(200);
    expect(response.body.id).to.equal(responseApi._body.id);
    expect(response.body).has.jsonSchema(jsonSchemaGetId);
  })

  it(`${scenarioTest.getByIdScenario.negative.case1}`, async () => {
    const Id = "random-string";
    let responApi = await api.getByIdUser(Id);
    expect(responApi.body.errorCode).to.equal("ER-01");
    expect(responApi.body.statusCode).to.equal(404);
    expect(responApi.body.message).to.equal('user not found');
  })
})