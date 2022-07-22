import { minimumSum } from '../src/2160. Minimum Sum of Four Digit Number After Splitting Digits'

describe('minimumSum', () => {
  test('it returns the minimum possible sum of new1 and new2', () => {
    expect(minimumSum(2932)).toBe(52)
    expect(minimumSum(4009)).toBe(13)
  })
})
