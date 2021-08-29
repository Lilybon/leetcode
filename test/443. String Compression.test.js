import { compress } from '../src/443. String Compression'

describe('compress', () => {
  test('it compresses an array of characters by modifing itself and using constant extra space', () => {
    const chars1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c']
    const compressed1 = ['a', '2', 'b', '2', 'c', '3']
    expect(compress(chars1)).toBe(compressed1.length)
    expect(chars1.slice(0, compressed1.length)).toEqual(compressed1)

    const chars2 = ['a']
    const compressed2 = ['a']
    expect(compress(chars2)).toBe(compressed2.length)
    expect(chars2.slice(0, compressed2.length)).toEqual(compressed2)

    const chars3 = [
      'a',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
      'b',
    ]
    const compressed3 = ['a', 'b', '1', '2']
    expect(compress(chars3)).toBe(compressed3.length)
    expect(chars3.slice(0, compressed3.length)).toEqual(compressed3)

    const chars4 = ['a', 'a', 'a', 'b', 'b', 'a', 'a']
    const compressed4 = ['a', '3', 'b', '2', 'a', '2']
    expect(compress(chars4)).toBe(compressed4.length)
    expect(chars4.slice(0, compressed4.length)).toEqual(compressed4)
  })
})
