import { numIdenticalPairs } from '../src/1512. Number of Good Pairs'

describe('numIdenticalPairs', () => {
  test('it returns the number of good pairs', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4)
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6)
    expect(numIdenticalPairs([1, 2, 3])).toBe(0)
  })
})
