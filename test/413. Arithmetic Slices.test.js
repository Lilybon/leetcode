import { numberOfArithmeticSlices } from '../src/413. Arithmetic Slices'

describe('numberOfArithmeticSlices', () => {
  test('it returns the number of arithmetic subarrays of nums', () => {
    expect(numberOfArithmeticSlices([1, 2, 3, 4])).toBe(3)
    expect(numberOfArithmeticSlices([1])).toBe(0)
  })
})
