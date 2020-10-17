import { firstUniqChar } from '../src/387. First Unique Character in a String'

describe('firstUniqChar', () => {
  test('it finds the first non-repeating character and returns its index', () => {
    expect(firstUniqChar('leetcode')).toBe(0)
    expect(firstUniqChar('loveleetcode')).toBe(2)
  })
})
