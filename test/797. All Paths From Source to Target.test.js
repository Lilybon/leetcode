import { allPathsSourceTarget } from '../src/797. All Paths From Source to Target'

describe('allPathsSourceTarget', () => {
  test('it finds all possible paths from node 0 to node n - 1, and return them in any order', () => {
    const graph1 = [[1, 2], [3], [3], []]
    expect(allPathsSourceTarget(graph1)).toEqual(
      expect.arrayContaining([
        [0, 1, 3],
        [0, 2, 3],
      ]),
    )

    const graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []]
    expect(allPathsSourceTarget(graph2)).toEqual(
      expect.arrayContaining([
        [0, 4],
        [0, 3, 4],
        [0, 1, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 4],
      ]),
    )

    const graph3 = [[1], []]
    expect(allPathsSourceTarget(graph3)).toEqual([[0, 1]])

    const graph4 = [[1, 2, 3], [2], [3], []]
    expect(allPathsSourceTarget(graph4)).toEqual(
      expect.arrayContaining([
        [0, 1, 2, 3],
        [0, 2, 3],
        [0, 3],
      ]),
    )

    const graph5 = [[1, 3], [2], [3], []]
    expect(allPathsSourceTarget(graph5)).toEqual(
      expect.arrayContaining([
        [0, 1, 2, 3],
        [0, 3],
      ]),
    )
  })
})
