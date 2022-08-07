import { countVowelPermutation } from '../src/1220. Count Vowels Permutation'

describe('countVowelPermutation', () => {
  test('it counts how many strings of length n can be formed under vowels permutation rules', () => {
    expect(countVowelPermutation(1)).toBe(5)
    expect(countVowelPermutation(2)).toBe(10)
    expect(countVowelPermutation(5)).toBe(68)
  })
})
