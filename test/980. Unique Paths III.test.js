import { uniquePathsIII } from '../src/980. Unique Paths III'

describe('uniquePathsIII', () => {
  test('it returns the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once', () => {
    expect(
      uniquePathsIII([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, -1],
      ])
    ).toBe(2)
    expect(
      uniquePathsIII([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
      ])
    ).toBe(4)
    expect(
      uniquePathsIII([
        [0, 1],
        [2, 0],
      ])
    ).toBe(0)
  })
})
