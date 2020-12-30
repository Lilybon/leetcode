import { maxProductPath } from '../src/1594. Maximum Non Negative Product in a Matrix'

describe('maxProductPath', () => {
  test('it returns the maximum non-negative product modulo 10^9 + 7', () => {
    expect(
      maxProductPath([
        [1, -2, 1],
        [1, -2, 1],
        [3, -4, 1],
      ])
    ).toBe(8)

    expect(
      maxProductPath([
        [1, 3],
        [0, -4],
      ])
    ).toBe(-0)

    expect(
      maxProductPath([
        [1, 4, 4, 0],
        [-2, 0, 0, 1],
        [1, -1, 1, 1],
      ])
    ).toBe(2)
  })
  test('it returns -1 if the maximum product is negative', () => {
    expect(
      maxProductPath([
        [-1, -2, -3],
        [-2, -3, -3],
        [-3, -3, -2],
      ])
    ).toBe(-1)
  })
})
