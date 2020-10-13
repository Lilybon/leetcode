import { searchInsert } from '../src/35. Search Insert Position'

describe('searchInsert', () => {
  test('it returns the index where it should be in if it were inserted in order', () => {
    const nums1 = [1, 3, 5, 6]
    expect(searchInsert(nums1, 5)).toBe(2)
    expect(searchInsert(nums1, 2)).toBe(1)
    expect(searchInsert(nums1, 7)).toBe(4)
    expect(searchInsert(nums1, 0)).toBe(0)

    const nums2 = [1]
    expect(searchInsert(nums2, 0)).toBe(0)
  })
})
