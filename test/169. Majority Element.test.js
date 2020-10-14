import { majorityElement } from '../src/169. Majority Element'

describe('majorityElement', () => {
  test('it finds majority element which appears more than ⌊ n/2 ⌋ times', () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})
