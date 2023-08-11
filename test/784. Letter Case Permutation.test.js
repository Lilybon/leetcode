import { letterCasePermutation } from '../src/784. Letter Case Permutation'

describe('letterCasePermutation', () => {
  test('it returns a list of all possible strings which every letter individually can be transformed lowercase or uppercase', () => {
    expect(letterCasePermutation('a1b2')).toEqual(
      expect.arrayContaining(['a1b2', 'a1B2', 'A1b2', 'A1B2']),
    )
    expect(letterCasePermutation('3z4')).toEqual(
      expect.arrayContaining(['3z4', '3Z4']),
    )
    expect(letterCasePermutation('12345')).toEqual(
      expect.arrayContaining(['12345']),
    )
    expect(letterCasePermutation('0')).toEqual(expect.arrayContaining(['0']))
  })
})
