import { answerQueries } from '../src/2389. Longest Subsequence With Limited Sum'

describe('answerQueries', () => {
  test('it returns an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i]', () => {
    expect(answerQueries([4, 5, 2, 1], [3, 10, 21])).toEqual([2, 3, 4])
    expect(answerQueries([2, 3, 4, 5], [1])).toEqual([0])
  })
})
