import { getMaximumGold } from '../src/1219. Path with Maximum Gold'

describe('getMaximumGold', () => {
  test('it returns the maximum amount of gold you can collect under the conditions', () => {
    const grid1 = [
      [0, 6, 0],
      [5, 8, 7],
      [0, 9, 0],
    ]
    expect(getMaximumGold(grid1)).toBe(24)

    const grid2 = [
      [1, 0, 7],
      [2, 0, 6],
      [3, 4, 5],
      [0, 3, 0],
      [9, 0, 20],
    ]
    expect(getMaximumGold(grid2)).toBe(28)
  })
})
