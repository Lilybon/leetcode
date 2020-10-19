import { findLength } from '../src/718. Maximum Length of Repeated Subarray'

describe('findLength', () => {
  test('it returns the maximum length of an subarray that appears in both arrays', () => {
    expect(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toBe(3)
  })
})
