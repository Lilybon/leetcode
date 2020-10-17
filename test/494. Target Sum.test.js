import { findTargetSumWays } from '../src/494. Target Sum'

describe('findTargetSumWays', () => {
  test('it finds out how many ways to assign symbols to make sum of integers equal to target S', () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5)
  })
})
