import { numDecodings } from '../src/91. Decode Ways'

describe('numDecodings', () => {
  test('it returns the total number of ways to decode message containing letters from A-Z', () => {
    expect(numDecodings('12')).toBe(2)
    expect(numDecodings('226')).toBe(3)
    expect(numDecodings('0')).toBe(0)
    expect(numDecodings('1')).toBe(1)
  })
})
