import { rotateString } from '../src/796. Rotate String'

describe('rotateString', () => {
  test('it returns true if and only if s can become goal after some number of shifts on s', () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true)
    expect(rotateString('abcde', 'abced')).toBe(false)
  })
})
