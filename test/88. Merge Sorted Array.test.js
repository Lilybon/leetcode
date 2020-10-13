import { merge } from '../src/88. Merge Sorted Array'

describe('merge', () => {
  test('it merges nums2 into nums1 as one sorted array', () => {
    const nums1 = [1, 2, 3, 0, 0, 0],
      m = 3,
      nums2 = [2, 5, 6],
      n = 3
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  })
})
