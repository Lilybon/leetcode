import { countSubIslands } from '../src/1905. Count Sub Islands'

describe('countSubIslands', () => {
  test('it returns the number of islands in grid2 that are considered sub-islands.', () => {
    expect(
      countSubIslands(
        [
          [1, 1, 1, 0, 0],
          [0, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0],
          [1, 1, 0, 1, 1],
        ],
        [
          [1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1],
          [0, 1, 0, 0, 0],
          [1, 0, 1, 1, 0],
          [0, 1, 0, 1, 0],
        ],
      ),
    ).toBe(3)
    expect(
      countSubIslands(
        [
          [1, 0, 1, 0, 1],
          [1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1],
          [1, 0, 1, 0, 1],
        ],
        [
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1],
          [0, 1, 0, 1, 0],
          [0, 1, 0, 1, 0],
          [1, 0, 0, 0, 1],
        ],
      ),
    ).toBe(2)
  })
})
