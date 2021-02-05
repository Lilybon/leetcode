import { longestCommonPrefix } from '../src/14. Longest Common Prefix'

describe('longestCommonPrefix', () => {
  test('it returns the longest common prefix string amongst an array of strings', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })
  test('it returns "" if there is no common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })
})
