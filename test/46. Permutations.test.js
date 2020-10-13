import { permute } from '../src/46. Permutations'

describe('permute', () => {
  test('it returns all possible permutations by a collection of distinct integers', () => {
    expect(permute([1, 2, 3])).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ])
    )
  })
})
