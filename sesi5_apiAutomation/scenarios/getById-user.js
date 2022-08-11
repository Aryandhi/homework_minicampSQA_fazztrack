const getByIdScenario = {
  description: '[@GETbyId Data User]',
  positive: {
    case1: '[@getById-positive-case1] User menggunakan data user id yang valid'
  },
  negative: {
    case1: '[@getById-negative-case1] User gagal mendapatkan data ketika data id yang diinputkan invalid',
  }
}

module.exports = {
  getByIdScenario,
}