import { wordSubsets } from '../src/916. Word Subsets'

describe('wordSubsets', () => {
  test('it returns an array of all the universal strings in words1 following subset pattern', () => {
    const words1 = ['amazon', 'apple', 'facebook', 'google', 'leetcode']
    expect(wordSubsets(words1, ['e', 'o'])).toEqual(
      expect.arrayContaining(['facebook', 'google', 'leetcode']),
    )
    expect(wordSubsets(words1, ['l', 'e'])).toEqual(
      expect.arrayContaining(['apple', 'google', 'leetcode']),
    )
  })
})
