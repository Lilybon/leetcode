import { letterCombinations } from '../src/17. Letter Combinations of a Phone Number'

describe('letterCombinations', () => {
  test('it returns all possible letter combinations that the phone number could represent', () => {
    expect(letterCombinations('23')).toEqual(
      expect.arrayContaining([
        'ad',
        'ae',
        'af',
        'bd',
        'be',
        'bf',
        'cd',
        'ce',
        'cf',
      ])
    )
    expect(letterCombinations('')).toEqual([])
    expect(letterCombinations('2')).toEqual(
      expect.arrayContaining(['a', 'b', 'c'])
    )
  })
})
