import { romanToInt } from '../src/13. Roman to Integer'

describe('romanToInt', () => {
  test('it converts a roman numeral to an integer', () => {
    expect(romanToInt('III')).toBe(3)
    expect(romanToInt('IV')).toBe(4)
    expect(romanToInt('IX')).toBe(9)
    expect(romanToInt('LVIII')).toBe(58)
    expect(romanToInt('MCMXCIV')).toBe(1994)
  })
})
