import { combine } from '../src/77. Combinations'

describe('combine', () => {
  test('it returns possible combinations of k numbers out of 1 ... n', () => {
    expect(combine(4, 2)).toEqual(
      expect.arrayContaining([
        [2, 4],
        [3, 4],
        [2, 3],
        [1, 2],
        [1, 3],
        [1, 4],
      ])
    )
    expect(combine(1, 1)).toEqual([[1]])
  })
})
