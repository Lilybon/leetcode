import { minNumberOfHours } from '../src/2383. Minimum Hours of Training to Win a Competition'

describe('minNumberOfHours', () => {
  test('it returns the minimum number of training hours required to defeat all n opponents', () => {
    expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).toBe(8)
    expect(minNumberOfHours(2, 4, [1], [3])).toBe(0)
  })
})
