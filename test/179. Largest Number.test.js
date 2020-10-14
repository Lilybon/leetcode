import { largestNumber } from '../src/179. Largest Number'

describe('largestNumber', () => {
  test('it forms the largest number by arranging elements of the array', () => {
    expect(largestNumber([10, 2])).toBe('210')
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330')
    expect(largestNumber([1])).toBe('1')
    expect(largestNumber([10])).toBe('10')
  })
})
