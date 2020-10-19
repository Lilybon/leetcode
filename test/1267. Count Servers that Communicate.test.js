import { countServers } from '../src/1267. Count Servers that Communicate'

describe('countServers', () => {
  test('it returns the number of servers that communicate with any other server', () => {
    const grid1 = [
      [1, 0],
      [0, 1],
    ]
    expect(countServers(grid1)).toBe(0)

    const grid2 = [
      [1, 0],
      [1, 1],
    ]
    expect(countServers(grid2)).toBe(3)

    const grid3 = [
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]
    expect(countServers(grid3)).toBe(4)
  })
})
