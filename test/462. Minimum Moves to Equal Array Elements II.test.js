import { minMoves2 } from '../src/462. Minimum Moves to Equal Array Elements II'

describe('minMoves2', () => {
  test('it returns the minimum number of moves required to make all array elements equal', () => {
    expect(minMoves2([1, 2, 3])).toBe(2)
    expect(minMoves2([1, 10, 2, 9])).toBe(16)
    expect(minMoves2([1, 0, 0, 8, 6])).toBe(14)
  })
})
