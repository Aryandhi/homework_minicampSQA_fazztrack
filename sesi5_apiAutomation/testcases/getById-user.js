const chai = require('chai');
const expect = chai.expect;
const api = require('../api/user-endpoint');
const scenarioTest = require('../scenarios/getById-user');
const jsonSchemaGetId = require('../schemas/getById-user-schema.json');

const requestBodyPut = require('../data/dataPutUser.json');
const requestBodyPost = require('../data/dataPostUser.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe(`${scenarioTest.getByIdScenario.description}`, async () => {
  it(`${scenarioTest.getByIdScenario.positive.case1}`, async () => {
    const id = "b0ad5756-942f-4535-9ce6-7b4e49dafd1d";
    let responApi = await api.getByIdUser(id);
    expect(responApi.statusCode).to.equal(200);
    expect(responApi.body.id).to.equal(id);
    expect(responApi.body).has.jsonSchema(jsonSchemaGetId);
  })

  it(`${scenarioTest.getByIdScenario.negative.case1}`, async () => {
    const Id = "random-string";
    let responApi = await api.getByIdUser(Id);
    expect(responApi.body.errorCode).to.equal("ER-01");
    expect(responApi.body.statusCode).to.equal(404);
    expect(responApi.body.message).to.equal('user not found');
  })
})