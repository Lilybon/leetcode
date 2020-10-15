import { topKFrequent } from '../src/347. Top K Frequent Elements'

describe('topKFrequent', () => {
  test('it returns the k most frequent elements', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    expect(topKFrequent([1], 1)).toEqual([1])
  })
})
