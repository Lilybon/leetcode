import { largestLocal } from '../src/2373. Largest Local Values in a Matrix'

describe('largestLocal', () => {
  test('it returns the generated matrix', () => {
    expect(
      largestLocal([
        [9, 9, 8, 1],
        [5, 6, 2, 6],
        [8, 2, 6, 4],
        [6, 2, 2, 2],
      ])
    ).toEqual([
      [9, 9],
      [8, 6],
    ])
    expect(
      largestLocal([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ])
    ).toEqual([
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ])
  })
})
