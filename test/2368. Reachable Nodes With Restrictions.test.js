import { reachableNodes } from '../src/2368. Reachable Nodes With Restrictions'

describe('reachableNodes', () => {
  test('it returns the maximum number of nodes you can reach from node 0', () => {
    expect(
      reachableNodes(
        7,
        [
          [0, 1],
          [1, 2],
          [3, 1],
          [4, 0],
          [0, 5],
          [5, 6],
        ],
        [4, 5]
      )
    ).toBe(4)
    expect(
      reachableNodes(
        7,
        [
          [0, 1],
          [0, 2],
          [0, 5],
          [0, 4],
          [3, 2],
          [6, 5],
        ],
        [4, 2, 1]
      )
    ).toBe(3)
  })
})
