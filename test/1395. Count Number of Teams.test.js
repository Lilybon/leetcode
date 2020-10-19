import { numTeams } from '../src/1395. Count Number of Teams'

describe('numTeams', () => {
  test('it returns the number of teams', () => {
    expect(numTeams([2, 5, 3, 4, 1])).toBe(3)
    expect(numTeams([2, 1, 3])).toBe(0)
    expect(numTeams([1, 2, 3, 4])).toBe(4)
  })
})
