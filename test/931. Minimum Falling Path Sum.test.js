import { minFallingPathSum } from '../src/931. Minimum Falling Path Sum'

describe('minFallingPathSum', () => {
  test('it returns the minimum sum of any falling path through matrix', () => {
    const matrix1 = [
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9],
    ]
    expect(minFallingPathSum(matrix1)).toBe(13)

    const matrix2 = [
      [-19, 57],
      [-40, -5],
    ]
    expect(minFallingPathSum(matrix2)).toBe(-59)

    const matrix3 = [[-48]]
    expect(minFallingPathSum(matrix3)).toBe(-48)
  })
})
