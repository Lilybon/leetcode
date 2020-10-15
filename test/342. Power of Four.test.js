import { isPowerOfFour } from '../src/342. Power of Four'

describe('isPowerOfFour', () => {
  test('it determines if given integer is a power of 4', () => {
    expect(isPowerOfFour(16)).toBe(true)
    expect(isPowerOfFour(5)).toBe(false)
  })
})
