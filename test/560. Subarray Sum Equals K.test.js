import { subarraySum } from '../src/560. Subarray Sum Equals K'

describe('subarraySum', () => {
  test('it finds the total number of continuous subarrays whose sum equals to k', () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2)
  })
})
