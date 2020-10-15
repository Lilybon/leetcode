import { integerBreak } from '../src/343. Integer Break'

describe('integerBreak', () => {
  test('it returns the maximum product by breaking number into the sum of at least two positive integers', () => {
    expect(integerBreak(2)).toBe(1)
    expect(integerBreak(10)).toBe(36)
  })
})
