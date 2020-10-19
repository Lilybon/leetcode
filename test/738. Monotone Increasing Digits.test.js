import { monotoneIncreasingDigits } from '../src/738. Monotone Increasing Digits'

describe('monotoneIncreasingDigits', () => {
  test('it finds the largest number that is less than or equal to N with monotone increasing digits', () => {
    expect(monotoneIncreasingDigits(10)).toBe(9)
    expect(monotoneIncreasingDigits(1234)).toBe(1234)
    expect(monotoneIncreasingDigits(332)).toBe(299)
  })
})
