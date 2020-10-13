import { solve } from '../src/130. Surrounded Regions'

describe('solve', () => {
  test("it captures all regions surrounded by 'X'", () => {
    const board = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ]
    solve(board)
    expect(board).toEqual([
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X'],
    ])
  })
})
