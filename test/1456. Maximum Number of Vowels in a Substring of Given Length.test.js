import { maxVowels } from '../src/1456. Maximum Number of Vowels in a Substring of Given Length'

describe('maxVowels', () => {
  test('it returns the maximum number of vowel letters in any substring of s with length k', () => {
    expect(maxVowels('abciiidef', 3)).toBe(3)
    expect(maxVowels('aeiou', 2)).toBe(2)
    expect(maxVowels('leetcode', 3)).toBe(2)
    expect(maxVowels('rhythms', 4)).toBe(0)
    expect(maxVowels('tryhard', 4)).toBe(1)
  })
})
