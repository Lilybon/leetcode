import { lengthOfLongestSubstring } from '../src/3. Longest Substring Without Repeating Characters'

describe('lengthOfLongestSubstring', () => {
  test('it finds the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    expect(lengthOfLongestSubstring('')).toBe(0)
  })
})
