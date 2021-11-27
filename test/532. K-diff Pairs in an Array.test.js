import { findPairs } from '../src/532. K-diff Pairs in an Array'

describe('findPairs', () => {
  test('it returns the number of unique k-diff pairs in the array', () => {
    expect(findPairs([3, 1, 4, 1, 5], 2)).toBe(2)
    expect(findPairs([1, 2, 3, 4, 5], 1)).toBe(4)
    expect(findPairs([1, 3, 1, 5, 4], 0)).toBe(1)
    expect(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)).toBe(2)
    expect(findPairs([-1, -2, -3], 1)).toBe(2)
  })
})
