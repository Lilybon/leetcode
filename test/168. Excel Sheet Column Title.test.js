import { convertToTitle } from '../src/168. Excel Sheet Column Title'

describe('convertToTitle', () => {
  test('it returns column title as appear in an Excel sheet by given positive integer', () => {
    expect(convertToTitle(1)).toBe('A')
    expect(convertToTitle(28)).toBe('AB')
    expect(convertToTitle(701)).toBe('ZY')
  })
})
