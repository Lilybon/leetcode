import { isIsomorphic } from '../src/205. Isomorphic Strings'

describe('isIsomorphic', () => {
  test('it determines if string s and t are isomorphic', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true)
    expect(isIsomorphic('foo', 'bar')).toBe(false)
    expect(isIsomorphic('paper', 'title')).toBe(true)
  })
})
