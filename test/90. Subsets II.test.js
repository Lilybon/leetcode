import { subsetsWithDup } from '../src/90. Subsets II'

describe('subsetsWithDup', () => {
  test('it returns all possible subsets ', () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual(
      expect.arrayContaining([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]])
    )
    expect(subsetsWithDup([0])).toEqual([[], [0]])
  })
})
