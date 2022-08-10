const chai = require('chai');
const expect = chai.expect;
const api = require('../api/user-endpoint');
const dataPostUser = require('../testdata/dataPostUser');
const scenario = require('../scenarios/create-user');
const requestBody = require('../data/dataPostUser.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));

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
  })
})