import { mySqrt } from '../src/69. Sqrt(x)'

describe('mySqrt', () => {
  test('it computes and returns the square root of x', () => {
    expect(mySqrt(4)).toBe(2)
    expect(mySqrt(8)).toBe(2)
  })
})
