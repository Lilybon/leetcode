import { containsNearbyDuplicate } from '../src/219. Contains Duplicate II'

describe('containsNearbyDuplicate', () => {
  test('it returns true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true)
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true)
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false)
  })
})
