import { spiralOrder } from '../src/54. Spiral Matrix'

describe('spiralOrder', () => {
  test('it returns all elements of the matrix in spiral order', () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    expect(spiralOrder(matrix1)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])

    const matrix2 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ]
    expect(spiralOrder(matrix2)).toEqual([
      1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7,
    ])
  })
})
