import { removeDuplicates } from '../src/26. Remove Duplicates from Sorted Array'

describe('removeDuplicates', () => {
  test('it removes duplicates by modifying the input arrays and slicing itself by new array length', () => {
    const nums1 = [1, 1, 2]
    expect(removeDuplicates(nums1)).toBe(2)
    expect(nums1).toEqual([1, 2, 2])

    const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    expect(removeDuplicates(nums2)).toBe(5)
    expect(nums2).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4])
  })
})
