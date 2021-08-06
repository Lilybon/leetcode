import { subsets } from '../src/78. Subsets'

describe('subsets', () => {
  test('it returns all possible subsets', () => {
    expect(subsets([1, 2, 3])).toEqual(
      expect.arrayContaining([
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3],
      ])
    )
    expect(subsets([0])).toEqual([[], [0]])
  })
})
