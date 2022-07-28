import { canPermutePalindrome } from '../src/266. Palindrome Permutation'

describe('canPermutePalindrome', () => {
  test('it determines if a permutation of the string could form a palindrome', () => {
    expect(canPermutePalindrome('code')).toBe(false)
    expect(canPermutePalindrome('aab')).toBe(true)
    expect(canPermutePalindrome('carerac')).toBe(true)
  })
})
