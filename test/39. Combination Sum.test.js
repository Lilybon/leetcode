import { combinationSum } from '../src/39. Combination Sum'

describe('combinationSum', () => {
  test('it returns a list of all unique combinations of candidates which sum to target', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual(
      expect.arrayContaining([[2, 2, 3], [7]])
    )
    expect(combinationSum([2, 3, 5], 8)).toEqual(
      expect.arrayContaining([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ])
    )
    expect(combinationSum([2], 1)).toEqual([])
    expect(combinationSum([1], 1)).toEqual([[1]])
    expect(combinationSum([1], 2)).toEqual([[1, 1]])
  })
})
