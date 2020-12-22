import { makeConnected } from '../src/1319. Number of Operations to Make Network Connected'

describe('makeConnected', () => {
  test('it returns the minimum number of times you need to place cables to connect all computers', () => {
    const connections1 = [
      [0, 1],
      [0, 2],
      [1, 2],
    ]
    expect(makeConnected(4, connections1)).toBe(1)

    const connections2 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
    ]
    expect(makeConnected(6, connections2)).toBe(2)

    const connections3 = [
      [0, 1],
      [0, 2],
      [3, 4],
      [2, 3],
    ]
    expect(makeConnected(5, connections3)).toBe(0)
  })
  test('it returns -1 if above case is impossible', () => {
    const connections4 = [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
    ]
    expect(makeConnected(6, connections4)).toBe(-1)
  })
})
