import { strStr } from '../src/28. Implement strStr()'

describe('strStr', () => {
  test('it returns the index of the first occurrence of needle in haystack', () => {
    expect(strStr('hello', 'll')).toBe(2)
  })

  test('it returns -1 if needle is not part of haystack', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1)
  })
})
