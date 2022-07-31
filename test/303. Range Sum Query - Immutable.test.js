import { NumArray } from '../src/303. Range Sum Query - Immutable'

describe('NumArray', () => {
  test('it implements the NumArray class', () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
    expect(numArray.sumRange(0, 2)).toBe(1)
    expect(numArray.sumRange(2, 5)).toBe(-1)
    expect(numArray.sumRange(0, 5)).toBe(-3)
  })
})
