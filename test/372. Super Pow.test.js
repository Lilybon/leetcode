import { superPow } from '../src/372. Super Pow'

describe('superPow', () => {
  test('it calculates a ** b mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array', () => {
    expect(superPow(2, [3])).toBe(8)
    expect(superPow(2, [1, 0])).toBe(1024)
    expect(superPow(1, [4, 3, 3, 8, 5, 2])).toBe(1)
    expect(superPow(2147483647, [2, 0, 0])).toBe(1198)
  })
})
