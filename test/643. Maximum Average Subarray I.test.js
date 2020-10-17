import { findMaxAverage } from '../src/643. Maximum Average Subarray I'

describe('findMaxAverage', () => {
  test('it finds the contiguous subarray of given length k that has the maximum average value and outputs the maximum average value', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75)
  })
})
