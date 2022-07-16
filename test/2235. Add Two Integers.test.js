import { sum } from '../src/2235. Add Two Integers'

describe('sum', () => {
  test('it returns the sum of the two integers', () => {
    expect(sum(12, 5)).toBe(17)
    expect(sum(-10, 4)).toBe(-6)
  })
})
