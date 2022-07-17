import { minOperations } from '../src/1769. Minimum Number of Operations to Move All Balls to Each Box'

describe('minOperations', () => {
  test('it returns an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box', () => {
    expect(minOperations('110')).toEqual([1, 1, 3])
    expect(minOperations('001011')).toEqual([11, 8, 5, 4, 3, 4])
  })
})
