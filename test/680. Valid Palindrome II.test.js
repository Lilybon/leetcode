import { validPalindrome } from '../src/680. Valid Palindrome II'

describe('validPalindrome', () => {
  test('it returns true if the s can be palindrome after deleting at most one character from it', () => {
    expect(validPalindrome('aba')).toBe(true)
    expect(validPalindrome('abca')).toBe(true)
    expect(validPalindrome('abc')).toBe(false)
  })
})
