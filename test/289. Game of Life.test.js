import { gameOfLife } from '../src/289. Game of Life'

describe('gameOfLife', () => {
  test('it returns the next state of the game of live', () => {
    const board1 = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ]
    gameOfLife(board1)
    expect(board1).toEqual([
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ])

    const board2 = [
      [1, 1],
      [1, 0],
    ]
    gameOfLife(board2)
    expect(board2).toEqual([
      [1, 1],
      [1, 1],
    ])
  })
})
