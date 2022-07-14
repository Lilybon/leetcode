import { toHex } from '../src/405. Convert a Number to Hexadecimal'

describe('toHex', () => {
  test('it returns a string representing its hexadecimal representation', () => {
    expect(toHex(26)).toBe('1a')
    expect(toHex(-1)).toBe('ffffffff')
  })
})
