import { findPeakElement } from '../src/162. Find Peak Element'

describe('findPeakElement', () => {
  test('it finds peak element which is an element that is greater than its neighbors', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2)
    expect([1, 5]).toContain(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
  })
})
