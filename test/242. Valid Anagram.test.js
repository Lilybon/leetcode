import { isAnagram } from '../src/242. Valid Anagram'

describe('isAnagram', () => {
  test('it determines if t is an anagram of s', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
    expect(isAnagram('rat', 'car')).toBe(false)
  })
})
