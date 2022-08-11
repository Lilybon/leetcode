import { longestIdealString } from '../src/2370. Longest Ideal Subsequence'

describe('longestIdealString', () => {
  test('it returns the length of the longest ideal string', () => {
    expect(longestIdealString('acfgbd', 2)).toBe(4)
    expect(longestIdealString('abcd', 3)).toBe(4)
  })
})
