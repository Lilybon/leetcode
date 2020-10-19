import { numSplits } from '../src/1525. Number of Good Ways to Split a String'

describe('numSplits', () => {
  test('it returns the number of good splits you can make in s', () => {
    expect(numSplits('aacaba')).toBe(2)
    expect(numSplits('abcd')).toBe(1)
    expect(numSplits('aaaaa')).toBe(4)
    expect(numSplits('acbadbaada')).toBe(2)
  })
})
