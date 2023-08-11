import { mostWordsFound } from '../src/2114. Maximum Number of Words Found in Sentences'

describe('mostWordsFound', () => {
  test('it returns the maximum number of words that appear in a single sentence', () => {
    expect(
      mostWordsFound([
        'alice and bob love leetcode',
        'i think so too',
        'this is great thanks very much',
      ]),
    ).toBe(6)
    expect(
      mostWordsFound(['please wait', 'continue to fight', 'continue to win']),
    ).toBe(3)
  })
})
