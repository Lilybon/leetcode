import { grayCode } from '../src/89. Gray Code'

describe('grayCode', () => {
  test('it prints the sequence of gray code (n representing the total number of bits in the code)', () => {
    expect(grayCode(2)).toEqual(expect.arrayContaining([0, 1, 3, 2]))
    expect(grayCode(0)).toEqual([0])
  })
})
