import { findDiagonalOrder } from '../src/498. Diagonal Traverse'

describe('findDiagonalOrder', () => {
  test('it returns an array of all the elements of the array in a diagonal order', () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    expect(findDiagonalOrder(matrix1)).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9])

    const matrix2 = [
      [1, 2],
      [3, 4],
    ]
    expect(findDiagonalOrder(matrix2)).toEqual([1, 2, 3, 4])
  })
})
