import { moveZeroes } from '../src/283. Move Zeroes'

describe('moveZeroes', () => {
  test("it moves all 0's to the end of an array while maintaining the relative order of the non-zero elements", () => {
    const nums1 = [0, 1, 0, 3, 12]
    moveZeroes(nums1)
    expect(nums1).toEqual([1, 3, 12, 0, 0])

    const nums2 = [0]
    moveZeroes(nums2)
    expect(nums2).toEqual([0])
  })
})
