import { minAreaRect } from '../src/939. Minimum Area Rectangle'

describe('minAreaRect', () => {
  test('it determines the minimum area of a rectangle formed from a set of points, with sides parallel to the x and y axes', () => {
    const points1 = [
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
      [2, 2],
    ]
    expect(minAreaRect(points1)).toBe(4)

    const points2 = [
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
      [4, 1],
      [4, 3],
    ]
    expect(minAreaRect(points2)).toBe(2)
  })
})
