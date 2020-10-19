import { sortedSquares } from '../src/977. Squares of a Sorted Array'

describe('sortedSquares', () => {
  test('it returns an array of the squares of each number in sorted non-decreasing order', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100])
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121])
  })
})
