import { countBadPairs } from '../src/2364. Count Number of Bad Pairs'

describe('countBadPairs', () => {
  test('it returns the total number of bad pairs in nums', () => {
    expect(countBadPairs([4, 1, 3, 3])).toBe(5)
    expect(countBadPairs([1, 2, 3, 4, 5])).toBe(0)
  })
})
