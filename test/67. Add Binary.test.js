import { addBinary } from '../src/67. Add Binary'

describe('addBinary', () => {
  test('it returns sum of a and b as a binary string', () => {
    expect(addBinary('11', '1')).toEqual('100')
    expect(addBinary('1010', '1011')).toEqual('10101')
  })
})
