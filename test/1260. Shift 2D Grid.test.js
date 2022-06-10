import { shiftGrid } from '../src/1260. Shift 2D Grid'

describe('shiftGrid', () => {
  test('it returns the 2D grid after applying shift operation k times', () => {
    expect(
      shiftGrid(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1
      )
    ).toEqual([
      [9, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ])
    expect(
      shiftGrid(
        [
          [3, 8, 1, 9],
          [19, 7, 2, 5],
          [4, 6, 11, 10],
          [12, 0, 21, 13],
        ],
        4
      )
    ).toEqual([
      [12, 0, 21, 13],
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
    ])
    expect(
      shiftGrid(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        9
      )
    ).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
    expect(shiftGrid([[1]], 100)).toEqual([[1]])
  })
})
