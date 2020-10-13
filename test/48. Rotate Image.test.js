import { rotate } from '../src/48. Rotate Image'

describe('rotate', () => {
  test('it rotates n * n 2D matrix by 90 degrees clockwise', () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    rotate(matrix1)
    expect(matrix1).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ])

    const matrix2 = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ]
    rotate(matrix2)
    expect(matrix2).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ])

    const matrix3 = [[1]]
    rotate(matrix3)
    expect(matrix3).toEqual([[1]])

    const matrix4 = [
      [1, 2],
      [3, 4],
    ]
    rotate(matrix4)
    expect(matrix4).toEqual([
      [3, 1],
      [4, 2],
    ])
  })
})
