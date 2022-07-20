import { countVowelSubstrings } from '../src/2062. Count Vowel Substrings of a String'

describe('countVowelSubstrings', () => {
  test('it returns the number of vowel substrings in word', () => {
    expect(countVowelSubstrings('aeiouu')).toBe(2)
    expect(countVowelSubstrings('unicornarihan')).toBe(0)
    expect(countVowelSubstrings('cuaieuouac')).toBe(7)
  })
})
