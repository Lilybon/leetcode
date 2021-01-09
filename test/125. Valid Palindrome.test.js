import { isPalindrome } from '../src/125. Valid Palindrome'

describe('isPalindrome', () => {
  test('it determines if it is a palindrome given a string', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome('race a car')).toBe(false)
  })
})
