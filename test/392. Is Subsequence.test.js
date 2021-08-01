import { isSubsequence } from '../src/392. Is Subsequence'

describe('isSubsequence', () => {
  test('it determines whether s is a subsequence of t', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
  })
})
