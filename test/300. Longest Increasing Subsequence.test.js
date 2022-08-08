import { lengthOfLIS } from '../src/300. Longest Increasing Subsequence'

describe('lengthOfLIS', () => {
  test('it returns the length of the longest strictly increasing subsequence', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4)
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4)
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1)
  })
})
