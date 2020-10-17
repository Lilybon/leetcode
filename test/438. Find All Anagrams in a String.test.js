import { findAnagrams } from '../src/438. Find All Anagrams in a String'

describe('findAnagrams', () => {
  test("it finds all the start indices of p's anagrams in s", () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
  })
})
