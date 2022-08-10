const chai = require('chai');
const expect = chai.expect;
const api = require('../api/user-endpoint');
const dataPostUser = require('../testdata/dataPostUser');
const scenario = require('../scenarios/create-user');
const requestBody = require('../data/dataPostUser.json');

//declare chai-depedency
chai.use(require('chai-like'));
chai.use(require('chai-things'));

describe('| GET By Name | /v1/users?name=', async()=> {
  let responseApi;
  let bodyData;

  it('[@searching-byLike] WHEN searching user with valid data', async()=> {
    responseApi = await api.getUser('arief');
    bodyData = responseApi.body;
    expect(responseApi.status).to.equal(200);
    console.log(bodyData);
    // data is array of bodyData as object
    expect(bodyData.data).contains.something.like({firstName: 'arief'});
  })

  // it('WHEN searching data un-registered', async()=> {
  //   responseApi = await api.getUser('ridho');
  //   bodyData = responseApi.body;
  //   expect(responseApi.status).to.equal(200);
  //   expect(bodyData.data.length).to.equal(0);
  // })

  // it('WHEN search user registered with static way', async()=> {
  //   responseApi = await api.getUserStatic();
  //   bodyData = responseApi.body;
  //   expect(responseApi.status).to.equal(200);
  //   expect(bodyData.data[0].firstName).to.equal('ramadhan');
  // })

  // it('WHEN search user registered with dynamic way', async()=> {
  //   const paramsName = 'arief';
  //   responseApi = await api.getUser(paramsName);
  //   bodyData = responseApi.body;
  //   expect(responseApi.status).to.equal(200);

  //   for(let i = 0; i < bodyData.data.length; i += 1) {
  //     expect(bodyData.data[0].firstName).to.equal(paramsName);
  //   }
  // })
});

// describe(`${scenario.scenarioTest.description}`, async()=> {
//   let responseApi;
//   let bodyData;

//   it(`${scenario.scenarioTest.positive.case1}`, async()=> {

//     // const dataRequest = dataPostUser.dataPost(propertiFirstName);
//     // responseApi = await api.postUser(dataRequest);

//     responseApi = await api.postUser(requestBody);
//     console.log(responseApi.status);
//     console.log(responseApi.body);

//     // for check value of firstName
//     bodyData = responseApi.body;
//     expect(bodyData.firstName).to.equal(requestBody.firstName);
//     // expect(bodyData.id).to.not.be.null; // not null
//     // expect(bodyData.id).to.be.null;     // must null
//   })
// })