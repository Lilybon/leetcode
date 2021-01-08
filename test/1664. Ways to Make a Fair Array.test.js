import { waysToMakeFair } from '../src/1664. Ways to Make a Fair Array'

describe('waysToMakeFair', () => {
  test('it returns the number of indices that you could choose such that after the removal, nums is fair', () => {
    expect(waysToMakeFair([2, 1, 6, 4])).toBe(1)
    expect(waysToMakeFair([1, 1, 1])).toBe(3)
    expect(waysToMakeFair([1, 2, 3])).toBe(0)
  })
})
