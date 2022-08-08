const api = require('../api/user-endpoint');

describe('GET By Name, /v1/users', async()=> {
  it('WHEN searching data un-registered', async()=> {
    let responseApi = await api.getUser('ridho');
    console.log("status code: ", responseApi.status);
    console.log(responseApi.body);
  })

  it('WHEN search user registered with static way', async()=> {
    responseApi = await api.getUserStatic()
    console.log("status code: ", responseApi.status);
    console.log(responseApi.body)
  })

  it('WHEN search user registered with dynamic way', async()=> {
    responseApi = await api.getUser('arief')
    console.log("status code: ", responseApi.status)
    console.log(responseApi.body)
  })
})

describe('POST, /v1/users', async()=> {
  it('WHEN registered user with valid data', async()=> {

  })
})