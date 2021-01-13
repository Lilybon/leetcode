import { productExceptSelf } from '../src/238. Product of Array Except Self'

describe('productExceptSelf', () => {
  test('it returns an array output such that output[i] is equal to the product of all the elements of nums except nums[i]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
  })
})
