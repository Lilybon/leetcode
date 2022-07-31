import { NumArray } from '../src/307. Range Sum Query - Mutable'

describe('NumArray', () => {
  test('it implements the NumArray class', () => {
    const numArray = new NumArray([1, 3, 5])
    expect(numArray.sumRange(0, 2)).toBe(9)
    numArray.update(1, 2)
    expect(numArray.sumRange(0, 2)).toBe(8)
  })
})
