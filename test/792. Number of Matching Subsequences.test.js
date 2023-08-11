import { numMatchingSubseq } from '../src/792. Number of Matching Subsequences'

describe('numMatchingSubseq', () => {
  test('it returns the number of words[i] that is a subsequence of s', () => {
    expect(numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace'])).toBe(3)
    expect(
      numMatchingSubseq('dsahjpjauf', [
        'ahjpjau',
        'ja',
        'ahbwzgqnuk',
        'tnmlanowax',
      ]),
    ).toBe(2)
  })
})
