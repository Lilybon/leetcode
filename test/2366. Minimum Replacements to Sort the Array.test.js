import { minimumReplacement } from '../src/2366. Minimum Replacements to Sort the Array'

describe('minimumReplacement', () => {
  test('it returns the minimum number of operations to make an array that is sorted in non-decreasing order', () => {
    expect(minimumReplacement([3, 9, 3])).toBe(2)
    expect(minimumReplacement([1, 2, 3, 4, 5])).toBe(0)
  })
})
