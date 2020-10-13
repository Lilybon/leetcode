import { searchRange } from '../src/34. Find First and Last Position of Element in Sorted Array'

describe('searchRange', () => {
  test('it finds starting and ending position of a given target', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
  })
  test('it returns [-1, -1] if target is not found', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
    expect(searchRange([], 0)).toEqual([-1, -1])
  })
})
