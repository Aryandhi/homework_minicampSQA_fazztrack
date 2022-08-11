const putScenario = {
  description: '[@PUT Data User]',
  positive: {
    case1: '[@putPositiveCase1] User berhasil mengupdate data Occupation dan Nationality'
  },
  negative: {
    case1: '[@putNegativeCase1] User gagal mengupdate data ketika age bernilai 0',
    case2: '[@putNegativeCase2] User gagal mengupdate data ketika data hobbies merupakan empty array',
    case3: '[@putNegativeCase3] User gagal mengupdate data ketika data id null'
  }
}

module.exports = {
  putScenario,
}