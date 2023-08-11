import { oddCells } from '../src/1252. Cells with Odd Values in a Matrix'

describe('oddCells', () => {
  test('it returns the number of odd-valued cells in the matrix after applying the increment to all locations in indices', () => {
    expect(
      oddCells(2, 3, [
        [0, 1],
        [1, 1],
      ]),
    ).toBe(6)
    expect(
      oddCells(2, 2, [
        [1, 1],
        [0, 0],
      ]),
    ).toBe(0)
  })
})
