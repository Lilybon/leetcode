import { reverseOnlyLetters } from '../src/917. Reverse Only Letters'

describe('reverseOnlyLetters', () => {
  test('it returns the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions', () => {
    expect(reverseOnlyLetters('ab-cd')).toBe('dc-ba')
    expect(reverseOnlyLetters('a-bC-dEf-ghIj')).toBe('j-Ih-gfE-dCba')
    expect(reverseOnlyLetters('Test1ng-Leet=code-Q!')).toBe(
      'Qedo1ct-eeLg=ntse-T!'
    )
  })
})
