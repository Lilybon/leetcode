import { combinationSum4 } from '../src/377. Combination Sum IV'

describe('combinationSum4', () => {
  test('it returns the number of possible combinations that add up to target', () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7)
    expect(combinationSum4([9], 3)).toBe(0)
  })
})
