import { missingNumber } from '../src/268. Missing Number'

describe('missingNumber', () => {
  test('it returns the only number in the range that is missing from the array', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
    expect(missingNumber([0, 1])).toBe(2)
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
    expect(missingNumber([0])).toBe(1)
  })
})
