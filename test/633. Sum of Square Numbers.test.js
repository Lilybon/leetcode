import { judgeSquareSum } from '../src/633. Sum of Square Numbers'

describe('judgeSquareSum', () => {
  test("it decides whether there're two integers a and b such that a^2 + b^2 = c", () => {
    expect(judgeSquareSum(5)).toBe(true)
    expect(judgeSquareSum(4)).toBe(true)
    expect(judgeSquareSum(3)).toBe(false)
    expect(judgeSquareSum(2)).toBe(true)
    expect(judgeSquareSum(1)).toBe(true)
  })
})
