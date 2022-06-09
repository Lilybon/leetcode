import { findRelativeRanks } from '../src/506. Relative Ranks'

describe('findRelativeRanks', () => {
  test('it returns an array answer of size n where answer[i] is the rank of the ith athlete', () => {
    expect(findRelativeRanks([5, 4, 3, 2, 1])).toEqual([
      'Gold Medal',
      'Silver Medal',
      'Bronze Medal',
      '4',
      '5',
    ])
    expect(findRelativeRanks([10, 3, 8, 9, 4])).toEqual([
      'Gold Medal',
      '5',
      'Bronze Medal',
      'Silver Medal',
      '4',
    ])
  })
})
