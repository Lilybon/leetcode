import { isPalindrome } from '../src/9. Palindrome Number'

describe('isPalindrome', () => {
  test('it checks whether an integer is an palindrome', () => {
    expect(isPalindrome(121)).toBe(true)
    expect(isPalindrome(-121)).toBe(false)
    expect(isPalindrome(10)).toBe(false)
    expect(isPalindrome(-101)).toBe(false)
  })
})
