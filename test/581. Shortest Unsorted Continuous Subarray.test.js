import { findUnsortedSubarray } from '../src/581. Shortest Unsorted Continuous Subarray'

describe('findUnsortedSubarray', () => {
  test('it returns the shortest unsorted subarray and outputs its length', () => {
    expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5)
    expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0)
    expect(findUnsortedSubarray([1])).toBe(0)
  })
})
