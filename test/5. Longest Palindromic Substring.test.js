import { longestPalindrome } from '../src/5. Longest Palindromic Substring'

describe('longestPalindrome', () => {
  test('it returns the longest palindromic substring in s', () => {
    expect(longestPalindrome('babad')).toBe('bab' || 'aba')
    expect(longestPalindrome('cbbd')).toBe('bb')
    expect(longestPalindrome('a')).toBe('a')
    expect(longestPalindrome('ac')).toBe('a' || 'c')
  })
})
