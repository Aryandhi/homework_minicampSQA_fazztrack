const scenarioTest = {
  description: 'POST /v1/users',
  positive: {
    case1: 'WHEN create user with valid request data'
  },
  negative: {
    case1: 'WHEN create user with age value 0 will return 0'
  }
};

module.exports = {
  scenarioTest,
};