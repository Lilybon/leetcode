import { wallsAndGates } from '../src/286. Walls and Gates'

describe('wallsAndGates', () => {
  test('it fills each empty room with the distance to its nearest gate', () => {
    const INF = 2 ** 31,
      rooms1 = [
        [INF, -1, 0, INF],
        [INF, INF, INF, -1],
        [INF, -1, INF, -1],
        [0, -1, INF, INF],
      ]
    wallsAndGates(rooms1)
    expect(rooms1).toEqual([
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4],
    ])
  })
})
