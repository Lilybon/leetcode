import { getSum } from '../src/371. Sum of Two Integers'

describe('getSum', () => {
  test('it calculates the sum of two integers a and b', () => {
    expect(getSum(1, 2)).toBe(3)
    expect(getSum(-2, 3)).toBe(1)
  })
})
