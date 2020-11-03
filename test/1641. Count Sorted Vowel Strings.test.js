import { countVowelStrings } from '../src/1641. Count Sorted Vowel Strings'

describe('countVowelStrings', () => {
  test('it returns the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted', () => {
    expect(countVowelStrings(1)).toBe(5)
    expect(countVowelStrings(2)).toBe(15)
    expect(countVowelStrings(33)).toBe(66045)
  })
})
