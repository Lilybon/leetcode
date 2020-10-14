import { maxProduct } from '../src/152. Maximum Product Subarray'

describe('maxProduct', () => {
  test('it returns largest product from the contiguous subarray within an array', () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6)
    expect(maxProduct([-2, 0, -1])).toBe(0)
  })
})
