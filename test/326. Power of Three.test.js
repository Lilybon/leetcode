import { isPowerOfThree } from '../src/326. Power of Three'

describe('isPowerOfThree', () => {
  test('it determines if given integer is a power of 3', () => {
    expect(isPowerOfThree(27)).toBe(true)
    expect(isPowerOfThree(0)).toBe(false)
    expect(isPowerOfThree(9)).toBe(true)
    expect(isPowerOfThree(45)).toBe(false)
  })
})
