import { titleToNumber } from '../src/171. Excel Sheet Column Number'

describe('titleToNumber', () => {
  test("it returns column title's corresponding column number as appear in an Excel sheet", () => {
    expect(titleToNumber('A')).toBe(1)
    expect(titleToNumber('AB')).toBe(28)
    expect(titleToNumber('ZY')).toBe(701)
    expect(titleToNumber('FXSHRXW')).toBe(2147483647)
  })
})
