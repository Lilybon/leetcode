import { fib } from '../src/509. Fibonacci Number'

describe('fib', () => {
  test('it returns Fibonacci numbers corresponding to n', () => {
    expect(fib(2)).toBe(1)
    expect(fib(3)).toBe(2)
    expect(fib(4)).toBe(3)
  })
})
