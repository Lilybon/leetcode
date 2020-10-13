import { exist } from '../src/79. Word Search'

describe('exist', () => {
  test('it checks whether a word exists in the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ]
    expect(exist(board, 'ABCCED')).toBe(true)
    expect(exist(board, 'SEE')).toBe(true)
    expect(exist(board, 'ABCB')).toBe(false)
  })
})
