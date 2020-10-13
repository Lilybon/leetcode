import { myPow } from '../src/50. Pow(x, n)'

describe('myPow', () => {
  test('it calculates x raised to the power n', () => {
    expect(myPow(2, 10)).toBeCloseTo(1024, 5)
    expect(myPow(2.1, 3)).toBeCloseTo(9.261, 5)
    expect(myPow(2, -2)).toBeCloseTo(0.25, 5)
  })
})
