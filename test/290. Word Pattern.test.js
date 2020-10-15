import { wordPattern } from '../src/290. Word Pattern'

describe('wordPattern', () => {
  test('it finds if s follows the same pattern', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
    expect(wordPattern('abba', 'dog dog dog dog')).toBe(false)
  })
})
