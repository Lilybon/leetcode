import { maxSubArray } from '../src/53. Maximum Subarray'

describe('maxSubArray', () => {
  test('it finds contiguous subarrays which has the largest sum and return its sum', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    expect(maxSubArray([1])).toBe(1)
    expect(maxSubArray([0])).toBe(0)
    expect(maxSubArray([-1])).toBe(-1)
    expect(maxSubArray([-2147483647])).toBe(-2147483647)
  })
})
