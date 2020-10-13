import { removeDuplicates } from '../src/80. Remove Duplicates from Sorted Array II'

describe('removeDuplicates', () => {
  test('it removes duplicates in-place such that duplicates appeared at most twice and return the new length', () => {
    const nums1 = [1, 1, 1, 2, 2, 3]
    expect(removeDuplicates(nums1)).toBe(5)
    expect(nums1).toEqual([1, 1, 2, 2, 3, 3])

    const nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    expect(removeDuplicates(nums2)).toBe(7)
    expect(nums2).toEqual([0, 0, 1, 1, 2, 3, 3, 3, 3])
  })
})
