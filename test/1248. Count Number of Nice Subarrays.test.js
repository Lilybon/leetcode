import { numberOfSubarrays } from '../src/1248. Count Number of Nice Subarrays'

describe('numberOfSubarrays', () => {
  test('it returns the number of nice sub-arrays', () => {
    expect(numberOfSubarrays([1, 1, 2, 1, 1], 3)).toBe(2)
    expect(numberOfSubarrays([2, 4, 6], 1)).toBe(0)
    expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)).toBe(16)
  })
})
