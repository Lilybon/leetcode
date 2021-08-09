import { isMonotonic } from '../src/896. Monotonic Array'

describe('isMonotonic', () => {
  test('it determines an array is either monotone increasing or monotone decreasing', () => {
    expect(isMonotonic([1, 2, 2, 3])).toBe(true)
    expect(isMonotonic([6, 5, 4, 4])).toBe(true)
    expect(isMonotonic([1, 3, 2])).toBe(false)
    expect(isMonotonic([1, 2, 4, 5])).toBe(true)
    expect(isMonotonic([1, 1, 1])).toBe(true)
  })
})
