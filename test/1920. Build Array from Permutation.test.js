import { buildArray } from '../src/1920. Build Array from Permutation'

describe('buildArray', () => {
  test('it builds an array ans of the same length where ans[i] = nums[nums[i]]', () => {
    expect(buildArray([0, 2, 1, 5, 3, 4])).toEqual([0, 1, 2, 4, 5, 3])
    expect(buildArray([5, 0, 1, 2, 3, 4])).toEqual([4, 5, 0, 1, 2, 3])
  })
})
