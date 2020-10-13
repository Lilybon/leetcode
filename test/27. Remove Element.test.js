import { removeElement } from '../src/27. Remove Element'

describe('removeElement', () => {
  test('it removes all instances of the value in-place and returns the new length', () => {
    const nums1 = [3, 2, 2, 3]
    expect(removeElement(nums1, 3)).toBe(2)
    expect(nums1).toEqual([2, 2])

    const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
    expect(removeElement(nums2, 2)).toBe(5)
    expect(nums2).toEqual([0, 1, 3, 0, 4])
  })
})
