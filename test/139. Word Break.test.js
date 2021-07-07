import { wordBreak } from '../src/139. Word Break'

describe('wordBreak', () => {
  test('it returns true if s can be segmented into a space-separated sequence of one or more dictionary words', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true)
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true)
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(
      false
    )
  })
})
