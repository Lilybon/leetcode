import { generateMatrix } from '../src/59. Spiral Matrix II'

describe('generateMatrix', () => {
  test('it generates a square matrix filled with elements from 1 to n^2 in spiral order', () => {
    expect(generateMatrix(3)).toEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ])
  })
})
