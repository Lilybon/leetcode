import { groupAnagrams } from '../src/49. Group Anagrams'

describe('groupAnagrams', () => {
  test('it returns collection of anagrams group', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual(
      expect.arrayContaining([
        ['bat'],
        expect.arrayContaining(['nat', 'tan']),
        expect.arrayContaining(['ate', 'eat', 'tea']),
      ])
    )
    expect(groupAnagrams([''])).toEqual([['']])
    expect(groupAnagrams(['a'])).toEqual([['a']])
  })
})
