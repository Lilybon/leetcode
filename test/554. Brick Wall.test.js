import { leastBricks } from '../src/554. Brick Wall'

describe('leastBricks', () => {
  test('it returns the minimum number of crossed bricks after drawing such a vertical line', () => {
    const wall1 = [
      [1, 2, 2, 1],
      [3, 1, 2],
      [1, 3, 2],
      [2, 4],
      [3, 1, 2],
    ]
    expect(leastBricks(wall1)).toBe(2)

    const wall2 = [[1], [1], [1]]
    expect(leastBricks(wall2)).toBe(3)
  })
})
