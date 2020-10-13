import { minPathSum } from '../src/64. Minimum Path Sum'

describe('minPathSum', () => {
  test('it finds a path from top left to bottom right which minimizes the sum of all numbers along its path and returns its sum', () => {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]
    expect(minPathSum(grid)).toBe(7)
  })
})
