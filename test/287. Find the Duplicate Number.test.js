import { findDuplicate } from '../src/287. Find the Duplicate Number'

describe('findDuplicate', () => {
  test('it returns the duplicate number in an array', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2)
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3)
    expect(findDuplicate([1, 1])).toBe(1)
    expect(findDuplicate([1, 1, 2])).toBe(1)
  })
})
