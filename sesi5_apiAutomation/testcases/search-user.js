const chai = require('chai');
const expect = chai.expect;
const api = require('../api/user-endpoint');
const dataPostUser = require('../testdata/dataPostUser');
const scenario = require('../scenarios/create-user');
const requestBody = require('../data/dataPostUser.json');
const jsonSchemaFile = require('../schemas/search-user-schema.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

describe('[@searching-hooks] Search User API Test use hooks', async () => {
  // di execute sekali sebelum scenario di run
  before(async () => {
    console.log("before");
    let responseApi = await api.postUser(requestBody);
    expect(responseApi.status).to.equal(200);
  })

  // di execute sekali setelah scenario di run
  after( async () => {
    console.log("after");
  })

  // di execute setiap-kali sebelum scenario di run
  beforeEach(async () => {
    console.log("before each");
  })

  // di execute setiap-kali setelah scenario di run
  afterEach( async () => {
    console.log("after each");
  })
  it('[@search-user-hooks] WHEN search user with valid keyword', async () => {
    let keyword = 'agus';
    let responseApi = await api.getUser(keyword);
    expect(responseApi.status).to.equal(200);
    // untuk validasi struktur json dan tipe data sesuai API kontrak
    expect(responseApi.body).has.jsonSchema(jsonSchemaFile);
  })
})