import { uniquePathsWithObstacles } from '../src/63. Unique Paths II'

describe('uniquePathsWithObstacles', () => {
  test('it calculates many unique paths would there be in a obstacle grid from top-left corner to bottom-right corner', () => {
    const grid1 = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]
    expect(uniquePathsWithObstacles(grid1)).toBe(2)

    const grid2 = [
      [0, 1],
      [0, 0],
    ]
    expect(uniquePathsWithObstacles(grid2)).toBe(1)
  })
})
