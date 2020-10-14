import { trailingZeroes } from '../src/172. Factorial Trailing Zeroes'

describe('trailingZeroes', () => {
  test('it returns the number of trailing zeroes in n!', () => {
    expect(trailingZeroes(3)).toBe(0)
    expect(trailingZeroes(5)).toBe(1)
    expect(trailingZeroes(0)).toBe(0)
  })
})
