import { isUgly } from '../src/263. Ugly Number'

describe('isUgly', () => {
  test('it checks whether a given number is an ugly number', () => {
    expect(isUgly(6)).toBe(true)
    expect(isUgly(8)).toBe(true)
    expect(isUgly(14)).toBe(false)
  })
})
