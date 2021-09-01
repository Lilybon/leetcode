import { decodeString } from '../src/394. Decode String'

describe('decodeString', () => {
  test('it returns a decoded string given an encoded string', () => {
    expect(decodeString('3[a]2[bc]')).toBe('aaabcbc')
    expect(decodeString('3[a2[c]]')).toBe('accaccacc')
    expect(decodeString('2[abc]3[cd]ef')).toBe('abcabccdcdcdef')
    expect(decodeString('abc3[cd]xyz')).toBe('abccdcdcdxyz')
  })
})
