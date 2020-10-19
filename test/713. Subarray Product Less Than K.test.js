import { numSubarrayProductLessThanK } from '../src/713. Subarray Product Less Than K'

describe('numSubarrayProductLessThanK', () => {
  test('it counts and prints the number of contiguous subarrays where the product of all the elements in the subarray is less than k', () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8)
  })
})
