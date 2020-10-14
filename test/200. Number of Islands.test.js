import { numIslands } from '../src/200. Number of Islands'

describe('numIslands', () => {
  test('it returns the number of islands', () => {
    const grid1 = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ]
    expect(numIslands(grid1)).toBe(1)

    const grid2 = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ]
    expect(numIslands(grid2)).toBe(3)
  })
})
