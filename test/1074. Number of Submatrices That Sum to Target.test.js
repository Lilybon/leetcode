import { numSubmatrixSumTarget } from '../src/1074. Number of Submatrices That Sum to Target'

describe('numSubmatrixSumTarget', () => {
  test('it returns the number of non-empty submatrices that sum to target', () => {
    expect(
      numSubmatrixSumTarget(
        [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
        ],
        0,
      ),
    ).toBe(4)
    expect(
      numSubmatrixSumTarget(
        [
          [1, -1],
          [-1, 1],
        ],
        0,
      ),
    ).toBe(5)
    expect(numSubmatrixSumTarget([[904]], 0)).toBe(0)
  })
})
