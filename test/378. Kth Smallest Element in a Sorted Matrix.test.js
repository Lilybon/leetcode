import { kthSmallest } from '../src/378. Kth Smallest Element in a Sorted Matrix'

describe('kthSmallest', () => {
  test('it finds the kth smallest element in the matrix', () => {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ]
    expect(kthSmallest(matrix, 8)).toBe(13)
  })
})
