import { getKth } from '../src/1387. Sort Integers by The Power Value'

describe('getKth', () => {
  test('it returns the k-th integer in the range [lo, hi] sorted by the power value', () => {
    expect(getKth(12, 15, 2)).toBe(13)
    expect(getKth(1, 1, 1)).toBe(1)
    expect(getKth(7, 11, 4)).toBe(7)
  })
})
