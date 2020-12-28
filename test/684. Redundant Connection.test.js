import { findRedundantConnection } from '../src/684. Redundant Connection'

describe('findRedundantConnection', () => {
  test('it returns an edge that can be removed so that the resulting graph is a tree of N nodes', () => {
    expect(
      findRedundantConnection([
        [1, 2],
        [1, 3],
        [2, 3],
      ])
    ).toEqual([2, 3])
    expect(
      findRedundantConnection([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 4],
        [1, 5],
      ])
    ).toEqual([1, 4])
  })
})
