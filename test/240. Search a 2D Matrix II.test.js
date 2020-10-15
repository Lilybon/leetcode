import { searchMatrix } from '../src/240. Search a 2D Matrix II'

describe('searchMatrix', () => {
  test('it searches for a value in an m x n matrix', () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ]
    expect(searchMatrix(matrix, 5)).toBe(true)
    expect(searchMatrix(matrix, 20)).toBe(false)
  })
})
