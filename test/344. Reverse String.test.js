import { reverseString } from '../src/344. Reverse String'

describe('reverseString', () => {
  test('it reverses characters by modifying the input array', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual([
      'o',
      'l',
      'l',
      'e',
      'h',
    ])
    expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual([
      'h',
      'a',
      'n',
      'n',
      'a',
      'H',
    ])
  })
})
