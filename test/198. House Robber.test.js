import { rob } from '../src/198. House Robber'

describe('rob', () => {
  test('it determines the maximum amount of money you can rob tonight without alerting the police', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
    expect(rob([2, 7, 9, 3, 1])).toBe(12)
  })
})
