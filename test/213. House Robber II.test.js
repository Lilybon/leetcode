import { rob } from '../src/213. House Robber II'

describe('rob', () => {
  test('it returns the maximum amount of money you can rob tonight without alerting the police', () => {
    expect(rob([2, 3, 2])).toBe(3)
    expect(rob([1, 2, 3, 1])).toBe(4)
    expect(rob([0])).toBe(0)
  })
})
