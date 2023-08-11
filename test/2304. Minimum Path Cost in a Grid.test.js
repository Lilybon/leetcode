import { minPathCost } from '../src/2304. Minimum Path Cost in a Grid'

describe('minPathCost', () => {
  test('it returns the minimum cost of a path that starts from any cell in the first row and ends at any cell in the last row', () => {
    expect(
      minPathCost(
        [
          [5, 3],
          [4, 0],
          [2, 1],
        ],
        [
          [9, 8],
          [1, 5],
          [10, 12],
          [18, 6],
          [2, 4],
          [14, 3],
        ],
      ),
    ).toBe(17)
    expect(
      minPathCost(
        [
          [5, 1, 2],
          [4, 0, 3],
        ],
        [
          [12, 10, 15],
          [20, 23, 8],
          [21, 7, 1],
          [8, 1, 13],
          [9, 10, 25],
          [5, 3, 2],
        ],
      ),
    ).toBe(6)
  })
})
