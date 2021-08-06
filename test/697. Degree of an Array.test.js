import { findShortestSubArray } from '../src/697. Degree of an Array'

describe('findShortestSubArray', () => {
  test('it finds the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2)
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6)
  })
})
