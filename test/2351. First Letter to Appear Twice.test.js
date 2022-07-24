import { repeatedCharacter } from '../src/2351. First Letter to Appear Twice'

describe('repeatedCharacter', () => {
  test('it returns the first letter to appear twice', () => {
    expect(repeatedCharacter('abccbaacz')).toBe('c')
    expect(repeatedCharacter('abcdd')).toBe('d')
  })
})
