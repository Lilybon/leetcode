import { findAndReplacePattern } from '../src/890. Find and Replace Pattern'

describe('findAndReplacePattern', () => {
  test('it returns a list of words[i] that match pattern', () => {
    expect(
      findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')
    ).toEqual(['mee', 'aqq'])
    expect(findAndReplacePattern(['a', 'b', 'c'], 'a')).toEqual(['a', 'b', 'c'])
  })
})
