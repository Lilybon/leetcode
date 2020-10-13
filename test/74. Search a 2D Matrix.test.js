import { searchMatrix } from '../src/74. Search a 2D Matrix'

describe('searchMatrix', () => {
  test('it searches for value in an efficient algorithm', () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ]
    expect(searchMatrix(matrix, 3)).toBe(true)
    expect(searchMatrix(matrix, 13)).toBe(false)
  })
})
