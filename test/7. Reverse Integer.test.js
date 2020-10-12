import { reverse } from '../src/7. Reverse Integer'

describe('reverse', () => {
  test('it reverses digits of an integer', () => {
    expect(reverse(123)).toBe(321)
    expect(reverse(-123)).toBe(-321)
    expect(reverse(120)).toBe(21)
    expect(reverse(0)).toBe(0)
  })
})
