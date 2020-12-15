import { combinationSum2 } from '../src/40. Combination Sum II'

describe('combinationSum2', () => {
  test('it returns a list of all unique combinations of candidates which sum to target and each number used once', () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual(
      expect.arrayContaining([
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ])
    )
    expect(combinationSum2([2, 5, 2, 1, 2], 5)).toEqual(
      expect.arrayContaining([[1, 2, 2], [5]])
    )
  })
})
