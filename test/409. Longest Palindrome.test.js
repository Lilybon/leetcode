import { longestPalindrome } from '../src/409. Longest Palindrome'

describe('longestPalindrome', () => {
  test('it returns the length of the longest palindrome that can be built with those letters', () => {
    expect(longestPalindrome('abcccccdd')).toBe(7)
    expect(longestPalindrome('a')).toBe(1)
    expect(longestPalindrome('bb')).toBe(2)
  })
})
