const expect = require('chai').expect;
const api = require('../api/user-endpoint');

describe('| GET By Name | /v1/users?name=', async()=> {
  let responseApi;
  let bodyData;

  // it('WHEN searching data un-registered', async()=> {
  //   responseApi = await api.getUser('ridho');
  //   bodyData = responseApi.body;
  //   expect(responseApi.status).to.equal(200);
  //   expect(bodyData.data.length).to.equal(0);

  //   // console.log(bodyData);
  //   // console.log("status code: ", responseApi.status);
  //   // console.log(responseApi.body);
    
  // })

  // it('WHEN search user registered with static way', async()=> {
  //   responseApi = await api.getUserStatic();
  //   bodyData = responseApi.body;
  //   expect(responseApi.status).to.equal(200);
  //   expect(bodyData.data[0].firstName).to.equal('ramadhan');

  //   // expect(bodyData.data[0].firstName.toLowerCase()).to.equal('Ramadhan');
  //   // console.log(bodyData.data[0].firstName);
  //   // console.log("status code: ", responseApi.status);
  //   // console.log(responseApi.body)
  // })

  it('WHEN search user registered with dynamic way', async()=> {
    const paramsName = 'arief';
    responseApi = await api.getUser(paramsName);
    bodyData = responseApi.body;
    expect(responseApi.status).to.equal(200);

    for(let i = 0; i < bodyData.data.length; i += 1) {
      expect(bodyData.data[0].firstName).to.equal(paramsName);
    }
    
    // expect(bodyData.data[0].firstName.toLowerCase()).to.equal('Arief');
    // console.log("status code: ", responseApi.status);
    // console.log(responseApi.body);
    // console.log(bodyData.data[0].firstName);
  })
});

// describe('POST, /v1/users', async()=> {
//   it('WHEN registered user with valid data', async()=> {

//   })
// })