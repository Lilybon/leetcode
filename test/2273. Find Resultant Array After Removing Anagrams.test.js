import { removeAnagrams } from '../src/2273. Find Resultant Array After Removing Anagrams'

describe('removeAnagrams', () => {
  test('it returns words after performing all operations', () => {
    expect(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd'])).toEqual([
      'abba',
      'cd',
    ])
    expect(removeAnagrams(['a', 'b', 'c', 'd', 'e'])).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ])
  })
})
