import { search } from '../src/81. Search in Rotated Sorted Array II'

describe('search', () => {
  test('it determines whether target is in num which sorted in non-decreasing order', () => {
    const nums = [2, 5, 6, 0, 0, 1, 2]
    expect(search(nums, 0)).toBe(true)
    expect(search(nums, 3)).toBe(false)
  })
})
