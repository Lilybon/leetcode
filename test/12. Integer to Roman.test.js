import { intToRoman } from '../src/12. Integer to Roman'

describe('intToRoman', () => {
  test('it converts a integer to a roman numeral', () => {
    expect(intToRoman(3)).toBe('III')
    expect(intToRoman(4)).toBe('IV')
    expect(intToRoman(9)).toBe('IX')
    expect(intToRoman(58)).toBe('LVIII')
    expect(intToRoman(1994)).toBe('MCMXCIV')
  })
})
