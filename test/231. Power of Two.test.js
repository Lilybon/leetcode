import { isPowerOfTwo } from '../src/231. Power of Two'

describe('isPowerOfTwo', () => {
  test('it determines if n is a power of two', () => {
    expect(isPowerOfTwo(1)).toBe(true)
    expect(isPowerOfTwo(16)).toBe(true)
    expect(isPowerOfTwo(3)).toBe(false)
    expect(isPowerOfTwo(4)).toBe(true)
    expect(isPowerOfTwo(5)).toBe(false)
  })
})
