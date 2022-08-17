import { maxScoreSightseeingPair } from '../src/1014. Best Sightseeing Pair'

describe('maxScoreSightseeingPair', () => {
  test('it returns the maximum score of a pair of sightseeing spots', () => {
    expect(maxScoreSightseeingPair([8, 1, 5, 2, 6])).toBe(11)
    expect(maxScoreSightseeingPair([1, 2])).toBe(2)
  })
})
