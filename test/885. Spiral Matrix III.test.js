import { spiralMatrixIII } from '../src/885. Spiral Matrix III'

describe('spiralMatrixIII', () => {
  test('it returns a list of coordinates representing the positions of the spiral matrix in the order they were visited', () => {
    expect(spiralMatrixIII(1, 4, 0, 0)).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ])
    expect(spiralMatrixIII(5, 6, 1, 4)).toEqual([
      [1, 4],
      [1, 5],
      [2, 5],
      [2, 4],
      [2, 3],
      [1, 3],
      [0, 3],
      [0, 4],
      [0, 5],
      [3, 5],
      [3, 4],
      [3, 3],
      [3, 2],
      [2, 2],
      [1, 2],
      [0, 2],
      [4, 5],
      [4, 4],
      [4, 3],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 1],
      [1, 1],
      [0, 1],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ])
  })
})
