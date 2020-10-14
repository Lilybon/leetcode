import { findMin } from '../src/153. Find Minimum in Rotated Sorted Array'

describe('findMin', () => {
  test('it finds the min element from rotated sorted array', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1)
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0)
  })
})
