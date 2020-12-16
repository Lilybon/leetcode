import { countNegatives } from '../src/1351. Count Negative Numbers in a Sorted Matrix'

describe('countNegatives', () => {
  test('it returns the number of negative numbers in grid', () => {
    expect(
      countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
      ])
    ).toBe(8)
    expect(
      countNegatives([
        [3, 2],
        [1, 0],
      ])
    ).toBe(0)
    expect(
      countNegatives([
        [1, -1],
        [-1, -1],
      ])
    ).toBe(3)
    expect(countNegatives([[-1]])).toBe(1)
  })
})
