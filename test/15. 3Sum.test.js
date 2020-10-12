import { threeSum } from '../src/15. 3Sum'

describe('threeSum', () => {
  test('it combines unique triplets in the array which given the sum of zero', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
    expect(threeSum([])).toEqual([])
    expect(threeSum([0])).toEqual([])
  })
})
