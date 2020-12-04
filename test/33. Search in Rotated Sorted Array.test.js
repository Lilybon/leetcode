import { search } from '../src/33. Search in Rotated Sorted Array'

describe('search', () => {
  test('it returns index of target found in the array, otherwise returns -1', () => {
    const nums1 = [4, 5, 6, 7, 0, 1, 2]
    expect(search(nums1, 0)).toBe(4)
    expect(search(nums1, 3)).toBe(-1)

    const nums2 = [1]
    expect(search(nums2, 0)).toBe(-1)
  })
})
