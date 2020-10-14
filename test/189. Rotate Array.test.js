import { rotate } from '../src/189. Rotate Array'

describe('rotate', () => {
  test('it rotates the array to the right by k steps', () => {
    const nums1 = [1, 2, 3, 4, 5, 6, 7]
    rotate(nums1, 3)
    expect(nums1).toEqual([5, 6, 7, 1, 2, 3, 4])

    const nums2 = [-1, -100, 3, 99]
    rotate(nums2, 2)
    expect(nums2).toEqual([3, 99, -1, -100])
  })
})
