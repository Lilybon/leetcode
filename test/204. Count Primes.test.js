import { countPrimes } from '../src/204. Count Primes'

describe('countPrimes', () => {
  test('it counts the number of prime numbers less than a non-negative number, n', () => {
    expect(countPrimes(10)).toBe(4)
    expect(countPrimes(0)).toBe(0)
    expect(countPrimes(1)).toBe(0)
  })
})
