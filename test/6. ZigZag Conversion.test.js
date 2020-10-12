import { convert } from '../src/6. ZigZag Conversion'

describe('convert', () => {
  test('it generates a zigzag pattern string on given number of rows', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
    expect(convert('A', 1)).toBe('A')
  })
})
