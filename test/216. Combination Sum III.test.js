import { combinationSum3 } from '../src/216. Combination Sum III'

describe('combinationSum3', () => {
  test('it returns a list of all possible valid combinations', () => {
    expect(combinationSum3(3, 7)).toEqual([[1, 2, 4]])
    expect(combinationSum3(3, 9)).toEqual([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ])
    expect(combinationSum3(4, 1)).toEqual([])
  })
})
