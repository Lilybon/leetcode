import { maxSumSubmatrix } from '../src/363. Max Sum of Rectangle No Larger Than K'

describe('maxSumSubmatrix', () => {
  test('it returns the max sum of a rectangle in the matrix such that its sum is no larger than k', () => {
    expect(
      maxSumSubmatrix(
        [
          [1, 0, 1],
          [0, -2, 3],
        ],
        2,
      ),
    ).toBe(2)
    expect(maxSumSubmatrix([[2, 2, -1]], 3)).toBe(3)
    expect(maxSumSubmatrix([[2, 2, -1]], 0)).toBe(-1)
  })
})
