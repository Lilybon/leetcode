import { countExcellentPairs } from '../src/2354. Number of Excellent Pairs'

describe('countExcellentPairs', () => {
  test('it returns the number of distinct excellent pairs', () => {
    expect(countExcellentPairs([1, 2, 3, 1], 3)).toBe(5)
    expect(countExcellentPairs([5, 1, 1], 10)).toBe(0)
  })
})
