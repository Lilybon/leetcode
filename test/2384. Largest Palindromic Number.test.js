import { largestPalindromic } from '../src/2384. Largest Palindromic Number'

describe('largestPalindromic', () => {
  test('it returns the largest palindromic integer (in the form of a string)', () => {
    expect(largestPalindromic('444947137')).toBe('7449447')
    expect(largestPalindromic('00009')).toBe('9')
  })
})
