import { maxSubarraySumCircular } from '../src/918. Maximum Sum Circular Subarray'

describe('maxSubarraySumCircular', () => {
  test('it finds the maximum possible sum of a non-empty subarray of C', () => {
    expect(maxSubarraySumCircular([1, -2, 3, -2])).toBe(3)
    expect(maxSubarraySumCircular([5, -3, 5])).toBe(10)
    expect(maxSubarraySumCircular([3, -1, 2, -1])).toBe(4)
    expect(maxSubarraySumCircular([3, -2, 2, -3])).toBe(3)
    expect(maxSubarraySumCircular([-2, -3, -1])).toBe(-1)
  })
})
