import { reverseVowels } from '../src/345. Reverse Vowels of a String'

describe('reverseVowels', () => {
  test('it reverses only the vowels of a string', () => {
    expect(reverseVowels('hello')).toBe('holle')
    expect(reverseVowels('leetcode')).toBe('leotcede')
  })
})
