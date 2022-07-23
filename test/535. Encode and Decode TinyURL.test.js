import { encode, decode } from '../src/535. Encode and Decode TinyURL'

describe('TinyURL', () => {
  test('it implements a url shorten service', () => {
    const longUrl1 = 'https://leetcode.com/problems/design-tinyurl',
      shortUrl1 = encode(longUrl1)
    expect(decode(shortUrl1)).toBe(longUrl1)
  })
})
