import { singleNumber } from '../src/136. Single Number'

describe('singleNumber', () => {
  test('it returns the single one from array of integers which every element appears twice except one', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    expect(singleNumber([1])).toBe(1)
  })
})
